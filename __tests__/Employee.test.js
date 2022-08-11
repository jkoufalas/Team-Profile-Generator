const Employee = require("../lib/Employee");

describe("Employee", () => {
  //wrapper from employee test suite
  describe("Initialization", () => {
    //wrapper for initialisation/constructor test
    it("should return the object containing a 'name' property when called with the 'new' keyword", () => {
      let name = "Peter";
      let id = 1;
      let email = "peter@employee.com";

      //initialize constructor
      const obj = new Employee(name, id, email);
      //check if name is the same as the one entered
      expect(obj.name).toEqual('Peter');
    });

    it("should return the object containing a 'id' property when called with the 'new' keyword", () => {
      let name = "Peter";
      let id = 3;
      let email = "peter@employee.com";

      //initialize constructor
      const obj = new Employee(name, id, email);
      //check if id is the same as the one entered
      expect(obj.id).toEqual(3);
    });

    it("should return the object containing a 'email' property when called with the 'new' keyword", () => {
      let name = "Peter";
      let id = 1;
      let email = "peter@employee.com";
      
      //initialize constructor
      const obj = new Employee(name, id, email);
      //check if email is the same as the one entered
      expect(obj.email).toEqual('peter@employee.com');
    });
  });


  describe("getName", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Peter";
      let id = 1;
      let email = "peter@employee.com";

      //initialize constructor
      const obj = new Employee(name, id, email);
      //check if method returns the name created when constructed
      expect(obj.getName()).toEqual('Peter');
    });
  });

  describe("getId", () => {
    it("should return the 'Employee' object's 'Id' value", () => {
      let name = "Peter";
      let id = 1;
      let email = "peter@employee.com";

      //initialize constructor
      const obj = new Employee(name, id, email);
      //check if method returns the id created when constructed
      expect(obj.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the 'Employee' object's 'email' value", () => {
      let name = "Peter";
      let id = 1;
      let email = "peter@employee.com";

      //initialize constructor
      const obj = new Employee(name, id, email);
      //check if method returns the id created when constructed
      expect(obj.getEmail()).toEqual("peter@employee.com");
    });
  });

  describe("getRole", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Peter";
      let id = 1;
      let email = "peter@employee.com";

      //initialize constructor
      const obj = new Employee(name, id, email);
      //check if method returns the correct role object
      expect(obj.getRole()).toEqual('Employee');
    });
  });

});
