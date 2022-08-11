const Intern = require("../lib/Intern");

describe("Intern", () => {
  //wrapper from intern test suite
  describe("Initialization", () => {
    //wrapper for initialisation/constructor test
    it("should return the object containing a 'name' property when called with the 'new' keyword", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      //initialize constructor
      const obj = new Intern(name, id, email, school);
      //check if name is the same as the one entered
      expect(obj.name).toEqual('Helen');
    });

    it("should return the object containing a 'id' property when called with the 'new' keyword", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      //initialize constructor
      const obj = new Intern(name, id, email, school);
      //check if id is the same as the one entered
      expect(obj.id).toEqual(3);
    });

    it("should return the object containing a 'email' property when called with the 'new' keyword", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      //initialize constructor
      const obj = new Intern(name, id, email, school);
      //check if email is the same as the one entered
      expect(obj.email).toEqual('Helen@employee.com');
    });

    it("should return the object containing a 'school' property when called with the 'new' keyword", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      //initialize constructor
      const obj = new Intern(name, id, email, school);
      //check if school is the same as the one entered
      expect(obj.school).toEqual('University Name');
    });
  });


  describe("getName", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      //initialize constructor
      const obj = new Intern(name, id, email, school);
      //check if method returns the name created when constructed
      expect(obj.getName()).toEqual('Helen');
    });
  });

  describe("getId", () => {
    it("should return the 'Employee' object's 'Id' value", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      //initialize constructor
      const obj = new Intern(name, id, email, school);
      //check if method returns the id created when constructed
      expect(obj.getId()).toEqual(3);
    });
  });

  describe("getEmail", () => {
    it("should return the 'Employee' object's 'email' value", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      //initialize constructor
      const obj = new Intern(name, id, email, school);
      //check if method returns the email created when constructed
      expect(obj.getEmail()).toEqual("Helen@employee.com");
    });
  });

  describe("getRole", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      //initialize constructor
      const obj = new Intern(name, id, email, school);
      //check if method returns the overwritten role created when constructedfrom the correct object
      expect(obj.getRole()).toEqual('Intern');
    });
  });
  describe("getschool", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';
      
      //initialize constructor
      const obj = new Intern(name, id, email, school);
      //check if method returns the school created when constructed
      expect(obj.getSchool()).toEqual('University Name');
    });
  });

});
