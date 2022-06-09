const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const prodct = product.value;
    const quatity = qty.value;
    const newLI = document.createElement("li")
    newLI.innerText = `${quatity} ${prodct}`
    list.appendChild(newLI);
    product.value = "";
    qty.value = "";
})


list.addEventListener('click', function(e){
    e.target.remove();
})