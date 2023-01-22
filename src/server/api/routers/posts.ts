import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure, organizationProtectedProcedure } from "../trpc";

export const postsRouter = createTRPCRouter({
    hello: publicProcedure.input(z.object({ text: z.any() })).query(({ input }) => {
        return {
            greeting: `Hello ${input.text as string}`,
        };
    }),

    getSecretMessage: protectedProcedure.query(() => {
        return "you can now see this secret message!";
    }),

    createPost: organizationProtectedProcedure
        .input(z.object({ imageId: z.string(), caption: z.string() }))
        .mutation(async ({ ctx, input }) => {
            await ctx.prisma.post.create({
                data: {
                    imageId: input.imageId,
                    caption: input.caption,
                    authorId: ctx.session.user.id,
                },
            });

            return {
                status: "success",
            };
        }),
});
