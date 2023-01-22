import { createTRPCRouter } from "./trpc";
import { postsRouter } from "./routers/posts";
import { userRouter } from "./routers/user";
import { listingsRouter } from "@src/server/api/routers/listings";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
    posts: postsRouter,
    user: userRouter,
    listings: listingsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
