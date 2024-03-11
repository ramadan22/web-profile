# Base on offical NGINX Alpine image
FROM nginx:alpine-slim

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
COPY ./docker/nginx/default.conf.template /etc/nginx/conf.d/
COPY ./docker/nginx/docker-entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

# Expose the listening port
EXPOSE 80

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]

LABEL name="web-profile-nginx" \
      version="latest"