# Base on offical NGINX Alpine image
FROM nginx:alpine-slim

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

ARG HOST
ENV HOST="103.30.194.124"
ARG PORT
ENV PORT="3000"

# Copy config files
# *.conf files in conf.d/ dir get included in main config
# COPY ./docker/nginx/default.conf.template /etc/nginx/conf.d/
# COPY ./docker/nginx/docker-entrypoint.sh /

# RUN chmod +x /docker-entrypoint.sh

# ENTRYPOINT ["/docker-entrypoint.sh"]

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]

LABEL name="web-profile-nginx" \
      version="latest"