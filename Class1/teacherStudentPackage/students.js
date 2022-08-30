const Members = require("./Members");
const MyStringFunctions = require("./MyStringFunctions");

    // Array of course-objects
    const courseDetails = [
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


class Students extends Members {

    static idValue = 0;
    student = {
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }

    static #studentdetails = [];




    /**
     * age >= 16
     *      if not, do not enroll and show message, student has to be of 16 or above
     *
     * if invalid studentCourse
     *      do not enroll and show message, student should provide correct course name
     * 
     * all students must be within usa (USA, United States of America)
     *      if not, do not enroll and show message, student has to inside the United States of America
     * 
     * if data is correct
     *      Congratulations for enrolling in <courseName>
     *      Student id : XX
     */
    constructor(studentName, studentAge, studentCountry, studentCourse) {
        super();
        if (studentAge >= 16 && this.#isCourseNameValid(studentCourse) && studentCountry.toLowerCase().localeCompare('usa') === 0 ) {
            const courseData = this.#isCourseNameValid(studentCourse);
            this.member.name = MyStringFunctions.toTitleCase(studentName);
            this.member.age = studentAge;
            this.member.location = studentCountry.toUpperCase();
            this.student.sCourseDetails.courseName = courseData.courseName;
            this.student.sCourseDetails.coursePrice = courseData.price;
            this.student.sCourseDetails.courseLength = courseData.length;
            this.student.sBalance = courseData.price;
            this.student.sId = ++Students.idValue;
            Students.#studentdetails.push(this.student);
            console.log(`\nThank you for enrolling.\nYour id value is ${this.student.sId}\n`);
        } else {
            console.log("\nDO NOT ENROLL");
        }
    }


    static isStudentIdValid(sIdCheck) {

        return Students.#studentdetails.find(student => student.sId === sIdCheck);
      }
    }

   