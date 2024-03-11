# Base on offical NGINX Alpine image
FROM nginx:alpine-slim

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Install gettext untuk envsubst
RUN apk add --no-cache gettext

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./docker/nginx/default.conf.template /etc/nginx/conf.d/
COPY ./docker/nginx/docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

# Expose the listening port
EXPOSE 80

# Launch NGINX using the entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]

# Set the default command to start NGINX
CMD ["nginx", "-g", "daemon off;"]
