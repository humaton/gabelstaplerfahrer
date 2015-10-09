#!/usr/bin/env node

/**
 **  Module dependencies.
 **/


var program = require('commander');
var path = require('path');
var config = require('./lib/config');
var package_json = require('package-json');
var npmKeyword = require('npm-keyword');


program
  .version('0.0.1')
  .option('-c, --check_deps [package name]', 'Check dependencies for package')
  .option('-g, --generate-spec', 'Deploy your release')
  .option('-b, --build', 'Build distribution specfile/package from your nodejs app')
  .option('-s, --search [package name]', 'Search for package in npmjs')
  .option('-d, --download', 'Only download latest sources')
  .parse(process.argv);

if (program.check_deps){
    package_json(program.check_deps, 'latest', function (err, json) {
      console.log(json);
      //=> { name: 'pageres', ... }
    });
}

if (program.search) {
    npmKeyword(program.search, function (err, packages) {
    console.log(packages);
    //=> [{name: 'gulp-autoprefixer', description: '...'}, ...]
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
