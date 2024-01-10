FROM node:18-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package*.json ./
# Omit --production flag for TypeScript devDependencies
RUN npm install

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY postcss.config.js .

# Environment variables must be present at build time
# https://github.com/vercel/next.js/discussions/14030
ARG NEXTAUTH_URL
ENV NEXTAUTH_URL=http://103.30.194.124:3000
ARG NEXTAUTH_SECRET
ENV NEXTAUTH_SECRET=PL8q5omVlzWMEg42twhSyEj8mjixrykdmbb9E4Txnjs=

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at build time
# ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js based on the preferred package manager
RUN npm run build

# Note: It is not necessary to add an intermediate step that does a full copy of `node_modules` here

# Step 2. Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

RUN npm install --global pm2

RUN npm i sharp

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
# COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Environment variables must be redefined at run time
ARG NEXTAUTH_URL
ENV NEXTAUTH_URL=http://103.30.194.124:3000
ARG NEXTAUTH_SECRET
ENV NEXTAUTH_SECRET=PL8q5omVlzWMEg42twhSyEj8mjixrykdmbb9E4Txnjs=

# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

CMD ["pm2-runtime", "node", "server.js"]
