import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request:Request) => {
    const {firstname, lastname, email, password} = await request.json();

    console.log(firstname, lastname, email, password);

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = {
        firstname, 
        lastname,
        email,
        password: hashedPassword
    }

    prisma.user.create(user);




    return new NextResponse("User has been created", {
        status: 201,
    });

}