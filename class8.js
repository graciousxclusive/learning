// try 
//{newErObj = new Error ('This is a new Error');
// throw newErObj
// throw new Error ('This is a brand new error'){
// }   catch (error){
//     console.log(error.message);
// }
    //send mail to the dev
// newErObj = new Error ('This is a new Error');
// throw newErObj

class person{
    constructor(name, age){
    this_.name = name;
    this_.age = age;
}
}
get getName(){
    return this_.name;
}
get getName(){
    return this_.age;
}

class Student extends person {
    constructor(name, age, matricNum){
        super (name, age);
        this_.matricNum = matricNum;
        this.subjects = [];
    }}
    get getmatricNum(){
        return this_.matricNum;
    }
   addSubject(subject){
    //check if the subject is correct in the datatypes
    if (typeof subject !== 'object'){
        //throw new error('subject passed is an object')
        return 'subject passed is of type $[type]'
   }
   //check if the name and grade is present in the
   if (subject.name)
   this.subject.push(subject)
}

// let obj = ()
//     name: 'ggg', 
//     grade: 67 


