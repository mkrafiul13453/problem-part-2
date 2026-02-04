function getMin(number){
    let min = number[0];
    for (const num of number){
        if(num<min){
            min=num;
        }
    }

    return min;
}

const hights=[65,66,68,72,78,60];
const min = getMin(hights);
console.log("The max number is :",min);