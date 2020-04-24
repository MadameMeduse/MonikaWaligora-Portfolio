const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');

// Our function that generates our html plugins
function generateHtmlPlugins(templateDir) {
	// Read files in template directory
	const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
	return templateFiles.map((item) => {
		// Split names and extension
		const parts = item.split('.');
		const name = parts[0];
		const extension = parts[1];

		function getChunks() {
			switch (name) {
				case 'index':
					return [ 'index', 'vendors' ];
				case 'blog':
					return [ 'blog', 'vendors' ];
				case 'mystory':
					return [ 'mystory', 'vendors' ];
				case 'projects':
					return [ 'projects', 'vendors' ];
				default:
					return [ 'main', 'vendors' ];
			}
		}

		// Create new HTMLWebpackPlugin with options
		return new HtmlWebpackPlugin({
			filename: `${name}.html`,
			template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
			chunks: getChunks()
		});
	});
}

// Make array of HtmlWebpackPlugin instances for all of .html files in templates dir
// to make multiple websites work as well
const htmlPlugins = generateHtmlPlugins('./src/templates');

module.exports = {
	entry: './src/assets/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	mode: 'development',

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},

			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass')
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'images'
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|ttf|otf|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts'
						}
					}
				]
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'bundle.css'
		})
		// new HtmlWebpackPlugin(), // Generates default index.html
		// new HtmlWebpackPlugin({
		// 	// Also generate a blog.html
		// 	filename: 'blog.html',
		// 	template: 'src/assets/templates/blog.html'
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: 'mystory.html',
		// 	template: 'src/assets/templates/mystory.html'
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: 'projects.html',
		// 	template: 'src/assets/templates/projects.html'
		// })
	].concat(htmlPlugins)
};
