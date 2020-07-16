import React, { useContext } from 'react';

import ListaProdutos from '../../Services/ListaProdutos'
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import AuthContext from '../../Contexts/Auth'

import styles from './style';

export default function MeusProdutos({ route }) {

    const { estabelecimento } = useContext(AuthContext);

    const navigation = useNavigation();

    const item = route.params

    console.log('meus produtos => ' + item)
    return (
        <View style={styles.container}>
            <SearchBar
                platform={'android'}
                placeholder="Pesquise o produto"
                containerStyle={styles.search}
                inputContainerStyle={styles.seachInput}
                inputStyle={styles.input}
                placeholderTextColor={"#fff"}
                //onChangeText={this.updateSearch}
                //value={search}
            />
            <ListaProdutos estabelecimentoId={ estabelecimento.id } categoria={item} navigation={navigation} />
        </View>

    )
}