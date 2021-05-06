const { Engineer } = require("../lib/classes");

describe(Engineer, () => {
  it("should create a new Employee instance", () => {
    const engineer = new Engineer(
      "John Doe",
      "123",
      "foo@example.com",
      "JohnDoe"
    );
    expect(engineer).toMatchSnapshot();
  });
  describe("getName()", () => {
    it("should return the name", () => {
      const engineer = new Engineer(
        "John Doe",
        "123",
        "foo@example.com",
        "JohnDoe"
      );
      expect(engineer.getName()).toBe("John Doe");
    });
  });
  describe("getId()", () => {
    it("should return the id", () => {
      const engineer = new Engineer(
        "John Doe",
        "123",
        "foo@example.com",
        "JohnDoe"
      );
      expect(engineer.getId()).toBe("123");
    });
  });
  describe("getEmail()", () => {
    it("should return the email", () => {
      const engineer = new Engineer(
        "John Doe",
        "123",
        "foo@example.com",
        "JohnDoe"
      );
      expect(engineer.getEmail()).toBe("foo@example.com");
    });
  });
  describe("getRole()", () => {
    it("should return the role", () => {
      const engineer = new Engineer(
        "John Doe",
        "123",
        "foo@example.com",
        "JohnDoe"
      );
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
  describe("getGithub()", () => {
    it("should return the Github username", () => {
      const engineer = new Engineer(
        "John Doe",
        "123",
        "foo@example.com",
        "JohnDoe"
      );
      expect(engineer.getGithub()).toBe("JohnDoe");
    });
  });
});
