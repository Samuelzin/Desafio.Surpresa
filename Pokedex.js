//nome - nível - sexo - HP atual - HP total - segurando item
let pokedex = [
    ['Poochyena', 2, 'Masc', 13, 13, false],
    ['Zigzagoon', 2, 'Fem', 13, 13, false],
    ['Dragonite', 5, 'Masc', 25, 25, true],
    ['Dragonite', 5, 'Fem', 24, 24, true],
    ['Dragonite', 5, 'Fem', 24, 24, true],
    ['Poochyena', 3, 'Fem', 15, 15, false],
    ['Wurmple', 2, 'Masc', 7, 14, false]
]
let mensagemIntroMasc = ' foi cadastrado com sucesso!'
let mensagemIntroFem = ' foi cadastrada com sucesso!'

for (let i=0; i<pokedex.length; i++) {
    let sexo = pokedex[i][2]

    switch (sexo) {

        case 'Masc':
            console.log(pokedex[i][0] + mensagemIntroMasc);
            break
        case 'Fem':
            console.log(pokedex[i][0] + mensagemIntroFem)
            break
    }
}