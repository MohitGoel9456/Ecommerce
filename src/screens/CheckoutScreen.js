import React, { useContext } from 'react'
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native'
import { UserContext } from '../screens/ParentComponent'
import { CartItem } from '../components/CartItem'

const CheckoutScreen = () => {
    const data = useContext(UserContext);

    const books = data.cart;

    const renderItem = ({ item }) => {
        return (
            <CartItem
                bookData={item}
            />
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={(item) => item.isbn}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex:1
    }
})

export default CheckoutScreen;