# EB Rudder

[![NPM](https://nodei.co/npm/eb-rudder.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/eb-rudder/)

[![Build Status](https://travis-ci.org/Cox-Automotive/eb-rudder.svg?branch=master)](https://travis-ci.org/Cox-Automotive/eb-rudder)

## About

EB Rudder is a small CLI for tailing Elastic Beanstalk logs.

### Prerequisites

To install and use the EB Rudder, you will need Node.js (version 4 or greater) and NPM ([nodejs.org](https://nodejs.org/en/download/package-manager)).

## Installing

EB Rudder is meant to be installed via NPM.

```
npm install -g eb-rudder
```

## Running

After installing EB Rudder will be available on your path. 

### Options

To see a what options are available to a command ask for help:

    ebrudder help

# Usage

### `ebrudder`

`ebrudder` Will query your EC2 environment to find all instance associated with the provided Elastic Beanstalk environment name (`-e`) and then tail all of the specified log files (`-f`) across all instances.

Credentials work similar to the AWS CLI. We expect you have environment variables for your AWS key data, optionally you can supply a profile (`-p`) to reference an existing profile from your `aws/.credentials` file. If you do not have an environment variable for region set we will use the one provided which will default to `us-east-1`. The same applies when using profiles and no region is found.

Arguments:

* `-e, --env <name>` Name of the elastic beanstalk environment
* `-u, --user [username]` The username to used to log into instances. Supports: `ec2-user`, `root`, `ubuntu` (defaults to `ec2-user`)
* `-k, --key <keypair path>`: Path to your keypair file
* `-i, --private`, Use instance private IP (needed for VPCs) (defaults to `false`)
* `-p, --profile <profile name>` AWS profile to use from .aws/credentials
* `-r, --region [regionName]` AWS region to use. Supports: `us-east-1`, `us-east-2`, `us-west-1`, `us-west-2` (defaults to `us-east-1`)
* `-f, --files <file>` File path or pattern to tail, multiples supported

# ALKS

Are you using ALKS? This becomes even simpler:

```
alks sessions open -o creds -n callinschooliny -f && ebrudder -e searchengine-pp1-master -k ~/.ssh/my.pem -p -P callinschooliny
```
