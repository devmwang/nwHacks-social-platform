import { createTRPCRouter, protectedProcedure } from "@src/server/api/trpc";

export const userRouter = createTRPCRouter({
    getCurrentUser: protectedProcedure.query(({ ctx }) => {
        return ctx.session?.user;
    }),
});
