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
import {Card,Icon} from 'react-native-elements';

export default class RecieverDetailsScreen extends Component(){

  constructor (props){
    super(props)
    this.state={
      userID:firebase.auth().currentUser.email,
      recieverID:this.props.navigation.getParam("details")["user_id"],
      requestID:this.props.navigation.getParam("details")["request_id"],
      bookName:this.props.navigation.getParam("details")["book_name"],
      reasonToRequest:this.props.navigation.getParam("details")["reason_to_request"],
      recieverName:'',
      recieverContact:'',
      recieverAdress:'',
      recieverRequestDocId:''
    }

  }
  getRecieverDetails(){
    db.collection("users").where("email_id",'==',this.state.recieverID).get()
        .then(snapshot => {
            snapshot.forEach(doc=>{
                var data=doc.data()
                this.setState({
                    
                    recieverName: data.first_name,                    
                    recieverAdress: data.address,
                    recieverContact: data.contact,
                  
                })
            })
        })
        
    db.collection("requested_books").where("request_Id",'==',this.state.recieverId).get()
    .then(snapshot => {
        snapshot.forEach(doc=>{
          
          this.setState({
              
              recieverRequestDocId: doc.id,                    
                         
          })
        })
      })
  }

  componentDidMount(){

  }
  updateBookStatus=()=>{
    db.collection("all_donations").add({
      book_name:this.state.bookName,
     request_id:this.state.requestID,
     requestedBy:this.state.recieverName,
     donorID:this.state.userID,
     requestStatus:"donor interested"
    })
  }

    render(){
        return(           
            <View style={styles.container}>
              <View style ={{flex:0.1}} >
                  <Header
                    leftComponent={
                      <Icon
                          name="arrow-left"
                          type="feather"
                          color="black"
                          onPress={()=>{
                            this.props.navigation.goBack()
                          }}
                      />
                    }
                    centerComponent ={{
                      text:"Donate Books",
                      style:{color:"white",fontSize:20,fontWeight:"bold"}} }   
                    
                    backgroundColor="orange"
                  />          
                        
              </View>
              <View style={{flex:0.3}}>
                <Card
                  title={"Book Information"}
                  titleStyle={{fontSize:20}}
                >
                  <Card>
                    <Text style={{fontWeight:'bold'}}>Name:{this.state.bookName}
                    </Text>
                  </Card>
                  <Card>
                    <Text style={{fontWeight:'bold'}}>Reason:{this.state.reasonToRequest}</Text>
                  </Card>                  
                </Card>
              </View>  
              <View style ={{flex:0.3}}>
                <Card
                    title={"Reciever Information"}
                    titleStyle={{fontSize:20}}
                  >
                    <Card>
                      <Text style={{fontWeight:'bold'}}>Name:{this.state.recieverName}
                      </Text>
                    </Card>
                    <Card>
                      <Text style={{fontWeight:'bold'}}>Contact:{this.state.recieverContact}</Text>
                    </Card>   
                    <Card>
                      <Text style={{fontWeight:'bold'}}>Address:{this.state.recieverAdress}</Text>
                    </Card>                
                  </Card>
                </View>   
                <View style = {styles.buttonContainer}>
                  {
                    this.state.recieverID!==this.state.userID?(
                      <TouchableOpacity 
                          styles={styles.button}
                          onPress={()=>{
                        this.updateBookStatus()
                        this.props.navigation.navigate("MyDonations")
                      }}
                      >
                        <Text>I want to donate</Text>
                      
                      </TouchableOpacity>
                      
            
                    ): null
                  }
                </View>                   
            </View>
      
      )
    }
}


const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    buttonContainer : {
      flex:0.3,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:200,
      height:50,
      justifyContent:'center',
      alignItems : 'center',
      borderRadius: 10,
      backgroundColor: 'orange',
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       },
      elevation : 16
    }
  })
  
