import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; 

const LoginOption = () => {
  const navigation = useNavigation(); 

  const handleNavigation = () => {
    navigation.navigate('LoginFormEmpty');
  };
  const handleNavigationSignUp = () =>{
    navigation.navigate('RegisterFormEmpty');
  }
  return (
    <View style={styles.loginOption}>
      <Text style={styles.register}>
        <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
        <TouchableOpacity onPress={handleNavigationSignUp}>
          <Text style={styles.text1Typo}>
            {` `}
            <Text style={styles.register2}>Register</Text>
          </Text> 
        </TouchableOpacity>

      </Text>
      <View style={[styles.login, styles.loginPosition]}>
        <View style={[styles.buttonSocmed, styles.buttonLayout]}>
          <View style={styles.layout}>
            <Image
              style={styles.logoGoogleNormal}
              contentFit="cover"
              source={require("../assets/logo--google--normal.png")}
            />
          </View>
        </View>
        <View style={[styles.buttonSocmed1, styles.buttonLayout]}>
          <View style={styles.layout}>
            <Image
              style={styles.logoGoogleNormal}
              contentFit="cover"
              source={require("../assets/logo--facebook--normal.png")}
            />
          </View>
        </View>
        <View style={[styles.itemSeparator, styles.itemSeparatorPosition]}>
          <Image
            style={styles.itemSeparatorChild}
            contentFit="cover"
            source={require("../assets/vector-5.png")}
          />
          <View style={[styles.january122022, styles.itemSeparatorPosition]}>
            <Text style={styles.text}>OR</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.title, styles.loginPosition]}>
        <Text style={styles.readyTo}>{`Ready to `}</Text>
        <Text style={styles.explore}>explore?</Text>
      </Text>
      <Image
        style={[styles.loginOptionChild, styles.loginLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Image
        style={[styles.loginOptionItem, styles.loginLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={[styles.loginOptionInner, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-11.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={styles.iconEmail}
        contentFit="cover"
        source={require("../assets/icon--email.png")}
      />
      <TouchableOpacity onPress={handleNavigation}>
        <Text style={[styles.text1, styles.text1Typo]}>Continue with Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPosition: {
    marginTop: 50,
    left: "10%",
    position: "absolute",
  },
  buttonLayout: {
    backgroundColor: "#f5f4f8",
    borderRadius: 25,
    top: "20%",
    width: "40%",
    height: "50%",
    bottom: "0%",
    position: "absolute",
    marginTop:5
  },
  itemSeparatorPosition: {
    top: "0%",
    position: "absolute",
  },
  loginLayout: {
    height: 174,
    width: 171,
    borderRadius: 20,
    left: 13,
    position: "absolute",
  },
  rectangleIconLayout: {
    left: 190,
    height: 174,
    width: 171,
    borderRadius: 20,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: "Lato-Bold",
    fontWeight: "700"
  },
  dontHaveAn: {
    fontFamily: "Lato-Regular",
    color: "#53587a",
  },
  register2: {
    color: "#1f4c6b",
  },
  register: {
    top: "94.58%",
    left: "24.8%",
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 20,
    textAlign: "left",
    position: "absolute",
  },
  logoGoogleNormal: {
    width: 25,
    height: 25,
  },
  layout: {
    marginLeft: -14,
    top: 10,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  buttonSocmed: {
    right: "51.53%",
    left: "0%",
  },
  buttonSocmed1: {
    left: "51.53%",
    right: "0%",
  },
  itemSeparatorChild: {
    height: "7%",
    width: "100.4%",
    top: "10%",
    right: "-0.2%",
    bottom: "47.05%",
    left: "-0.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontSize: 10,
    letterSpacing: 0.3,
    fontWeight: "600",
    fontFamily: "Raleway-SemiBold",
    color: "#a1a5c1",
    textAlign: "center",
  },
  january122022: {
    height: "100%",
    width: "15%",
    right: "44%",
    left: "41%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    bottom: "0%",
    top: "0%",
    backgroundColor: "#fff",
  },
  itemSeparator: {
    height: "19.64%",
    bottom: "90%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  login: {
    height: "12%",
    width: "88%",
    top: "77%",
    right: "6.4%",
    bottom: "9.73%",
  },
  readyTo: {
    fontWeight: "500",
    fontFamily: "Lato-Light",
    color: "#252b5c",
  },
  explore: {
    fontWeight: "800",
    fontFamily: "Lato-Black",
    color: "#1f4c6b",
  },
  title: {
    top: "56%",
    fontSize: 25,
    letterSpacing: 0.8,
    lineHeight: 40,
    textAlign: "left",
  },
  loginOptionChild: {
    top: 40,
  },
  loginOptionItem: {
    top: 220,
    
  },
  loginOptionInner: {
    top: 220,
  },
  rectangleIcon: {
    top: 40,
  },
  rectangleView: {
    top: 480,
    left: 49,
    borderRadius: 10,
    backgroundColor: "#8bc83f",
    width: 278,
    height: 63,
    position: "absolute",
  },
  iconEmail: {
    top: 500,
    left: 103,
    width: 20,
    height: 20,
    position: "absolute",
  },
  text1: {
    top: 500,
    left: 129,
    fontSize: 16,
    letterSpacing: 0.5,
    color: "#fff",
    textAlign: "center",
    position: "absolute",
  },
  loginOption: {
    flex: 1,
    height: '100vh',
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default LoginOption;
