const products=[
    {name: "shampo", price: 300},
    {name: "chiruni", price:100},
    {name: "shirt", price:700},
    {name: "pant", price:1200},
]

function getAllPrice (products){
    let total=0;
    for (const product of products){
        total += product.price;
    }

    return total;
    
}


const total=getAllPrice(products);
console.log("The price of the product is:",total);