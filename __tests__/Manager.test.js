const Manager = require("../lib/Manager");

describe("Manager", () => {
//wrapper from manager test suite
describe("Initialization", () => {
    //wrapper for initialisation/constructor test
    it("should return the object containing a 'name' property when called with the 'new' keyword", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = '12';

      //initialize constructor
      const obj = new Manager(name, id, email, officeNumber);
      //check if name is the same as the one entered
      expect(obj.name).toEqual('John');
    });

    it("should return the object containing a 'id' property when called with the 'new' keyword", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = '12';

      //initialize constructor
      const obj = new Manager(name, id, email, officeNumber);
      //check if id is the same as the one entered
      expect(obj.id).toEqual(2);
    });

    it("should return the object containing a 'email' property when called with the 'new' keyword", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = '12';

      //initialize constructor
      const obj = new Manager(name, id, email, officeNumber);
      //check if email is the same as the one entered
      expect(obj.email).toEqual('John@employee.com');
    });

    it("should return the object containing a 'officeNumber' property when called with the 'new' keyword", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = 12;

      //initialize constructor
      const obj = new Manager(name, id, email, officeNumber);
      //check if office number is the same as the one entered
      expect(obj.officeNumber).toEqual(12);
    });
  });


  describe("getName", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = 12;

      //initialize constructor
      const obj = new Manager(name, id, email, officeNumber);
      //check if method returns the name created when constructed
      expect(obj.getName()).toEqual('John');
    });
  });

  describe("getId", () => {
    it("should return the 'Employee' object's 'Id' value", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = 12;

      //initialize constructor
      const obj = new Manager(name, id, email, officeNumber);
      //check if method returns the id created when constructed
      expect(obj.getId()).toEqual(2);
    });
  });

  describe("getEmail", () => {
    it("should return the 'Employee' object's 'email' value", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = 12;

      //initialize constructor
      const obj = new Manager(name, id, email, officeNumber);
      //check if method returns the email created when constructed
      expect(obj.getEmail()).toEqual("John@employee.com");
    });
  });

  describe("getRole", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = 12;

      //initialize constructor
      const obj = new Manager(name, id, email, officeNumber);
      //check if method returns the overwritten role created when constructed
      expect(obj.getRole()).toEqual('Manager');
    });
  });
  describe("getOfficeNumber", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "John";
      let id = 2;
      let email = "John@employee.com";
      let officeNumber = 12;
      
      //initialize constructor
      const obj = new Manager(name, id, email, officeNumber);
      //check if method returns the office number created when constructed
      expect(obj.getOfficeNumber()).toEqual(12);
    });
  });

});
