// parts cost update function declaration
function memoryCostUpdate(partsId, extraPrice) {
    const extraPartsTag = document.getElementById(partsId);
    extraPartsTag.innerText = extraPrice;
    document.getElementById('total-price').innerText = calculateTotal();
    document.getElementById('final-price').innerText = calculateTotal();


}

// total calculation function declaration 
function calculateTotal() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('extra-memory-cost').innerText;
    const storagePrice = document.getElementById('extra-storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-charge').innerText;
    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    return totalPrice;
}


//  memory cost update 
// 8GB memory option 
document.getElementById('eight-gb-memory').addEventListener('click', function () {
    memoryCostUpdate('extra-memory-cost', 0);
})
// 16GB memory option 
document.getElementById('sixteen-gb-memory').addEventListener('click', function () {
    memoryCostUpdate('extra-memory-cost', 180);
})


//  SSD cost update 
// 256GB SSD option (default)
document.getElementById('two-fifty-six-gb-ssd').addEventListener('click', function () {
    memoryCostUpdate('extra-storage-cost', 0);
})
// 512GB SSD option 
document.getElementById('five-twelve-gb-ssd').addEventListener('click', function () {
    memoryCostUpdate('extra-storage-cost', 100);
})
// 1TB SSD option 
document.getElementById('one-tb-ssd').addEventListener('click', function () {
    memoryCostUpdate('extra-storage-cost', 180);
})


// delivery cost update 
// normal delivery option 
document.getElementById('normal-delivery').addEventListener('click', function () {
    memoryCostUpdate('delivery-charge', 0);
})
// urgent delivery option 
document.getElementById('urgent-delivery').addEventListener('click', function () {
    memoryCostUpdate('delivery-charge', 20);
})


// final price update with promo code 
document.getElementById('apply-button').addEventListener('click', function () {
    const promoCodeInput = document.getElementById('promo-code');
    const promoCodeValue = promoCodeInput.value;
    // promo code validation 
    if (promoCodeValue === 'stevekaku') {
        const totalPrice = calculateTotal();
        const discount = totalPrice * 0.2;
        const discountPrice = totalPrice - discount;
        document.getElementById('final-price').innerText = discountPrice;
    }
    // clear promo code input text 
    promoCodeInput.value = '';
})