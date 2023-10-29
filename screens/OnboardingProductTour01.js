import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native"; 

const OnboardingProductTour01 = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get the navigation object

  const handleNavigation = () => {
    navigation.navigate('LoginOption');
  };
  return (
    <View style={styles.onboardingProductTour01}>
      <View style={styles.body}>
        <Text
          style={[styles.description, styles.text2Typo]}
        >{`Lorem ipsum dolor sit amet, consectetur fadipiscing elit, sed.`}</Text>
        <Text style={[styles.title, styles.nextPosition]}>
          <Text style={styles.findBestPlaceToStayIn}>
            <Text style={styles.findBestPlace}>{`Find best place to stay in`}</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.goodPrice1}>good price</Text>
            <Text style={styles.findBestPlaceToStayIn}>{` `}</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.header}>
        <View style={[styles.buttonSmall, styles.nextPosition]}>
          <TouchableOpacity onPress={handleNavigation}>
            <Text style={[styles.text2, styles.text2Typo]}>next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={[
          styles.onboardingProductTour01Child,
          styles.maskGroupIconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.next, styles.nextPosition]}>{`Next`}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  text2Typo: {
    letterSpacing: 0.4,
    fontSize: 12,
    textAlign: "left",
  },
  nextPosition: {
    left: 0,
    position: "absolute",
    
  },
  maskGroupIconPosition: {
    left: 10,
    position: "absolute",
  },
  groupChildLayout: {
    height: 54,
    position: "absolute",
  },
  description: {
    top: 100,
    left: "0%",
    lineHeight: 20,
    fontFamily: "Lato-Regular",
    color: "#292929",
    textAlign: "left",
    position: "absolute",
  },
  findBestPlace: {
    color: "#000",
  },
  text: {
    color: "#204d6c",
  },
  findBestPlaceToStayIn: {
    fontWeight: "500",
    fontFamily: "Lato-Light",
  },
  goodPrice1: {
    fontWeight: "800",
    fontFamily: "Lato-Black",
  },
  title: {
    fontSize: 25,
    letterSpacing: 0.8,
    lineHeight: 40,
    top: 0,
    textAlign: "left",
  },
  body: {
    width: "64.27%",
    top: 124,
    right: "29.33%",
    left: "6.4%",
    height: 140,
    position: "absolute",
  },
  text2: {
    lineHeight: 22,
    fontFamily: "Montserrat-Regular",
    color: "#000",
    textAlign: "left",
  },
  buttonSmall: {
    borderRadius: 100,
    backgroundColor: "#dfdfdf",
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 8,
    top: 0,
    width : 90
  },
  header: {
    top: 37,
    left: 265,
    width: 86,
    height: 38,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 19,
    width: 79,
    height: 74,
  },
  onboardingProductTour01Child: {
    top: 300,
    borderRadius: 50,
    width: 340,
    height: 400,
  },
  groupChild: {
    left: 21,
    borderRadius: 10,
    backgroundColor: "#8bc83f",
    width: 400,
    top: 0,
  },
  next: {
    top: 15,
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: "Lato-Bold",
    color: "#fff",
    textAlign: "center",
    width: 233,
  },
  rectangleParent: {
    top: 705,
    left: 70,
    width: 233,
  },
  progressBarWhite66Perc: {
    top: 690,
    left: 152,
    width: 70,
    height: 3,
    position: "absolute",
  },
  onboardingProductTour01: {
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 500,
    overflow: "hidden",
    marginBottom:10,
  },
});

export default OnboardingProductTour01;
