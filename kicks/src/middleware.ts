import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req : NextRequest){
    if((await isAuth(req)) === false) {
        return new NextResponse("Unauthorized", {status : 401 ,
            headers: {"WWW-Authenticate" : "Basic"}
        })
    }
}
async function isAuth(req: NextRequest){
    return Promise.resolve(true);
}

export const config = {
    matcher : "/admin/:path*"
}