import React from 'react'
import {
    Image,
    Text,
    StyleSheet,
    View
} from 'react-native'
import { Rating } from 'react-native-ratings';

export const CartItem = (props) => {
    const { bookData } = props;
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: bookData.thumbnailUrl }}
            />
            <View styles={styles.detailsContainer}>
                <Text style={styles.title}>
                    {bookData.title}
                </Text>
                <View style={styles.ratingcontainer}>
                    <Rating showRating={false} imageSize={20} ratingCount={5} startingValue={bookData.rating} />
                </View>
                <Text
                    style={styles.price}
                >
                    {'Rs ' + bookData.price}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        marginLeft: 8,
        width: '100%',
        flexDirection: 'row'
    },
    price: {
        marginTop: 8,
        fontSize: 16
    },
    title: {
        fontSize: 16
    },
    image: {
        width: 110,
        height: 110,
        marginRight: 8
    },
    ratingcontainer: {
        marginTop: 4, 
        alignItems: 'flex-start'
    }
})