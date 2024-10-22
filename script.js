
const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;


toggleBtn.addEventListener('click', function() {
    
    if (body.classList.contains('light-mode')) {
       
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleBtn.textContent = 'Switch to Light Mode';
    } else {
      
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleBtn.textContent = 'Switch to Dark Mode';
    }
});
