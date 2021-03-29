// function funca(){
//     //faremos um for para somar tudo o que está dentro do funcao
//     let total = 0;
//     for (let argumento of arguments){
//         total += argumento
//     }
//     console.log(total)
// }

//funca( 1,2,3,4,5,6,7,8,9,10)
//o arguments pega todos os dados do da funcao que definimos na funcao como um array
//saiba que o javascript ele pega os dados como um array
//então se pegarmos um dado no arguments ele pega o indice do arrayf
//para pegar todos os dados do array voce precisa colocar os ...

//criando um numero aleatorio

function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}
function f1(callback) {
  setTimeout(function () {
    console.log("f1");
    if (callback) callback();
  }, rand);
}
function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand);
}
function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand);
}

f1(function() {
  f2(function() {
    f3(function() {
        console.log('Ola mundo!')
    });
  });
});
