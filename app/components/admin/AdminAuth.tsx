"use client"
import { generalFunctions } from '@/app/redux/store_controllers/generalFunctions'
import { supabase } from '@/utils/supabase'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'

interface Props {}

function AdminAuth(props: Props) {
    const {} = props
    const [email, setEmail] = useState("")
    const {setGeneralAlpha} = generalFunctions()
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [revealer, setRevealer] = useState(false)
    
    function proceed(){
        const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL
        const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASS
        
        if(email !== adminEmail) return setError("Please ensure your credentials are valid")
        if(password !== adminPass) return setError("Please check up these credentials again and retry ")
        setGeneralAlpha("adminAuth", true)
    }

    async function signup() {
        const {error} = await supabase.auth.signUp({email, password})
        if(error){
            console.log("error encountered")
            return
        }

        // other stuffs
    }

    async function signin() {
        const {error} = await supabase.auth.signInWithPassword({email, password})
        if(error){
            console.log("error encountered")
            return
        }

        // other stuffs
    }


    return (
        <div className='w-full h-screen bg-white text-black flex justify-center items-center p-5'>
            <div className='w-full max-w-120 h-auto bg-[#004D00] p-7 rounded-2xl'>
                <div className='font-semibold bg-[#6b3e26] text-white p-5 rounded-[20px] my-5'>
                    <p>E-Mail</p>
                    <input 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value); setError("")}}
                        className='w-full h-10 rounded-2 mt-3 mb-0 rounded-[5px] bg-white text-black p-3 font-normal'
                        // style={{border: "1px solid black"}}
                        type='email'
                        placeholder='Enter Email Address'
                    />
                </div>
                <div className='font-semibold bg-[#6b3e26] text-white p-5 rounded-[20px] my-5'>
                    <div className='flex justify-between items-center'>
                        <p>Password</p>
                        {
                            !revealer?
                            <Eye className='cursor-pointer' size={"18px"} onClick={()=>setRevealer(!revealer)}/>:
                            <EyeOff className='cursor-pointer' size={"18px"} onClick={()=>setRevealer(!revealer)}/>
                        }
                    </div>
                    <input 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value); setError("")}}
                        className='w-full h-10 rounded-2 mt-3 mb-0 rounded-[5px] bg-white text-black p-3 font-normal'
                        // style={{border: "1px solid black"}}
                        type={!revealer?"password":"text"}
                        placeholder='Enter Password'
                    />
                </div>
                <p className='text-center text-white mb-5'>{error}</p>
                <div onClick={proceed} className='w-full p-3 text-white mb-5 flex justify-center items-center cursor-pointer font-semibold bg-[#6b3e26] rounded-[11px]'>
                    <p className=''>Done</p>
                </div>
            </div>
        </div>
    )
}

export default AdminAuth
