
// Validação do Nome
function verificarNome() {
    const nome = document.getElementById("nome").value;
    const nomeError = document.getElementById('mensagem-erro-nome');
    if (nome.length < 5) {
        nomeError.textContent = "Nome deve ter no mínimo 5 caracteres.";
        nomeError.style.color = "red";
        document.getElementById("nome").focus();

    } else if (nome.length > 60) {
        nomeError.textContent = "Nome deve ter no máximo 60 caracteres.";
        nomeError.style.color = "red";
        document.getElementById("nome").focus();

    } else if(nome === "") {
        nomeError.textContent = "O campo nome não pode estar vazio!";
        nomeError.style.color = "red";
        document.getElementById("nome").focus();
       
    } else {
        nomeError.textContent = "OK";
        nomeError.style.color = "green";
    }
  }
  // Validação do E-mail
  
function verificarEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('mensagem-erro-email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (nome === "") {
        emailError.textContent = "E-mail é obrigatório.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    } else if (email.length > 100) {
        emailError.textContent = "E-mail deve ter no máximo 100 caracteres.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    } else if (email.length < 5) {
        emailError.textContent = "E-mail deve ter no mínimo 5 caracteres.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    }
     else if (!emailPattern.test(email)) {
        emailError.textContent = "E-mail inválido.";
        emailError.style.color = "red";
        document.getElementById("email").focus();
    } else {
        emailError.textContent = "OK";
        emailError.style.color = "green";
    }
}

//Validar Senha

