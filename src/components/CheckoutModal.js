import React, { useEffect, useState } from 'react'
import {
    Modal,
    View,
    StyleSheet,
    Dimensions
} from 'react-native'
import { common } from '../common/constants';
import { Button } from './Button'

export const CheckoutModal = (props) => {
    const {isShowModal} = props;

    const onContinuePress = () => {
        props.onContinuePress();
    }

    const onProceedToCheckoutPress = () => {
        props.onProceedToCheckoutPress();
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isShowModal}
        >
            <View style={styles.modal}>
                <View style={styles.container}>
                    <Button
                        title={common.continueShopping}
                        onPress={onContinuePress}
                    />
                    <Button
                        title={common.proceedToCheckout}
                        onPress={onProceedToCheckoutPress}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.51)'

    },
    container: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width-100,
        paddingHorizontal: 20,
        paddingVertical: 100,
        borderRadius: 10,
    },
})