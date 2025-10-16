/*let nome = 'Cesar'
let idade = 29
let cidade = 'Maringa'

console.log(`Sou ${nome}, tenho ${idade} é moro em ${cidade} `);
*/

/*let altura = 10
let largura = 20
let area = altura * largura;

console.log("Altura do retangulo:", altura);
console.log("Largura do retangulo:", largura);
console.log("Area do retangulo:", area);
*/

/*const celsius = 35.0

const fahrenheit = (celsius * 9/5) + 32;

const kelvin = celsius + 273.15;

console.log(`${celsius}°C é igual a ${fahrenheit}°F`);
console.log(`${celsius}°C é igual a ${kelvin}K`);
*/
/*
let saldo = 100;
 saldo += 20;
 saldo -= 30;
 saldo -=  4.50 ;

console.log(` O Saldo final é de:  ${saldo}`);
*/
/*
const preco = 150;
const descontoPorcent = 10;
const valorDesconto = preco * (1 - descontoPorcent / 100)
const descontotal = preco - valorDesconto   
console.log(`O Preço final com desconto é : ${valorDesconto}`)
console.log(`o Desconto foi de ${descontotal} Reais`)
*/

/*
let n = 13
if (n % 2 ===0) {
    console.log(`o Numero ${n} e par`)
}
else{
    console.log(`O numero ${n} e impar`)
}
*/
/*
let nota1 = 1
let nota2 = 2
let nota3 = 4
let media = [nota1 + nota2 + nota3 / 2]
console.log(`A media do aluno é: ${media}`)
if (media >= 7) {
    console.log(`Aluno aprovado`)
}
else {
    (media < 5)
    console.log(`Em Recuperacao`)
}
if (media < 4) {
    console.log(`Reprovado`)
}
*/
/*
let renda = 100000
if (renda <= 2000) {
    console.log(`Isento`)
}
else if (renda >= 2000 && renda < 5000){
    console.log(`Imposto de 5%`)
}
else if (renda >= 5000 && renda < 10000){
    console.log(`Imposto de 10%`)
}
else{
    (renda > 10000)
    console.log(`Imposto de 15%`)
}
*/
/*
let horario = 06

if (horario >= 06 && horario < 11) {
    console.log(`Bom dia`)
}

else if (horario > 12 && horario < 17) {
    console.log(`Boa tarde`)
}

else{
    (horario > 18 &&  horario < 23 || horario < 00 || 04) 
    console.log(`Boa noite`)
}
*/
/*
let idade = 11
let TemAutorizacao = false
let NaoTemAutorizacao = true

if (idade >= 18) {
    console.log(`Entrada permitida`)
}
else if (idade < 18 && TemAutorizacao === true) {
    console.log(`Entrada permitida`)
}
else{
    (idade <= 18)
    console.log(`Nao tem Autorizacao`)
}
*/
/*
for (let numero = 0; numero <= 50; numero+=3) { 
    console.log(numero)
    if (numero % 3 ===0) {
        console.log(`O ${numero} e multiplicado por 3`)
    }
}
*/ 
/*
let soma = 0
for (numero = 1; numero <= 100; numero++){
   if (numero % 2 === 0) {
       soma+= numero
       console.log(numero)
       
   }

}console.log(`a soma de todos os numeros pares entre 1 e 100 é: ${soma}`)
*/
/*
let inicio = 100;
let fim = 1;

for (let i = inicio; i >= fim; i--) {
    console.log(i)
}
*/
/*
let numero = 10
let tabuada = "";
for (let i = 1; i <= 10; i++) {
tabuada += `${numero} x ${i} = ${numero * i} \n`
}console.log(tabuada)
*/
/*
let a =0
let b = 1
for (let i =0; i <= 10; i++) {
    console.log(a);
    [a,b] = [b, a + b];
}
*/
/*
nomes = ["Cesar", "Ronaldo", "Sergio"];
console.log(nomes[0])
console.log(nomes[1])
console.log(nomes[2])
*/
/*
numeros = [1, 4 ,6 ,8 ,15 ,123 ,34432];
let Maioresque10 = numeros.filter(n => n > 10);
for (let i = 0; i < numeros.length; i++) {
    console.log(`Os numeros maiores que 10 são: ${Maioresque10}`)
}
*/
