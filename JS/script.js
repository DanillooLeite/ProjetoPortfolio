document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = new FormData(this);


    setTimeout(function () {

        document.getElementById('contactForm').style.display = 'none';


        var ObrigadoMessage = document.createElement('div');
        ObrigadoMessage.textContent = 'Obrigado pela sua mensagem. Entraremos em contato em breve!';
        document.getElementById('contactForm').parentNode.appendChild(ObrigadoMessage);

        setTimeout(function () {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            ObrigadoMessage.remove();
            document.getElementById('contactForm').style.display = 'block';
        }, 3000);

    }, 1000);
});

function goBack() {
    window.history.back();
}

