import { randomUUID } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

const AWS = require("aws-sdk");

import { env } from "@env/server.mjs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const imageId = randomUUID();

        AWS.config.update({
            accessKeyId: env.BB_ID,
            secretAccessKey: env.BB_KEY,
            region: "us-west-004",
            signatureVersion: "v4",
        });

        const endpoint = new AWS.endpoint(env.BB_URL);

        const s3 = new AWS.S3({
            endpoint: endpoint,
        });

        const bucketName = "nwHacksSocialPlatform";

        const presignedURL = s3.getSignedUrl({
            Bucket: "nwHacksSocialPlatform",
            Key: imageId,
            Expires: 60,
        });

        return res.status(200).json(presignedURL);
    } catch (e) {
        console.log(e);
    }
}
