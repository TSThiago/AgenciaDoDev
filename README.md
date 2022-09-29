# Viagem DoDev

## Parte 1

1. A propriedade Titular da classe PacoteViagem deve receber seu valor através da
propriedade Passageiro da classe PassagemArea;
2. O método CalcularValor() da classe PassagemArea deve fazer um acréscimo de
50% no valor base caso a propriedade PrimeiraClasse seja “true”
3. O método ExibirResumo da classe PassagemArea deve exibir uma mensagem com
as seguintes informações: “Passagem em nome de {nome do passageiro}, no
assento {assento} do voo {número do voo}, com destino para {local de destino do
voo}!”

## Parte 2

1. Encapsular as propriedades de todas as classes e criar seus respectivos métodos
get/set (para definição e leitura dos valores dessa propriedade));
2. Na classe Cliente criar as seguintes validações no método set das respectivas
propriedades:
a. Nome deve conter no máximo 50 caracteres;
b. Cpf deve conter no máximo 11 caracteres;
3. Na classe PassagemArea criar as seguintes validações no método set das
respectivas propriedades:
a. PrimeiraClasse deve aceitar somente um valor booleano;
b. Valor deve ser sempre maior do que zero;