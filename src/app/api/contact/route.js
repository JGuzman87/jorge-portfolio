import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import { Parser } from 'json2csv';
import pool from "@/lib/db";


export const POST = async (request) => {

  
    try {
        const body = await request.json();
        const {email, name, comment} = body;

        const result = await pool.query(
            "INSERT INTO contact_info (email, name, comment) VALUES ($1, $2, $3) RETURNING *",
            [email, name, comment]
        );
        return NextResponse.json(result.rows[0]);
    } catch (err) {
        console.log(err);
        return NextResponse.json({mesage: "Server Error"}, {status: 500});
    }
}
  

export const GET = async () => {
  try {
    const result = await pool.query("SELECT * FROM contact_info");
    const parser = new Parser();
    const csv = parser.parse(result.rows);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("Preparing to send email with:", {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
      rows: result.rows.length,
    });

      await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // send to yourself
      subject: "Contact Info CSV",
      text: "Attached is the contact_info table in CSV format.",
      attachments: [
        {
          filename: "contact_info.csv",
          content: csv,
        },
      ],
    });

   

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err) {
    console.log("Email send failed:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
