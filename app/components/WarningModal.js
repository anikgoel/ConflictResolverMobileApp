import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import {Dimensions} from 'react-native';
import PropTypes from 'prop-types'


export default WarningModal = (props) => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
        },
        text: {
            letterSpacing: 0.65,
            textAlign: "center",
            color: "#003458",
        },
        modalContainer: {
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        }, 
        modalContent: {
            width: '90%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            borderRadius: 10,
            backgroundColor: 'rgba(239, 239, 239, 1)',
            textAlign: 'center',
            elevation: 10,
            fontSize: 24,
        },
        button: {
            width: '100%',
            padding: 10
        }
    };
    var popupTitle = (props.popupTitle ? props.popupTitle : 'Popup Title');
    var message = (props.message ? props.message : 'Here is a message where we can put absolutely anything we want.');
    var stateMessage = (props.stateMessage ? props.stateMessage : '');
    var yes = (props.yes ? props.yes : 'OK');
    var cancel = (props.cancel ? props.cancel : 'Cancel');
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Platform.OS === "ios"
      ? Dimensions.get("window").height
      : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");
    return (
        <Modal isVisible={props.isVisible}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}>
            <View style={styles.modalContainer} >
                <View style={styles.modalContent}>
                    <Text style={{...styles.text, fontSize:19, lineHeight:24, marginTop:20, fontWeight:'bold', color:'#E94C36'}}>{popupTitle}</Text>
                    <Text style={{...styles.text, fontSize:15, lineHeight:20, marginLeft:10, marginRight:10, marginBottom:20, marginTop:10}}>{message}</Text>
                    <View style={{flexDirection:'row',alignItems:'center', justifyContent:'center',}}>
                        <View style={{width:'50%', alignItems:'center', justifyContent:'center', height: 48, borderColor:'#BCC0C3', borderWidth:1, borderRadius: 3, marginBottom: 5}}>
                            <TouchableOpacity style={styles.button} onPress={() => { if (props.handleYes) props.handleYes(); }}>
                                <Text style={{...styles.text, fontSize:19, lineHeight:24}}>
                                    {yes}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </Modal>
    );
}


WarningModal.propTypes = {
    handleYes : PropTypes.func.isRequired,
    handleCancel : PropTypes.func.isRequired,
}