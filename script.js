document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Coletando os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const tipo = document.getElementById('tipo').value;

    // Criando um novo item de lista com as informações do cliente
    const novoCliente = document.createElement('li');
    novoCliente.textContent = `${nome} - ${email} - ${tel} - ${tipo === 'pessoa-fisica' ? 'Pessoa Física' : 'Pessoa Jurídica'}`;

    // Adicionando o novo cliente à lista de clientes
    const listaClientes = document.getElementById('clientes-lista-ul');
    listaClientes.appendChild(novoCliente);

    // Limpar o formulário após o envio
    document.getElementById('form-cadastro').reset();
});
