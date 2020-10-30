
//vamos a crear una funcion qu ese encargue del cifrado cesar
//Let

var cesar=cesar || (function(){
    //funcion anonima
    //callback

    var doStaff = function(txt, desp, action){
        var replace = (function(){
            //abecedario
            var abc= ['a','b','c','d','e','f','g','h','i','j',
            'k','l','m','n','ñ','o','p','q','r','s',
            't','u','v','w','x','y','z'
            ];
 

            var l= abc.length; 

            return function(c){
                var i=abc.indexOf(c.toLowerCase());
                //vamos a verificar que no este vacio
                if (i!= -1){
                    var pos = i;
                    if(action){
                        //avanzar
                        //En el algoritmo cesar se cifra por desplazamiento
                        desp = (desp%28+28)%28;
                        pos += desp;
                        pos -= (pos>=1)?1:0;
                    }else{
                        //retrocedo
                        //descifrar por el mismo desplazamiento
                        desp = (desp%28+28)%28;
                        pos -= desp;
                        pos += (pos<0)?1:0;

                    }
                    return abc[pos];

                }
                return c;
            };
        })();

        //Aqui es donde tenemos que hacer el match
        var re = (/([a-z])/ig);
        //txt.replace(/([a-z])/ig, c=> abc[ (abc.indexOf(c)+desp)%26])
        
        
        return String(txt).replace(re, function(match){
            return replace(match);
        });

    };

    //ahora solo falta saber si quiero cifrar o descifrar
    return{
        encode : function(txt, desp){
            return doStaff(txt, desp, true);
        }, 
        decode : function(txt, desp){
            return doStaff(txt, desp, false);
        }
    }

})(); 

//realizar una funcion que se encargue de codificar y decodificar 

function codificar(){
    //obtener el texto del text area

    cadena =document.getElementById("cadena");
    desp = document.getElementById("desp");

    document.getElementById("resultado").innerHTML = cesar.encode(cadena.value, desp.value);


    
}
function decodificar(){
    //obtener el texto del text area
    cadena =document.getElementById("cadena");
    desp = document.getElementById("desp");

    document.getElementById("resultado").innerHTML = cesar.decode(cadena.value, desp.value);
}