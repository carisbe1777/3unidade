function calcularMedia(nota1, nota2) {
    var total = nota1 + nota2
    var media = total / 2
    if(media<7){
        console.log("Reprovado")
    }else{
        console.log("Aprovado")
    }
}

calcularMedia(2, 2)
calcularMedia(2, 7)
calcularMedia(10, 10)