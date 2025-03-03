'use client'

import { Button } from "@/components/atoms/button/Button"
import { Input } from "@/components/atoms/input/Input"
import { LoginDraw } from "@/components/images/LoginDraw"
import { ModalBase } from "@/components/moleculas/modal-base/ModalBase"
import { sessionStorageKey } from "@/constants/sessionStorageToken"
import { GET_TOKEN } from "@/graphql/mutations/getToken"
import { setToken } from "@/lib/features/authSlice"
import { toggleLoginModal } from "@/lib/features/modalSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setSessionStorage } from "@/utils/storage"
import { useMutation } from "@apollo/client"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

interface FormData {
  email: string
  password: string
}

export function LoginForm() {
  const {
    handleSubmit,
    register,
    clearErrors,
    formState: {
      errors
    }
  } = useForm<FormData>()
  const { showLoginModal } = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()
  const [login] = useMutation(GET_TOKEN, {
    onCompleted: (data) => {
      if (data.login.accessToken) {
        setSessionStorage(sessionStorageKey, JSON.stringify(data.login.accessToken))
        dispatch(setToken(data.login.accessToken))
        dispatch(toggleLoginModal())
        redirect('/dashboard')
      }
    }
  })
  
  useEffect(() => {
    return () => {
      clearErrors()
    }
  }, [clearErrors, showLoginModal])

  if (!showLoginModal) return null

  function onSubmit(data: FormData) {
    login({
      variables: {
        credentials: {
          ...data
        }
      }
    })
  }
  
  return (
    <ModalBase
      handleSubmit={handleSubmit(onSubmit)}
      toggleModal={() => dispatch(toggleLoginModal())}
      showModal={showLoginModal}
    >
      <section className="px-4 pt-12 lg:py-8 lg:px-20">
        <div className="flex justify-center mb-8">
          <LoginDraw />
        </div>
        <h2 className="font-bold mb-4 w-full text-center">Login</h2>
        <div className="mb-8">
          <Input 
            type="text"
            htmlFor="email"
            label="Email"
            placeholder="Digite seu email"
            errorMessage={errors['email']?.message}
            {...register('email', { required: 'Digite um email válido'})}
          />
        </div>
        <div className="mb-8 ">
          <Input
            className="w-2/3 mb-2"
            type="password"
            htmlFor="password"
            label="Senha"
            placeholder="Digite sua senha"
            errorMessage={errors['password']?.message}
            {...register('password', { required: 'Senha deve conter no mínimo 6 caracteres', minLength: 6 })}
          />
          <Link href="#" className="text-right underline text-secondary-600 block">Esqueci a senha!</Link>
        </div>
        <div className="flex justify-center">
          <Button className="w-full" buttonType="regular" variant="primary">
            <span className="font-bold">
              Acessar
            </span>
          </Button>
        </div>
      </section>
    </ModalBase>
  )
}
