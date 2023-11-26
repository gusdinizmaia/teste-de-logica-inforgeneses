
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

// class fakeNatty{

//     // S : sistema de pontuação,  K : ultimo a ganhar pontos, G : grandes premios,  P : pilotos

//     // primeira linha => G P, ambos >= 1 e <=100
//     // nas outras linhas sempre vão ser os pilotos e suas posições => 3, 5 (piloto 1 terceira posição, piloto 2 quinta posição)

//     // linha de quebra  => S, um unico S indicando o numero de sistemas de pontuação
//     // nas outras linhas vai ser o K k0, k1, ... , kn−1  => K indicando a ultima ordem de chegada que receberá pontos e k0, k1, ... , kn−1 indicando pontos a serem atribuidos a cada colocado
//     // o primeiro inteiro indica os pontos do primeiro colocado e assim por diante

//     // O último caso de teste é seguido por uma linha que contém apenas dois números zero separados por um espaço em branco.

//     // deve imprimir o campeão mundial em cada sistema aplicado, caso haja varios campeões eles tem que ser escritos separados por espaços em ordem crescente, ex : 1 2 3 (piloto 1,2,3 campeões) 
    
//     constructor(){
//     this.string = `1 3
//     3 2 1
//     3
//     3 5 3 2
//     3 5 3 1
//     3 1 1 1
//     3 10
//     1 2 3 4 5 6 7 8 9 10
//     10 1 2 3 4 5 6 7 8 9
//     9 10 1 2 3 4 5 6 7 8
//     2
//     5 5 4 3 2 1
//     3 10 5 1
//     2 4
//     1 3 4 2
//     4 1 3 2
//     2
//     3 3 2 1
//     3 5 4 2
//     0 0`
//     this.campeonatos = []
//     this.startLine = 0
//     this.endLine = string.indexOf('\n', startLine)
//     this.lineValue = string.substring(startLine, endLine)
// }

//     static skipLine(){
//         if( this.endLine === -1){
//             this.lineValue = string.substring(this.startLine)
//         }else{
//             this.lineValue = string.substring(this.startLine, this.endLine)
//         }

//         this.startLine = this.endLine+5
//         this.endLine = string.indexOf('\n',  this.startLine+1)
//     }

//     createCamp(){
//         for(let i = 0; i < 8; i++){

//             skipLine()

//             let validateInfo = this.lineValue.split(' ')
    
//             if(!parseInt(validateInfo[0])){
//                 return this.campeonatos
//             }
    
//             if(validateInfo.length === 2 ){
    
//                 let premios = []
//                 let pilotos = validateInfo[1]
//                 let numeroDePremios = validateInfo[0]
                
//                 for(let i = 0; i < numeroDePremios; i++){
                    
//                     if(endLine === -1){
//                         lineValue = string.substring(startLine)
//                     }else{
//                         lineValue = string.substring(startLine, endLine)
//                     }
    
//                     startLine = endLine+5
//                     endLine = string.indexOf('\n', startLine+1)
    
//                     let novoPremio = lineValue.split(' ')
    
//                     premios.push([...novoPremio])
//                 }
                
//                 this.campeonatos.push({pilotos:pilotos, premios: premios})
//             }
    
//             skipLine(lineValue, startLine, endLine)
    
//             validateInfo = lineValue.split(' ')
    
//             if(validateInfo.length === 1 ){
//                 let sistemasDePontuação = []
//                 let numeroDeSistemas = validateInfo[0]
    
//                 for(let i = 0; i < numeroDeSistemas; i++){
//                     if(endLine === -1){
//                         lineValue = string.substring(startLine)
//                     }else{
//                         lineValue = string.substring(startLine, endLine)
//                     }
    
//                     startLine = endLine+5
//                     endLine = string.indexOf('\n', startLine+1)
    
//                     let novoSistema = lineValue.split(' ')
    
//                     sistemasDePontuação.push([...novoSistema])
//                 }
    
//                 this.campeonatos[campeonatos.length-1].sistemasDePontuação = sistemasDePontuação
//             }
//         }
//         return this.campeonatos
//     }


// }

