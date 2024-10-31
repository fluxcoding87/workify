/* eslint-disable @typescript-eslint/no-unused-vars */
import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from "@/features/auth/server/route";
import workspaces from "@/features/workspaces/server/route";
import members from "@/features/members/server/route";
import projects from "@/features/projects/server/route";
import tasks from "@/features/tasks/server/route";
import { cors } from "hono/cors";

const app = new Hono().basePath("/api");
app.use(
  "*",
  cors({
    origin: "https://workify-1vi5vkhue-namans-projects-df56ce58.vercel.app", // Allow specific origin
    allowMethods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);
const routes = app
  .route("/auth", auth)
  .route("/workspaces", workspaces)
  .route("/members", members)
  .route("/projects", projects)
  .route("/tasks", tasks);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
export type AppType = typeof routes;
