class Cliente{
    Nome
    CPF
    Nascimento

    constructor(nome,cpf,nascimento){
        this.Nome = nome
        this.CPF = cpf
        this.Nascimento = nascimento
    }
}

class PacoteViagem{
    Titular
    PassagemIda
    PassagemVolta
    ValorTotal

    constructor(titular,passagemIda,passagemVolta,valorTotal){
        this.Titular = titular
        this.PassagemIda = passagemIda
        this.PassagemVolta = passagemVolta
        this.ValorTotal = valorTotal
    }
}

class Voo{
    Empresa
    Numero
    Data
    Horario
    LocalPartida
    LocalDestino

    constructor(empresa,numero,data,horario,partida,destino){
        this.Empresa = empresa
        this.Numero = numero
        this.Data = data
        this.Horario = horario
        this.LocalPartida = partida
        this.LocalDestino = destino
    }
}

class PassagemAerea{
    Assento
    PrimeiraClasse
    Valor
    Passageiro 
    Voo
    
    constructor(assento,primeiraClasse,valor,passageiro,voo){
        this.Assento = assento  
        this.PrimeiraClasse = primeiraClasse  
        this.Valor = this.CalcularValor(valor)
        this.Passageiro = passageiro 
        this.Voo = voo 
    }

    CalcularValor(valor){
        if(this.PrimeiraClasse == true){
            valor = valor * 1.5
        }
        return valor
    }

    ExibirResumo(){
        alert("Passagem no nome de " +this.Passageiro.Nome+ " no assento " +this.Assento+ " do voo " +this.Voo.Numero+ " com destino para " +this.Voo.LocalDestino+ ".")
    }
}
// let PrimeiroCliete = new Cliente("Luiz", "00000000001", "30/04/1998")
let VooIda = new Voo("Gol",1,"15/02/2023","12:45","São Paulo","EUA")
let VooVolta = new Voo("Gol",2,"05/03/2023","13:15","EUA","São Paulo")
let PassagemIda = new PassagemAerea("3C", true, 3000, new Cliente("Luiz", "00000000001", "30/04/1998"), VooIda);
let PassagemVolta = new PassagemAerea("3C", false, 3000, PassagemIda.Passageiro, VooVolta);

let PrimeiroPacote = new PacoteViagem(PassagemIda.Passageiro,PassagemIda,PassagemVolta,(PassagemIda.Valor + PassagemVolta.Valor))