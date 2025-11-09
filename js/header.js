/* ============================================ */
/* HEADER JAVASCRIPT */
/* Created by: Person 1 */
/* Only edit this file for header functionality */
/* ============================================ */

let headerCartCount = 0;

function headerScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function headerUpdateCart() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = headerCartCount;
    }
}

function headerIncrementCart() {
    headerCartCount++;
    headerUpdateCart();
    
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(function() {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('#header .nav-btn');
    
    navButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetId = button.getAttribute('data-target');
            headerScrollToSection(targetId);
        });
    });
    
    console.log('Header initialized');
});