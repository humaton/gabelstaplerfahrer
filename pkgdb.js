var request = require('sync-request')

module.exports = function pkgdb(package_name, package_json){
	return getDistGitBranches(package_name)
};

getDistGitBranches = function(package_name) {
  var result = [];
  var requestresult = getPackageInfo(package_name);
  
  if (requestresult['packages']){
    for (var attributename in requestresult['packages']) {
      result.push(requestresult['packages'][attributename]['collection']['branchname']);
    } 
  }else{
    result.push('NONE')
  }
  return result;  
};

getKojiBulds = function(package_name) {};

getPackageInfo = function(package_name) {
  try {
      res = request('GET', 'https://admin.fedoraproject.org/pkgdb/api/package/?pkgname=nodejs-'+ package_name)
      return requestresult = JSON.parse(res.getBody());
  } catch (err) {
    return false
  }
  
};

getModuleSources = function(package_name) {};

generateSpecFile = function(package_name) {};

buildRpm = function(package_name) {};