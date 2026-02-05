// const nodemailer = require('nodemailer');
// import {google} from "googleapis"

export async function test(req: any, res: any) {
    
    console.log("correct")
    console.log('Successfully sent email');
    res.send({successful: true})
}