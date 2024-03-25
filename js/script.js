const getElements = (...queries) => document.querySelector(...queries);



const btn = getElements('.btn');
const modal = getElements('dialog');



btn.addEventListener('click', (event) => { 


  modal.showModal();

  const A = getElements('#valor1').value;
  const B = getElements('#valor2').value;
  const C = getElements('#valor3').value;


  const checkado = getElements('#s1-14').checked;


    // Verificar se os valores são válidos
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
      alert("Por favor, insira valores válidos.");
      return;
    }
    
    if (checkado) {

      const divResult = getElements('#resultado');
      const resultado = (A * B) / C;
      divResult.innerText = resultado.toFixed(2);
     
    } else {
      const divResult = getElements('#resultado');
      const resultado = (B * C) / A;
      divResult.innerText = resultado.toFixed(2);
    }
  });

modal.addEventListener('click', ()=>{
  window.location.reload()
})