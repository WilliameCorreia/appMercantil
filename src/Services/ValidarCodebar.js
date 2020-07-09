export function ValidaEan(numero) {

    console.log("entrou validar=> " + numero.length)

    let numlen = numero.length;

    if (numlen == 13) {

        let factor = 3;
        let sum = 0;

        for (index = numero.length; index > 0; --index) {
            if (index != 13) {
                sum = sum + numero.substring(index - 1, index) * factor;
                factor = 4 - factor;
            }
        }
        cc = ((1000 - sum) % 10);
        ca = numero.substring(12);
        if (cc == ca) {
            console.log("EAN-13 válido");
            return true;
        }
        else {
            console.log("Digite um código EAN válido");
            return false;
        }
    }

    if(numlen == 14){

        console.log("entrou validar 14 => " + numero.length)

        let factor = 3;
        let sum = 0;

		for(index = numero.length; index > 0; --index){
			if (index != 14){
			sum = sum + numero.substring (index-1, index) * factor;
    		factor = 4 - factor;
			}
  		}
		cc = ((1000 - sum) % 10);
		ca = numero.substring(13);
		if(cc == ca){
            console.log("EAN-14 válido");
            return true
		}
		else{
            console.log("Digite um código EAN válido");
            return false
		}
    }
    
    if(numlen == 8){

        console.log("entrou validar 08 => " + numero.length)

        let factor = 3;
        let sum = 0;

		for(index = numero.length; index > 0; --index){
			if (index != 8){
			sum = sum + numero.substring (index-1, index) * factor;
    		factor = 4 - factor;
			}
  		}
		cc = ((1000 - sum) % 10);
		ca = numero.substring(7);
		if(cc == ca){
            console.log("EAN-8 válido");
            return true
		}
		else{
            console.log("Digite um código EAN válido");
            return false
        }
    }
    
    if(numlen == 12){

        console.log("entrou validar 12 => " + numero.length)

        let factor = 3;
        let sum = 0;

		for(index = numero.length; index > 0; --index){
			if (index != 12){
			sum = sum + numero.substring (index-1, index) * factor;
    		factor = 4 - factor;
			}
  		}
		cc = ((1000 - sum) % 10);
		ca = numero.substring(11);
		if(cc == ca){
            console.log("EAN-12 válido");
            return true
		}
		else{
            console.log("Digite um código EAN válido");
            return false
		}
	}
	
	if (((((numlen != 8) && (numlen != 12)) && (numlen != 13)) && (numlen != 14))){
        console.log("Digite um código EAN válido");
        return false
	}
}