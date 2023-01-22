import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { env } from "@env/server.mjs";

export const postsRouter = createTRPCRouter({
    hello: publicProcedure.input(z.object({ text: z.any() })).query(({ input }) => {
        return {
            greeting: `Hello ${input.text as string}`,
        };
    }),

    getSecretMessage: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),

    createPost: protectedProcedure.input(z.object({ image: z.any(), caption: z.string() })).mutation(({ input }) => {
        console.log("b");

        return {
            status: "success",
        };
    }),
});
