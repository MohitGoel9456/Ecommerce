import React, { useContext } from 'react'
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native'
import { UserContext } from '../screens/ParentComponent'
import Book from '../components/Book'

const CheckoutScreen = () => {
    const data = useContext(UserContext);

    const books = data.cart;

    const renderItem = ({ item }) => {
        return (
            <Book
                bookData={item}
                isShowBuyButton={false}
                isCartView={true}
                imageStyle={styles.image}
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
    },
    image: {
        width: 110,
        height: 110,
        marginRight: 8
    },
})

export default CheckoutScreen;