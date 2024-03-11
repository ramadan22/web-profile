# Base on official NGINX Alpine image
FROM nginx:alpine-slim

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Install gettext for envsubst command
RUN apk add --no-cache gettext

# Set environment variables
ARG HOST
ENV HOST=${HOST}
ARG PORT
ENV PORT=${PORT}

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./docker/nginx/default.conf.template /etc/nginx/conf.d/

# Create and set permissions for entrypoint script
RUN echo "#!/bin/sh" >> /docker-entrypoint.sh \
    && echo "set -eu" >> /docker-entrypoint.sh \
    && echo "envsubst '\$NODE_ENV \$HOST \$PORT' < '/etc/nginx/conf.d/default.conf.template' > '/etc/nginx/conf.d/default.conf'" >> /docker-entrypoint.sh \
    && echo "exec \"\$@\"" >> /docker-entrypoint.sh \
    && chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD ["nginx", "-g", "daemon off;"]

LABEL name="web-profile-nginx" \
      version="latest"
