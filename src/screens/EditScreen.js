import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather, EvilIcons } from '@expo/vector-icons';

const EditScreen = ({ navigation }) => {

    return (
        <View>
            <Text>Edit Screen - {navigation.getParam('id')}</Text>
        </View>
    );
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
