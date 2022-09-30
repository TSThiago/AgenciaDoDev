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

## Parte 3

Com base no exercício anterior, organize a execução do código da seguinte
maneira:
a. Dê a opção de cadastrar um cliente e salve esse objeto em um array;
b. Faça também a opção de cadastrar um Voo e salve esse objeto em um
array;
c. Por último, dê a opção de cadastrar um Pacote de Viagem e salve em um
array;
2. Considere as seguintes validações na hora de montar esse sistema:
a. Quando for cadastrar um pacote de viagem, na hora de escolher a
passagem de Ida mostra uma lista com todos os Voo cadastrados;
b. Na hora de cadastrar a passagem de Volta, exibir apenas os Voo que tem o
local de partida igual ao local de destino do Voo de Ida escolhido;
c. Na hora de escolher um assento na passagem aérea, verifique se esse
assento já não foi escolhido nesse voo, em caso positivo peça para escolher
outro assento;