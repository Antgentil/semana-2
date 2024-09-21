var msg = "hello world";
console.log(msg);


function aplicarOperacao(valor, operacao) {
    return operacao(valor);
  }
  const dobrar = x => x * 2;
  console.log(aplicarOperacao(5, dobrar)); // 10

//---------------

  function funcaoExterna() {
    let mensagem = "Olá, eu estou no escopo da função externa!";
  }
  
  function funcaoInterna() {
    // Aqui estamos a tentar aceder à variável 'mensagem' definida na função 'funcaoExterna'
    console.log(mensagem);
  }
  
  funcaoExterna(); // Executa a função, mas não faz nada visível
  function funcaoExterna() {
    let mensagem = "Olá, eu estou no escopo da função externa!";
  }
  
  function funcaoInterna() {
    // Aqui estamos a tentar aceder à variável 'mensagem' definida na função 'funcaoExterna'
    console.log(mensagem);
  }
  
  funcaoExterna(); // Executa a função, mas não faz nada visível
  //funcaoInterna();  // Erro: mensagem is not define

  //---------------

  function Pessoa(nome) {
    this.nome = nome;
  }
  
  Pessoa.prototype.falar = function() {
    console.log(`Olá, eu sou ${this.nome}`);
  };

  Pessoa.prototype.falar = function() {
    console.log(`Oi, meu nome é ${this.nome}`);
  };

  Pessoa.prototype.falar = function() {
    console.log(`Oi,asdasdame é ${this.nome}`);
  };
  
  const maria = new Pessoa('Maria');
  maria.falar(); // "Olá, eu sou Maria"


  function listarPrototipo(obj) {
    while (obj) {
      console.log(Object.getOwnPropertyNames(obj));
      obj = Object.getPrototypeOf(obj);
    }
  }
  
  listarPrototipo(maria);