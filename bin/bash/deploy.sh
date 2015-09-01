#!/bin/bash

set -o errexit # Exit on error

node_modules/.bin/jspm config registries.github.remote https://github.jspm.io
node_modules/.bin/jspm config registries.github.auth $JSPM_GITHUB_AUTH_TOKEN
node_modules/.bin/jspm config registries.github.maxRepoSize 0
node_modules/.bin/jspm config registries.github.handler jspm-github
node_modules/.bin/jspm install -y