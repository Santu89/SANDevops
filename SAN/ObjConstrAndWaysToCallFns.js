var emp1 = {
  firstname : "Santosh",
  lastname : "Arakeri",
  gender :  "Male",
  designation : "Asst Manager"
}
var emp2 = {};
emp2.firstname = "Shivanand";
emp2.lastname = "Rahutar";
emp2.gender = "Male";
emp2.designation = "Asst Manager";

function createEmployeeDetail(firstname , lastname , gender , designation){
  var myObj={};
  myObj.firstname = firstname;
  myObj.lastname = lastname;
  myObj.gender = gender;
  myObj.designation = designation;
  return myObj;
}
var emp3 = createEmployeeDetail("Shiva" , "Amalyal", "Male", "Manager");

function createDetails(firstname, lastname, gender, designation){
  // var this = {};
  this.firstname = firstname;
  this.lastname = lastname;
  this.gender = gender;
  this.designation = designation;
  // return this;

}

var emp4 = new createDetails("Praveen", "Kalasa", "Male"
, "Senior Manager");
var emp5 = new createDetails("Kiran", "Kori", "Male", "Manager");


console.log(emp1,emp2,emp3,emp4,emp4,emp5);