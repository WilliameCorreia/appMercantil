export function ValidaEan(numero) {

    console.log("entrou validar => " + numero.length)

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
    }else{
        return false
    }
}