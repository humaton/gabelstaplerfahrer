###*
#*  Module dependencies.
#
###

program = require('commander')
path = require('path')
packageJson = require('package-json')
npmKeyword = require('npm-keyword')
pkgdb = require('./pkgdb')
util = require('util')
gitlsremote = require('git-ls-remote')
Sync = require('node-sync');
request = require('request');

rePattern = new RegExp(/^^~=/);


createPackageData = (package_name) ->
  return true
  
program
  .version('0.0.1')
  .option('-c, --check_deps [package name]', 'Check dependencies for package')
  .option('-g, --generate-spec', 'Deploy your release')
  .option('-b, --build', 'Build distribution specfile/package from your nodejs app')
  .option('-s, --search [package name]', 'Search for package in npmjs')
  .option('-d, --download', 'Only download latest sources').parse process.argv

if program.check_deps
  packageJson program.check_deps, 'latest', (err, json) ->
    #console.log(execSync("git ls-remote http://pkgs.fedoraproject.org/cgit/nodejs.git/"));
    #execSync("git ls-remote http://pkgs.fedoraproject.org/cgit/nodejs.git/", puts);
    #koji -q latest-build %s %s" % (tag, self.pkg_name)
    #gitlsremote.head('http://pkgs.fedoraproject.org/cgit/nodejs-' + attributename + '.git')
    deps = [] 
    for attributename of json['dependencies']
      #deps.push {name: attributename, version: json['dependencies'][attributename], distgitbranches: getDistGitBranches attributename }
      console.log 'package: ' + attributename + ' version: ' + json['dependencies'][attributename] + ' is in fedora:' + pkgdb attributename
    #console.log deps  
    return

if program.search
  npmKeyword program.search, (err, packages) ->
    console.log packages
    return

if program.build
  #rpm.BuildSpec rpm.GetPackageJson(project_dir)
  package_name = 'gyp'
  console.log pkgdb package_name
if program.download
  package_json program.download, 'latest', (err, json) ->
    console.log json
    return
