//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this.age = age;
	}

	get name(){
		return this.name;
	}
	set name(newName){
		return this.name=newName;
	}
	get age(){
		return this.age;
	}
	set age(newAge){
		return this.age = newAge;
	}
}

class Student extends Person {
	study(){
		console.logs(this.name + "is studying")
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name + "is teaching");
	}
}

const person = new Person("John,25");
console.log(person.name);
person.age = 30;  
console.log(person.age);  

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
