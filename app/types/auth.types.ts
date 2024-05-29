export interface IAuthForm {
	name: string
	password: string
}

export interface IUser {
	id: number
	name: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}