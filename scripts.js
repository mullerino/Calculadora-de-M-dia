var notas = [];

function Calcular(){
  var x = 0;
  var name = (document.getElementById("name").value);

  for(let i = 0; i<4; i++){
    notas[i] = parseInt(document.getElementById("nota" + (i+1)).value);
  }

  for(var i = 0; i<4; i++){
    if(notas[i] < 0){
      alert("A "+ (i+1) + "º nota é invalida!");
      x = 1;
    }
  }

  var nF = ((notas[0]+notas[1]+notas[2]+notas[3])/4);
  
  if(x == 0 && (nF >= 0)){
    escreverR(name,nF);
  }
}

function escreverR(nome,notafinal){
  var result = document.getElementById("res");

  if(notafinal >= 6){
    result.style.backgroundColor = `green`;
    txt = nome +", parabéns você foi aprovado com média " + notafinal + " :)";
    result.innerHTML = txt;
  }
  else{
    result.style.backgroundColor = `red`;
    result.innerHTML = nome +", infelizmente você reprovou, sua média foi " + notafinal + " :(";
  }
}