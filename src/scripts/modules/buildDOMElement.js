import API from "./API.js";

const buildDOMElement = {


  buildTheDOM: function () {

    let block = document.querySelector(".main");
    let employeeARR = [];

    API.getTable("http://localhost:8088/employees")
      .then(result => {

        result.forEach(employee => {
          console.log(employee.name);

          fetch("http://localhost:8088/departments")
            .then(depts => {

              depts.forEach(dept => {
                console.log(dept.name);
              });

            });
          //get DEPT
          //employeeARR = result;



          //});

        });
      });

  }
};

export default buildDOMElement;

/*
          //Build Article & Append to DOM
          let article = document.createElement("article");
          article.className = "employee";
          block.appendChild(article);
          //Build Header, and H1 & Append to Article
          let header = document.createElement("header");
          header.className = "employee__name";
          let h1 = document.createElement("h1");
          h1.textContent = `${employee.name}`;
          header.appendChild(h1);
          article.appendChild(header);

          //Build DEPT section & Append to Article
          let dept = document.createElement("section");
          dept.className = "employee__dept";
          dept.textContent = "Nothing yet";
          //Build COMP section & Append to Article
          */
