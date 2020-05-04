import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"

const ExploreTop = (props) => {
    return (
        <View style={{ height: 135, width: 150, borderWidth: 1, borderColor: "#dddddd", marginLeft: 20}}>
            <View style={{ flex: 2 }}>
                <Image source={props.uri} style={{ flex: 1, width: null, height: null, resizeMode: "cover" }} />
            </View>
            <View style={{ flex: 1}}>
                <Text style={{ fontSize: 14, fontWeight: "300" , marginLeft : 10 , marginTop : 5 }}>{props.name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ExploreTop