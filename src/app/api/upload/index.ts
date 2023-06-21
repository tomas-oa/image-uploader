import S3 from 'aws-sdk/clients/s3'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { file, type } = req.query

    const s3 = new S3({
        signatureVersion: 'v4',
        region: 'sa-east-1',
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    })

    const preSignedUrl = await s3.getSignedUrl("putObject", {
        Bucket: process.env.BUCKET_NAME,
        Key: file,
        ContentType: type,
        Expires: 5 * 60
    })

    res.status(200).json({
        "url": preSignedUrl
    })
}