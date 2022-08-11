const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return the object containing a 'name' property when called with the 'new' keyword", () => {
      let name = "Peter";
      let id = 1;
      let email = "peter@employee.com";

      
      const obj = new Employee(name, id, email);

      expect(obj.name).toEqual('Peter');
    });

    it("should return the object containing a 'id' property when called with the 'new' keyword", () => {
      let name = "Peter";
      let id = 3;
      let email = "peter@employee.com";

      
      const obj = new Employee(name, id, email);

      expect(obj.id).toEqual(3);
    });

    it("should return the object containing a 'email' property when called with the 'new' keyword", () => {
      let name = "Peter";
      let id = 1;
      let email = "peter@employee.com";
      const obj = new Employee(name, id, email);
      expect(obj.email).toEqual('peter@employee.com');
    });
  });


  describe("getName", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Peter";
      let id = 1;
      let email = "peter@employee.com";

      
      const obj = new Employee(name, id, email);

      expect(obj.getName()).toEqual('Peter');
    });
  });

  describe("getId", () => {
    it("should return the 'Employee' object's 'Id' value", () => {
      let name = "Peter";
      let id = 1;
      let email = "peter@employee.com";

      
      const obj = new Employee(name, id, email);

      expect(obj.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the 'Employee' object's 'email' value", () => {
      let name = "Peter";
      let id = 1;
      let email = "peter@employee.com";

      
      const obj = new Employee(name, id, email);

      expect(obj.getEmail()).toEqual("peter@employee.com");
    });
  });

  describe("getRole", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Peter";
      let id = 1;
      let email = "peter@employee.com";

      
      const obj = new Employee(name, id, email);

      expect(obj.getRole()).toEqual('Employee');
    });
  });

});
