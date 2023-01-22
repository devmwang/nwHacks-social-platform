import { createTRPCRouter, organizationProtectedProcedure, protectedProcedure } from "@src/server/api/trpc";
import { z } from "zod";

export const listingsRouter = createTRPCRouter({
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
                    dtPosted: new Date(),
                },
            });
            return {
                status: "success",
            };
        }),

    getRecentListings: protectedProcedure
        .input(
            z.object({
                limit: z.number(),
            })
        )
        .query(async ({ ctx, input }) => {
            return ctx.prisma.positionListing.findMany({
                take: input.limit,
                // datetime is supposed to be here but i dunno how to do it
            });
        }),

    getMyListings: organizationProtectedProcedure
        .input(
            z.object({
                limit: z.number(),
            })
        )
        .query(async ({ ctx, input }) => {
            return ctx.prisma.positionListing.findMany({
                take: input.limit,
                where: {
                    authorId: ctx.session.user.id,
                },
            });
        }),

    getListing: protectedProcedure
        .input(
            z.object({
                id: z.string(),
            })
        )
        .query(async ({ ctx, input }) => {
            return ctx.prisma.positionListing.findUnique({
                where: {
                    id: input.id,
                },
            });
        }),

    deleteListing: protectedProcedure
        .input(
            z.object({
                id: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            await ctx.prisma.positionListing.delete({
                where: {
                    id: input.id,
                },
            });
            return {
                status: "success",
            };
        }),
});
