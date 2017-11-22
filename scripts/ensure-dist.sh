#!/usr/bin/env bash

if ! test -d dist; then
  echo "Welcome to Wix Style React!"
  echo ""
  echo "allow me to build project and prepare storybook for first run..."
  echo ""

  npm run build
  svg2react-icon-once
fi

exit 0
