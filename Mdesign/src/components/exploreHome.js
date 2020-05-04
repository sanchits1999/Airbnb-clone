import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import StarRating from "react-native-star-rating"

const ExploreHome = (props) => {
    return (
        <View style={{ height: (props.width - 40) / 2, width: "47%", borderWidth: 0.5, borderColor: "#dddddd", marginBottom: 10 }}>
            <View style={{ flex: 6 }}>
                <Image source={props.source} style={{ flex: 1, width: null, height: null, resizeMode: "cover" }} />
            </View>
            <View style={{ flex: 4, alignItems: "flex-start", paddingStart: 10, justifyContent: "space-evenly" }}>
                <Text style={{ fontSize: 10, color: "#b63838" }}>{props.type}</Text>
                <Text style={{ fontSize: 12, fontWeight: "700" }}>{props.name}</Text>
                <Text style={{ fontSize: 10 }}>{props.money}</Text>
                <StarRating maxStars={5} disabled={true} rating={props.rating} starSize={10}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ExploreHome