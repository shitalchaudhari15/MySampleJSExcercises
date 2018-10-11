 var Employees = [
     {
         "fName" : "Molecule",
         "lName" : "Man",
         "empId" : "emp1",
         "bloodGroup" : "O+",
         "age" : "29",
         "gender" : "M",
         "designation" : "developer"
     },
     {
         "fName" : "Ram",
         "lName" : "Joshi",
         "empId" : "emp2",
         "bloodGroup" : "A+",
         "age" : "31",
         "gender" : "M",
         "designation" : "QA analyst"
         },
     {
         "fName" : "Swati",
         "lName" : "Mishra",
         "empId" : "emp3",
         "bloodGroup" : "AB-",
         "age" : "27",
         "gender" : "F",
         "designation" : "developer"
         },
     {
         "fName" : "Mansi",
         "lName" : "Mane",
         "empId" : "emp4",
         "bloodGroup" : "A+",
         "age" : "35",
         "gender" : "F",
         "designation" : "developer"
         },
     {
         "fName" : "Nayan",
         "lName" : "Raut",
         "empId" : "emp5",
         "bloodGroup" : "B+",
         "age" : "31",
         "gender" : "M",
         "designation" : "QA analyst"
         },
     {
         "fName" : "Rajat",
         "lName" : "Khede",
         "empId" : "emp6",
         "bloodGroup" : "AB+",
         "age" : "24",
         "gender" : "M",
         "designation" : "developer"
         },
     {
         "fName" : "Rahul",
         "lName" : "Mude",
         "empId" : "emp7",
         "bloodGroup" : "O+",
         "age" : "28",
         "gender" : "M",
         "designation" : "developer"
         },
     {
         "fName" : "Rakhi",
         "lName" : "Gupta",
         "empId" : "emp8",
         "bloodGroup" : "O+",
         "age" : "32",
         "gender" : "F",
         "designation" : "QA analyst"
         },
     {
         "fName" : "Anna",
         "lName" : "Jafar",
         "empId" : "emp9",
         "bloodGroup" : "A+",
         "age" : "27",
         "gender" : "F",
         "designation" : "HR"
         }
 ];


 /**
  *
  *  We need to use innerhtml to disply row data
  *
  **/


 function bodyLoad(){
     var employee = new Employee();
     employee.renderData();
 }

 function Employee(){

     this.employeeData = Employees;
     this.outerContainer = document.getElementById('outer-container');
 }


 Employee.prototype.renderData = function(){


     for(var i =0; i < Employees.length; i++){
         var div1 = document.createElement('div');
         div1.innerHTML = "Name :" + " " + Employees[i].fName + " " + Employees[i].lName;
         this.outerContainer.appendChild(div1);

         var div2 = document.createElement('div');
         div2.innerHTML = "Employee Id :" + " " + Employees[i].empId;
         this.outerContainer.appendChild(div2);

         var div3 = document.createElement('div');
         div3.innerHTML = "Age :" + " " + Employees[i].age;
         this.outerContainer.appendChild(div3);


         var x= document.createElement('input');
         x.setAttribute("type", "button");
         x.setAttribute("value", "More Data...");
         x.setAttribute("class", "btn");
         x.setAttribute("id", Employees[i].empId);

         this.outerContainer.appendChild(x);


         var _this = this;

         x.addEventListener("click", function(e){

             var id = e.target.id;
             var employee = _this.getSingleEmployee(id);

             var lastDiv = e.target.previousElementSibling;
             var newPre = document.createElement('div');

             lastDiv.appendChild(newPre);


             if(e.target.value === "More Data..."){
             var div4 = document.createElement('div');
             div4.setAttribute("id","div4");
             div4.innerHTML = "BloodGroup :" + " " + employee.bloodGroup;
             lastDiv.appendChild(div4);


             var div5 = document.createElement('div');
             div5.innerHTML = "Gender :" + " " + employee.gender;
             div5.setAttribute("id","child");
             lastDiv.appendChild(div5);

             var div6 = document.createElement('div');
             div6.innerHTML = "Designation :" + " " + employee.designation;
             div6.setAttribute("id","child");
             lastDiv.appendChild(div6);

             e.target.value = "Less Data...";
             }
             else{
                 lastDiv.style.display = "none";
                 e.target.value = "More Data...";
             }


         });


     }





 };


 Employee.prototype.getSingleEmployee= function(empId){

     var employee = {};

     for( var i = 0; i < Employees.length; i++){
         if(empId === Employees[i].empId){
             employee = Employees[i];
         }
     }

     return employee;
 };




