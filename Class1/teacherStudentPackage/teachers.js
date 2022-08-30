const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");
const { isStudentIdValid } = require("./Students");
const Students = require("./Students");

const courseDetailsT = [
    {
        courseName : 'Automation',
        price : 1000,
        length : 6
    },
    {
        courseName : 'QA',
        price : 2000,
        length : 8
    },
    {
        courseName : 'Mobile',
        price : 3000,
        length : 12
    }
]


class Teachers extends Members {

    static idValue = 0;

    teacher = {
        tId : 0,
        tCourseName : '',
        tSalary : 0

    }

    /**
     * 
     * age >= 21
     * 
     * teacherCourseName should be Automation, QA or Mobile
     * 
     */

    constructor(TeacherName, TeacherAge, TeacherCountry, TeacherCourse) {
        super();
        if (TeacherAge >= 21 && this.#isCourseNameValid(TeacherCourse) && TeacherCountry.toLowerCase().localeCompare('usa') === 0 ) {
            const courseData = this.#isCourseNameValid(TeacherCourse);
            this.member.name = MyStringFunctions.toTitleCase(TeacherName);
            this.member.age = TeacherAge;
            this.member.location = TeacherCountry.toUpperCase();
            this.teacher.tCourseName = courseData.courseName;
            this.teacher.tCourseName  = courseData.length;
            this.teacher.tSalary = courseData.price;
            this.teacher.tId = ++Teachers.idValue;
            console.log(`\nThank you teacher for enrolling.\nYour id value is ${this.teacher.tId}\n`);
        } else {
            console.log("\nDO NOT ENROLL");
        }
    }

    #isCourseNameValid(checkForCourse) {
        return courseDetailsT.find(course => course.courseName.toLowerCase().localeCompare(checkForCourse.toLowerCase()) === 0);
    }



    
        showMyDetails() {
            console.log(`\nTeacher details:\nId: ${this.teacher.tId}`);
            super.showMyDetails();
            console.log(`Course name: ${this.teacher.tCourseName}\nSalary: $${this.teacher.tSalary}\n`);
        }
    
    

    changeTeachingCourse (courseNameT, teacherId) {
        // code
            const checkTeacher = Teachers.isTeacherIdValid(teacherId)
    
        if ((this.#isCourseNameValid(courseNameT)) && (courseNameT !== 0)) {
            checkStudent.sCourseDetails.courseName = courseNameT
            checkStudent.sBalance = courseDetails[courseNameT].price
        }}

    }
    

    /**
     * addGrade
     * 
     * input: studentId, grade
     * 
     * if studentId is valid and studentGrade is ''
     *      update student.sGrade = grade (always store grade in Uppercase)
     *      print -> grade is successfully added to student id -> id
     * if studentGrade is NOT ''
     *      then print -> remove grade from the student
     * if studentId is invalid
     *      then print -> Invalid student id  
     * 
     */
     
    //  static isStudentIdValid(sIdCheck) {
    //     return Students.studentdetails.find(student => student.sId === sIdCheck) 
    //   }


    addGrade(studentId, grade) {
        const checkStudent = Students.isStudentIdValid(studentId)
        if(typeof checkStudent === 'undefined'){
            console.log(`Invalid student id`)
        } else if (studentId !== checkStudent.sId) {
            console.log('Invalid student id')
        } else if (checkStudent.sGrade) {
            console.log('Remove grade from the student')
        } else if (checkStudent.sId === studentId && checkStudent.sGrade === '') {
            checkStudent.sGrade = grade.toUpperCase();
            console.log(`Grade is successfully added to student ID ${checkStudent.sId} ${checkStudent.sGrade} `)
            console.log(checkStudent)

        }}

        // code
        // if (isStudentIdValid(studentId) && studentGrade.toUpperCase() === studentsClass.student.sGrade) {
        //     console.log(`\nGrade is successfully added to student ID -> ${studentId},\nyour grade is ${studentGrade}`);
        //   }
        //   else if (studentsClass.isStudentIdValid(studentId) && studentGrade !== '') {
        //     console.log('Remove grade from the student');
        //   }

        // if (studentId  ){

        // }
    

    /**
     * removeGrade
     * 
     * 
     * input: studentId
     * 
     * if studentId is valid and studentGrade is NOT ''
     *      update student.sGrade = ''
     *      print -> grade is successfully removed from student id -> id
     * if studentGrade is ''
     *      then print -> Student has no grade
     * if studentId is invalid
     *      then print -> Invalid student id
     * 
     */


    removeGrade(studentId) {
        // code
        const removeG = Students.isStudentIdValid (studentId)
        if(typeof removeG === 'undefined'){
            console.log(`Invalid student id`)
        }

        else if(removeG.sId === studentId  && removeG.sGrade !== ''  ) {
            removeG.sGrade = ''
            console.log(`Grade is successfully removed from student id ${removeG.sId}`)
        } else if (removeG.sGrade === ''){
            console.log(`Student has no grade`)
        

    }}



