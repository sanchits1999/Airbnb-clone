import React, { useRef, useState, useEffect } from "react"
import { StyleSheet, View, Text, Image, ScrollView, StatusBar, Platform, Dimensions, Animated } from "react-native"
import { SafeAreaView } from "react-navigation"
import { Ionicons } from "@expo/vector-icons"

const Trips = () => {

    const [Statcolor, setcolor] = useState("light-content")

    const { height, width } = Dimensions.get("window")

    let scrollY = useRef(new Animated.Value(0)).current

    let Topback = scrollY.interpolate({
        inputRange: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        outputRange: ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.7)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.9)", "rgba(255,255,255,1)"],
        extrapolate: "clamp"
    })

    let Backview = scrollY.interpolate({
        inputRange: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        outputRange: ["rgba(255,255,255,1)", "rgba(255,255,255,0.9)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.7)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0)"],
        extrapolate: "clamp"
    })

    let count = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [0, 50],
        extrapolate: "clamp"
    })

    return (
        <View>
            <ScrollView scrollEventThrottle={16} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}>
                <View style={{}}>
                    <View style={{ height: 550, width: "100%" }}>
                        <Image source={require("../../assets/saved/header.jpg")} style={{ flex: 1, height: null, width: null, resizeMode: "cover" }} />
                    </View>
                </View>
                <View style={{ height: 600, width: width }}>

                </View>
            </ScrollView>
            <View style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="transparent" translucent={true} />
            </View>
            <Animated.View style={{ position: "absolute", top: 0, left: 0, right: 0, height: height / 7, backgroundColor: Topback }}>
                <Animated.View style={{ height: 50, width: 50, borderRadius: 25, justifyContent: "center", marginTop: Platform.OS == "ios" ? (height / 7 - 20) / 2 : (height / 7 - StatusBar.currentHeight) / 2, marginStart: 20, alignItems: "center", backgroundColor: Backview }}>
                    {Platform.OS == "ios" ? <Ionicons name="ios-arrow-back" size={28} /> : <Ionicons name="md-arrow-back" size={28} />}
                </Animated.View>
            </Animated.View>

        </View>
    )
}

const styles = StyleSheet.create({

})

export default Trips