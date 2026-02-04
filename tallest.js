function getMax(number){
    let max = number[0];
    for (const num of number){
        if(num>max){
            max=num;
        }
    }

    return max;
}

const hights=[65,66,68,72,78,60];
const max = getMax(hights);
console.log("The max number is :",max);