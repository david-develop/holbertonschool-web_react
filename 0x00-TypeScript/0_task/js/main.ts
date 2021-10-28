interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    location: 'New York',
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Mariane',
    age: 25,
    location: 'Bogota',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
    const tr = document.createElement('tr');
    table.appendChild(tr);

    console.log(student);
    Object.keys(student).forEach((key) => {
        if (key === 'firstName' || key === 'location') {
            const td = document.createElement('td');
            td.innerText = student[key];
            tr.appendChild(td);
        }
    });
});
