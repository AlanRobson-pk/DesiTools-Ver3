document.addEventListener('DOMContentLoaded', function() {
    // Get all email buttons
    const emailButtons = document.querySelectorAll('.email-btn');
    const emailModal = document.getElementById('emailModal');
    const closeModal = document.querySelector('.close-modal');
    const emailForm = document.getElementById('emailForm');
    const toolNameElement = document.getElementById('toolName');
    
    // Track which tool was clicked
    let currentTool = '';
    
    // Add click event to all email buttons
    emailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent default if this is a link
            if (e.target.tagName === 'A') {
                e.preventDefault();
            }
            
            // Get the tool name from the card
            currentTool = this.closest('.tool-card').querySelector('h3').textContent;
            toolNameElement.textContent = currentTool;
            emailModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });
    
    // Close modal when X is clicked
    closeModal.addEventListener('click', function() {
        emailModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === emailModal) {
            emailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Handle form submission
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userEmail = document.getElementById('userEmail').value;
        const message = document.getElementById('message').value;
        
        // Log to console
        console.log('=== EMAIL REQUEST ===');
        console.log(`Tool: ${currentTool}`);
        console.log(`User Email: ${userEmail}`);
        console.log(`Message: ${message}`);
        console.log('=====================');
        
        // Show confirmation
        alert(`Thank you for your interest in ${currentTool}! We've received your message and will contact you soon.`);
        
        // Reset form and close modal
        emailForm.reset();
        emailModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && emailModal.style.display === 'block') {
            emailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});