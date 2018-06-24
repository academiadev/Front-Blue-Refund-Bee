// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	backEndUrl: 'http://localhost:8086',
	tokenName: 'access_token',
	urls: {
		auth: {
			url: 'http://localhost:8086/auth',
			login: 'http://localhost:8086/auth/login',
			refresh: 'http://localhost:8086/auth/refresh',
		},
		empresa: {
			url: 'http://localhost:8086/usuario/cadastro/porcodigo'
		},
		usuario: {
			url: 'http://localhost:8086/usuario/',
			recuperarSenha: 'http://localhost:8086/usuario/recuperasenha',
			cadastrarAdmin: 'http://localhost:8086/usuario/cadastro/admineempresa',
			cadastrarUser: 'http://localhost:8086/usuario/cadastro/porcodigo'

		},
		reembolso: {
			url: 'http://localhost:8086/reembolso/',
			addReembolso: 'http://localhost:8086/reembolso/adiciona',
		},
		categoria: {
			url: 'http://localhost:8086/categoria/',
			buscarCategoria: 'http://localhost:8086/categoria/buscatodas',
		},
	}
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
