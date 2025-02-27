import { v4 as uuidv4 } from 'uuid';
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

console.log(generateUniqueID("Frederick","Rick"));