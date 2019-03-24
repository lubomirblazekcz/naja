module.exports = (api) => {
	api.cache(true);

	return {
		presets: [
			['@babel/preset-env', {
				useBuiltIns: 'usage',
			}],
		],
		plugins: [
			['@babel/plugin-transform-runtime', {
				'useESModules': true,
			}],
			'@babel/plugin-proposal-class-properties',
		],
		env: {
			development: {
				plugins: [
					['babel-plugin-istanbul', {
						exclude: [
							"node_modules/**",
							"tests/**/*.js"
						],
					}],
				],
			},
		},
	};
};