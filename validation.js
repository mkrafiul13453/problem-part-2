function multiply(num1,num2){
    if(typeof num1!=="number" || typeof num2!=="number" ){
    return "Please enter a number."
    }
    const multi=num1*num2;
    return multi;
}

const result=multiply(6,'two');
console.log(result);


function fullname(first,second){
    if(typeof first!=="string"){
        return "First name should be a string.";
    }
    else if (typeof second!=="string"){
        return "Second name should be string.";
    }

    const full=first+" "+second;
    return full;

}


const theName=fullname("zadu",5);
console.log(theName);



function theObject (array){
    if(Array.isArray(array)===false){
        return "please enter a array."
    }
    else{
        const result=console.log(array);
    }

    return result;
}

const output=theObject([45]);
console.log("Final output is :",output);