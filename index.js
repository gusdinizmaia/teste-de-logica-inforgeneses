
function izi(){

    const result = []

    for(var i = 1; i<= 50; i++){

        var string = ''

        if(i%3 === 0){
            string += 'Fizz'
        }
        if(i%5 === 0){
            string += 'Buzz'
        }
        
        string === '' ? result.push(i) : result.push(string)
    }

    return result
}

function natty(){

    var result = []
    var count = 0

    for(var i = 0; result.length < 40; i++){

        result.push(count)
        
        if(i > 1){
            count = result[i-1] + result[i]
        }
        else{
            count++
        }
    }

    return result
}

function fakeNatty(){
    // S : sistema de pontuação,  K : ultimo a ganhar pontos, G : grandes premios,  P : pilotos

    // primeira linha => G P, ambos >= 1 e <=100
    // nas outras linhas sempre vão ser os pilotos e suas posições => 3, 5 (piloto 1 terceira posição, piloto 2 quinta posição)

    // linha de quebra  => S, um unico S indicando o numero de sistemas de pontuação
    // nas outras linhas vai ser o K k0, k1, ... , kn−1  => K indicando a ultima ordem de chegada que receberá pontos e k0, k1, ... , kn−1 indicando pontos a serem atribuidos a cada colocado
    // o primeiro inteiro indica os pontos do primeiro colocado e assim por diante

    // O último caso de teste é seguido por uma linha que contém apenas dois números zero separados por um espaço em branco.

    // deve imprimir o campeão mundial em cada sistema aplicado, caso haja varios campeões eles tem que ser escritos separados por espaços em ordem crescente, ex : 1 2 3 (piloto 1,2,3 campeões) 
    
}

console.log(izi())
console.log(natty())
console.log(fakeNatty())

