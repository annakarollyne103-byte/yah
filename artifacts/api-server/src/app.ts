import express, { type Express } from "express";
import cors from "cors";
import * as pinoHttpModule from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

// pino-http@10 default export incompatible with moduleResolution:bundler — cast to any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pinoHttp = (pinoHttpModule as any).default ?? pinoHttpModule;

const app: Express = express();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (pinoHttp as any)({
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
