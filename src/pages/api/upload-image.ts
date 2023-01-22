import { randomUUID } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

import aws from "aws-sdk";

import { env } from "@env/server.mjs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const imageId = randomUUID();

        aws.config.update({
            accessKeyId: env.BB_ID,
            secretAccessKey: env.BB_KEY,
            region: "us-west-004",
        });

        const s3 = new aws.S3({
            accessKeyId: env.BB_ID,
            secretAccessKey: env.BB_KEY,
            endpoint: env.BB_URL,
            region: "us-west-004",
        });

        const presignedPost = s3.createPresignedPost({
            Bucket: "nwHacksSocialPlatform",
            Fields: {
                key: imageId,
            },
            Expires: 60,
        });

        return res.status(200).json(presignedPost);
    } catch (e) {
        console.log(e);
    }
}
