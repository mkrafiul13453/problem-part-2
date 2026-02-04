function totalPrice(shirtQuantity,pantQuantity,shoeQuantity){
    const shirtPrice=500;
    const pantPrice=300;
    const shoePrice=900;


    const totalShirtPrice=shirtQuantity*shirtPrice;
    const totalpantPrice=pantQuantity*pantPrice;
    const totalshoePrice=shoeQuantity*shoePrice;

    const finalPrice=totalShirtPrice+totalpantPrice+totalshoePrice;
    return finalPrice;
}

const finalPrice=totalPrice(1,1,1);
console.log("Your total price is:",finalPrice);