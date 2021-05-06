const { Manager } = require("../lib/classes");

describe(Manager, () => {
  it("should create a new Manager instance", () => {
    const manager = new Manager("John Doe", "123", "foo@example.com", "100");
    expect(manager).toMatchSnapshot();
  });
  describe("getName()", () => {
    it("should return the name", () => {
      const manager = new Manager("John Doe", "123", "foo@example.com", "100");
      expect(manager.getName()).toBe("John Doe");
    });
  });
  describe("getId()", () => {
    it("should return the id", () => {
      const manager = new Manager("John Doe", "123", "foo@example.com", "100");
      expect(manager.getId()).toBe("123");
    });
  });
  describe("getEmail()", () => {
    it("should return the email", () => {
      const manager = new Manager("John Doe", "123", "foo@example.com", "100");
      expect(manager.getEmail()).toBe("foo@example.com");
    });
  });
  describe("getRole()", () => {
    it("should return the role", () => {
      const manager = new Manager("John Doe", "123", "foo@example.com", "100");
      expect(manager.getRole()).toBe("Manager");
    });
  });
  describe("getOfficeNumber()", () => {
    it("should return the office number", () => {
      const manager = new Manager("John Doe", "123", "foo@example.com", "100");
      expect(manager.getOfficeNumber()).toBe("100");
    });
  });
});
