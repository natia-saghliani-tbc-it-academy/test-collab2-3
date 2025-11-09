function contactIsValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

function contactShowFeedback(type, message) {
    const feedback = document.getElementById('form-feedback');
    feedback.textContent = message;
    feedback.className = type + ' show';
    
    setTimeout(function() {
        feedback.className = '';
        feedback.textContent = '';
    }, 5000);
}

function contactHandleSubmit(event) {
    event.preventDefault(); // Prevent page refresh
    
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    if (!name || !email || !message) {
        contactShowFeedback('error', 'Please fill in all fields.');
        return;
    }
    
    if (!contactIsValidEmail(email)) {
        contactShowFeedback('error', 'Please enter a valid email address.');
        return;
    }
    
    contactShowFeedback('success', 'Thank you, ' + name + '! Your message has been sent. We\'ll get back to you soon.');
    document.getElementById('contact-form').reset();
    
    console.log('Form submitted:', name, email, message);
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            contactHandleSubmit(event);
        });
    }
    
    console.log('Contact section initialized');
});