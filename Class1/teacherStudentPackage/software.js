const Students = require('./Students');
const Teachers = require('./Teachers');



/*
    idValue = 0
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s1.enrollment('jOHn', 20, 'USA', 'mobile');
/*
        idValue = 1
        student = {
        sName : 'john',
        sAge : 20,
        sCountry : 'USA',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : 'Mobile',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/


/*
    idValue = 0;
    student = {
        sName : '',
        sAge : 0,
        sCountry : '',
        sId : 0,
        sGrade : '',
        sCourseDetails : {
            courseName : '',
            coursePrice : 0,
            courseLength : 0,
        },
        sBalance : 0
    }
*/

// s2.enrollment('Gigi', 20, 'USA', 'QA');

let s1 = new Students('scotty', 20, 'USA', 'mobile');
s1.showMyDetails();
Students.messageFromClass2022()

let s2 = new Students('Gigi', 20, 'USA', 'QA');
s2.showMyDetails();
s2.newCourseName('Mobile' , 2 )
s2.showMyDetails();

let s3 = new Students('kiAN', 21, 'uSa', 'moBiLE');
s3.showMyDetails();

let s4 = new Students('billy' , 25 , 'uSa' , 'QA');

let t1 = new Teachers('scott', 65, 'uSa', 'moBiLE');
t1.addGrade(1,'a');
t1.addGrade(12,'a');

t1.removeGrade(1);
t1.removeGrade(16);

t1.showMyDetails();

console.log(t1.member.age);