
function menuAddToCart(button) {
    const menuItem = button.closest('.menu-item');
    
    const itemName = menuItem.querySelector('h3').textContent;
    const itemPrice = menuItem.getAttribute('data-price');
    
    if (typeof headerIncrementCart === 'function') {
        headerIncrementCart();
    }
    
    const originalText = button.textContent;
    button.textContent = 'Added! ✓';
    button.classList.add('added');
    
    setTimeout(function() {
        button.textContent = originalText;
        button.classList.remove('added');
    }, 1000);
    
    console.log('Added ' + itemName + ' ($' + itemPrice + ') to cart');
}

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('#menu-section .add-to-cart');
    
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            menuAddToCart(button);
        });
    });
    
    console.log('Menu section initialized');
});