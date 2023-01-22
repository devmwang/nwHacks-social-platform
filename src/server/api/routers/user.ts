import { createTRPCRouter, protectedProcedure } from "@src/server/api/trpc";

export const userRouter = createTRPCRouter({
    getUser: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.user.findUnique({
            where: {
                id: ctx.session.user.id,
            },
        });
    }),
});
