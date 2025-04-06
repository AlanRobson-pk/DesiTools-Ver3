document.addEventListener('DOMContentLoaded', function() {
    // Email modal functionality
    const emailButtons = document.querySelectorAll('.email-btn');
    const emailModal = document.getElementById('emailModal');
    const closeModal = document.querySelector('.close-modal');
    const emailForm = document.getElementById('emailForm');
    const toolNameElement = document.getElementById('toolName');
    
    let currentTool = '';
    
    emailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            currentTool = this.closest('.tool-card').querySelector('h3').textContent;
            toolNameElement.textContent = currentTool;
            emailModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        emailModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === emailModal) {
            emailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userEmail = document.getElementById('userEmail').value;
        const message = document.getElementById('message').value;
        
        console.log('=== EMAIL REQUEST ===');
        console.log(`Tool: ${currentTool}`);
        console.log(`User Email: ${userEmail}`);
        console.log(`Message: ${message}`);
        console.log('=====================');
        
        alert(`Thank you for your interest in ${currentTool}! We've received your message and will contact you soon.`);
        
        emailForm.reset();
        emailModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && emailModal.style.display === 'block') {
            emailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});