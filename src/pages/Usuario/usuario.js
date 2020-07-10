import React from 'react'
import { StyleSheet, Text, View, Keyboard, SafeAreaView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, TextInput, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function usuario() {
    return (
        <KeyboardAwareScrollView>
            <View style={styles.container}>
                <View>
                    <Text>asdfasdfasdfasdfasf</Text>
                </View>
                <View>
                    <Text>asdfasdfasdfasdfasf</Text>
                </View>
                <View>
                    <Text>asdfasdfasdfasdfasf</Text>
                </View>
                <View>
                    <Text>asdfasdfasdfasdfasf</Text>
                </View>
                <View>
                    <Text>asdfasdfasdfasdfasf</Text>
                </View>
                <View>
                    <Text>asdfasdfasdfasdfasf</Text>
                </View>
                <View>
                    <Text>asdfasdfasdfasdfasf</Text>
                </View>
                <View>
                    <Text>asdfasdfasdfasdfasf</Text>
                </View>
                <View>
                    <Text>asdfasdfasdfasdfasf</Text>
                </View>
                <View>
                    <Text>asdfasdfasdfasdfasf</Text>
                </View>
                <View>
                    <Text>asdfasdfasdfasdfasf</Text>
                </View>
                <View>
                    <Text>asdfasdfasdfasdfasf</Text>
                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Text style={styles.header}>
                            Header
                            </Text>
                        <TextInput
                            placeholder="Username"
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Confrim Password"
                            style={styles.input}
                        />
                        <View style={styles.btnContainer}>
                            <Button title="Submit" onPress={() => null} />
                        </View>
                        <View style={{ flex: 1 }} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: 'green'
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "flex-end",
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    input: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12,
    },
});

