import request from "supertest";

import app from "../../src/app";

describe("Test health check", () => {
    test("Catch-all route", async () => {
        const res = await request(app).get("/health-check");
        expect(res.body).toEqual({ message: "Server is up and running!" });
    });
});