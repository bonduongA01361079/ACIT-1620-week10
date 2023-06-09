const courseList = [
    { code: "ACIT 1620", name: "Fundamental Web Technology"},
    { code: "MATH 1310", name: "Technical Math For IT"},
    { code: "ACIT 1420", name: "Intro to System Administration"}
];

let user = prompt("Please enter 4-digit number (eg.1620): ");

while(user.length !== 4 || isNaN(user)) {
    user = prompt("Invalid data. Please enter 4-digit number (eg. 1620): ");
}

let isCourse = false; 

for (let item of courseList) {
    if(item.code == `ACIT ${user}`) {
    console.log(`Yes I am taking the course: ${item.code} - ${item.name}`);
    break;
    }
};
    if(!isCourse) {
        courseList.push({code: `ACIT${user}`, name: null});
        console.log(`Added successfully a new course ACIT ${user}`)
    } 