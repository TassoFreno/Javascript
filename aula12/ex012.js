
var agora = new Date()

var hora = agora.getHours(0)
console.log(`Agora sao exatamente ${hora} horas.`)
if(hora < 12) {
    console.log('Bom dia Meu Patrao')
} else if (hora <= 18) {
    console.log('Boa Tarde meu Querido')
} else {
    console.log('Boa noite!')
}