import { DietPlanRequestSchema } from "../types.js";
import { generateDietPlan } from "../agent.js";
export async function planRoutes(app) {
    app.post("/plan", async (request, reply) => {
        reply.raw.setHeader("Access-Control-Allow-Origin", "*");
        reply.raw.setHeader("Content-Type", "text/plain; charset=utf-8");
        reply.raw.setHeader("Content-Type", "text/event-stream");
        reply.raw.setHeader("Cache-Control", "no-cache");
        reply.raw.setHeader("Connection", "keep-alive");
        const parse = DietPlanRequestSchema.safeParse(request.body);
        if (!parse.success) {
            return reply.status(400).send({
                error: "ValidationError",
                details: parse.error.flatten(issue => issue.message),
            });
        }
        try {
            for await (const delta of generateDietPlan(parse.data)) {
                reply.raw.write(delta);
            }
            reply.raw.end();
        }
        catch (err) {
            request.log.error(err);
            reply.raw.write(`event: error\n ${JSON.stringify(err.message)}`);
            reply.raw.end();
        }
        return reply;
    });
}
//# sourceMappingURL=plan.js.map