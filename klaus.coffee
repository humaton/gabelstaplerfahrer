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
colors = require('colors')
exec = require('child_process').exec
shell = require('shelljs')
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
    deps = [] 
    for attributename of json['dependencies']
      deps.push {name: attributename, version: json['dependencies'][attributename], distgitbranches: getDistGitBranches attributename }
    
    deps.forEach (dep) ->
      dep['distgitbranches'].forEach (tag) ->
        #result = exec('koji -q latest-build '+tag+' '+dep.name)
	# Run external tool synchronously
	#if (exec 'koji -q latest-build '+tag+' '+dep.name).code != 0
	#  echo 'Error: Git commit failed'
	#  exit 1
        #console.log result
      console.log 'package: ' + dep.name.red + ' version: ' + dep.version.green + ' is in fedora: ' + dep.distgitbranches
      
if program.search
  npmKeyword program.search, (err, packages) ->
    console.log packages
    return

if program.build
  #rpm.BuildSpec rpm.GetPackageJson(project_dir)
  package_name = 'gyp'
  console.log pkgdb package_name
  
if program.download
  packageJson program.download, 'latest', (err, json) ->
    console.log json
    return
