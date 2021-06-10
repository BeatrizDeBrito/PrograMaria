document.getElementById("botao_enviar").addEventListener("click", validaFormulario);

function validaFormulario() {
  if (document.getElementById("nome_da_usuaria").value != ""  &&  document.getElementById("email_da_usuaria").value != "" &&
  document.getElementById("telefone_da_usuaria").value != "") {
    alert("Enviado! Você receberá o conteúdo com mais informaçoẽs.");
  }else {
      alert("Por favor, preencha os campos nome, email e telefone!");
    }
  }
