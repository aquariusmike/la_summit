import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center bg-dark-4'>
        <SignUp />
    </main>
  )
}

export default SignUpPage