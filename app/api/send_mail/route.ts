import { NextResponse } from "next/server";

const nodemailer = require('nodemailer');


// Handle POST requests
export async function POST(request: Request) {
    const body = await request.json();
    
    const {userEmail, subject, html} = body
    
    // console.log({userEmail, subject, em: process.env.NEXT_PUBLIC_USEMAIL});
    // return NextResponse.json({successful: true})
    console.log("called email");
    
    let transporter = nodemailer.createTransport({
        // service: 'gmail',
        auth: { 
            user: process.env.NEXT_PUBLIC_USEMAIL,
            pass: process.env.NEXT_PUBLIC_USEPASS  // USED APP PASSWORD
        },
        host: "smtp.gmail.com",
        port: process.env.NEXT_PUBLIC_DEVELOPMENT_ENV=="local"?465:587,
        secure: process.env.NEXT_PUBLIC_DEVELOPMENT_ENV=="local"?true:false,
        // port: 587,
        // secure: false,

        // requireTLS: true,
        connectionTimeout: 10000,
        
        greetingTimeout: 10000,
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false
        }
    })
    let res = {successful: false}
    try {
        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_USEMAIL,
            to: userEmail,
            subject,
            html
        }).then(()=>{
            console.log("finally done");
            // res.send({successful: true})
            res.successful = true
        }).catch((e: any)=>{
            console.log("err");
            console.log(e);
            res.successful = false
        })
    } catch (e){
        console.log("err_2");
        console.log(e);
        res.successful = false
    }

    return NextResponse.json({ 
        message: 'User created!', 
        data: body,
        successful: res.successful
    }, { status: 200 });
}