function doit() {
  peso = window.document.getElementById('peso');
  alt = window.document.getElementById('alt');
  peso_1=Number(peso.value)  
  alt_1=Number(alt.value)
  altmod= alt_1 / 100

  let tot = peso_1 / (altmod * altmod)
  imc=window.document.getElementById('result')
  imc.innerHTML = ('IMC : ' + parseFloat(tot).toFixed(2))
 
  console.log(parseFloat(tot).toFixed(2))
}

function Clean() {
  document.getElementById('alt').value ='';
    document.getElementById('peso').value ='';
    imc.innerHTML=" ";
}
