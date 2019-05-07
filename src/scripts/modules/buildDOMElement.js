import API from "./API.js";

const buildDOMElement = {


  buildTheDOM: function () {
    //Define the API Fetches
    var empRequest = API.getTable("http://localhost:8088/employees");
    var deptRequest = API.getTable("http://localhost:8088/departments");
    var compRequest = API.getTable("http://localhost:8088/computers");
    //Create an object of objects to store the results in
    var combinedData = { "empRequest": {}, "deptRequest": {}, "compRequest": {} };
    //Promise.all waits until all of the fetches have returned, and will return an error if any of them return an error
    Promise.all([empRequest, deptRequest, compRequest]).then(function (values) {
      combinedData["empRequest"] = values[0];
      combinedData["deptRequest"] = values[1];
      combinedData["compRequest"] = values[2];

      combinedData["empRequest"].forEach(employee => {
        let NAME = employee.name;
        console.log(`EMPLOYEE : ${NAME}`);
        let DEPT = combinedData["deptRequest"].find(function (department) {
          //console.log(`Does ${department.id} equal ${employee.dept_id}?`);
          return department.id === employee.dept_id;
        });
        console.log(`DEPT ID : ${DEPT.name}`);
        let COMP = combinedData["compRequest"].find(function (computer) {

          return computer.id === employee.computer_id;
        });
        console.log(`COMP TYPE : ${COMP.model}`);

        //MAKE DAS DOM
        //Build Article & Append to DOM
        let block = document.querySelector(".main");
        let article = document.createElement("article");
        article.className = "employee";
        block.appendChild(article);
        //Build Header, and H1 & Append to Article
        let header = document.createElement("header");
        header.className = "employee__name";
        let h3 = document.createElement("h3");
        h3.textContent = `${NAME}`;
        header.appendChild(h3);
        article.appendChild(header);
        //Build DEPT section & Append to Article
        let dept_section = document.createElement("section");
        dept_section.className = "employee__department";
        dept_section.textContent = `Works in the ${DEPT.name} department`;
        article.appendChild(dept_section);
        //Build COMP section & Append to Article
        let comp_section = document.createElement("section");
        comp_section.className = "employee__computer";
        comp_section.textContent = `Currently using a ${COMP.model}`;
        article.appendChild(comp_section);

      });



      return combinedData;
    });
  }
};

export default buildDOMElement;


