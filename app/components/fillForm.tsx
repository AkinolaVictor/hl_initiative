"use client"
import React, { useEffect, useRef, useState } from 'react'
import { generalFunctions } from '../redux/store_controllers/generalFunctions'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { isBlank, overlay_menu_listener } from '@/utils/exports'
import axios from 'axios'

interface Props {title?:string, bg?: string, color?: string, description?: string, env:string}

function FillForm(props: Props) {
    const {title, bg, color, description, env} = props
    const width_controller = "min-w-62.5 w-full max-w-125"
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const {setGeneralAlpha} = generalFunctions()
    const working = useRef(false)
    const timeout = useRef(false)
    const called = useRef(false)

    // type Data = {
    //     email: string,
    //     name: string,
    //     subject: string,
    //     message: string
    // }

    useEffect(()=>{setError("")}, [email, name, subject, message, loading])
    
    async function sendMessage() {
        // const {email, name, subject, message} = params
        // const payload = {email, name, subject, message}

        
        if(loading) return

        if(isBlank(name)){
            setError("Please ensure the name is not empty")
            return
        }
        
        if(!email.split('').includes('.') || !email.split('').includes('@') || email.length<5 || isBlank(email)) {
            setError("Invalid email address, please ensure to use a valid email address")
            return
        }

        if(isBlank(subject)){
            setError("Please ensure the subject is not blank")
            return
        }

        if(isBlank(message)){
            setError("Please ensure messgae is not blank")
            return
        }
        
        setLoading(true)

        await user_message()
        await report_message({last: true})


        async function user_message() {
            const html_2 = `
            <div>
                <h4>Hello ${name}, Thank you for reaching out to us</h4>
                <p>Your message has reached our end, and we'll do our best to respond accordingly.</p>
            </div>
            `
            const sender_payload = {
                userEmail: `${email}`,
                subject: 'Health EnLight Initiative',
                html: html_2
            }
            await emailSender({data: sender_payload})
        }

        async function report_message(props: {last: boolean}) {
            const {last} = props
            const html_1 = `
            <div>
                <h4>Message from ${name}, a ${env}</h4>
                <p>${subject}</p>
                <p>${message}</p>
                <br />
                <p>This is the user email: ${email}</p>
            </div>
            `
            const mails = [`akinolavictor50@gmail.com`, "aonajoko@gmail.com", "Gloriaakpederi5@gmail.com"]
            // const mails = [`akinolavictor50@gmail.com`, `akinolavictor26@gmail.com`]
            for(let i=0; i<mails.length; i++){
                const developer_payload = {
                    userEmail: mails[i],
                    subject,
                    html: html_1
                }
    
    
                await emailSender({data: developer_payload, last: i==mails.length-1})
            }
        }

        async function emailSender(props: any) {
            setError("")

            const {data, last} = props
            return await axios.post("/api/send_mail", {...data}).then((result:any)=>{
                const {successful} = result.data
                if(successful){
                    console.log("successful");

                    if(!last) return
                    setName("")
                    setMessage("")
                    setSubject("")
                    setEmail("")

                    alert("Message Sent Successfully.")
                } else {
                    
                    if(last) alert("Message failed to send, please retry.")
                }
                return {done: true}
            }).catch((e)=>{
                console.log("error encountered", e);
                if(last) alert("Unable to send messagae, please retry.")
                return {done: false}
            })
        }
        setLoading(false)
        
    }

    
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        overlay_menu_listener({ScrollTrigger, working, timeout, called, setGeneralAlpha, threshold: 1})
    }, [])


    return (
        <div 
            style={{backgroundColor: bg||"white", color: color||"black"}}
            className={`w-full h-auto flex flex-col bp8:flex-row justify-between items-center py-12 fill_form_parent_section`}
        >
            <div className='w-full px-5 py-10 flex flex-col items-center text-[13px] '>
                {title && <p className={`dmd text-[25px] text-left ${width_controller} `}>{title}</p>}
                {description && <p className={`text-left opacity-70 ${width_controller} `}>{description}</p>}
                

                <form action="" className='w-full flex flex-col items-center mt-5'>
                    <div className={`${width_controller} py-3`}>
                        <p className='font-semibold mb-2.5'>Name</p>
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            placeholder='Enter Name'
                            className='w-full h-10 px-2'
                            style={{border: "1px solid #493c3c66"}}
                        />
                    </div>

                    <div className={`${width_controller} py-3`}>
                        <p className='font-semibold mb-2.5'>E-Mail</p>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            placeholder='Enter E-Mail Address'
                            className='w-full h-10 px-2'
                            style={{border: "1px solid #493c3c66"}}
                        />
                    </div>

                    <div className={`${width_controller} py-3`}>
                        <p className='font-semibold mb-2.5'>Subject</p>
                        <input 
                            type="name" 
                            value={subject}
                            onChange={(e)=>{setSubject(e.target.value)}}
                            placeholder='Enter Subject of Message'
                            className='w-full h-10 px-2'
                            style={{border: "1px solid #493c3c66"}}
                        />
                    </div>

                    <div className={`${width_controller} py-3`}>
                        <p className='font-semibold mb-2.5'>Message</p>
                        <textarea 
                            name="message" 
                            value={message}
                            onChange={(e)=>{setMessage(e.target.value)}}
                            placeholder='Enter Message'
                            className='w-full h-25 p-2'
                            style={{border: "1px solid #493c3c66"}}
                        />
                    </div>
                </form>
                <p className='text-red-500 font-semibold'>{error}</p>
                {
                    loading?
                    <div className='w-40 ml-auto mr-auto h-auto rounded-full bg-green-700 py-2 px-7 text_1 cursor-pointer mt-5'>
                        <p className='text-white text-center font-semibold'>Sending...</p>
                    </div>:
                    <div onClick={sendMessage} className='w-40 ml-auto mr-auto h-auto rounded-full bg-green-700 py-2 px-7 text_1 cursor-pointer mt-5'>
                        <p className='text-white text-center font-semibold'>Send</p>
                    </div>
                }
            </div>

            {/* <div className='w-full h-auto max-h-screen'>
                <picture>
                    <source srcSet="check_bp.webp" type="image/webp" />
                    <img src="check_bp_2.jpg" alt="image"/>
                </picture>
            </div> */}
        </div>
    )
}

export default FillForm
