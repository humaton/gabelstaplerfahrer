module.exports = function pkgdb(package_name, alias){
	
	return {
		name: package_name,
		type: 'folder',
		path: alias,
		items: walk(dir, alias)
	};

};
