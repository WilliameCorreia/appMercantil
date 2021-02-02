import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

export default function CadastroEndereco(set_endereco, setEnderecoLoad) {
    let endereco = {}
    
    // function obterLocalizacao(){
        setEnderecoLoad(true);
    Geolocation.getCurrentPosition(
        (pos) => {
            endereco["latitude"] = pos.coords.latitude;
            endereco["longitude"] = pos.coords.longitude;
            
            Geocoder.init('AIzaSyCUfziSFI6i_XsXLzWm5NNC1J0ZRI7RYks', { language: "pt" });
            
            // Search by address
            Geocoder.from(endereco.latitude, endereco.longitude)
                .then(json => {
                    const { address_components, formatted_address } = json.results[0];
                    if (address_components.length === 7) {
                        // setEndereco({
                            endereco["numero"] = address_components[0].long_name;
                            endereco["rua"] = address_components[1].long_name;
                            endereco["bairro"] = address_components[2].long_name;
                            endereco["cidade"] = address_components[3].long_name;
                            endereco["estado"] = address_components[4].short_name;
                            endereco["cep"] = address_components[6].long_name;
                        // });
                    }
                    if (address_components.length === 5) {
                        const rua = formatted_address.split(',')
                        // setEndereco({
                        //     rua: rua[0],
                        //     cidade: address_components[0].long_name,
                        //     bairro: address_components[1].long_name,
                        //     estado: address_components[2].short_name,
                        //     cep: address_components[4].long_name,
                        //     numero: '',
                        // });
                    }
                    set_endereco(endereco);
                    setEnderecoLoad(false);
                    // props(`${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade} - ${endereco.estado} - ${endereco.cep}`);
                })
                .catch(
                    error => console.warn(error)
                );

        },
        (erro) => {
            console.log('erro', erro.message)
        },
        {
            enableHighAccuracy: true, timeout: 120000, maximumAge: 1000
        }
    )
    // }
}

