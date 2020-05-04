import React from "react"
import { StyleSheet, View, TextInput, Text, Dimensions, ScrollView, Image, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-navigation"
import { Feather } from "@expo/vector-icons"
import ViewPager from "@react-native-community/viewpager"


const Saved = () => {

    const { height, width } = Dimensions.get("window")

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <View style={{ height: height }}>
                <View style={{ height: 80, width: width, borderBottomWidth: 1, borderBottomColor: "#dddddd" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 20, marginTop: 10, borderRadius: 25, padding: 10, shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0.2, shadowColor: "#000000", elevation: 5, backgroundColor: "#ffffff" }}>
                        <Feather name="search" size={22} color="#000000" style={{ marginStart: 10 }} />
                        <TextInput placeholder="Location, landmarks, or address" placeholderTextColor="grey" underlineColorAndroid="transparent" style={{ fontSize: 15, marginStart: 10 }} />
                    </View>
                </View>
                <View>

                </View>
                <ScrollView scrollEventThrottle={16} style={{}}>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: "700", marginTop: 10, paddingHorizontal: 20 , letterSpacing : 2 }}>We may be apart, but we will get through this together.</Text>
                    </View>
                    <View style={{marginTop : 20}}>
                        <ViewPager showPageIndicator={false} pageMargin={-70} initialPage={0} style={{ height: 280, width: "100%", marginTop: 20 }}>
                            <View key="1" style={{}}>
                                <View style={{ flex: 7.5, width: "82%", marginStart: 20 }}>
                                    <Image source={require("../../assets/saved/pagerImg2.jpg")} style={{ height: null, width: null, flex: 1, resizeMode: "cover", borderRadius: 10 }} />
                                </View>
                                <View style={{ flex: 2.5, width: "82%", marginStart: 20 }}>
                                    <Text style={{ fontSize: 15, fontWeight: "700" }}>Online Experiences</Text>
                                    <Text style={{ fontSize: 12, fontWeight: "100", color: "#868686" }}>Unique activities we can do together, led by a world of hosts</Text>
                                </View>

                            </View>
                            <View key="2" style={{}}>
                                <View style={{ flex: 7.5, width: "82%", marginStart: 30 }}>
                                    <Image source={require("../../assets/saved/pagerImg1.jpg")} style={{ height: null, width: null, flex: 1, resizeMode: "cover", borderRadius: 10 }} />
                                </View>
                                <View style={{ flex: 2.5, width: "82%", marginStart: 30 }}>
                                    <Text style={{ fontSize: 15, fontWeight: "700" }}>Monthaly stays</Text>
                                    <Text style={{ fontSize: 12, fontWeight: "100", color: "#868686" }}>Make Airbnb your home, for stays of a month or longer.</Text>
                                </View>
                            </View>
                            <View key="3" style={{}}>
                                <View style={{ flex: 7.5, width: "82%", marginStart: 40 }}>
                                    <Image source={require("../../assets/saved/pagerImg3.jpg")} style={{ height: null, width: null, flex: 1, resizeMode: "cover", borderRadius: 10 }} />
                                </View>
                                <View style={{ flex: 2.5, width: "82%", marginStart: 40 }}>
                                    <Text style={{ fontSize: 15, fontWeight: "700" }}>Frontline stays</Text>
                                    <Text style={{ fontSize: 12, fontWeight: "100", color: "#868686" }}>Find or provide accommodation for COVID-19 responders</Text>
                                </View>
                            </View>
                        </ViewPager>
                    </View>
                    <View style={{ marginTop: 20, width: "100%", backgroundColor: "#000000" }}>
                        <View style={{}}>
                            <Text style={{ fontSize: 22, fontWeight: "700", color: "#ffffff", marginTop: 20, marginHorizontal: 20 }}>Introducing Online Experiences</Text>
                            <Text style={{ fontSize: 16, fontWeight: "400", color: "#dddddd", marginHorizontal: 20, marginTop: 5, textAlign: "left" }}>Now you can meet people all over the world while trying something new. Join live, interactive video sessions led by expert hosts  - all without leaving home.</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <ViewPager showPageIndicator={false} initialPage={0} pageMargin={-70} style={{ height: 400, width: "100%" }}>
                                <View key="1" style={{}}>
                                    <View style={{ flex: 8, width: "80%", marginStart: 20 }}>
                                        <Image source={require("../../assets/saved/pager1Img1.jpg")} style={{ flex: 1, height: null, width: null, resizeMode: "cover", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                    </View>
                                    <View style={{ flex: 2, width: "80%", justifyContent: "center", marginStart: 20, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: "#171717" }}>
                                        <Text style={{ fontSize: 18, color: "#ffffff", fontWeight: "700", opacity: 0.9, letterSpacing: 0.1, paddingHorizontal: 10 }}>Mix secret sangria with Pedro from Lisbon</Text>
                                    </View>
                                </View>

                                <View key="2" style={{}}>
                                    <View style={{ flex: 8, width: "80%", marginStart: 30 }}>
                                        <Image source={require("../../assets/saved/pager1Img2.jpg")} style={{ flex: 1, height: null, width: null, resizeMode: "cover", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                    </View>
                                    <View style={{ flex: 2, width: "80%", justifyContent: "center", marginStart: 30, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: "#171717" }}>
                                        <Text style={{ fontSize: 18, color: "#ffffff", fontWeight: "700", opacity: 0.9, letterSpacing: 0.1, paddingHorizontal: 10 }}>Strech. Breathe. Relax. Yoga class with friends</Text>
                                    </View>
                                </View>

                                <View key="3" style={{}}>
                                    <View style={{ flex: 8, width: "80%", marginStart: 40 }}>
                                        <Image source={require("../../assets/saved/pager1Img3.jpg")} style={{ flex: 1, height: null, width: null, resizeMode: "cover", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                    </View>
                                    <View style={{ flex: 2, width: "80%", justifyContent: "center", marginStart: 40, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: "#171717" }}>
                                        <Text style={{ fontSize: 18, color: "#ffffff", fontWeight: "700", opacity: 0.9, letterSpacing: 0.1, paddingHorizontal: 10 }}>Meditate to music with Scott from Amsterdam</Text>
                                    </View>
                                </View>

                                <View key="4" style={{}}>
                                    <View style={{ flex: 8, width: "80%", marginStart: 50 }}>
                                        <Image source={require("../../assets/saved/pager1Img4.jpg")} style={{ flex: 1, height: null, width: null, resizeMode: "cover", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                    </View>
                                    <View style={{ flex: 2, width: "80%", justifyContent: "center", marginStart: 40, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: "#171717" }}>
                                        <Text style={{ fontSize: 18, color: "#ffffff", fontWeight: "700", opacity: 0.9, letterSpacing: 0.1, paddingHorizontal: 10 }}>Suppot African pengiuns by drawing with Jon</Text>
                                    </View>
                                </View>
                            </ViewPager>
                        </View>
                        <View style={{ marginTop: 60, marginBottom: 30 }}>
                            <TouchableOpacity>
                                <View style={{ justifyContent: "center", alignItems: "center", marginHorizontal: 20, paddingVertical: 10, borderWidth: 1, borderRadius: 5, borderColor: "#ffffff", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontSize: 20, fontWeight: "700", color: "#ffffff" }}>Explore All</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{}}>
                        <View style={{ marginTop: 30, marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: "700", letterSpacing: 1.2, color: "#000000" }}>Host a hero: help us house frontline responders around the world</Text>
                        </View>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 15, fontWeight: "200", color: "#000000", letterSpacing: 0.7 }}>With frontline stays, Airbnb is partnering with our hosts to connect 100,000 healthcare providers, relief workers, and first responders with clean places to stay that allow them to be close to their patients - and safely distanced from their own families.</Text>
                        </View>
                        <TouchableOpacity style={{ marginBottom: 40, backgroundColor: "#ffffff", width: 150, justifyContent: "center", alignItems: "center", paddingVertical: 8, marginTop: 30, marginLeft: 20, elevation: 2, shadowOffset: { height: 0, width: 0 }, shadowColor: "#000000", shadowOpacity: 0.5, borderWidth: 0.7, borderColor: "#000000", borderRadius: 10 }}>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: "600" }}>Get involved</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{backgroundColor: "#ededed" }}>
                        <View style={{marginTop : 30 , marginHorizontal : 20}}>
                            <Text style={{fontSize : 22 , fontWeight : "700" , color : "#000000" , letterSpacing : 1}}>Stay Informed</Text>
                        </View>
                        <View style={{marginTop : 20 , marginBottom : 40}}>
                            <ViewPager initialPage={0} pageMargin={-60} showPageIndicator={false} style={{height : 400 , width : "100%"}}>
                                <View key={1}>
                                    <View style={{marginTop : 20 , width : "85%"}}>
                                        <Text style={{fontSize : 18 , marginStart : 20 , letterSpacing : 0.5}}>For guests</Text>
                                        <View style={{borderWidth : 0.3 , borderColor : "#bababa" , marginLeft : 20 , marginTop : 15}}></View>
                                    </View>
                                    <View style={{marginTop : 30 , width : "85%"}}>
                                        <Text style={{fontSize : 18 , marginStart : 20, fontWeight : "700" , opacity : 0.8 , letterSpacing : 0.4}}>Updates for travel</Text>
                                        <Text style={{fontSize : 15 , marginStart : 20 , letterSpacing : 0.2 , color : "grey"}}>What you should know</Text>
                                        <View style={{borderWidth : 0.3 , borderColor : "#bababa" , marginLeft : 20 , marginTop : 15}}></View>
                                    </View>
                                    <View style={{marginTop : 30 , width : "85%"}}>
                                        <Text style={{fontSize : 18 , marginStart : 20, fontWeight : "700" , opacity : 0.8 , letterSpacing : 0.4}}>Cancellation options</Text>
                                        <Text style={{fontSize : 15 , marginStart : 20 , letterSpacing : 0.2 , color : "grey"}}>Learn what's covered</Text>
                                        <View style={{borderWidth : 0.3 , borderColor : "#bababa" , marginLeft : 20 , marginTop : 15}}></View>
                                    </View>
                                    <View style={{marginTop : 30 , width : "85%"}}>
                                        <Text style={{fontSize : 18 , marginStart : 20, fontWeight : "700" , opacity : 0.8 , letterSpacing : 0.4}}>Help center</Text>
                                        <Text style={{fontSize : 15 , marginStart : 20 , letterSpacing : 0.2 , color : "grey"}}>Get support</Text>
                                        <View style={{borderWidth : 0.3 , borderColor : "#bababa" , marginLeft : 20 , marginTop : 15}}></View>
                                    </View>
                                </View>

                                <View key={2}>
                                    <View style={{marginTop : 20}}>
                                        <Text style={{fontSize : 18 , marginStart : 20 , letterSpacing : 0.5}}>For hosts</Text>
                                        <View style={{borderWidth : 0.3 , borderColor : "#bababa" , marginLeft : 20 , marginTop : 15}}></View>
                                    </View>
                                    <View style={{marginTop : 30}}>
                                        <Text style={{fontSize : 18 , marginStart : 20, fontWeight : "700" , opacity : 0.8 , letterSpacing : 0.4}}>Message from Brian Chesky</Text>
                                        <Text style={{fontSize : 15 , marginStart : 20 , letterSpacing : 0.2 , color : "grey"}}>Hear from our CEO</Text>
                                        <View style={{borderWidth : 0.3 , borderColor : "#bababa" , marginLeft : 20 , marginTop : 15}}></View>
                                    </View>
                                    <View style={{marginTop : 30}}>
                                        <Text style={{fontSize : 18 , marginStart : 20, fontWeight : "700" , opacity : 0.8 , letterSpacing : 0.4}}>Resources for hosting</Text>
                                        <Text style={{fontSize : 15 , marginStart : 20 , letterSpacing : 0.2 , color : "grey"}}>What's affected COVID-19</Text>
                                        <View style={{borderWidth : 0.3 , borderColor : "#bababa" , marginLeft : 20 , marginTop : 15}}></View>
                                    </View>
                                    <View style={{marginTop : 30}}>
                                        <Text style={{fontSize : 18 , marginStart : 20, fontWeight : "700" , opacity : 0.8 , letterSpacing : 0.4}}>Providing frontline stays</Text>
                                        <Text style={{fontSize : 15 , marginStart : 20 , letterSpacing : 0.2 , color : "grey"}}>Learn how to help</Text>
                                        <View style={{borderWidth : 0.3 , borderColor : "#bababa" , marginLeft : 20 , marginTop : 15}}></View>
                                    </View>
                                </View>

                                <View key={3}>
                                    <View style={{marginTop : 20}}>
                                        <Text style={{fontSize : 18 , marginStart : 20 , letterSpacing : 0.5}}>For COVID-19 responders</Text>
                                        <View style={{borderWidth : 0.3 , borderColor : "#bababa" , marginLeft : 20 , marginTop : 15}}></View>
                                    </View>
                                    <View style={{marginTop : 30}}>
                                        <Text style={{fontSize : 18 , marginStart : 20, fontWeight : "700" , opacity : 0.8 , letterSpacing : 0.4}}>Frontline stays</Text>
                                        <Text style={{fontSize : 15 , marginStart : 20 , letterSpacing : 0.2 , color : "grey"}}>Learn about our program</Text>
                                        <View style={{borderWidth : 0.3 , borderColor : "#bababa" , marginLeft : 20 , marginTop : 15}}></View>
                                    </View>
                                    <View style={{marginTop : 30}}>
                                        <Text style={{fontSize : 18 , marginStart : 20, fontWeight : "700" , opacity : 0.8 , letterSpacing : 0.4}}>Sign up</Text>
                                        <Text style={{fontSize : 15 , marginStart : 20 , letterSpacing : 0.2 , color : "grey"}}>Check for housing options</Text>
                                        <View style={{borderWidth : 0.3 , borderColor : "#bababa" , marginLeft : 20 , marginTop : 15}}></View>
                                    </View>
                                    <View style={{marginTop : 30}}>
                                        <Text style={{fontSize : 18 , marginStart : 20, fontWeight : "700" , opacity : 0.8 , letterSpacing : 0.4}}>Make a donation</Text>
                                        <Text style={{fontSize : 15 , marginStart : 20 , letterSpacing : 0.2 , color : "grey"}}>Support nonprofit organisations</Text>
                                        <View style={{borderWidth : 0.3 , borderColor : "#bababa" , marginLeft : 20 , marginTop : 15}}></View>
                                    </View>
                                </View>
                            </ViewPager>
                        </View>
                    </View>
                    <View style={{height : 100}}>

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

})

const y = () => {

}

export default Saved