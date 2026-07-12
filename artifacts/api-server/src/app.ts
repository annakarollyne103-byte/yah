import express, { type Express } from "express";
import cors from "cors";
import { createRequire } from "node:module";
import router from "./routes";
import { logger } from "./lib/logger";

// pino-http@10 default export has no call signatures under moduleResolution:bundler.
// Use createRequire so TypeScript never sees the module type at all.
const _require = createRequire(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pinoHttp = _require("pino-http") as (opts: any) => any;

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: { id: unknown; method: string; url?: string }) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: { statusCode: number }) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
