#!/bin/sh
set -e

# Substitute environment variables in NGINX configuration
envsubst '$NODE_ENV $HOST $PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Launch NGINX
exec "$@"
