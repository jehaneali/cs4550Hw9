#!/bin/bash

export SECRET_KEY_BASE=E8L3Bzz6N+p5bi3wU8u5YILQT+V+Jw0ZaJyPDTwrK4ir9pAZ455QDFbFHR9f1end
export MIX_ENV=prod
export PORT=4799
export NODEBIN=`pwd`/assets/node_modules/.bin
export PATH="$PATH:$NODEBIN"
export DATABASE_URL=ecto://eventsspa:bad@localhost/spa_events_app_prod

echo "Building..."

mix deps.get --only prod
mix compile
export SECRET_KEY_BASE=E8L3Bzz6N+p5bi3wU8u5YILQT+V+Jw0ZaJyPDTwrK4ir9pAZ455QDFbFHR9f1end
export DATABASE_URL=ecto://eventsspa:ZoaThui4chie@localhost/spa_events_app_prod
# todo maybe change that 
mix ecto.create
mix ecto.migrate
# (cd assets && npm install)
(cd assets && webpack --mode production)
mix phx.digest



#mix ecto.create


echo "Generating release..."
mix release

#echo "Stopping old copy of app, if any..."
#_build/prod/rel/practice/bin/practice stop || true

echo "Starting app..."

#PROD=t ./start.sh