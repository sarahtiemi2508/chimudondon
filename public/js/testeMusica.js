function verificarMusica(){
    let pontosMusica= 0;
    
    const respostasCertasMusica = {
        q1: "b" ,
        q2: "c",
        q3: "a",
        q4: "a",
        q5: "c",
        q6: "a",
        q7: "c",
        q8: "b",
        q9: "b",
        q10: "a"
    }
    
    let formSagaribana = document.forms['testeSagaribana'];
    let formShima = document.forms['testeShima'];
    let formOrionBiru = document.forms['testeOrionBiru'];
    let formKazeNiNosete = document.forms['testeKazeNiNosete'];
    let formUmui = document.forms['testeUmui'];
    let formKaeruBasho = document.forms['testeKaeruBasho'];
    let formHikariNoTane = document.forms['testeHikariNoTane'];
    let formKajimaai = document.forms['testeKajimaai'];
    let formSanshinKatateni = document.forms['testeSanshinKatateni'];
    let formMuruUchina = document.forms['testeMuruUchina'];

    if (formSagaribana['q1'].value === respostasCertasMusica.q1) {
        pontosMusica++;
        console.log("passando pelo if1")
    };
    if (formShima['q2'].value === respostasCertasMusica.q2) {
        pontosMusica++;
        console.log("passando pelo if2")
    }
    if (formOrionBiru['q3'].value === respostasCertasMusica.q3) {
        pontosMusica++;
        console.log("passando pelo if3")
    }
    if (formKazeNiNosete['q4'].value === respostasCertasMusica.q4) {
        pontosMusica++;
        console.log("passando pelo if4")
    }
    if (formUmui['q5'].value === respostasCertasMusica.q5) {
        pontosMusica++;
        console.log("passando pelo if5")
    }
    if (formKaeruBasho['q6'].value === respostasCertasMusica.q6) {
        pontosMusica++;
        console.log("passando pelo if6")
    }
    if (formHikariNoTane['q7'].value === respostasCertasMusica.q7) {
        pontosMusica++;
        console.log("passando pelo if7")
    }
    if (formKajimaai['q8'].value === respostasCertasMusica.q8) {
        pontosMusica++;
        console.log("passando pelo if8")
    }
    if (formSanshinKatateni['q9'].value === respostasCertasMusica.q9) {
        pontosMusica++;
        console.log("passando pelo if9")
    }
    if (formMuruUchina['q10'].value === respostasCertasMusica.q10) {
        pontosMusica++;
        console.log("passando pelo if10")
    }

    console.log(pontosMusica)

resultadoMusica.innerHTML=`Sua pontuação: ${pontosMusica}`
if(pontosMusica>7){
    resultadoMusica.innerHTML+=`<br>Parabéns!<br> Você conhece muitas músicas!`
}else if(pontosMusica>5){
    resultadoMusica.innerHTML+=`<br> Já conhece? <br> Venha aprender mais!`
} else {
    resultadoMusica.innerHTML+=`<br> Sinta-se convidado(a) para navegar no site para conhecer e se apaixonar!`
}

return resultadoMusica.innerHTML
// let historicoPontos=[10, 9, 8];
// historicoPontos.push(pontosMusica)
// console.log(historicoPontos)

}




function mostrarGraficos(){ 
     const ctx = document.getElementById('graficoQuizMusica').getContext('2d');
const labels2=[
    'Tentativa 1',
    'Tentativa 2',
    'Tentativa 3',
    
  ];
//   const data2={
//     labels:labels2,
//     datasets:[{
//         label:'Pontos- Quiz de Músicas',
//         backgroundColor: 'rgb(235, 7, 1)',
//         borderColor: 'rgb(235, 7, 1)',
//         data:historicoPontos,
//         },
//     ]
//   };
//   const config2={
//     type: 'line',
//     data: data2,
//     options:{
//          maintainAspectRatio: false, // PERMITE QUE O GRÁFICO ESTIQUE NA VERTICAL
//             responsive: true,
//             scales: {
//                 y: {
//                     min: 0,
//                     max: 10,
//                     stacked: true

//                 },
//                 x: {
//                     stacked: true,
//                     offset: true
//                 }

//             },
//             plugins: {
//                 title: {
//                     display: true,
//                     text: "Qual instrumento mais tocado?",
//                 },
//             },
//     }
//   }

//   const myChart2= new Chart(
//     document.getElementById('myChart2'),
//     config2
// )
  
}

