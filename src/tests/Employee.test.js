const { Employee } = require("../lib/classes");

describe(Employee, () => {
  it("should create a new Employee instance", () => {
    const employee = new Employee("John Doe", "123", "foo@example.com");
    expect(employee).toMatchSnapshot();
  });
  describe("getName()", () => {
    it("should return the name", () => {
      const employee = new Employee("John Doe", "123", "foo@example.com");
      expect(employee.getName()).toBe("John Doe");
    });
  });
  describe("getId()", () => {
    it("should return the id", () => {
      const employee = new Employee("John Doe", "123", "foo@example.com");
      expect(employee.getId()).toBe("123");
    });
  });
  describe("getEmail()", () => {
    it("should return the email", () => {
      const employee = new Employee("John Doe", "123", "foo@example.com");
      expect(employee.getEmail()).toBe("foo@example.com");
    });
  });
  describe("getRole()", () => {
    it("should return the role", () => {
      const employee = new Employee("John Doe", "123", "foo@example.com");
      expect(employee.getRole()).toBe("Employee");
    });
  });
});
