function ageUser(age) {
    if (age <= 0) {
        console.log("incorrect age " + age + " user")
    } else if (age <= 17) {
        console.log("you are teenager " + age + " old user")
    } else {
        console.log("you are adult " + age + " old user")
    }
}

ageUser(0);
ageUser(14);
ageUser(19);

function divisionDigit(a, b) {
    if (a % b === 0) {
        console.log("division without remainder");
    } else {
        console.log('division with remainder ' + a % b);
    }
}

divisionDigit(2, 22);

function countSalary(salary, years,) {
    let result;
    if (years < 3) {
        result = salary + salary * 10 / 100;
    } else if (years >= 4) {
        result = salary + salary * 20 / 100;
    }
    if (result < 4000) {
        result = result + 1000;
    } else if (result >= 4000) {
        result = result + 500;
    }
    console.log(result + "salary");
}

countSalary(2000, 4);
