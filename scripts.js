// memory cost update function declaration
function memoryCostUpdate(id, extraPrice) {
    const extraPartsTag = document.getElementById(id);
    extraPartsTag.innerText = extraPrice;
    document.getElementById('total-price').innerText = calculateTotal();
    document.getElementById('final-price').innerText = calculateTotal();


}
function calculateTotal() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('extra-memory-cost').innerText;
    const storagePrice = document.getElementById('extra-storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-charge').innerText;
    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    return totalPrice;
}


//  memory cost update 
document.getElementById('eight-gb-memory').addEventListener('click', function () {
    memoryCostUpdate('extra-memory-cost', 0);
})

document.getElementById('sixteen-gb-memory').addEventListener('click', function () {
    memoryCostUpdate('extra-memory-cost', 180);
})


//  SSD cost update 
document.getElementById('two-fifty-six-gb-ssd').addEventListener('click', function () {
    memoryCostUpdate('extra-storage-cost', 0);
})
document.getElementById('five-twelve-gb-ssd').addEventListener('click', function () {
    memoryCostUpdate('extra-storage-cost', 100);
})
document.getElementById('one-tb-ssd').addEventListener('click', function () {
    memoryCostUpdate('extra-storage-cost', 180);
})


// delivery cost update 
document.getElementById('normal-delivery').addEventListener('click', function () {
    memoryCostUpdate('delivery-charge', 0);
})
document.getElementById('urgent-delivery').addEventListener('click', function () {
    memoryCostUpdate('delivery-charge', 20);
})


// final price update with promo code 
document.getElementById('apply-button').addEventListener('click', function () {
    const promoCodeInput = document.getElementById('promo-code');
    const promoCodeValue = promoCodeInput.value;
    if (promoCodeValue === 'stevekaku') {
        const totalPrice = calculateTotal();
        const discount = totalPrice * 0.2;
        console.log(discount);
        const discountPrice = totalPrice - discount;
        console.log(discountPrice);
        document.getElementById('final-price').innerText = discountPrice;
    }
    promoCodeInput.value = '';
})