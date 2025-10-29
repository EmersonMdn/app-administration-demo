const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const variablesJSON = JSON.parse(process.env.LINKONE_WEB_CONF);
const mfe = variablesJSON.app.mfes.find((mfe) => mfe.name === "administration");
console.log("🚀 ~ variablesJSON:", variablesJSON)
console.log("🚀 ~ mfe:", mfe)


const devConfig = {
	mode: "development",
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
		filename: '[name].[contenthash].js', // ⚠️ más simple para dev
		chunkFilename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},

	devServer: {
		port: mfe.port,
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		historyApiFallback: {
			index: "/index.html",
		},
		headers: {
			'Access-Control-Allow-Origin': '*', // 👈 necesario para host remoto
		},
		hot: true,
	},

	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
	},



	plugins: [
		new ModuleFederationPlugin({
			name: "administration",
			filename: "remoteEntry.js",
			remotes: {},
			exposes: {
				"./AdministrationApp": "./src/bootstrap",
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
	],
};

module.exports = merge(commonConfig, devConfig);
