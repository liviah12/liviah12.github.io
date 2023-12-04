//Problem 1
/*
Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
Sam, Tech, Manager, 40000, true
Mary, Finance, Trainee, 18500, true
Bill, HR, Executive, 21200, false
*/
const employee = [
        {
          "firstName" : "Sam",
          "department" : "Tech",
          "designation" : "Manager",
          "salary" : 40000,
          "raiseEligible": true
        },
        {
            "firstName" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raiseEligible": true
        },
        {
            "firstName" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raiseEligible": false
        }
      ]

console.log(employee);

//Problem 2
/*Create JSON for the company with the following details (companyName, website, employees)
Tech Stars, www.techstars.site, array of Employees*/

const company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": employee
}
console.log(company);


//Problem 3, Anna, Tech, Executive, 25600, false
employee.push({"firstName" : "Anna",
"department" : "Tech",
"designation" : "Executive",
"salary" : 25600,
"raiseEligible": false});
console.log(employee);


//Problem 4, calculate total salary

let totalSalary = 0;
for (let i=0; i<4; i++){
    //console.log(employee[i].salary);
    totalSalary = totalSalary + employee[i].salary;
}
console.log(totalSalary);


//Problem 5
/*If an employee is raise eligible, increase their salary by 10%. 
Given the JSON of the company and its employees, write a function to update the salary for each employee who is raised eligible, 
then set their eligibility to false. */

for (let i = 0; i<4; i++){
    if (employee[i].raiseEligible == true){
        //console.log(employee[i].firstName);
        //update salary
        employee[i].salary = employee[i].salary * 1.10;
        employee[i].raiseEligible = false;
    }
}
console.log(employee);


//Problem 6
/*Some employees have decided to work from home. The following array indicates who is working from home. 
Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true of false
Working from home: ['Anna', 'Sam'] */

for (let i = 0; i<4; i++){
    if (employee[i].firstName == "Anna" || employee[i].firstName == "Same"){
        employee[i]["wfh"] = true;
    }
    else{
        employee[i]["wfh"] = false;
    }
}

console.log(employee);
