import React from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import colors from "../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";

const height = Dimensions.get("window").height;
const Details = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={24} color={colors.white} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name="heart" size={32} color={colors.orange} />
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>

        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.price}</Text>
              <Text style={styles.infoSubText}>/person</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATING</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.rating}</Text>
              <Text style={styles.infoSubText}>/5</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.duration}</Text>
              <Text style={styles.infoSubText}>hour</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => alert("You booked a trip!")}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: height * 0.6,
    justifyContent: "space-between",
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontFamily: "Lato Bold",
    fontSize: 22,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationText: {
    fontFamily: "Lato Bold",
    fontSize: 16,
    color: colors.white,
    marginLeft: 5,
  },
  heartWrapper: {
    position: "absolute",
    right: 40,
    top: -30,
    width: 54,
    height: 54,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  descriptionTextWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontFamily: "Lato Bold",
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: "Lato Regular",
    fontSize: 14,
    color: colors.darkGray,
    height: 75,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 20,
    justifyContent: "space-between",

  },
  infoItem: {},
  infoTitle: {
    fontFamily: "Lato Bold",
    fontSize: 12,
    color: colors.gray,
  },
  infoTextWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  infoText: {
    fontFamily: "Lato Bold",
    fontSize: 24,
    color: colors.orange,
  },
  infoSubText: {
    fontFamily: "Lato Bold",
    fontSize: 14,
    color: colors.gray,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.orange,
    alignItems: "center",
    paddingVertical: 15,
  },
  buttonText: {
    fontFamily: "Lato Bold",
    fontSize: 18,
    color: colors.white,
  },

});
export default Details;
