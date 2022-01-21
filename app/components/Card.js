import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Text from "./Text";
import colors from "../config/colors";

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    margin:7,
    width:100,

    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 5,
    overflow: "hidden",
    alignItems:"center"
  },
  detailsContainer: {
    paddingHorizontal: 20,
    height:50,
  },
  image: {
    width: 70,
    height: 70,
    marginVertical:5,
  },
  subTitle: {
    color: colors.secondary,
    // fontWeight: "bold"
  },
  title: {
    // marginBottom: 2,
    width:50,
  },
});

export default Card;
