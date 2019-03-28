
		//quando a página é carregada o gráfico é gerado
		function grafic_pequeno(func) {
	
			var grid_criado = 0
			var cont_x = 0

			//"x" é o valor para a reta começar no (0,0) do gráfico,
			//escala 1:110 no eixo X
			var x = 30
			//"y" é o valor para a reta começar no (0,0) do gráfico,
			//escala 1:137 no eixo Y
			var y = 37 
			var v = 1

			//variaveis que auxiliam nas dimenções do grafico e no ponto inicial que será desenhado 
			var altura = 380
			var largura = 600

			
		var canvas = document.getElementById('canvasGrafico_pequeno')			
			if(canvas){




				//dimensões do grafico
				canvas.setAttribute("width", largura)
				canvas.setAttribute("height", altura)
				canvas.setAttribute("border", '10px')

				//declaração da variavel ctx(tipo canvas) que armazena todas as propriedades do espaço do grafico
				var ctx = canvas.getContext("2d")

				//declaração da variavel que chama a imagem do gráfico
				var background = new Image()
				background.src = "grafico_vazio_pequeno.jpg"


				//carrega a imagem na página
				background.onload = function(){
					ctx.drawImage(background,10,5);
				}

				//dimenções e estilos que o "ctx" possue
				ctx.fillStyle = "black";
				ctx.fillRect(0, 0, largura, altura)
				ctx.font = "50px Courier"	
			
		

		//função que desenha no grafico			
		function DesenharGrafico_pequeno(){

			x += 11
			//valor = parseInt(Math.random * 100)
			fx = func.eval({x:cont_x}) 
			y = fx*107 + 37
			cont_x+= 1


			//desenha a função no gráfico de baixo para cima(não usual)
			//"valor" sem nenhum tratamento é o numero que subtraido por "altura" da a posição que será desenhado a linha no grafico
			ctx.lineTo(x, altura-y)
			ctx.stroke()
			x += 110

			//estilo e posicionamento do cabeçalho do gráfico
			ctx.fillStyle = "grey"
			ctx.fillRect(0, 0, largura, 30)

			//estilo, conteudo e posicionamento dos valores que a função tem em seu dominio (com um tratamento na variavel "valor" que participa da definição dos pontos em que o grafico será desenhado) 		
			ctx.fillStyle = "black"
			ctx.fillText("escala pequena", 10, 30)	

			//chama a função que para o desenho do grafico
			if(cont_x > 50){
			 clearInterval(Desenha);					
			console.log(cont_x)	
		
			}			

		}
		//desenha no grafico

		var Desenha = setInterval(DesenharGrafico_pequeno,100);		

		}

	


		}

		
