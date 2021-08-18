document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario()
{ 
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value !="")
  {
    alert("Você receberá as novidades em breve.")
  }
  else{
    alert("Preencha todos os campos.")
  }
}