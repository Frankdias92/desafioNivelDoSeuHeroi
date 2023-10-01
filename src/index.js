let nome = prompt('Insira o nome do seu Heroi!')
let poder = prompt('Entre 0 a 10, Quão forte é seu poder?')
let poderFelipao = ', Você tem o poder do Felipão!'
let mensagem = nome + ', Seu poder é de '

if (poder <= 1) {
  alert(mensagem + 'Ferro')
  poder = 'Ferro'
} else if (poder > 1 && poder <= 2) {
  alert(mensagem + 'Bronze')
  poder = 'Bronze'
} else if (poder > 2 && poder <= 5) {
  alert(mensagem + 'Prata')
  poder = 'Prata'
} else if (poder > 5 && poder <= 7) {
  alert(mensagem + 'Ouro')
  poder = 'Ouro'
} else if (poder > 7 && poder <= 8) {
  alert(mensagem + 'Platina')
  poder = 'Platina'
} else if (poder > 8 && poder <= 9) {
  alert(mensagem + 'Ascendente')
  poder = 'Ascendente'
} else if (poder > 9 && poder <= 10) {
  alert(mensagem + 'imortal')
  poder = 'Imortal'
} else {
  alert(nome + poderFelipao)
  mensagem = nome
  poder = poderFelipao
}

console.log(mensagem + poder)
