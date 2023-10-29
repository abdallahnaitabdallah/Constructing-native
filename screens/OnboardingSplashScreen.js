import * as React from "react";
import { StyleSheet, View, Text,Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const OnboardingSplashScreen = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get the navigation object

  const handleNavigation = () => {
    navigation.navigate('OnboardingProductTour01');
  };
  return (
    <View style={styles.onboardingSplashScreen}>
      <Image
        style={[styles.image3Icon, styles.faderPosition]}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <View
        style={[styles.onboardingSplashScreenChild, styles.faderPosition]}
      />
      <View style={[styles.fader, styles.faderPosition]} />
      <Text
        style={[styles.riseRealEstate, styles.riseRealEstatePosition]}
      >{`Rise Real Estate`}</Text>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View
        style={[
          styles.onboardingSplashScreenItem,
          styles.riseRealEstatePosition,
        ]}
      />
      <TouchableOpacity onPress={handleNavigation}>
        <Text style={[styles.letsStart, styles.letsStartFlexBox]}>{`let’s start`}</Text>
      </TouchableOpacity>
      <Text style={[styles.appVersion, styles.letsStartFlexBox]}>
        <Text style={styles.madeWithLove}>{`Made with love`}</Text>
        <Text style={styles.v10}>v.1.0</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  faderPosition: {
    left: 0,
    position: "absolute",
  },
  riseRealEstatePosition: {
    width: 190,
    left: 92,
    position: "absolute",
    marginTop : -200
  },
  letsStartFlexBox: {
    textAlign: "center",
    color: "#fff",
    marginTop : -200
  },
  image3Icon: {
    width: 447,
    top: 0,
    left: 0,
    height: 812,
  },
  onboardingSplashScreenChild: {
    backgroundColor: "rgba(33, 98, 138, 0.8)",
    width: 396,
    height: 833,
    opacity: 0.5,
    top: 0,
    left: 0,
  },
  fader: {
    top: 812,
    width: 375,
    height: 563,
  },
  riseRealEstate: {
    top: 390,
    fontSize: 36,
    letterSpacing: -1.1,
    height: 101,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Lato-Bold",
    fontWeight: "700",
  },
  maskGroupIcon: {
    top: 235,
    left: 76,
    width: 223,
    height: 210,
    position: "absolute",
  },
  onboardingSplashScreenItem: {
    top: 683,
    borderRadius:10,
    backgroundColor: "#8bc83f",
    height: 54,
  },
  letsStart: {
    top: 699,
    left: 71,
    fontSize: 16,
    letterSpacing: 0.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 233,
    fontFamily: "Lato-Bold",
    color: "#fff",
    fontWeight: "700",
    position: "absolute",
  },
  madeWithLove: {
    fontFamily: "Raleway-Regular",
  },
  v10: {
    fontFamily: "Montserrat-Bold",
    fontWeight: "700",
  },
  appVersion: {
    top: 762,
    left: "41.33%",
    fontSize: 10,
    letterSpacing: 0.3,
    position: "absolute",
  },
  onboardingSplashScreen: {
    borderRadius: 0,
    backgroundColor: "#234f68",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default OnboardingSplashScreen;
