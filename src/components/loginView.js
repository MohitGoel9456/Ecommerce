import React, { useState, useContext } from 'react'
import {
    View,
    Button,
    StyleSheet,
    TextInput,
    Text,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginConstants } from '../common/constants';
import { UserContext } from '../screens/ParentComponent'

export const Login = (props) => {
    const savedUsername = 'admin';
    const savedPassword = 'admin';
    const data = useContext(UserContext);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [usernameValidation, setUsernameValidation] = useState('');

    const onLoginPress = async () => {

        if (username.length == 0) {
            setUsernameValidation(loginConstants.errorEnterUsername)
            setError('')
        } else if (password.length <= 3) {
            setError(loginConstants.errorPasswordLength)
            setUsernameValidation('')
        } else if (username === savedUsername && password === savedPassword) {
            setUsernameValidation('')
            setError('')
            try {
                data.setAuth(true);
                await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true))
            } catch (err) {
                //log error
            }
        } else {
            setError(loginConstants.errorLogin)
            setUsernameValidation('')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={setUserName}
                placeholder={loginConstants.username}
                autoCapitalize='none'
                value={username} />
            <Text style={styles.error}>
                {usernameValidation}
            </Text>
            <TextInput secureTextEntry={true}
                style={[styles.textInput, styles.marginTop]}
                onChangeText={setPassword}
                placeholder={loginConstants.password}
                autoCapitalize='none'
                value={password} />
            <Text style={styles.error}>
                {error}
            </Text>
            <Button
                style={styles.marginTop}
                title={loginConstants.login}
                onPress={onLoginPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        marginTop: 8
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    marginTop: {
        marginTop: 8
    },
    error: {
        color: '#FF0000'
    }
})