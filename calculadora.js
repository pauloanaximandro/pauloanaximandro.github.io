$(document).ready(function() {
	$("input:button").click(function(){
	//quando um input do tipo button é clicado, a função é chamada
	    var valor = $(this).val(); //recebe o valor do botão
	    var atual = $("#tela").val(); //recebe o valor que estiver na tela
	    if(valor=="C"){
	    //zera a tela ao pressionar o botão C
	        $("#tela").val("");
	    }else{
	        if(valor=="="){
	        //calcula a operação na tela ao pressionar o botão =
	            $("#tela").val(eval(atual));
	        }else{
	        //concatena o valor do botão com o que já existe na tela
	            $("#tela").val(atual + valor);
	        }
	    }
	});
});