#!/usr/bin/env node

/**
 **  Module dependencies.
 **/


var program = require('commander');
var path = require('path');
var packageJson = require('package-json');
var npmKeyword = require('npm-keyword');
var pkgdb = require('./pkgdb');

program
  .version('0.0.1')
  .option('-c, --check_deps [package name]', 'Check dependencies for package')
  .option('-g, --generate-spec', 'Deploy your release')
  .option('-b, --build', 'Build distribution specfile/package from your nodejs app')
  .option('-s, --search [package name]', 'Search for package in npmjs')
  .option('-d, --download', 'Only download latest sources')
  .parse(process.argv);

if (program.check_deps){
  packageJson(program.check_deps, 'latest').then(json => {
    console.log(json["dependencies"]);
  });
  
}

if (program.search) {
    npmKeyword(program.search, function (err, packages) {
      console.log(packages);
    });
}

if (program.build) {
    rpm.BuildSpec(rpm.GetPackageJson(project_dir));
}

if (program.download){
    package_json(program.download, 'latest', function (err, json) {
      console.log(json);
    });
}
