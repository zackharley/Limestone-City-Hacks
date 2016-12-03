// JavaScript source code

//var grades = rAVG;
/** Blank Course Object **/
var course = function (name) {
    this.name = name;
    this.numAssign = 0;
    this.completedWeight = 0;
    this.topPossibleMark = 0;
    this.runAVG = 0;
    this.finalMark = 0;
    this.assignments = [];
    this.addAssign = function (assignment) {
        this.numAssign++;
        if (assignment.marked === true) {
            this.completedWeight += assignment.percent;
            this.updateMarks();
            this.assignments[this.assignments.length] = assignment;
        }
    }
    this.updateMarks = function () {
        console.log("Updating Marks")
        this.topPossibleMark = 100 - this.completedWeight + this.runAVG * this.completedWeight;
        var RA = 0;
        var cwght = 0;
        var aLen = this.assignments.length
        for (i = 0; i < aLen; i++) {
            var a = assignments[i];
            if (a.marked === true){
                 RA += a.getMark() * a.weight;
                 cwght += a.weight();

            }
            console.log("Running AVG is " + RA);
        }
        this.finalMark = RA;
        this.runAVG = RA/cwght;
        this.completedWeight = cwght;
        this.topPossibleMark = 1 - cwght + this.runAVG*cwght; 
    }
    this.printMe = function () {
        msg = "Course name is" + this.name + '\n';
        msg += "There are " + this.numAssign.toString() + " assignments which total " + this.completedWeight.toString() + "% completed!";
        for (i = 0; i < this.assignments.length; i++)
            assignments[i].printMe();
        return msg;
    }
    this.getRunAVG = function() {
        this.updateMarks();
        return this.runAVG;
    }
    this.getFinalMark = function() {
        this.updateMarks();
        return this.runAVG;
    }
}

var assignment = function (name, weight) {
    //Initialization
    this.name = name;
    this.marked = false;
    var mark = 0;

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
    this.setWeight(weight); //default instantiation...

    this.printMe = function () {
        var msg;
        if (this.marked === true)
            msg = this.name + " has a mark of " + this.mark + "% and" + " is worth " + this.weight.toString() + "%";
        else
            msg = this.name + " is unmarked and is worth " + this.weight.toString() + "%";
        return msg;

    }
}
function courseTest(name) {
    var c = new course(name);
    console.log(c.printMe());
    var a = new assignment("Exam #1", 0.50);
    c.addAssign(a);
    a.setMark(85);
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

/////TESTING/////// Comment out Afterwards
//*
//assignmentTest("Test #1");
courseTest("Test");
//*/