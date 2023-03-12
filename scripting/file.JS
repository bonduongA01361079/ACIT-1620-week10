const courseList = [
    { code: "ACIT 1620", name: "Fundamental Web Technology"},
    { code: "MATH 1310", name: "Technical Math For IT"},
    { code: "ACIT 1420", name: "Intro to System Administration"}
];

let user = prompt("Please enter 4-digit number: ");

while(user.length !== 4 || isNaN(user)) {
    user = prompt("Invalid data. Please enter 4-digit number: ");
}