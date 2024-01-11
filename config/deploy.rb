require File.expand_path("./environment", __dir__)

# config valid for current version and patch releases of Capistrano
lock "~> 3.18.0"

set :application, "porty"
# set :repo_url, "git@github.com:travislistak/porty.git"
set :repo_url, 'https://github.com/travislistak/porty.git'
set :git_http_username, 'travislistak'
set :git_http_password, Rails.application.credentials[:github_access_token]

# Deploy to the user's home directory
set :deploy_to, "/home/deploy/#{fetch :application}"
set :branch, "main"

# testing this out. This can be changed to true to restart WITH touch (the old way).
# set :passenger_restart_with_touch, false
# from capistrano post install message
# If you are running passenger in standalone mode, it is possible for you to put passenger in your
# Gemfile and rely on capistrano-bundler to install it with the rest of your bundle.
# If you are installing passenger during your deployment AND you want to restart using `passenger-config restart-app`,
# you need to set `:passenger_in_gemfile` to `true` in your `config/deploy.rb`.

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"

# From https://gorails.com/deploy/ubuntu/22.04#database
# Optionally, you can symlink your database.yml and/or secrets.yml file from the shared directory during deploy
# This is useful if you don't want to use ENV variables
# append :linked_files, 'config/database.yml', 'config/secrets.yml'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", 'config/master.key'

# Default value for linked_dirs is []
append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', '.bundle', 'public/system', 'public/uploads'
# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure
