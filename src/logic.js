// JavaScript source code

//var grades = rAVG;
/** Blank Course Object **/
var course = function (name) {
    //FUNCTIONS
    this.addAssign = function (assignment) {
        this.numAssign++;
        this.assignments[this.assignments.length] = assignment;
        if (assignment.marked === true) {
            completedWeight += assignment.percent;
            this.updateMarks();
        }
    }
    this.updateMarks = function () {
        var RA = 0;
        var cwght = 0;
        var aLen = this.assignments.length
        for (var i = 0; i < aLen; i++) {
            var a = this.assignments[i];
            if (a.marked === true){
                 RA += a.getMark() * a.weight;
                 cwght += a.weight;
            }
        }
        finalMark = RA;
        completedWeight = cwght;
        topPossibleMark = 100 - (completedWeight * 100) + RA * completedWeight; 
        if (cwght == 0)
            runAVG = 0;
        else
            runAVG = RA/cwght;
           
            
        
    }
    this.printMe = function () {
        this.updateMarks();
        var cWght = completedWeight*100;
        msg = "Course name is " + this.name + '\n';
        msg += "There are " + this.numAssign.toString() + " assignments which total " + cWght.toString() + "% completed! \n";
        msg += "Running Average is "+ runAVG.toString() + "%, Top Possible Mark is " + topPossibleMark.toString()+"%\n";
        msg += "Current final Mark is " + finalMark.toString()+ "%!\n";
        for (var i = 0; i < this.assignments.length; i++){
            a = this.assignments[i];
            msg += a.printMe()+'\n';
        }        
        return msg;
    }
    this.getRunAVG = function() {
        this.updateMarks();
        return runAVG;
    }
    this.getFinalMark = function() {
        this.updateMarks();
        return finalMark;
    }
    this.getTopPossMark = function() {
        this.updateMarks();
        return topPossibleMark;
    }
    this.getUpdatedMarks = function() {
        this.updateMarks();
        var ret = {runAVG, finalMark, topPossibleMark, completedWeight};
        return ret;
    }
    //ATTRIBUTES//
    this.name = name;
    this.numAssign = 0;
    this.assignments = [];
    //These are declared private because updating an assignment won't automatically change their values'
    var completedWeight = 0;
    var topPossibleMark = 0;
    var runAVG = 0;
    var finalMark = 0;
}

var assignment = function (name, weight) {
    //FUNCTIONS//
    this.setMark = function (mark) {
        this.marked = true;
        if (typeof weight === 'number') {
            if (mark >=0 && mark <=100)
                this.mark = mark;
            else console.log("Error: Mark must be between 0 and 100!")
         }
        else
            console.log("Error: Mark not supplied as a Number!");
    }
    this.unMark = function () {
        this.marked = false;
        this.mark = 0;
    }
    this.getMark = function () {
        if (this.marked === true)
            return this.mark;
        else return "No Mark!";
    }
    this.setWeight = function (weight) {
        if (typeof weight === 'number') {
            if (weight >= 0 && weight <= 1)
                this.weight = weight;
            else {
                console.log("Error: Weight must be between 0 and 1!!");
                this.weight = 0;
            }
        }
        else
            console.log("Error: Weight not supplied as a Number!");
    }

    this.printMe = function () {
        var msg;
        var wght=this.weight*100;
        if (this.marked === true)
            msg = this.name + " has a mark of " + this.mark + "% and" + " is worth " + wght.toString() + "%";
        else
            msg = this.name + " is unmarked and is worth " + wght.toString() + "%";
        return msg;

    }
    
     //Initialization
    this.name = name;
    this.marked = false;
    var mark = 0;
    this.setWeight(weight);


}

parseGradesPage = function (arr){
    var ret = [];
    for (i = 0; i < arr.length; i++){
        var courseName=arr[i].name;
        var c = new course(courseName);
        for (j = 0; j < arr[i].assignments.length; j++){
            var asgmt = arr[i].assignments[j];
            var name = asgmt.name;
            var wght = asgmt.weight;
            var mark = asgmt.grade; 
            var addMe = new assignment(name,wght);
            addMe.setMark(mark);
            c.addAssign(addMe);           
        }
        ret.push(c);
    }
    return ret;
}



/////TESTING/////// Comment out Afterwards
/*
assignmentTest("Test #1");
courseTest("TestCourse");
var e = populatedExample();
e.printMe();
//*/
// testInput();

function testInput(){
    var exGradeMsg = [{"_id":"58431b26c5126c3df898f350","owner":"Zack","name":"CMPE 320","__v":0,"assignments":[{"name":"Assignment 1","weight":0.5,"grade":82,"_id":"58431b26c5126c3df898f351"}]}]
    var exCourses = parseGradesPage(exGradeMsg);
    for (var i = 0; i < exCourses.length; i++)
        console.log(exCourses[i].printMe());
}

//Test Functions
function populatedExample() {
    var c = new course("CMPE 365");
    var marks = [80,95,63,98,85];
    for (var i = 1; i < 6; i++ ){
        var a = new assignment("Quiz #"+i.toString(), 0.2);
        a.setMark(marks[i]);
    }
    return c;
}
function partPopulatedExample() {
    var marks = [80,-1,63,-1,-1];
    var c = new course("CMPE 365");
    for (var i = 1; i < 6; i++ )
        var a = new assignment("Quiz #"+i.toString(), 0.2);
        if (marks[i] > 0)
            a.setMark(marks[i]);
    return c;
}
function courseTest(name) {
    var c = new course(name);
    console.log(c.printMe());
    var a = new assignment("Exam #1", 0.50);
    c.addAssign(a);
    a.setMark(85);
    console.log(c.printMe());
}
function assignmentTest(name) {
    asgmt = new assignment(name, 35); //should print error message
    asgmt.setWeight("35%"); //should print error message
    asgmt.setWeight(0.35);
    console.log(asgmt.printMe());
    asgmt.setMark(80);
    console.log(asgmt.printMe());
    asgmt.unMark();
    console.log(asgmt.printMe());
    asgmt.setMark(55);
    console.log(asgmt.printMe());
}

module.exports = parseGradesPage;