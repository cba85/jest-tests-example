const request = require("supertest");

describe("ma boisson", () => {
  test("login", async () => {
    const res = await request("http://127.0.0.1:3000").post("/login").send({});

    expect(res.status).toEqual(422);
  });

  test("login credentials error", async () => {
    const res = await request("http://127.0.0.1:3000").post("/login").send({
      email: "gregregre",
      password: "frege",
    });

    expect(res.status).toEqual(401);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body).toHaveProperty("error");
    expect(res.body.error).toBe("bad credentials");
  });

  test("login success", async () => {
    const res = await request("http://127.0.0.1:3000").post("/login").send({
      email: "admin",
      password: "frege",
    });

    expect(res.status).toEqual(200);
    expect(res.body).toBeInstanceOf(Object);
    expect(res.body).toHaveProperty("token");
    expect(res.body.token).toBeTruthy();
  });
});
