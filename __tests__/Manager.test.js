const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return the object containing a 'name' property when called with the 'new' keyword", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = '12';

      
      const obj = new Manager(name, id, email, officeNumber);

      expect(obj.name).toEqual('John');
    });

    it("should return the object containing a 'id' property when called with the 'new' keyword", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = '12';

      
      const obj = new Manager(name, id, email, officeNumber);

      expect(obj.id).toEqual(2);
    });

    it("should return the object containing a 'email' property when called with the 'new' keyword", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = '12';
      const obj = new Manager(name, id, email, officeNumber);
      expect(obj.email).toEqual('John@employee.com');
    });

    it("should return the object containing a 'officeNumber' property when called with the 'new' keyword", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = 12;

      
      const obj = new Manager(name, id, email, officeNumber);

      expect(obj.officeNumber).toEqual(12);
    });
  });


  describe("getName", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = 12;

      
      const obj = new Manager(name, id, email, officeNumber);

      expect(obj.getName()).toEqual('John');
    });
  });

  describe("getId", () => {
    it("should return the 'Employee' object's 'Id' value", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = 12;

      
      const obj = new Manager(name, id, email, officeNumber);

      expect(obj.getId()).toEqual(2);
    });
  });

  describe("getEmail", () => {
    it("should return the 'Employee' object's 'email' value", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = 12;

      
      const obj = new Manager(name, id, email, officeNumber);

      expect(obj.getEmail()).toEqual("John@employee.com");
    });
  });

  describe("getRole", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = 12;

      
      const obj = new Manager(name, id, email, officeNumber);

      expect(obj.getRole()).toEqual('Manager');
    });
  });
  describe("getOfficeNumber", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = 12;

      const obj = new Manager(name, id, email, officeNumber);

      expect(obj.getOfficeNumber()).toEqual(12);
    });
  });

});
