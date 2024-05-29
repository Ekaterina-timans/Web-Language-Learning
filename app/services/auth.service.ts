import { IAuthForm } from "@/components/screens/auth/auth.interface"
import { $axios } from "api/interceptors"
import Cookies from "js-cookie"

export const authService = {
    async main(type: 'login' | 'register', data: IAuthForm) {
		const response = await $axios.post<IAuthResponse>(
			`/auth/${type}`,
			data
		)

		if (response.data.token) Cookies.set(TOKEN, response.data.token)

		return response
	},
}