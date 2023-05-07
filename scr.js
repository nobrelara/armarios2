var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");
var clickCount = 0;

botao1.addEventListener("click", function() {
  clickCount++;
  
  if (clickCount % 3 === 0) {
    botao1.style.backgroundColor = "#7FFF00";
    botao1.innerHTML = 'Livre';
  } else if (clickCount % 3 === 1) {
    botao1.style.backgroundColor = "#FF0000";
    botao1.innerHTML = 'Ocupado';
  } else {
    botao1.style.backgroundColor = "yellow";
    botao1.innerHTML = 'Em manutenção';
  }
});

botao2.addEventListener("click", function() {
    clickCount++;
    
    if (clickCount % 3 === 0) {
      botao2.style.backgroundColor = "#7FFF00";
      botao2.innerHTML = 'Livre';
    } else if (clickCount % 3 === 1) {
      botao2.style.backgroundColor = "#FF0000";
      botao2.innerHTML = 'Ocupado';
    } else {
      botao2.style.backgroundColor = "yellow";
      botao2.innerHTML = 'Em manutenção';
    }
  });
  
  botao3.addEventListener("click", function() {
    clickCount++;
    
    if (clickCount % 3 === 0) {
      botao3.style.backgroundColor = "#7FFF00";
      botao3.innerHTML = 'Livre';
    } else if (clickCount % 3 === 1) {
      botao3.style.backgroundColor = "#FF0000";
      botao3.innerHTML = 'Ocupado';
    } else {
      botao3.style.backgroundColor = "yellow";
      botao3.innerHTML = 'Em manutenção';
    }
  });
  