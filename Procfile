web: npm install -g jspm@beta
web: npm install
web: cd client
web: npm install
web: jspm config registries.github.remote https://github.jspm.io
web: jspm config registries.github.auth JSPM_GITHUB_AUTH_TOKEN
web: jspm config registries.github.maxRepoSize 0
web: jspm config registries.github.handler jspm-github
web: jspm install -y
web: cd ..
web: npm start
