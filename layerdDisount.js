function layerDiscountTotal (quantity){
    const first100Price=100;
    const second200Price=90;
    const above200Price=70;

    if (quantity<=100){
        const total= quantity*first100Price;
        return total;
    }
    else if(quantity<=200){
        const first100Total=100*first100Price;
        const remainingQuantity=quantity-100;
        const remainingQuantityPrice=remainingQuantity*90;
        const total=first100Total+remainingQuantityPrice;
        return total;
    }

    else{
        const first100Total=100*first100Price;
        const second100Total=100*second200Price;
        const remainingQuantity=quantity-200;
        const remainingQuantityPrice=remainingQuantity*70;
        const total=first100Total+second100Total+remainingQuantityPrice;
        return total;

    }
}

const lastDiscount= layerDiscountTotal(400);
console.log("You final discount is :",lastDiscount);