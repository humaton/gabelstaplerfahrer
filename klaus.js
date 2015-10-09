#!/usr/bin/env node

/**
 **  Module dependencies.
 **/


var program = require('commander');
var path = require('path');
var config = require('./lib/config');
var package_json = require('package-json');

program
  .version('0.0.1')
  .option('-c, --checkdeps', 'Tag your release')
  .option('-g, --generate-spec', 'Deploy your release')
  .option('-b, --build', 'Build distribution specfile/package from your nodejs app')
  .option('-d, --download', 'Only download latest sources')
  .parse(process.argv);

if (program.checkdeps){
    package_json('pageres', 'latest', function (err, json) {
      console.log(json);
      //=> { name: 'pageres', ... }
    });
}

if (program.deploy) console.log('  - not there jet');
if (program.build) {
    rpm.BuildSpec(rpm.GetPackageJson(project_dir));
}

if (program.init) {
  console.log('  - init');
  config.CheckConfigDirectory(project_dir);
  git.CheckRepository(project_dir);
}