function fakeNatty(){

    // S : sistema de pontuação,  K : ultimo a ganhar pontos, G : grandes premios,  P : pilotos

    // primeira linha => G P, ambos >= 1 e <=100
    // nas outras linhas sempre vão ser os pilotos e suas posições => 3, 5 (piloto 1 terceira posição, piloto 2 quinta posição)

    // linha de quebra  => S, um unico S indicando o numero de sistemas de pontuação
    // nas outras linhas vai ser o K k0, k1, ... , kn−1  => K indicando a ultima ordem de chegada que receberá pontos e k0, k1, ... , kn−1 indicando pontos a serem atribuidos a cada colocado
    // o primeiro inteiro indica os pontos do primeiro colocado e assim por diante

    // O último caso de teste é seguido por uma linha que contém apenas dois números zero separados por um espaço em branco.

    // deve imprimir o campeão mundial em cada sistema aplicado, caso haja varios campeões eles tem que ser escritos separados por espaços em ordem crescente, ex : 1 2 3 (piloto 1,2,3 campeões) 
    
    const string = `1 3
    3 2 1
    3
    3 5 3 2
    3 5 3 1
    3 1 1 1
    3 10
    1 2 3 4 5 6 7 8 9 10
    10 1 2 3 4 5 6 7 8 9
    9 10 1 2 3 4 5 6 7 8
    2
    5 5 4 3 2 1
    3 10 5 1
    2 4
    1 3 4 2
    4 1 3 2
    2
    3 3 2 1
    3 5 4 2
    0 0`

    let campeonatos = []
    let startLine = 0
    let endLine = string.indexOf('\n', startLine)
    let lineValue = string.substring(startLine, endLine)
    let winnersGeral = []

    function skipLine(value,start,end){
        if(end === -1){
            value = string.substring(start)
        }else{
            value = string.substring(start, end)
        }

        start = end+5
        end = string.indexOf('\n', start+1)
    }
    
    for(let i = 0; i < 8; i++){

        if(endLine === -1){
            lineValue = string.substring(startLine)
        }else{
            lineValue = string.substring(startLine, endLine)
        }

        startLine = endLine+5
        endLine = string.indexOf('\n', startLine+1)
        // skipLine(lineValue, startLine, endLine)

        let validateInfo = lineValue.split(' ')

        if(!parseInt(validateInfo[0])){
            break
        }

        if(validateInfo.length === 2 ){

            let premios = []
            let pilotos = validateInfo[1]
            let numeroDePremios = validateInfo[0]
            
            for(let i = 0; i < numeroDePremios; i++){
                
                if(endLine === -1){
                    lineValue = string.substring(startLine)
                }else{
                    lineValue = string.substring(startLine, endLine)
                }

                startLine = endLine+5
                endLine = string.indexOf('\n', startLine+1)

                let novoPremio = lineValue.split(' ')

                premios.push([...novoPremio])
            }
            
            campeonatos.push({pilotos:pilotos, premios: premios})
        }

        if(endLine === -1){
            lineValue = string.substring(startLine)
        }else{
            lineValue = string.substring(startLine, endLine)
        }

        startLine = endLine+5
        endLine = string.indexOf('\n', startLine+1)

        validateInfo = lineValue.split(' ')

        if(validateInfo.length === 1 ){
            let sistemasDePontuação = []
            let numeroDeSistemas = validateInfo[0]

            for(let i = 0; i < numeroDeSistemas; i++){
                if(endLine === -1){
                    lineValue = string.substring(startLine)
                }else{
                    lineValue = string.substring(startLine, endLine)
                }

                startLine = endLine+5
                endLine = string.indexOf('\n', startLine+1)

                let novoSistema = lineValue.split(' ')

                sistemasDePontuação.push([...novoSistema])
            }

            campeonatos[campeonatos.length-1].sistemasDePontuação = sistemasDePontuação
        }
    }

    for(let i = 0; i < campeonatos.length; i++){

        let pontuaçõesEmPremios = []

        for(let k = 0; k< campeonatos[i].premios.length; k++){ 
            
            let pontuacaoEmPremios = []

            campeonatos[i].sistemasDePontuação.forEach((sistema, index) =>{

                let pontuaçãoSistema = []

                for(let l = 0; l< campeonatos[i].premios[k].length; l++){

                    let indexPontuação = campeonatos[i].premios[k][l]
          
                    let pontuaçãoIndividual = sistema[indexPontuação]
                    
                    if(!pontuaçãoIndividual){
                        pontuaçãoIndividual = "0"
                    }
    
                    pontuaçãoSistema.push(pontuaçãoIndividual)
    
                }

                pontuacaoEmPremios.push(pontuaçãoSistema)
            })

            pontuaçõesEmPremios.push(pontuacaoEmPremios)
        }

        let pilotoGeral = []

        for(let p = 0; p < campeonatos[i].pilotos; p++){
            campeonatos[i].sistemasDePontuação.map((elemSistema,indexSistemas) => {

                let pilotoSistema = []

                if(pilotoGeral[indexSistemas] === undefined){
                    pilotoGeral[indexSistemas] = []
                }

                pontuaçõesEmPremios.forEach((elemPremios,indexPremios) => {
                    const result =  elemPremios[indexSistemas][p]
                    pilotoSistema.push(result)
        
                })
                pilotoSistema = pilotoSistema.reduce((accumulator,value) => parseInt(accumulator) + parseInt(value),0);
                pilotoGeral[indexSistemas] = [...pilotoGeral[indexSistemas], pilotoSistema ]
            })
        }


        pilotoGeral.map(elem => {

            const max = Math.max(...elem)

            const winners = []

            for(number of elem){
                if(number === max){
                    const indexCondition = winners.length !== 0 ? winners[winners.length-1] : 0
                    const winner = elem.indexOf(max, indexCondition) + 1
                    winners.push(winner)
                }
            }

            winnersGeral.push(winners.join(' '))
        })
    }
    return winnersGeral.join('\n')
}

console.log(izi())
console.log(natty())
console.log(fakeNatty())

