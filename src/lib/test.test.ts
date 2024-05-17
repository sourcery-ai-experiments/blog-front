import bcrypt from "bcrypt";

describe("test", () => {
  it("make password", async () => {
    console.log(await bcrypt.hash("1234", 10));
  });
});
