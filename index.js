import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';


function generateUniqueID(first,last){
    //generate lowercase string first
    let firstLetter=first.charAt(0).toLowerCase();
    let lastName=last.toLowerCase();
    let uniqueId=firstLetter+lastName;

    //call uuid method
    let uuidString=uuidv4();
    let uuidStringTrim=""

    //trim uuid string
    for(let i=0;i<8;i++){
        uuidStringTrim+=uuidString.charAt(i);
    }


    //add trimmed uuid string to lowercase string
    uniqueId+=uuidStringTrim;

    return uniqueId;
}

function addAccount(first,last,email,age){

    if(typeof first != "string"     || 
        typeof last != "string"     || 
        typeof email != "string"    || 
        typeof age != "number"      ||
        validator.isEmpty(first)    ||
        validator.isEmpty(last)     ||
        validator.isEmpty(email)    ||
        age==null                   ||
        !validator.isEmail(email)   ||
        age<18
    ){
        return "invalid account";
    }

    let uniqueId=generateUniqueID(first,last);
    let data=first+","+last+","+email+","+age.toString()+","+uniqueId+"\n";
    
    appendFileSync("users.txt",data);

    return "user has been added to the database";


    





}



console.log(generateUniqueID("Frederick","Rick"));
console.log(addAccount("Dashiel","Labis","dmlabis@up.edu.ph",20));