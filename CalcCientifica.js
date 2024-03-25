const calculadora = (function calc(){

  let num1 =0;
    function numero1(dados1){
        return num1 +=dados1;
    }
  let num2=0;
    function numero2(dados2){
        return num2 +=dados2;
    }
  let result=0;
    return {
        
        valor1(){
            return numero1 (1);
        },
        
        valor1s(){
            return numero1 (-1);
        },
        
        valor2(){
            return numero2 (1);
        },
       
        valor2s(){
            return numero2 (-1);
        },
        
        potencia(){
            return result=num1**num2;
        },
        
        quadrado(){
            return result=num1*num2;
        },
        
        retangulo(){
            return result=(num1*num2)/2;
        },
        
        parouimpar(){
            if (result%2==0){
                return console.log(resul,"O numero é par");
            }else{
                return console.log(result,"O numero é impar");
            }
        },
        
        painel(){
            return console.log("A operação com",num1,"e",num2,"deu",result);
        },

    }
})();
/*Como usar
calculadora.valor1(); para adicionar de um em um na primeira variavel,
calculadora.valor1s(); para subtrair de um em um em caso de erro,
calculadora.valor2(); para adicionar de um em um na segunda variavel,
calculadora.valor2s(); para subtrair de um em um em caso de erro,
calculadora.potencia(); para realizar um calculo de potencia (segunda variavel sobre a primeira),
calculadora.quadrado(); para calcular a area do quadrado (L X L),
calculadora.retangulo(); Para calcular a area de um retangualo (b.a)/2,
calculadora.painel(); Para ter as informaçoes no pronpt,
calculadora.paroiimpar(); Pare saber se o resultado é par ou impar

 */
calculadora.valor1();
calculadora.valor2();
calculadora.valor1();
calculadora.retangulo();
calculadora.parouimpar();