request = require('sync-request')

module.exports = function pkgdb(package_name, package_json){
	return getDistGitBranches(package_name)
};

getDistGitBranches = function(package_name) {
  result = [];
  res = request('GET', 'https://admin.fedoraproject.org/pkgdb/api/package/?pkgname=nodejs-'+ package_name)
  requestresult = JSON.parse(res.getBody());
  for (attributename in requestresult['packages']) {
      result.push(requestresult['packages'][attributename]['collection']['branchname']);
    }
  return result;  
};

getKojiBulds = function(package_name) {};
