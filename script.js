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


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
