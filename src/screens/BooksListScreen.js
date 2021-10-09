import React, {useContext, useState} from 'react'
import {
    View,
    FlatList,
    StyleSheet,
}from 'react-native'
import { UserContext } from '../screens/ParentComponent'
import { CheckoutModal } from '../components/CheckoutModal'
import { useNavigation } from '@react-navigation/native';
import { RouteNames } from '../navigation/routes';
import Book from '../components/Book'

const BooksListScreen = () => {
    const data = useContext(UserContext);
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const navigation = useNavigation();
    let buyBooks = [...data.cart];

    const onBuyNowPress = (item) => {
      if (buyBooks.length === 0) {
       addToCart(item)
      } else {
        const result = buyBooks.filter((book) => {
          return book.isbn === item.isbn
        })
        if (result.length === 0) {
          addToCart(item)
        } else {
          alert("Book already in the cart.")
        }
      }
    }

    const addToCart = (item) => {
      buyBooks.push(item);
      data.setCart(buyBooks);
      setShowCheckoutModal(true);
    }

    const onBookSelected = (book) => {
      navigation.navigate(RouteNames.readBook, {id: book.isbn, title: book.title});
    }

    const renderItem = ({item}) => {
        return(
            <Book 
              bookData={item}
              onBuyNowPress={onBuyNowPress}
              onBookSelected={onBookSelected}
            />
        )
    }

    const onContinuePress = () => {
      setShowCheckoutModal(false);
    }

    const onProceedToCheckout = () => {
      setShowCheckoutModal(false);
      navigation.navigate(RouteNames.checkout)
    }
    const books = data.data.books;
    return(
        <View style={styles.container}>
            <FlatList
                data={books}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.isbn}
            />
            <CheckoutModal 
              isShowModal={showCheckoutModal}
              onContinuePress={onContinuePress}
              onProceedToCheckoutPress={onProceedToCheckout}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})

export default BooksListScreen;