//Primitve vs Non-primitive Classification 

//Primitive DataTypes 
let employeeName = "Jonathan";// String
const employeeID = 4376; // Number 
let onLeave = false; //boolean
var yearsofEmployment; //undefined
let finalisedContracts = null // null 


//non-primitive datatype
let employmentStatus = {
    contractType: "Permanent",
    role: "Head of Service Department",
    startDate: "02/06/2018"
}

//Assigned value to undefined variable
yearsofEmployment = 5; 

const collegues = ["Richard", " Melissa", "Austine", "Grace"]; //non-primitive datatype

let previousEmployers = ["Nation Media","Equity Bank"]; //non-primitive datatype


console.log("The employee details are listed below:");
console.log(`Name -  ${employeeName}`);
console.log(`ID -  ${employeeID}`);
console.log(`Currently on leave -  ${onLeave} `);
console.log(`Years of Employment  -  ${yearsofEmployment}`);
console.log(`finalisedContracts -  ${finalisedContracts} `);
console.log('Further information shown below');
console.log(employmentStatus);
console.log(`${employeeName} currently works with ${collegues}. They previoucs worked for ${previousEmployers}`);



