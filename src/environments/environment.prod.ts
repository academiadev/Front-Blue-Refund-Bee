// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	backEndUrl: 'https://reembolsoazul.herokuapp.com',
	tokenName: 'access_token',
	urls: {
		auth: {
			url: 'https://reembolsoazul.herokuapp.com/auth',
			login: 'https://reembolsoazul.herokuapp.com/auth/login',
			refresh: 'https://reembolsoazul.herokuapp.com/auth/refresh',
		},
		empresa: {
			url: 'https://reembolsoazul.herokuapp.com/usuario/cadastro/porcodigo'
		},
		usuario: {
			url: 'https://reembolsoazul.herokuapp.com/usuario/',
			recuperarSenha: 'https://reembolsoazul.herokuapp.com/usuario/recuperasenha',
			cadastrarAdmin: 'https://reembolsoazul.herokuapp.com/usuario/cadastro/admineempresa',
			cadastrarUser: 'https://reembolsoazul.herokuapp.com/cadastro/porcodigo',
			buscarUser: 'https://reembolsoazul.herokuapp.com/usuario/dadosUsuario',
			role: 'https://reembolsoazul.herokuapp.com/usuario/role'

		},
		reembolso: {
			url: 'https://reembolsoazul.herokuapp.com/reembolso/',
			addReembolso: 'https://reembolsoazul.herokuapp.com/reembolso/adiciona',
			getReembolsoByUser: 'https://reembolsoazul.herokuapp.com/reembolso/buscaPorEmpregado',
			getReembolsoByEmpresa: 'https://reembolsoazul.herokuapp.com/reembolso/buscaPorEmpresa',
			aprovaReembolso: 'https://reembolsoazul.herokuapp.com/reembolso/aprova',
			reprovaReembolso: 'https://reembolsoazul.herokuapp.com/reembolso/reprova',
			excluiReembolso: 'https://reembolsoazul.herokuapp.com/reembolso/exclui',
		},
		categoria: {
			url: 'https://reembolsoazul.herokuapp.com/categoria/',
			buscarCategoria: 'https://reembolsoazul.herokuapp.com/categoria/buscatodas',
		},
		arquivo: {
			url: 'https://reembolsoazul.herokuapp.com/arquivo/',
			buscarArquivo: 'https://reembolsoazul.herokuapp.com/arquivo/download',
			addArquivo: 'https://reembolsoazul.herokuapp.com/arquivo/upload',
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
