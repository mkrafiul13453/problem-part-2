const phones =[
    {name :"samsung", price:20000, camera:"12mp", color:"black"},
    {name :"xoami", price:18000, camera:"12mp", color:"black"},
    {name :"Oppo", price:25000, camera:"12mp", color:"black"},
    {name :"Iphone", price:100000, camera:"12mp", color:"black"},
    {name :"Wlaton", price:12000, camera:"12mp", color:"black"},
    {name :"Nokia", price:15000, camera:"12mp", color:"black"},
]

function getCheapestPhone9(phone){
    let min =phones[0];
    for (const phone of phones){
        if(phone.price<min.price){
            min=phone;
        }
    }
    return min ;

}

const cheap = getCheapestPhone9(phones);
console.log("The cheapest phone is:",cheap);