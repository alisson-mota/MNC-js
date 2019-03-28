

function derivada(func,varia,erro) {
	
	var h = 1024
	var datual = 0
	var dantes = 0
	var parar = 0
	var verifica = 0 
	var cont = 0 

	while(parar == 0){
		try{		
			datual = ( func.eval({x: varia+h}) ) - ( func.eval({x: varia-h}) )
			datual = datual/(2*h)


		verifica = dantes - datual
		if(verifica < 0)
			verifica = datual - datual

		verifica = verifica/datual

		}
		catch{
			alert("erro no calculo da variavel")
			parar == 1	
		}

		if(verifica < erro || cont>20){
			parar = 1
		}
		else{
			dantes = datual
		}

	}

	return datual


}