#!/bin/bash
echo "Installing dependencies..."
bundle config set --local path 'vendor/bundle'
bundle install --jobs 4 --retry 3

echo "Building Jekyll site..."
JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,_config.cloudflare.yml