'use client'

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { IAuthForm } from "types/auth.types"
import { authService } from "@/services/auth.service"

export function Auth() {
    const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

    const [isLoginForm, setIsLoginForm] = useState(false)

    const { push } = useRouter()

    const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login!') 
			reset()
			// push(DASHBOARD_PAGES.HOME) // перенаправляем на страницу HOME
		}
	})
}