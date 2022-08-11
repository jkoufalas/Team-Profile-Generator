const Engineer = require("../lib/Engineer");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return the object containing a 'name' property when called with the 'new' keyword", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      
      const obj = new Engineer(name, id, email, gitHub);

      expect(obj.name).toEqual('Chris');
    });

    it("should return the object containing a 'id' property when called with the 'new' keyword", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      
      const obj = new Engineer(name, id, email, gitHub);

      expect(obj.id).toEqual(2);
    });

    it("should return the object containing a 'email' property when called with the 'new' keyword", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';
      const obj = new Engineer(name, id, email, gitHub);
      expect(obj.email).toEqual('Chris@employee.com');
    });

    it("should return the object containing a 'gitHub' property when called with the 'new' keyword", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      
      const obj = new Engineer(name, id, email, gitHub);

      expect(obj.gitHub).toEqual('gitName');
    });
  });


  describe("getName", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      
      const obj = new Engineer(name, id, email, gitHub);

      expect(obj.getName()).toEqual('Chris');
    });
  });

  describe("getId", () => {
    it("should return the 'Employee' object's 'Id' value", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      
      const obj = new Engineer(name, id, email, gitHub);

      expect(obj.getId()).toEqual(2);
    });
  });

  describe("getEmail", () => {
    it("should return the 'Employee' object's 'email' value", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      
      const obj = new Engineer(name, id, email, gitHub);

      expect(obj.getEmail()).toEqual("Chris@employee.com");
    });
  });

  describe("getRole", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      
      const obj = new Engineer(name, id, email, gitHub);

      expect(obj.getRole()).toEqual('Engineer');
    });
  });
  describe("getGithub", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      let name = "Chris";
      let id = 2;
      let email = "Chris@employee.com";
      let gitHub = 'gitName';

      const obj = new Engineer(name, id, email, gitHub);

      expect(obj.getGithub()).toEqual('gitName');
    });
  });

});
