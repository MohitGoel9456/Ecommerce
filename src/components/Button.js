import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

export const Button = (props) => {
    const {title, onPress} = props;
    return (
        <TouchableOpacity
            style={styles.submit}
            onPress={onPress}
        >
            <Text style={styles.submitText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submit: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
    }
})