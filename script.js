function addToCart(itemName, price) {
    alert(`${itemName} added to cart at $${price}!`);
}
document.addEventListener('DOMContentLoaded', (event) => {
    function showHomeMessage() {
        alert("You Are In Home Page");
    }
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', (event) => {
            event.preventDefault(); 
            showHomeMessage();
        });
    }
    function addToCart(itemName, quantity) {
        alert(`${itemName} added to cart with quantity ${quantity}`);
    }
    const addToCartButtons = document.querySelectorAll('button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.previousElementSibling.alt;
            const quantity = parseInt(button.innerText.match(/\d+/)[0]);
            addToCart(itemName, quantity);
        });
    });
});
