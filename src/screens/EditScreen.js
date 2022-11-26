import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            console.log(title, content);
        }} />;
};

EditScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({});

export default EditScreen;
