'use client'

import { AuthContextProvider } from '@/context/use-auth-context'
import React from 'react'
import { FormProvider } from 'react-hook-form'
import { Loader } from '@/components/loader'
import { useSignUpForm } from '@/hooks/sign-up/use-sign-up'

type Props = {
    children: React.ReactNode
}


const SignUpFormProvider = ({children}: Props) => {
    const { methods, onHandleSubmit, loading } = useSignUpForm()
  
    return (

       <AuthContextProvider>
          <FormProvider {...methods}>
            <form
             onSubmit= {onHandleSubmit}
             className= "h-full"
            >

            <div className="flex flex-col justify-between gap-3 h-full">
                <Loader loading={loading}> {children} </Loader>
            </div>

            </form>
          </FormProvider>
       </AuthContextProvider>
    )
}

export default SignUpFormProvider