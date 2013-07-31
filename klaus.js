#!/usr/bin/env node

/**
 **  Module dependencies.
 **/


var program = require('commander');
var path = require('path');
var project_dir = path.resolve(process.cwd());
var config = require('./lib/config');
var rpm = require('./lib/rpm');
var git = require('./lib/git');

program
  .version('0.0.1')
  .option('-t, --tag', 'Tag your release')
  .option('-d, --deploy', 'Deploy your release')
  .option('-b, --build', 'Build distribution specfile/package from your nodejs app')
  .option('-i, --init', 'Initialize gabelstaplerfahrer config files')
  .parse(process.argv);

if (program.tag) console.log('  - not there jet');
if (program.deploy) console.log('  - not there jet');
if (program.build) {
    rpm.BuildSpec(rpm.GetPackageJson(project_dir));
}

if (program.init) {
  console.log('  - init');
  config.CheckConfigDirectory(project_dir);
  git.CheckRepository(project_dir);
}
