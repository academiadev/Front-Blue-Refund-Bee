export class ReembolsoDTO {
	constructor(
		public nome: string,
		public categoria: string,
		public data: string,
		public valorSolicitado: string,
		public uploadUrl: string
	) { }
}