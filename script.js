document.getElementById('account').addEventListener('click', function(e) {
    const form = document.querySelector('form');
    if (!form.checkValidity()) {
        e.preventDefault();
        alert('Please enter valid information in all fields.');
    }
});