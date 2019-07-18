// let nome = prompt("Digite o seu nome");
// let ano = Number(prompt("Digite o ano que você nasceu: "));

// let idade = 2019 - ano;

// alert("Olá, eu me chamo " + nome +  " e tenho " + idade + " anos, e estou estudando javascript");

let nome = prompt("Digite o seu nome");
let matricula = Number(prompt("Digite numero da matricula"));

let nota1 = Number(prompt("Digite a sua nota"));
let nota2 = Number(prompt("Digite a sua nota"));
let media = (nota1+nota2)/2;

alert("O aluno, " + nome + " matricula " + matricula + ", obteve a média final " + media);

let ano = media;

if(media > 0 && media <= 10){
    alert("Parabéns " + nome + " você foi aprovado");
} 

else if (media === 0) {
    alert('a média nao pode ser igual a 0');
}

else {
    alert('a média não pode ser maior que 10');
}
