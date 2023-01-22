import { randomUUID } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

const { Storage } = require("@google-cloud/storage");

import { env } from "@env/server.mjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const imageId = randomUUID();

        const storage = new Storage({ keyFilename: "google-credentials.json" });
        const bucket = storage.bucket("nwhacks_social_platform");

        const options = {
            version: "v4",
            action: "write",
            expires: Date.now() + 60 * 1000, // 1 minutes
        };

        const signedURL = await bucket.file(imageId).getSignedUrl(options);

        return res.status(200).json({ url: signedURL, imageId });
    } catch (e) {
        console.log(e);
    }
}
