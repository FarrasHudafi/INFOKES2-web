import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate from '@/emails/my-email';

 const resend = new Resend(process.env.RESEND_API_KEY);
//  api key dari resend
// export async function POST(req) {

//     const response=await req.json();
//     console.log("Request Data:", response.data);
//     try {
//         const data = await resend.emails.send({
//             from: 'Acme <onboarding@resend.dev>',
//             to: [response.data.Email],
//             subject: 'Booking Appointment Information',
//             react: EmailTemplate({response}) ,
//             });
//         return NextResponse.json({data})
//     } catch (error) {
//         return NextResponse.json({error})
//     }
// }

export async function POST(req) {
  const response = await req.json();

//   console.log("Received Data:", response);

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [response.data.Email],
      subject: "Booking Appointment Information",
      react: EmailTemplate(response.data),
    });

    // console.log("Email Sent Data:", data);
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error });
  }
}
