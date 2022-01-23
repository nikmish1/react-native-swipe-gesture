import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const LeftSwipeActions = () => <View style={styles.swipAction}><Text style={{ ...styles.text, ...styles.present }} > Present</Text></View>

export const RightSwipeActions = () => <View style={styles.swipAction}><Text style={{ ...styles.text, ...styles.absent }} > Absent</Text></View>


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "600"
    },

    present: {
        color: "green"
    },

    absent: {
        color: "red"
    },

    swipAction: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        padding: 10
    }


})
