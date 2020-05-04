import React, { useState, useRef } from "react"
import { StyleSheet, View, Text, Button, Dimensions, TextInput } from "react-native"
import { SafeAreaView } from "react-navigation"

const Inbox = () => {

    const inpt1 = useRef(null)
    const inpt2 = useRef(null)
    const inpt3 = useRef(null)
    const inpt4 = useRef(null)
    const inpt5 = useRef(null)
    const inpt6 = useRef(null)
    let count = 2
    let back = false

    return (
        <SafeAreaView forceInset={{ top: "always" }} style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: "row", marginHorizontal: 50, marginTop: 200, justifyContent: "center" }}>

                    <TextInput
                        placeholder="0"
                        maxLength={1}
                        ref={inpt1}
                        textContentType="telephoneNumber"
                        underlineColorAndroid="transparent"
                        onFocus={() => {
                            if(back){
                                count = 2
                            }
                            else{
                                count = 1
                            }
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === "Backspace" & count === 1) {
                              
                            }
                        }}
                        onChangeText={(text) => {
                            if (text.length == 1) {
                                count++
                                back = false
                                inpt2.current.focus()
                            }
                            if (text == "") {
                                --count
                            }
                        }}
                        placeholderTextColor="#909090"
                        style={{ fontSize: 30, color: "#000000", borderBottomWidth: 1, borderBottomColor: "#000000", paddingHorizontal: 8, paddingVertical: 5, marginHorizontal: 8 }} />


                    <TextInput
                        placeholder="0"
                        maxLength={1}
                        ref={inpt2}
                        textContentType="telephoneNumber"
                        underlineColorAndroid="transparent"
                        onFocus={() => {
                            if(back){
                                count = 2
                            }
                            else{
                                count = 1
                            }
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === "Backspace" & count === 1) {
                                back = true
                                inpt1.current.focus()
                            }
                        }}
                        onChangeText={(text) => {
                            if (text.length == 1) {
                                count++
                                back = false
                                inpt3.current.focus()
                            }
                            if (text == "") {
                                --count
                            }
                        }}
                        placeholderTextColor="#909090"
                        style={{ fontSize: 30, color: "#000000", borderBottomWidth: 1, borderBottomColor: "#000000", paddingHorizontal: 8, paddingVertical: 5, marginHorizontal: 8 }} />


                    <TextInput
                        placeholder="0"
                        maxLength={1}
                        ref={inpt3}
                        textContentType="telephoneNumber"
                        underlineColorAndroid="transparent"
                        onFocus={() => {
                            if(back){
                                count = 2
                            }
                            else{
                                count = 1
                            }
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === "Backspace" & count === 1) {
                                back = true
                                inpt2.current.focus()
                            }
                        }}
                        onChangeText={(text) => {
                            if (text.length == 1) {
                                count++
                                back = false
                                inpt4.current.focus()
                            }
                            if (text == "") {
                                --count
                            }
                        }}
                        placeholderTextColor="#909090"
                        style={{ fontSize: 30, color: "#000000", borderBottomWidth: 1, borderBottomColor: "#000000", paddingHorizontal: 8, paddingVertical: 5, marginHorizontal: 8 }} />


                    <TextInput
                        placeholder="0"
                        maxLength={1}
                        ref={inpt4}
                        textContentType="telephoneNumber"
                        underlineColorAndroid="transparent"
                        onFocus={() => {
                            if(back){
                                count = 2
                            }
                            else{
                                count = 1
                            }
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === "Backspace" & count === 1) {
                                back = true
                                inpt3.current.focus()
                            }
                        }}
                        onChangeText={(text) => {
                            if (text.length == 1) {
                                count++
                                back = false
                                inpt5.current.focus()
                            }
                            if (text == "") {
                                --count
                            }
                        }}
                        placeholderTextColor="#909090"
                        style={{ fontSize: 30, color: "#000000", borderBottomWidth: 1, borderBottomColor: "#000000", paddingHorizontal: 8, paddingVertical: 5, marginHorizontal: 8 }} />


                    <TextInput
                        placeholder="0"
                        maxLength={1}
                        ref={inpt5}
                        textContentType="telephoneNumber"
                        underlineColorAndroid="transparent"
                        onFocus={() => {
                            if(back){
                                count = 2
                            }
                            else{
                                count = 1
                            }
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === "Backspace" & count === 1) {
                                inpt4.current.focus()
                            }
                        }}
                        onChangeText={(text) => {
                            if (text.length == 1) {
                                count++
                                back = false
                                inpt6.current.focus()
                            }
                            if (text == "") {
                                --count
                            }
                        }}
                        placeholderTextColor="#909090"
                        style={{ fontSize: 30, color: "#000000", borderBottomWidth: 1, borderBottomColor: "#000000", paddingHorizontal: 8, paddingVertical: 5, marginHorizontal: 8 }} />


                    <TextInput
                        placeholder="0"
                        maxLength={1}
                        ref={inpt6}
                        textContentType="telephoneNumber"
                        underlineColorAndroid="transparent"
                        onFocus={() => {
                            count = 1
                            console.log("6")
                        }}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === "Backspace" & count === 1) {
                                back = true
                                inpt5.current.focus()
                            }
                        }}
                        onChangeText={(text) => {
                            if (text.length == 1) {
                                count++
                            }
                            if (text == "") {
                                --count
                            }
                        }}
                        placeholderTextColor="#909090"
                        style={{ fontSize: 30, color: "#000000", borderBottomWidth: 1, borderBottomColor: "#000000", paddingHorizontal: 8, paddingVertical: 5, marginHorizontal: 8 }} />



                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

})

export default Inbox