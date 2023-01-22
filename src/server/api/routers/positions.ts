import { createTRPCRouter, organizationProtectedProcedure, protectedProcedure } from "@src/server/api/trpc";
import { z } from "zod";

export const positionsRouter = createTRPCRouter({
    createListing: organizationProtectedProcedure
        .input(
            z.object({
                title: z.string(),
                description: z.string(),
                location: z.string(),
                startTime: z.string(),
                endTime: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            await ctx.prisma.positionListing.create({
                data: {
                    title: input.title,
                    description: input.description,
                    location: input.location,
                    startTime: new Date(input.startTime),
                    endTime: new Date(input.endTime),
                    authorId: ctx.session.user.id,
                },
            });
            return {
                status: "success",
            };
        }),
});
