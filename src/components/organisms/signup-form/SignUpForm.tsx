'use client'

import { Button } from "@/components/atoms/button/Button";
import { Input } from "@/components/atoms/input/Input";
import { SignupDraw } from "@/components/images/SignupDraw";
import { ModalBase } from "@/components/moleculas/modal-base/ModalBase";
import { ADD_USER } from "@/graphql/mutations/addUser";
import { toggleSignupModal } from '@/lib/features/modalSlice';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useForm } from 'react-hook-form';

interface FormData {
  name: string,
  email: string,
  password: string,
  policyAgreement: boolean,
}

export function SignupForm() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: {
      errors
    },
  } = useForm<FormData>()
  const { showSignupModal } = useAppSelector(state => state.modal)
  const [signupUser] = useMutation(ADD_USER, {
    onCompleted: () => {
      handleCloseModal()
    }
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      clearErrors()
    }
  }, [clearErrors, showSignupModal])

  if (!showSignupModal) return null


  function handleCloseModal() {
    dispatch(toggleSignupModal())
  }

  function onSubmit(data: FormData) {
    if (!data.policyAgreement) {
      setError(
        'policyAgreement', 
        {
          message: 'Para continuar você precisa estar de acordo com nossas politicas.',
        }
      )
    }

    const { name, email, password } = data

    signupUser({
      variables: {
        user: {
          name,
          email,
          password,
        }
      }
    })
  }

  return (
    <ModalBase
      handleSubmit={handleSubmit(onSubmit)}
      toggleModal={() => dispatch(toggleSignupModal())}
      showModal={showSignupModal}
    >
      <section className="p-4 md:py-4 md:px-10 l1g:py-8 lg:px-20">
        <div className="flex justify-center mb-8">
          <SignupDraw />
        </div>
        <h2 className="font-bold mb-4">Preencha os campos abaixo para criar sua conta corrente!</h2>
        <div className="mb-8">
          <Input 
            type="text"
            htmlFor="name"
            label="Nome"
            placeholder="Digite seu nome completo"
            errorMessage={errors['name']?.message}
            {...register('name', { required: 'Digite um nome válido'})}
          />
        </div>
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
            className="w-2/3"
            type="password"
            htmlFor="password"
            label="Senha"
            placeholder="Digite sua senha"
            errorMessage={errors['password']?.message}
            {...register('password', { required: 'Senha deve conter no mínimo 6 caracteres', minLength: 6 })}
          />
        </div>
        <label className="relative">
          <div className="flex items-center mb-9 ">
            <input
              className="mr-4 bg-transparent border-primary-400 border h-6 w-6"
              type="checkbox"
              {...register('policyAgreement', { required: true})}
            />
            <p>Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.</p>
          </div>
          { errors['policyAgreement']?.message && <p>{errors['policyAgreement'].message}</p> }
        </label>
        <div className="flex justify-center">
          <Button className="sm:w-full " buttonType="regular" variant="tertiary">
            <span className="font-bold">
                  Criar conta
            </span>
          </Button>
        </div>
      </section>
    </ModalBase>
  )
}
