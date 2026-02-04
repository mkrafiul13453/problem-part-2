function add (num1,num2){
    const result=num1+num2;
    return result;
}
function sub (num1,num2){
    const result=num1-num2;
    return result;
}
function multi (num1,num2){
    const result=num1*num2;
    return result;
}
function div (num1,num2){
    const result=num1/num2;
    return result;
}


function calculator(a,b,operation){
    if(operation==="add"){
        const summation=add(a,b);
        return summation;
    }
    else if(operation==="sub"){
        const subtraction=sub(a,b);
        return subtraction;
    }
    else if(operation==="multi"){
        const multiplication=multi(a,b);
        return multiplication;
    }
    else if(operation==="div"){
        const division=div(a,b);
        return division;
    }
    else{
        return "Only add, sub, multi, div is allowed in this calculator."
    }
}


const finalResult=calculator(3,2,"multi");
console.log(finalResult);

