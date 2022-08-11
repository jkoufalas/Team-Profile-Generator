const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
//wrapper from engineer test suite
  describe("Initialization", () => {
    //wrapper for initialisation/constructor test
    it("should return the object containing a 'name' property when called with the 'new' keyword", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      //initialize constructor
      const obj = new Engineer(name, id, email, gitHub);
      //check if name is the same as the one entered
      expect(obj.name).toEqual('Chris');
    });

    it("should return the object containing a 'id' property when called with the 'new' keyword", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      //initialize constructor
      const obj = new Engineer(name, id, email, gitHub);
      //check if id is the same as the one entered
      expect(obj.id).toEqual(2);
    });

    it("should return the object containing a 'email' property when called with the 'new' keyword", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      //initialize constructor
      const obj = new Engineer(name, id, email, gitHub);
      //check if email is the same as the one entered
      expect(obj.email).toEqual('Chris@employee.com');
    });

    it("should return the object containing a 'gitHub' property when called with the 'new' keyword", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      //initialize constructor
      const obj = new Engineer(name, id, email, gitHub);
      //check if gitthub is the same as the one entered
      expect(obj.gitHub).toEqual('gitName');
    });
  });


  describe("getName", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      //initialize constructor
      const obj = new Engineer(name, id, email, gitHub);
      //check if method returns the name created when constructed
      expect(obj.getName()).toEqual('Chris');
    });
  });

  describe("getId", () => {
    it("should return the 'Employee' object's 'Id' value", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      //initialize constructor
      const obj = new Engineer(name, id, email, gitHub);
      //check if method returns the id created when constructed
      expect(obj.getId()).toEqual(2);
    });
  });

  describe("getEmail", () => {
    it("should return the 'Employee' object's 'email' value", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      //initialize constructor
      const obj = new Engineer(name, id, email, gitHub);
      //check if method returns the email created when constructed
      expect(obj.getEmail()).toEqual("Chris@employee.com");
    });
  });

  describe("getRole", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      //initialize constructor
      const obj = new Engineer(name, id, email, gitHub);
      //check if method returns the overwritten role created when constructed
      expect(obj.getRole()).toEqual('Engineer');
    });
  });
  describe("getGithub", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      //initialize constructor
      const obj = new Engineer(name, id, email, gitHub);
      //check if method returns the gitHub created when constructed
      expect(obj.getGithub()).toEqual('gitName');
    });
  });

});
