import React , {useEffect , useRef} from "react"
import { StyleSheet, View, TextInput, Button, Image, StatusBar, ScrollView, Text, Dimensions, Animated } from "react-native"
import { Feather } from "@expo/vector-icons"
import { SafeAreaView } from "react-navigation"
import ExploreTop from "../components/exploreTop"
import ExploreHome from "../components/exploreHome"

const Explore = () => {
    const MAX_HEADER_HEIGHT = 110
    const MIN_HEADER_HEIGHT = 70

    const scrollY= useRef(new Animated.Value(0)).current

    let AnimatedHeaderHeight = scrollY.interpolate({
        inputRange : [0,70],
        outputRange : [MAX_HEADER_HEIGHT , MIN_HEADER_HEIGHT],
        extrapolate : "clamp"
    })

    let AnimatedOpacity = scrollY.interpolate({
        inputRange : [0,50],
        outputRange : [1, 0],
        extrapolate : "clamp"
    })

    let AnimatedTop = scrollY.interpolate({
        inputRange : [0,50],
        outputRange : [10, -30],
        extrapolate : "clamp"
    })

    const { height, width } = Dimensions.get("window")

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <View style={{ height: height }}>
                <Animated.View style={{ height: AnimatedHeaderHeight, width: "100%", backgroundColor: "#ffffff", borderBottomWidth: 1, borderBottomColor: "#dddddd" }}>
                    <View style={{ backgroundColor: "#ffffff", flexDirection: "row", shadowOffset: { height: 0, width: 0 }, shadowColor: "#000000", shadowOpacity: 0.2, elevation: 5, padding: 10, marginHorizontal: 20, marginTop: 10, alignItems: "center" }}>
                        <Feather name="search" size={22} color="#000000" />
                        <TextInput placeholder="Try New Delhi" placeholderTextColor="grey" underlineColorAndroid="transparent" style={{ marginStart: 10, fontSize: 15, flex: 1, padding: 0 }} />
                    </View>
                    <Animated.View style={{ marginHorizontal: 20, top: AnimatedTop, flexDirection: "row", position: "relative" , opacity : AnimatedOpacity }}>
                        <View style={{ borderWidth: 1, borderColor: "#dddddd", padding: 5, backgroundColor: "#ffffff", borderRadius: 2 , marginRight : 10}}>
                            <Text style={{ fontSize: 13, fontWeight: "700" }}>Guests</Text>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: "#dddddd", padding: 5, backgroundColor: "#ffffff", borderRadius: 2 }}>
                            <Text style={{ fontSize: 13, fontWeight: "700" }}>Dates</Text>
                        </View>
                    </Animated.View>
                </Animated.View>
                <ScrollView scrollEventThrottle={16} bounces={false} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y : scrollY } } }] )} >
                    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
                        <Text style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}>What can we help you find, Sanchit?</Text>
                    </View>
                    <View style={{ height: 140, marginTop: 20, justifyContent: "center" }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <ExploreTop uri={require("../../assets/restaurant.jpg")} name="Restaurants" />
                            <ExploreTop uri={require("../../assets/experiences.jpg")} name="Experiences" />
                            <ExploreTop uri={require("../../assets/home.jpg")} name="Homes" />
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: "700" }}>Introducing Airbnb Plus</Text>
                        <Text style={{ fontWeight: "100", marginTop: 10 }}>A new selection of homes verified for quality and comfort</Text>
                    </View>
                    <View style={{ height: 250, widht: "100%", marginTop: 20, marginHorizontal: 20 }}>
                        <Image style={{ flex: 1, height: null, width: null, resizeMode: "cover" }} source={require("../../assets/home.jpg")} />
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 50 }}>
                        <Text style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}>Homes around the world!</Text>
                        <View style={{ marginTop: 20, paddingHorizontal: 20, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                            <ExploreHome width={width} type="PRIVATE ROOM - 2 BEDS" name="The Cozy Palace" money="82$" rating={4} source={require("../../assets/home1.jpg")} />
                            <ExploreHome width={width} type="PRIVATE ROOM - 2 BEDS" name="The Cozy Palace" money="82$" rating={4} source={require("../../assets/home2.jpg")} />
                            <ExploreHome width={width} type="PRIVATE ROOM - 2 BEDS" name="The Cozy Palace" money="82$" rating={4} source={require("../../assets/home3.jpg")} />
                            <ExploreHome width={width} type="PRIVATE ROOM - 2 BEDS" name="The Cozy Palace" money="82$" rating={4} source={require("../../assets/home4.jpg")} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

})

export default Explore