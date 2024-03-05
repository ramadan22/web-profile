#!/usr/bin/env sh
set -eu

envsubst '${NODE_ENV} ${HOST} ${PORT}' < "/etc/nginx/conf.d/default.conf.template" > /etc/nginx/conf.d/default.conf

exec "$@"
