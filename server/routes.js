'use strict';

module.exports = [
	{
		method: 'GET',
		path: '/{path*}',
		handler: {
			directory: {
				index: true,
				path: 'static'
			}
		},
		config: {
			cache: {
				expiresIn: 60 * 1000
			}
		}
	}
];
