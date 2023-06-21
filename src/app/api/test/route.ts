import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
    const url = new URL(req.url || "asdf", `http://${req.headers.host}`)
    const name = url.searchParams.get('name')
    
    return NextResponse.json({ message: name }, { status: 200 })
}