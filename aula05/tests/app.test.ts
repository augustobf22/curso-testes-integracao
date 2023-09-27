import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  });
  it("should return 200 on fibonacci", async () => {
    const result = await api.get("/fibonacci?elements=2");
    
    expect(result.status).toBe(200)
    expect(result.text).toContain("0")
  })
})