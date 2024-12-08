# frozen_string_literal: true

source "https://rubygems.org"
ruby "~> 3.2.0"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# Core dependencies
gem "jekyll", "~> 4.3.3"

# Jekyll Plugins
gem "jekyll-redirect-from", "~> 0.16.0"
gem "jekyll-last-modified-at", "~> 1.3.0"
gem "jekyll-sitemap", "~> 1.4.0"
gem "jekyll-seo-tag", "~> 2.8.0"

# Required for markdown processing
gem "nokogiri", "~> 1.15.5"
gem "jemoji", "~> 0.13.0"

# Required for Ruby >= 3.0
gem "webrick", "~> 1.8.1"

# SASS processing
gem "sass-embedded", "~> 1.70.0"
gem "jekyll-sass-converter", "~> 3.0"

# Additional dependencies
gem "activesupport", "~> 7.1.2"
gem "liquid-c", "~> 4.0"

group :development do
  gem 'jekyll-watch', '~> 2.2.1'
end