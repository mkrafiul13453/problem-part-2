const products=[
    {name: "shampo", price: 300, quantity:2},
    {name: "chiruni", price:100, quantity:3},
    {name: "shirt", price:700, quantity:5},
    {name: "pant", price:1200, quantity:1},
]


function getAllPrice (products){
    let total=0;
    for (const product of products){
        total = total+(product.price*product.quantity);
    }

    return total;
    
}


const total=getAllPrice(products);
console.log("The price of the product is:",total);