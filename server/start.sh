export MIX_ENV=prod
export PORT=4799
export NODEBIN='pwd'/assets/node_modules/.bin
export PATH="$PATH:$NODEBIN"
export DATABASE_URL=ecto://eventsspa:ZoaThui4chie@localhost/spa_events_app_prod
# TODO change this
_build/prod/rel/events_app_spa/bin/events_app_spa start