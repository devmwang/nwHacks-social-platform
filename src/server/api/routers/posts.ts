import { z } from "zod";
import aws from "aws-sdk";

import { createTRPCRouter, publicProcedure, protectedProcedure, organizationProtectedProcedure } from "../trpc";
import { env } from "@env/server.mjs";

export const postsRouter = createTRPCRouter({
    hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
        return {
            greeting: `Hello ${input.text}`,
        };
    }),

    getSecretMessage: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),

    createPost: organizationProtectedProcedure
        .input(z.object({ image: z.any(), caption: z.string() }))
        .mutation(({ input }) => {
            const s3 = new aws.S3({
                accessKeyId: env.BB_ID,
                secretAccessKey: env.BB_KEY,
                endpoint: env.BB_URL,
                region: "us-west-004",
            });

            aws.config.update({
                accessKeyId: env.BB_ID,
                secretAccessKey: env.BB_KEY,
                region: "us-west-004",
            });

            const post = s3.createPresignedPost({
                Bucket: "nwHacksSocialPlatform",
                Fields: {
                    key: input.image as FileList,
                },
                Expires: 60,
            });

            return {
                status: "success",
            };
        }),
});
