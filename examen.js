function cambioDolar(){
    var dol = 6.97; 
    var re ;   
    var bs =parseInt(document.getElementById('Bs').value);
     
    re = bs / dol ;
    document.getElementById('resulDolar').innerHTML= re;
    
    }

function cambioBs(){
    var dol = 6.97; 
    var re ;   
    var bs =parseInt(document.getElementById('dolar').value);
        
    re = bs * dol ;
    document.getElementById('resulBs').innerHTML= re;
    
    }
function usuario(){   
    var re =document.getElementById('usuario').value;
    document.getElementById('usuariolabel').innerHTML= re;
    
    }