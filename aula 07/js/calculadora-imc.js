//capturar os eventos do formulário 
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(e){ //a função aguarda o usuario clicar no botão
    e.preventDefault(); //muda o comportamento padrão do formulário que estamos escutando

   const inputPeso = e.target.querySelector('#peso');
   const peso = Number(inputPeso.value)


   const inputAltura = e.target.querySelector('#altura')
   const altura = Number(inputAltura.value);

    const imc = calcularImc(peso, altura)// azendo a chamada da função

    console.log(imc)
    const classificação = tabelaimc(imc) //estou chamando a função tabela imc
    console.log(classificação)
    mostrarResultado(classificação)

})

//função para calcular o IMC e retornar o valor do imc com duas casas decimais 
function calcularImc(peso, altura){
    let imc = (peso / altura **2 ); //formula do imc
    return imc.toFixed(2); //toFixed(2) foi usado para formatar o numero em 2 casas decimais//
}
function mostrarResultado(msg){
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = msg
}
//função para classificar em qual grau de imc a pessoa está
function tabelaimc(imc){

    const classificação = ['abaixo do peso' , 'peso normal', 'sobrepeso',
                            'obesidade grau I','obesidade grau II', 'obesidade grau III']
                                                                
    if (imc >= 39.9) return classificação[5];
    if (imc >= 34.9) return classificação[4];
    if (imc >= 29.9) return classificação[3];
    if (imc >= 24.9) return classificação[2];
    if (imc >= 18.9) return classificação[1];

}