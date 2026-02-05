import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');
import {google} from "googleapis"


export async function GET() {
  const users = [
    { id: 1, name: 'Gemini' },
    { id: 2, name: 'User' }
  ];
  console.log("Server Get")
  return NextResponse.json(users);
}

// Handle POST requests
export async function POST(request: Request) {
    const body = await request.json();
    
    const {userEmail, subject, html} = body

    // console.log(body)
    // return NextResponse.json({successful: true});

    const client_id = process.env.GOOGLE_CLIENT_ID
    const client_secret = process.env.GOOGLE_CLIENT_SECRET
    const redirect_uri = "https://developers.google.com/oauthplayground"
    const refresh_token = process.env.GOOGLE_REFRESH_TOKEN
    
    async function createdTransporter() {
        const oauth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uri)
        oauth2Client.setCredentials({refresh_token})
        const accessToken = oauth2Client.getAccessToken()
        
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "akinolavictor26@gmail.com",
            accessToken,
            clientId: client_id,
            clientSecret: client_secret,
            refreshToken: refresh_token,
            tls: {
                rejectUnauthorized: false
            }
          }
        });
        return transporter;
    }
    
    const emailSender = async (emailOptions: any) => {
        let emailTransporter = await createdTransporter();
        return await emailTransporter.sendMail(emailOptions).then((resp: any)=>{
            // return resp
            // console.log(typeof resp)
            console.log(resp)
            console.log("got here");
            return true
        }).catch((e:any)=>{
            console.log("Error from here");
            console.log(e);
            return false
        })
    };

    const emailOptions = {
        from: 'Health_EnLight <akinolavictor26@gmail.com>',
        to: userEmail,
        subject,
        html,
        text: `This message is from Health EnLight ${html}`,
    }

    const sender = await emailSender(emailOptions).then((result)=>{
        console.log({result});
        console.log('Successfully sent email');
        // res.send({successful: true})
        return {successful: result}
    }).catch(()=>{
        console.log('failed to send to email');
        // res.send({successful: false})
        return {successful: false}
    })

    return NextResponse.json({ 
        message: 'User created!', 
        // data: body 
        successful: sender.successful
    }, { status: 200 });
}