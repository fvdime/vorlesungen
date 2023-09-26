"use client"
import { useState, useCallback } from "react"
import axios from 'axios'
import { useRouter } from "next/navigation"

const AuthForm = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState('login')

  const router = useRouter()

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

  const login = useCallback(async () => {
    try {
      await axios.post('/api/login', {email, password})

      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }, [email, password, router])

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email, username, password
      })
      login()
    } catch (error) {
      console.log(error)
    }
  }, [email, username, password])

  return (
    <div>
       <section className="">
        <div className="">
          <div className="flex items-center justify-center">

            <div className="mb-12 md:mb-0 bg-slate-100/80 border border-slate-200 px-14 py-10 rounded-lg">
              <form>
                <div className="flex items-center justify-center mb-5">
                  <p className="text-lg">{variant === 'login' ? 'Sign in to your account' : 'Sign up a new account'}</p>
                </div>
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
                {variant === 'register' && (
                <div className="relative mb-6">
                  <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900" >Username</label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  /> 
                </div>
                )}
                <div className="relative mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>

                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="relative mb-6">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>

                  <input
                    type="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center lg:text-left">
                  <button
                    onClick={variant === 'login' ? login : register}
                    type="button"
                    className="inline-block rounded bg-slate-200 w-full pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-gray-800 shadow-[0_4px_9px_-4px_#3b71ca] transition 
                    hover:text-gray-900 duration-150 ease-in-out hover:bg-slate-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    >
                    {variant === 'login' ? 'Sign In' : 'Sign Up'}
                  </button>

                  <p className="mb-0 mt-3 pt-1 text-sm font-medium text-gray-900">
                    {variant === 'login' ? "Don't have an account?" : "Already have an account?"}
                    <a
                      onClick={toggleVariant}
                      className="ml-2 text-lime-500 transition duration-150 ease-in-out hover:text-lime-600 focus:text-lime-600 active:text-lime-700 cursor-pointer"
                    >
                    {variant === 'login' ? "Sign Up" : "Sign In"}
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AuthForm