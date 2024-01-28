FROM ruby:3.2.2-alpine as base

ENV LANG C.UTF-8

RUN apk update && apk add --no-cache --update build-base tzdata bash yarn ca-certificates git openssh postgresql-dev nodejs ruby-dev

RUN mkdir /app
WORKDIR /app
COPY Gemfile /Gemfile
COPY Gemfile.lock /Gemfile.lock

ENV RAILS_LOG_TO_STDOUT=true
RUN yarn install --check-files
RUN bundle install
COPY . /app

ARG DB_HOST=host.docker.internal
ENV DB_HOST=$DB_HOST
RUN DOCKER_BUILD=true SECRET_KEY_BASE=dummy bundle exec rake assets:precompile

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]