let homeworkResults =[];
let listOfStudents =[];

function Student(name,email){

    this.getName = function() {
        return console.log(name);
    }

    this.getEmail = function() {
        return console.log(email);
    }

    Student.prototype.addHomeworkResult = function(topic,success){
        const result = {
            topic: topic,
            results: [
                {
                    email: email,
                    success: success
                }
            ]
        }
        homeworkResults.push(result);
    }
    this.getHomeworkResults = function(){
        return console.log(homeworkResults);
    }
}

function FrontEndLab(failedHomeworkLimit, studentsList){

    this.addHomeworkResult = function(homework){
        Student.call(this);
        homeworkResults.push(homework);
    };

    this.printStudentsList = function(){
        studentsList.forEach(student => {
            console.log(`Student's name: ${student.name}, email: ${student.email}`);
            homeworkResults.forEach(work => {
                for(let i = 0; i < work.results.length; i++){
                if(work.results[i].email === student.email) {
                    console.log(work.topic);
                    console.log(work.results[i]);
                }
            }
            });
        });
    }

    this.getfailedHomeworkLimit = function() {
        return failedHomeworkLimit;
    };

    this.getstudentList = function() {
        return studentsList;
    };

    this.printStudentEligableForTest = function() {
            let counter = 0;
            let eligibleStudents = studentsList.filter((student) => {
            const stud = new Student(student.name, student.email);
            stud.getHomeworkResults().forEach((hw) => {
				if(hw.success === false){
					counter++;
				}
            });
             return counter <= failedHomeworkLimit;
		});
		eligibleStudents.forEach((stud) => {
			console.log(`Name: ${stud.name}, Email: ${stud.email}`);
		})
    }
}

const failedLimitHW = 4;
const student1 = new Student('Max','john@gmail.com');
const lab = new FrontEndLab(failedLimitHW ,listOfStudents);

student1.getName();
student1.getEmail();
student1.addHomeworkResult('HTML Basics',true);
student1.getHomeworkResults();

lab.addHomeworkResult(homeworkResults[0]);
lab.addHomeworkResult(homeworkResults[1]);
lab.printStudentsList();

lab.printStudentEligableForTest();
