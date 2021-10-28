interface Teacher {
    readonly firstName: string
    readonly lastName: string;
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string;
    [key: string]: any;
}

// const teacher3: Teacher = {
//     firstName: 'John',
//     fullTimeEmployee: false,
//     lastName: 'Doe',
//     location: 'London',
//     contract: false,
// };

// console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

// const director1: Directors = {
//   firstName: "Jose",
//   lastName: "Ingacio",
//   location: "Mexico",
//   fullTimeEmployee: true,
//   yearsOfExperience: 10,
//   numberOfReports: 17,
// };
// console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// console.log(printTeacher('John', 'Smith'));

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// const student: StudentClassInterface = new StudentClass('John', 'Smith');

// console.log(student.displayName());
// console.log(student.workOnHomework());

export {
	printTeacher,
	StudentClass
}
