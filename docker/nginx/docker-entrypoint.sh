#!/bin/sh
set -eu

envsubst '\$NODE_ENV \$HOST \$PORT \$TEST_HERE' < "/etc/nginx/conf.d/default.conf.template" > /etc/nginx/conf.d/default.conf

exec "$@"
