import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class MyDonations  extends  Component{
    render(){
        return(
            <View>
                <Text> MY DONATIONS</Text>
            </View>
        )
    }
}