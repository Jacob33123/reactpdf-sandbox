import React from "react";
import { Link, Text, View, StyleSheet } from "@react-pdf/core";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#112131",
    borderBottomStyle: "solid",
    alignItems: "stretch"
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9
  },
  linkColumn: {
    flexDirection: "column",
    flexGrow: 2,
    alignSelf: "flex-end",
    justifySelf: "flex-end"
  },
  name: {
    fontSize: 24,
    textTransform: "uppercase"
  },
  subtitle: {
    fontSize: 10,
    justifySelf: "flex-end",
    textTransform: "uppercase"
  },
  link: {
    fontSize: 10,
    color: "black",
    textDecoration: "none",
    alignSelf: "flex-end",
    justifySelf: "flex-end"
  }
});

export default () => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>Luke Skywalker</Text>
      <Text style={styles.subtitle}>Jedi Master</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link style={styles.link}>luke@theforce.com</Link>
    </View>
  </View>
);
