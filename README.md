# word-clouds
## Synopsis

This is a project to process text, in English and Portuguese, and generates word clouds.

## Motivation

I have decided to create this app, since I could not find an app that I could put move idioms. Also, I had problems with stop words and similar words polluting the word cloud.
Another motivation was to study JavaScript (Nodejs, Aurelia and D3), Continous Integration and environment provisioning.

## Installation

### Requirements
* [VirtualBox](https://www.virtualbox.org/wiki/Download_Old_Builds_4_3) - 4.3.30
* [Vagrant](https://www.vagrantup.com/downloads.html) - 1.7.4 or higher
* [ansible](http://www.ansible.com/) - 1.9.3 or higher

### Setup
- Clone this repository to your local drive:
```
git clone git@github.com:brunoleite/word-clouds.git
```

- Go to /word-clouds:
```
cd word=clouds
```

- Install required Ansible roles: 
```
ansible-galaxy install -r requirements.txt
```

- Create a Vagrat machine (it may take a while): 
```
Vagrant up
```

## Tests

Describe and show how to run the tests with code examples.

## Continous Integration

This project uses [Snap-CI](https://snap-ci.com/) to perform Continous Integration you can check the [pipeline](https://snap-ci.com/brunoleite/word-clouds/branch/master). Every commint pushed to master is going to publish a new version. 

## Production

The project is published in [heroku](https://www.heroku.com/) on [word-clouds](http://word-clouds.heroku.com) and uses the [custom build pack for nodejs and jspm](https://github.com/brunoleite/heroku-buildpack-nodejs-jspm).

## Contributors

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

Also, fell free to registry any idea or defect in [github issues](https://github.com/brunoleite/word-clouds/issues)
You can reach me out on twitter [@bleitea](http://twitter.com/bleitea)

## License

This project rocks and uses the [MIT LICENSE](https://opensource.org/licenses/MIT).
