// const nodemailer = require('nodemailer');
// import {google} from "googleapis"

import { NextResponse } from "next/server";


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
    
    return NextResponse.json({ 
        message: 'User created!', 
        data: body,
    }, { status: 200 });
}