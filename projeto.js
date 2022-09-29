class Cliente{
    #Nome
    #CPF
    #Nascimento

    constructor(nome,cpf,nascimento){
        this.#Nome = nome
        this.#CPF = cpf
        this.#Nascimento = nascimento
    }

    setNome(nome){
        if(nome.length > 50){
            alert("Limite de caracteres ultrapassado")
        }else{
            this.#Nome = nome
        }
    }
    getNome(){
        return this.#Nome 
    }

    setCPF(cpf){
        if(cpf.length > 11){
            alert("Número de caracteres ultraspassado")
        }else{
            this.#CPF = cpf
        }

    }
    getCpf(){
        return this.#CPF
    }

    setNascimento(nascimento){
        this.#Nascimento = nascimento
    }
    getNascimento(){
        return this.#Nascimento
    }
}

class PacoteViagem{
    #Titular
    #PassagemIda
    #PassagemVolta
    #ValorTotal

    constructor(titular,passagemIda,passagemVolta,valorTotal){

        this.#Titular = titular
        this.#PassagemIda = passagemIda
        this.#PassagemVolta = passagemVolta
        this.#ValorTotal = valorTotal 
    }

    setTitular(titular){
        this.#Titular = titular
    }
    getTitular(){
        return this.#Titular
    }
    
    setPassagemIda(passagemIda){
        this.#PassagemIda = passagemIda
    }
    getPassagemIda(){
        return this.#PassagemIda
    }
    
    setPassagemVolta(passagemVolta){
        this.#PassagemVolta = passagemVolta
    }
    getPassagemVolta(){
        return this.#PassagemVolta
    }
    
    setValorTotal(valorTotal){
        this.#ValorTotal = valorTotal
    }
    getValorTotal(){
        return this.#ValorTotal
    }
    
}

class Voo{
    #Empresa
    #Numero
    #Data
    #Horario
    #LocalPartida
    #LocalDestino

    constructor(empresa,numero,data,horario,partida,destino){
        this.#Empresa = empresa
        this.#Numero = numero
        this.#Data = data
        this.#Horario = horario
        this.#LocalPartida = partida
        this.#LocalDestino = destino
    }

    setEmpresa(empresa){
        this.#Empresa = empresa
    }
    getEmpresa(){
            return this.#Empresa
    }
    
    setNumero(numero){
        this.#Numero = numero
    }
    getNumero(){
        return this.#Numero
    }
    
    setData(data){
        this.#Data = data
    }
    getData(){
        return this.#Data
    }
    
    setHorario(horario){
        this.#Horario = horario
    }
    getHorario(){
        return this.#Horario
    }
    
    setLocalPartida(partida){
        this.#LocalPartida = partida
    }
    getLocalPartida(){
        return this.#LocalPartida
    }
    
    setLocalDestino(destino){
        this.#LocalDestino = destino
    }
    getLocalDestino(){
        return this.#LocalDestino
    }
}

class PassagemAerea{
    #Assento
    #PrimeiraClasse
    #Valor
    #Passageiro 
    #Voo
    
    constructor(assento,primeiraClasse,valor,passageiro,voo){
        this.#Assento = assento  
        this.#PrimeiraClasse = primeiraClasse  
        this.#Valor = this.CalcularValor(valor)
        this.#Passageiro = passageiro 
        this.#Voo = voo 
    }

    setAssento(assento){
        this.#Assento = assento
    }
    getAssento(){
        return this.#Assento
    }
    
    setPrimeiraClasse(classe){
        let x = Boolean(classe)
        this.#PrimeiraClasse = x
    }
    
    getPrimeiraClasse(){
        return this.#PrimeiraClasse
    }
    setValor(valor){
        if(valor < 0){
            alert("Valor não válido.")
        }else{
        this.#Valor = valor
        }
    }
    
    getValor(){
        return this.#Valor
    }
    setPassageiro(passageiro){
        this.#Passageiro = passageiro
    }
   
    getPassageiro(){
        return this.#Passageiro
    }
    setVoo(voo){
        this.#Voo = voo
    }
   
    getVoo(){
        return this.#Voo
    }

    CalcularValor(valorParametro){
        if(this.#PrimeiraClasse == true){
            valorParametro = valorParametro * 1.5
        }
        return valorParametro
    }

    ExibirResumo(){
        alert("Passagem no nome de " +this.#Passageiro.Nome+ " no assento " +this.#Assento+ " do voo " +this.#Voo.Numero+ " com destino para " +this.#Voo.LocalDestino+ ".")
    }
}
// let PrimeiroCliete = new Cliente("Luiz", "00000000001", "30/04/1998")
let VooIda = new Voo("Gol",1,"15/02/2023","12:45","São Paulo","EUA")
// let VooVolta = new Voo("Gol",2,"05/03/2023","13:15","EUA","São Paulo")
let PassagemIda = new PassagemAerea("3C", true, 3000, new Cliente("Luiz", "00000000001", "30/04/1998"), VooIda);
// let PassagemVolta = new PassagemAerea("3C", false, 3000, PassagemIda.Passageiro, VooVolta);

// let PrimeiroPacote = new PacoteViagem(PassagemIda.Passageiro,PassagemIda,PassagemVolta,(PassagemIda.Valor + PassagemVolta.Valor))