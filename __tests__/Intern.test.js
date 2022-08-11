const Intern = require("../lib/Intern");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return the object containing a 'name' property when called with the 'new' keyword", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      
      const obj = new Intern(name, id, email, school);

      expect(obj.name).toEqual('Helen');
    });

    it("should return the object containing a 'id' property when called with the 'new' keyword", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      
      const obj = new Intern(name, id, email, school);

      expect(obj.id).toEqual(3);
    });

    it("should return the object containing a 'email' property when called with the 'new' keyword", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';
      const obj = new Intern(name, id, email, school);
      expect(obj.email).toEqual('Helen@employee.com');
    });

    it("should return the object containing a 'school' property when called with the 'new' keyword", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      
      const obj = new Intern(name, id, email, school);

      expect(obj.school).toEqual('University Name');
    });
  });


  describe("getName", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      
      const obj = new Intern(name, id, email, school);

      expect(obj.getName()).toEqual('Helen');
    });
  });

  describe("getId", () => {
    it("should return the 'Employee' object's 'Id' value", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      
      const obj = new Intern(name, id, email, school);

      expect(obj.getId()).toEqual(3);
    });
  });

  describe("getEmail", () => {
    it("should return the 'Employee' object's 'email' value", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      
      const obj = new Intern(name, id, email, school);

      expect(obj.getEmail()).toEqual("Helen@employee.com");
    });
  });

  describe("getRole", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      
      const obj = new Intern(name, id, email, school);

      expect(obj.getRole()).toEqual('Intern');
    });
  });
  describe("getschool", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Helen";
      let id = 3;
      let email = "Helen@employee.com";
      let school = 'University Name';

      const obj = new Intern(name, id, email, school);

      expect(obj.getSchool()).toEqual('University Name');
    });
  });

});