function validaSenha() {
    const senha = document.getElementById('senha').value;
    const SenhaError = document.getElementById('erro-senha');
    const regexMaiusculo = /[A-Z]/;
    const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;
    const regexNumero = /\d/;

    if (senha === "") {
        SenhaError.textContent = "Senha não pode ser vazia";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else if (senha.length > 60) {
        SenhaError.textContent = "Senha não pode ser maior que 60 digitos";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else if (senha.length < 8) {
        SenhaError.textContent = "Senha não pode ser menor que 8 digitos";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else if (!regexMaiusculo.test(senha)) {
        SenhaError.textContent = "Senha tem que ter Letras Maiúsculas";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();
    
    }else if (!regexEspecial.test(senha)) {
        SenhaError.textContent = "Senha tem que ter Caracter Especial";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else if (!regexNumero.test(senha)) {
        SenhaError.textContent = "Senha tem que ter números";
        SenhaError.style.color = "red";
        document.getElementById("senha").focus();

    }else{
        SenhaError.textContent = "OK";
        SenhaError.style.color = "green";
    }


}


// Validação da Confirmação de Senha

function confirmarSenha() {
    const confirmarSenha = document.getElementById('confirmar_senha').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenhaError = document.getElementById('mensagem-erro-confirmar-senha');
    
    if (confirmarSenha !== senha) {
        confirmarSenhaError.textContent = "As senhas não coincidem.";
        confirmarSenhaError.style.color = "red";
        document.getElementById("confirmar_senha").focus();
            
    } else if(confirmarSenha === "") {
        confirmarSenhaError.textContent = "Preencha o campo";
        confirmarSenhaError.style.color = "red";
        document.getElementById("confirmar_senha").focus();
    } else {    
        confirmarSenhaError.textContent = "OK";
        confirmarSenhaError.style.color = "green";
    }
}


// Telefone com Máscara
function aplicarMascaraTelefone(event) {
    let input = event.target;
    let valor = input.value;
    
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Aplica a máscara (formato: (XX)XXXXX-XXXX)
    if (valor.length <= 10) {
      valor = valor.replace(/(\d{2})(\d{0,5})(\d{0,4})/, "($1)$2-$3");
    } else {
      valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
    }

    input.value = valor;
  }
     

// Validação do Telefone com Máscara
function validatelefone() {
          
    const  telefone = document.getElementById('telefone').value;
    const  mensagemErroTelefone = document.getElementById('mensagem-erro-telefone');
                
    // Valida se o telefone tem 14 dígitos
    if (telefone.length !== 14) {
        mensagemErroTelefone.textContent = 'Telefone inválido! Certifique-se de que o número tenha o formato correto (XX) XXXXX-XXXX.';
        mensagemErroTelefone.style.color = 'red';
        document.getElementById("telefone").focus();
    } else {    
        mensagemErroTelefone.textContent = "OK";
        mensagemErroTelefone.style.color = "green";
    }    
}


    // Validação da Cidade

function validacidade() {
    const cidade = document.getElementById('cidade').value;
    const mensagemCidade = document.getElementById('mensagem-cidade');
    if (cidade.length < 2 || cidade.length > 30) {
        mensagemCidade.textContent = "A cidade deve ter entre 2 e 30 caracteres.";
        mensagemCidade.style.color = "red";
        document.getElementById("cidade").focus();
    } else{
        mensagemCidade.textContent = "OK";
        mensagemCidade.style.color = "green";
        }
}

// Validação do Estado 

function validaestado() {
    const estado = document.getElementById('estado').value;
    const mensagemEstado = document.getElementById('mensagem-estado');
    if (estado.length !== 2) {
        mensagemEstado.textContent = "O estado deve ter exatamente 2 caracteres.";
        mensagemEstado.style.color = "red";
        document.getElementById("estado").focus();
    } else{
        mensagemEstado.textContent = "OK";
        mensagemEstado.style.color = "green";
        }
}

// Aplicar Máscara CEP
function aplicarMascaraCEP(event) {
    let input = event.target;
    let valor = input.value;
    
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Aplica a máscara (formato: XXXXX-XXX)
    if (valor.length <= 8) {
      valor = valor.replace(/(\d{5})(\d{3})/, "$1-$2");
    } else {
      valor = valor.replace(/(\d{5})(\d{3})/, "$1-$2");
    }

    input.value = valor;
}

//Validação CEP
function validaCEP() {
    const cep = document.getElementById('cep').value;
    const mensagemCep = document.getElementById('mensagem-cep');

    console.log(cep, cep.length)
    if (cep.length < 9 || cep.length > 9) {
        mensagemCep.textContent = "O CEP deve ter exatamente 8 caracteres.";
        mensagemCep.style.color = "red";
        document.getElementById("cep").focus();

    } else{
        mensagemCep.textContent = "OK";
        mensagemCep.style.color = "green";
    }
}

// Aplicar Máscara CPF
function aplicarMascaraCPF(event) {
    let input = event.target;
    let valor = input.value;
    
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Aplica a máscara (formato: XXX.XXX.XXX-XX)
    if (valor.length <= 11) {
      valor = valor.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
    } else {
      valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    input.value = valor;
}
   

//Validação CPF 
function validarCPF() {
    const cpf = document.getElementById('cpf').value;
    const mensagemCpf = document.getElementById('mensagem-cpf');
    if (cpf.length < 14 || cpf.length > 14) {
        mensagemCpf.textContent = "O CPF deve ter exatamente 11 caracteres.";
        mensagemCpf.style.color = "red";
        document.getElementById("cpf").focus();
    } else{
        mensagemCpf.textContent = "OK";
        mensagemCpf.style.color = "green";
    }
}

// Aplicar Máscara CNPJ
function aplicarMascaraCNPJ(event) {
    let input = event.target;
    let valor = input.value;
    
    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Aplica a máscara (formato: XX.XXX.XXX/XXXX-XX)
    if (valor.length <= 11) {
      valor = valor.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2.$3/");
    } else {
      valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }

    input.value = valor;
}

// Validação CNPJ
function validarCNPJ() {
    const cnpj = document.getElementById('cnpj').value;
    const mensagemCnpj = document.getElementById('mensagem-cnpj');
    if (cnpj.length < 18 || cnpj.length > 18) {
        mensagemCnpj.textContent = "O CNPJ deve ter exatamente 14 caracteres.";
        mensagemCnpj.style.color = "red";
        document.getElementById("cnpj").focus();
    } else{
        mensagemCnpj.textContent = "OK";
        mensagemCnpj.style.color = "green";
    }
}

// Validação data de nascimento
function validaDataNascimento() {
    const dataInput = document.getElementById('data_nascimento').value;
    const dataNascimento = new Date(dataInput);
    const mensagemError= document.getElementById('mensagem-data-nascimento');
    const dataAtual = new Date();

    let idadeMinima = 18;
    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    let mes = dataAtual.getMonth() - dataNascimento.getMonth();

    if (isNaN(dataNascimento.getTime())) {
        mensagemError.textContent = "Data de nascimento inválida. Por favor, insira uma data válida.";
        mensagemError.style.color = "red";
        document.getElementById("data_nascimento").focus();
    
    } else if (dataNascimento > dataAtual) {
        mensagemError.textContent = "Data de nascimento inválida. Por favor, insira uma data válida.";
        mensagemError.style.color = "red";
        document.getElementById("data_nascimento").focus();
    
    }  else if(idade < idadeMinima) {
        mensagemError.textContent = `A pessoa deve ter pelo menos ${idadeMinima} anos`;
        mensagemError.style.color = "red";
        document.getElementById("data_nascimento").focus();

    } else {
        mensagemError.textContent = "OK";
        mensagemError.style.color = "green";
    }
}
