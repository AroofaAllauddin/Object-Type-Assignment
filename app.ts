   // Object //

let students :studentsType= {
    fullName : "Aroofa",
    lastName : "Allauddin",
    classId : "323",
    rollNum : "24",
    email : "aroofaallauddin47@gmail.com",
    isPassed : true,
    address : {
        city : "Karachi",
        country : "Pakistan",
    }

};

// jab bhi object define krengy usme har key k bad , lgayengy //


    // Type //

type studentsType = {
    fullName : string;
    lastName : string;
    classId : string;
    rollNum : string;
    email : string;
    isPassed : boolean;
    // Interface address type//
address : {
    city : string
    country : string

}
};

console.log(students);




