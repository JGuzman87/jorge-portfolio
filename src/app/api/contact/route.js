import { NextResponse } from "next/server";
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

        return NextResponse.json(result.rows);
    } catch(err) {
        console.log(err)
        return NextResponse.json({err: 'Failed to fetch contact information'}, {status: 500});
    }
    }

