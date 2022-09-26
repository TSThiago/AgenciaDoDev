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
    
    CalcularValor(){

    }

    ExibirResumo(){
        
    }
}