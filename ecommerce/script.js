
    const bar= document.getElementById('bar');
    const close= document.getElementById('close');
    const nav= document.getElementById('navbar');

    if(bar){
        bar.addEventListener('click', ()=>{
            nav.classList.add('active');
        });
    }

    if(close){
        close.addEventListener('click', ()=>{
            nav.classList.remove('active');
        });
    }

    function validateForm() {
        var email = document.getElementById('emailInput').value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false; // Prevent form submission
        }
        
        // Form submission logic goes here if validation passes
        return true;
    }