import React, { useState } from 'react'
import {
    TouchableOpacity,
    Image,
    Text,
    Dimensions,
    StyleSheet,
    View,
    ActivityIndicator
} from 'react-native'
import { Rating } from 'react-native-ratings';
import { Button } from './Button';

const Book = ({isShowBuyButton = true,isCartView = false, ...props }) => {
    const { bookData, imageStyle } = props;
    const width = ((Dimensions.get('window').width / 2) - 10);
    const conditionalStyle = createStyles(width, isCartView);
    const [loading, setLoading] = useState(true);

    const onBuyNowPress = () => {
        props.onBuyNowPress(bookData);
    }

    const onBookSelected = () => {
        props.onBookSelected(bookData);
    }

    const onLoadEnd = () => {
        setLoading(false);
    }

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={conditionalStyle.container}
            accessible={false}
            onPress={onBookSelected}
        >
            <View>
                <Image
                    style={[conditionalStyle.image, imageStyle]}
                    source={{ uri: bookData.thumbnailUrl }}
                    onLoadEnd={onLoadEnd}
                />
                <ActivityIndicator
                    style={conditionalStyle.activityIndicator}
                    animating={loading}
                />
            </View>
            <View>
                <Text
                    style={[conditionalStyle.marginHorizontal, conditionalStyle.title]}
                >
                    {bookData.title}
                </Text>
                <View style={conditionalStyle.ratingContainer}>
                    <Rating showRating={false} imageSize={20} ratingCount={5} startingValue={bookData.rating} />
                </View>
                <Text
                    style={conditionalStyle.price}
                >
                    {'Rs ' + bookData.price}
                </Text>
                {isShowBuyButton &&
                    <Button
                        title='Buy Now'
                        onPress={onBuyNowPress}
                    />
                }
            </View>
        </TouchableOpacity>
    )
}

export default Book;

const createStyles = (width, isCartView) => {

    return (
        StyleSheet.create({
            container: {
                marginTop: 8,
                marginLeft: 8,
                width: width,
                flexDirection: isCartView ? 'row' : 'column'
            },
            marginHorizontal: {
                marginTop: 8,
                marginBottom: 8
            },
            price: {
                marginTop: 8,
                fontSize: 16
            },
            image: {
                width: width,
                height: width
            },
            title: {
                fontSize: 16
            },
            ratingContainer: {
                marginTop: 8,
                alignItems: 'flex-start'
            },
            activityIndicator: {
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }
        })
    )
}