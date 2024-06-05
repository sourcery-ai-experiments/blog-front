import bcrypt from "bcrypt";

describe("test", () => {
  it("make password", async () => {
    const password = "1234";
    const hash = await bcrypt.hash(password, 10);
    expect(bcrypt.compare(password, hash)).toBeTruthy;
  });
});
