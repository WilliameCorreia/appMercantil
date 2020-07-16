import React, { Component } from 'react'
import { Image, Text, View, SafeAreaView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, TextInput, Button, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Styles from './style'

export default function usuario({ route }) {
    return (
        <KeyboardAvoidingView style={Styles.container}>
            <View style={Styles.box1}>
                <Image style={Styles.img} source={require('../../Assets/person.png')} />
            </View>
            < View style={Styles.box2}>
                <View style={Styles.item1}>
                    <Text style={Styles.item1_1Text}>ESTABELECIMENTO</Text>
                </View>
                <View style={Styles.item2}>
                    <View style={Styles.item2_1}>
                        <TextInput style={Styles.item2_1Input} />
                    </View>
                </View>
                <View style={Styles.item3}>
                    <View style={Styles.item3_1}>
                        <Text style={Styles.item3_1Text}>NONENONE</Text>
                    </View>
                </View>
                <View style={Styles.item4}>
                    <View style={Styles.item4_1}>
                        <TextInput style={Styles.item4_1Input} />
                    </View>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}



