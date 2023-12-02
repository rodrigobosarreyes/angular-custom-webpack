module.exports = (config, options) => {
	config.optimization.minimizer.filter(({constructor: {name}}) => name === 'JavaScriptOptimizerPlugin')
		.forEach(plugin => {
      // esta es la línea clave
      plugin.options.keepIdentifierNames = false;
    });
	return config;
};
