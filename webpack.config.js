module.exports = {
	mode: "development",
	entry: "./src/example.js",
	output: {
		webassemblyModuleFilename: "[hash].wasm",
		publicPath: "dist/"
	},
	module: {
		rules: [
			{
				test: /\.wasm$/,
				type: "webassembly/async"
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	resolve: {
		extensions: [".js"]
	},
	optimization: {
		chunkIds: "deterministic" // To keep filename consistent between different modes (for example building only)
	},
	experiments: {
		asyncWebAssembly: true
	}
};
