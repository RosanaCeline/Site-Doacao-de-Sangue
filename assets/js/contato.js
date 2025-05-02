 document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");
        const botaoEnvio = document.getElementById("button-contato");

        botaoEnvio.addEventListener("click", function(event) {
            event.preventDefault(); 

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const whatsapp = document.getElementById("whatsapp").value.trim();

            if (nome && email && whatsapp) {
              alert("Dados enviados com sucesso!");
            form.reset(); 
           } else {
            alert("Por favor, preencha todos os campos!");
           }
        });
});