

//broken
// function calculateDiscount(price, discountPercentage) {

//   return (price - discountPercentage) * price / 100; 
// }




function calculateDiscount(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

export default calculateDiscount;


