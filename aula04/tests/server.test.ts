import supertest from "supertest";
import app from "../src/app";

describe("/health", () => {
    it("/health", async () => {
        const result = await supertest(app).get("/health");

        expect(result.statusCode).toEqual(200);
    })
})