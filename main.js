function tocaSom (idElementoAudio){  //Solicita o id do botão que deseja apertar
    document.querySelector(idElementoAudio).play();  //Reproduz o áudio ligado à tecla, de acordo com seu id.
}

//document.querySelector('.tecla_pom'); //Busca o botão da tecla pom através de seu seletor '.tecla'.

//document.querySelector('.tecla_clap').onclick = tocaSomClap; //guarda a referência da função mas não executa no momento em que ela é referenciada.

//Referências
const listaDeTeclas = document.querySelectorAll('.tecla');  //constante que recebe todas as teclas do seletor .tecla

let contador = 0;  //variável que armazena as posições da lista.

while(contador < listaDeTeclas.length){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];  //constante que armazena a lista das teclas

    //Template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function(){ //Função anônima que "desvia o foco" da função que realmente será chamada.
        tocaSom(idAudio);
    }
    
    contador = contador + 1;
    
    //console.log(contador);
}