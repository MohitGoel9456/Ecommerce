import React, {useEffect, useContext, useState} from 'react'
import{
    View,
    Text,
    StyleSheet,
    ScrollView
}from 'react-native'
import { useRoute } from '@react-navigation/native';
import { UserContext } from '../screens/ParentComponent'
import { useNavigation } from '@react-navigation/native';

const ReadBook = () => {
    const [selectedBook, setSelectedBook] = useState();
    const data = useContext(UserContext);
    const books = data.data.books
    const route = useRoute();
    const navigation = useNavigation();
    navigation.setOptions({ title: route.params.title });

    useEffect(()=>{
        let book = books.filter((book)=> {
            return book.isbn === route.params.id;
        })
        
        setSelectedBook(book[0]);
    },[])

    if (!selectedBook) {
        return null;
    }else {
        return(
            <ScrollView>
                <Text style={styles.text}>{selectedBook.longDescription}</Text>
            </ScrollView>
        )
    }
}

export default ReadBook;

const styles = StyleSheet.create({
    text :{
        lineHeight:20,
        fontSize:16,
        paddingHorizontal:16,
        marginTop:8
    }
})