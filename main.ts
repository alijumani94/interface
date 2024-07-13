interface student{
    name: string,
    age: number,
    rollNo: number,
    subject: string 
}

let stdInfo: student={
    name: "Ali",
    age: 30,
    rollNo: 460970,
    subject: "typescript"
}
console.log(`Hello ${stdInfo.name}, Your roll no. is ${stdInfo.rollNo}.`);
