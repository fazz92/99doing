module.exports = {
	entry : "./js/index.js",
	output:{
		path : __dirname,
		filename : "bundle.js"
	},
	module : {
		loaders : [
			{
				test : /\.scss$/,
				loaders : ["style", "css", "sass"]
			}
		]
	}
}