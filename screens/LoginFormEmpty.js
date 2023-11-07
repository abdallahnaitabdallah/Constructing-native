import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; 

const LoginFormEmpty = () => {
  const navigation = useNavigation(); 

  const handleNavigation = () => {
    navigation.navigate('RegisterFormEmpty');
  };
  return (
    <View style={styles.loginFormEmpty}>
      <Text style={[styles.register, styles.registerTypo]}>
        <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
        <TouchableOpacity onPress={handleNavigation}>

        <Text style={styles.register1}> Register</Text>
        </TouchableOpacity>
      </Text>
      <View style={styles.login}>
        <View style={styles.buttonSocmed}>
          <View style={[styles.layout, styles.layoutFlexBox]}>
            <Image
              style={styles.logoFacebookNormal}
              contentFit="cover"
              source={require("../assets/logo--facebook--normal.png")}
            />
          </View>
        </View>
        <View style={[styles.buttonSocmed1, styles.shapePosition1]}>
          <View style={[styles.layout, styles.layoutFlexBox]}>
            <Image
              style={styles.logoFacebookNormal}
              contentFit="cover"
              source={require("../assets/logo--google--normal.png")}
            />
          </View>
        </View>
        <View style={styles.itemSeparator}>
          <Image
            style={styles.itemSeparatorChild}
            contentFit="cover"
            source={require("../assets/vector-5.png")}
          />
          <View style={[styles.january122022, styles.shapePosition]}>
            <Text style={styles.text}>OR</Text>
          </View>
        </View>
      </View>
      <View style={styles.form}>
        <View style={[styles.formTextEmpty, styles.formLayout]}>
          <View style={[styles.shape, styles.shapeLayout]} />
          <View style={[styles.layout2, styles.layoutFlexBox]}>
            <Image
              style={styles.iconEmail}
              contentFit="cover"
              source={require("../assets/icon--email.png")}
            />
            <Text style={styles.text1}>Email</Text>
          </View>
        </View>
        <View style={[styles.formPasswordEmpty, styles.shapeLayout]}>
          <View style={[styles.shape, styles.shapeLayout]} />
          <View style={[styles.layout2, styles.layoutFlexBox]}>
            <Image
              style={styles.iconEmail}
              contentFit="cover"
              source={require("../assets/icon--lock.png")}
            />
            <Text style={styles.text1}>Password</Text>
          </View>
        </View>
        <Text style={[styles.forgotPassword, styles.passwordTypo]}>
          Forgot password?
        </Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.title1}>
          <Text style={styles.lets}>
            <Text style={styles.lets1}>Let’s</Text>
          </Text>
          <Text style={styles.text3}>
            <Text style={styles.lets}>{` `}</Text>
          </Text>
          <Text style={styles.signIn}>
            <Text style={styles.text3}>Sign In</Text>
            <Text style={styles.lets1}>{`     `}</Text>
          </Text>
        </Text>
      </View>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  registerTypo: {
    lineHeight: 20,
    textAlign: "left",
    letterSpacing: 0.4,
    fontSize: 12,
  },
  layoutFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  shapePosition1: {
    left: "0%",
    backgroundColor: "#f5f4f8",
  },
  shapePosition: {
    height: "100%",
    top: "0%",
    bottom: "0%",
  },
  formLayout: {
    height: 70,
    left: 0,
    width: 327,
  },
  shapeLayout: {
    borderRadius: 10,
    position: "absolute",
  },
  passwordTypo: {
    top: 165,
    fontFamily: "Raleway-SemiBold",
    fontWeight: "600",
    color: "#1f4c6b",
    lineHeight: 20,
    letterSpacing: 0.4,
    fontSize: 12,
    position: "absolute",
  },
  formTextEmptyPosition: {
    top: 0,
    position: "absolute",
  },
  dontHaveAn: {
    color: "#53587a",
    fontFamily: "Raleway-Regular",
  },
  register1: {
    fontWeight: "700",
    fontFamily: "Raleway-Bold",
    color: "#1f4c6b",
  },
  register: {
    top: "94.58%",
    left: "24.8%",
    textAlign: "left",
    position: "absolute",
  },
  logoFacebookNormal: {
    width: 25,
    height: 25,
  },
  layout: {
    marginLeft: -12.75,
    top: 22,
    left: "50%",
  },
  buttonSocmed: {
    left: "51.53%",
    backgroundColor: "#f5f4f8",
    borderRadius: 25,
    bottom: "0%",
    right: "0%",
    top: "37.5%",
    width: "48.47%",
    height: "62.5%",
    position: "absolute",
  },
  buttonSocmed1: {
    right: "51.53%",
    borderRadius: 25,
    bottom: "0%",
    top: "37.5%",
    width: "48.47%",
    height: "62.5%",
    left: "0%",
    position: "absolute",
  },
  itemSeparatorChild: {
    height: "5.91%",
    width: "100.4%",
    top: "47.05%",
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
    textAlign: "center",
    color: "#a1a5c1",
    fontFamily: "Raleway-SemiBold",
    fontWeight: "600",
  },
  january122022: {
    width: "10.7%",
    right: "44.8%",
    left: "44.5%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    height: "100%",
    position: "absolute",
    backgroundColor: "#fff",
  },
  itemSeparator: {
    height: "19.64%",
    bottom: "80.36%",
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  login: {
    height: "13.79%",
    width: "87.2%",
    top: "69.46%",
    right: "6.4%",
    bottom: "16.75%",
    left: "6.4%",
    position: "absolute",
  },
  shape: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f5f4f8",
    right: "0%",
    borderRadius: 10,
    width: "100%",
  },
  iconEmail: {
    width: 20,
    height: 20,
  },
  text1: {
    marginLeft: 10,
    color: "#a1a5c1",
    fontFamily: "Raleway-Regular",
    textAlign: "left",
    letterSpacing: 0.4,
    fontSize: 12,
  },
  layout2: {
    top: 25,
    left: 16,
  },
  formTextEmpty: {
    top: 0,
    position: "absolute",
  },
  formPasswordEmpty: {
    top: 85,
    height: 70,
    left: 0,
    width: 327,
  },
  forgotPassword: {
    left: 0,
    textAlign: "left",
  },
  showPassword: {
    right: 0,
    textAlign: "right",
  },
  form: {
    top: 267,
    left: 24,
    height: 185,
    width: 327,
    position: "absolute",
  },
  lets1: {
    fontWeight: "500",
    fontFamily: "Lato-Light",
  },
  lets: {
    color: "#252b5c",
  },
  text3: {
    fontWeight: "800",
    fontFamily: "Lato-Black",
  },
  signIn: {
    color: "#1f4c6b",
  },
  title1: {
    fontSize: 25,
    letterSpacing: 0.8,
    lineHeight: 40,
    textAlign: "left",
  },
  description: {
    fontFamily: "Lato-Regular",
    marginTop: 20,
    color: "#53587a",
    textAlign: "left",
  },
  title: {
    top: 153,
    left: 29,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 19,
    left: 44,
    width: 79,
    height: 74,
    position: "absolute",
  },
  undrawCityLifeGnpr1Icon: {
    width: 408,
    height: 175,
    left: 0,
    overflow: "hidden",
  },
  loginFormEmpty: {
    borderRadius: 50,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default LoginFormEmpty;
