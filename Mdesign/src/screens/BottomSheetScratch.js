import React , {useState} from "react"
import {StyleSheet , Button , View , Text} from "react-native"
import Modal from "react-native-modalbox"

const Bscratch = ()=>{

    const [modalVisible,setVisibilty] = useState(true)

return <View style={styles.containerStyle}>
    <Button title="open" onPress={()=>{
        setVisibilty(true)
    }}/>
    <Modal entry="bottom"
    backdropPressToClose={true}
    isOpen={modalVisible}
    onClosed={()=>{
        setVisibilty(false)
    }}
    position="bottom"
    style={styles.modalStyle}>
        <View style={styles.contentStyle}>
            <Text>Hey from Bottom Sheet</Text>
        </View>
    </Modal>
</View>
}

const styles = StyleSheet.create({
    modalStyle : {
        overflow : "hidden",
        alignItems : "center",
        justifyContent : "center",
        height : "50%",
        width : "100%",
    },
    containerStyle : {
        flex : 1,
        backgroundColor  :"#ffffff",
        alignItems : "center",
        justifyContent : "center"
    },
    contentStyle : {
        position : "absolute",
        backgroundColor : "#ffffff"
    }
})

export default Bscratch