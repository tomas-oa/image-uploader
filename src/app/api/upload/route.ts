import S3 from 'aws-sdk/clients/s3'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const url = new URL(req.url || "", `http://${req.headers.host}`)
    const file = url.searchParams.get('file')

    const s3 = new S3({
        signatureVersion: 'v4',
        region: process.env.REGION,
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    })

    const preSignedUrl = await s3.getSignedUrlPromise("putObject", {
        Bucket: process.env.BUCKET_NAME,
        Key: file,
        Expires: 60 * 3
    })

    return NextResponse.json({ url: preSignedUrl }, { status: 200 })
}