const { merge } = require("webpack-merge");
const { DefinePlugin } = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const variablesJSON = JSON.parse(process.env.LINKONE_WEB_CONF);
const mfe = variablesJSON.app.mfes.find((mfe) => mfe.name === "appadministration");

const devConfig = {
	mode: "production",
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true, // Elimina console.log en producción
						drop_debugger: true // Elimina debugger en producción
					},
					format: {
						comments: false, // Elimina todos los comentarios
					}
				},
				extractComments: false, // Evita generar archivos *.LICENSE.txt
			}),
		],
	},
	output: {
		publicPath: `${mfe.url}/`, // ejemplo: http://localhost:3004/
		// filename: '[name].[contenthash].js', // ⚠️ más simple para dev
		// chunkFilename: '[name].[contenthash].js',
		// path: path.resolve(__dirname, 'dist'),
		// clean: true,
	},

	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
	},

	devServer: {
		port: mfe.port,
		historyApiFallback: {
			index: "/index.html",
		},
	},

	plugins: [
		new ModuleFederationPlugin({
			name: "appadministration",
			filename: "remoteEntry.js",
			remotes: {},
			exposes: {
				"./AppAdministrationApp": "./src/bootstrap",
			},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react,
				},
				"react-dom": {
					singleton: true,
					requiredVersion: deps["react-dom"],
				},
			},
		}),
		new DefinePlugin({
			"process.env": {
				REACT_APP_ADMINISTRATION_URL: JSON.stringify(mfe.url),
				REACT_APP_ADMINISTRATION_PORT: JSON.stringify(mfe.port),
				REACT_APP_API_BASE_URL: JSON.stringify(variablesJSON.api.url),
			},
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
