import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Ionicons color="white" size={144} name="ios-rainy" />
          <Text style={styles.temp}>35C`</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining like MF</Text>
          <Text style={styles.subTitle}>More info...</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  temp: {
    backgroundColor: "transparent",
    fontSize: 24,
    color: "white"
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 30
  },
  title: {
    backgroundColor: "transparent",
    fontSize: 38,
    marginBottom: 15,
    color: "white",
    fontWeight: "300"
  },
  subTitle: {
    backgroundColor: "transparent",
    fontSize: 24,
    color: "white",
    marginBottom: 24
  }
});
