// 1. Add student to the class
// . Create a method to transfer student from one class to another one
//  Inputs: Student, className
 function University(name,location,classes=[]){
    this.name = name;
     this.location = location;
     this.classes = classes;
}
  
    

//2. Find all students kiminki GPA-i 80 den yuxaridir
function Class(name, degree, currentYear, students = []) {
    this.name = name;
    this.degree = degree;
    this.currentYear = currentYear;
    this.students = students;
    this.addStudent = (student)=>{
        this.students.push(student);
    };
    this.removeStudent = (pin) => {
        this.students =  this.students.filter((student)=>student.pin !== pin)
    };
    this.filtergpa=(gpa)=>{
        let result=this.students.filter((student)=>student.gpa>=80)
        console.log(result);
    };
    
    }
  
    function Student(name,surname,paid,pin,gpa) {

    //Add GPA property
    this.firstName = name;
    this.lastName = surname;
    this.paid = paid;
    this.pin = pin;
    this.gpa = gpa;

    this.getFullName = () => {
        return this.firstName + ' ' + this.lastName;
    }
}
let stu1=new Student("Mawa","medik",false,123,95)
let stu2=new Student("medved","ibo",true,124,98)
let stu3=new Student("medi","ibiw",false,245,62)
let cls1=new Class("tr123","bacheolor",2020,[stu1,stu2])
let cls2=new Class("az123","master",2020,stu2)
let uni1=new University("bdu","elmler",cls1)
let uni2=new University("adu","28",cls2)

// for (let i = 0; i <cls1.students.length; i++) {
//     if(cls1.students[i].gpa>=97){
//        console.log(cls1.students[i]);
//     }
// }
cls1.filtergpa();


const nese = [1,3,23];
const result=nese.filter(checksmth);
console.log(result);
function checksmth(x){
    return x>2;
}
