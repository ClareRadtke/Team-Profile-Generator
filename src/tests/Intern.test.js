const { Intern } = require("../lib/classes");

describe(Intern, () => {
  it("should create a new Employee instance", () => {
    const intern = new Intern("John Doe", "123", "foo@example.com", "School");
    expect(intern).toMatchSnapshot();
  });
  describe("getName()", () => {
    it("should return the name", () => {
      const intern = new Intern("John Doe", "123", "foo@example.com", "School");
      expect(intern.getName()).toBe("John Doe");
    });
  });
  describe("getId()", () => {
    it("should return the id", () => {
      const intern = new Intern("John Doe", "123", "foo@example.com", "School");
      expect(intern.getId()).toBe("123");
    });
  });
  describe("getEmail()", () => {
    it("should return the email", () => {
      const intern = new Intern("John Doe", "123", "foo@example.com", "School");
      expect(intern.getEmail()).toBe("foo@example.com");
    });
  });
  describe("getRole()", () => {
    it("should return the role", () => {
      const intern = new Intern("John Doe", "123", "foo@example.com", "School");
      expect(intern.getRole()).toBe("Intern");
    });
  });
  describe("getSchool()", () => {
    it("should return the school", () => {
      const intern = new Intern("John Doe", "123", "foo@example.com", "School");
      expect(intern.getSchool()).toBe("School");
    });
  });
});
