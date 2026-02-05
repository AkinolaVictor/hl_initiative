const nodemailer = require('nodemailer');
import {google} from "googleapis"

export async function send_email(req: any, res: any) {
    
    // console.log('Successfully sent email');
    // res.send({successful: true})
    // return
    
    const {userEmail, subject, html} = req.body

    const client_id = process.env.GOOGLE_CLIENT_ID_2
    const client_secret = process.env.GOOGLE_CLIENT_SECRET_2
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
            return resp
        }).catch((e:any)=>{
            console.log("Error from here");
            console.log(e);
        })
    };

    const emailOptions = {
        from: 'Health_EnLight <akinolavictor26@gmail.com>',
        to: userEmail,
        subject,
        html,
        text: `This message is from Health EnLight ${html}`,
    }

    await emailSender(emailOptions).then((result)=>{
        // console.log({result});
        console.log('Successfully sent email');
        res.send({successful: true})
    }).catch(()=>{
        console.log('failed to send to email');
        res.send({successful: false})
    })
    
}