request = require("request")

module.exports = function pkgdb(package_name, alias){

	return {
		name: package_name,
		version: 'folder',
		distgitbranches: alias,
		items: getDistGitBranches(package_name)
	};

};

getDistGitBranches = function(package_name) {
  return request('https://admin.fedoraproject.org/pkgdb/api/package/?pkgname=nodejs-' + package_name, function(error, response, body) {
    var attributename, requestresult, result;
    requestresult = JSON.parse(body);
    result = [];
    for (attributename in requestresult['packages']) {
      result.push(requestresult['packages'][attributename]['collection']['branchname']);
    }
    return result;
  });
};
