import * as React from "react";
import { Text, StyleSheet, View, Image} from "react-native";

const RegisterFormEmpty = () => {
  return (
    <View style={styles.registerFormEmpty}>
      <Text style={styles.login}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account? `}</Text>
        <Text style={styles.login1}>Login</Text>
      </Text>
      <View style={styles.register}>
        <View style={[styles.itemSeparator, styles.groupPosition1]}>
          <Image
            style={[styles.itemSeparatorChild, styles.iconChevronDownLayout]}
            contentFit="cover"
            source={require("../assets/vector-5.png")}
          />
          <View style={[styles.january122022, styles.layoutFlexBox1]}>
            <Text style={styles.text}>OR</Text>
          </View>
        </View>
        <View style={[styles.layout, styles.layoutFlexBox1]}>
          <View style={[styles.buttonSocmed, styles.buttonLayout]}>
            <View style={[styles.layout1, styles.layoutFlexBox]}>
              <Image
                style={styles.logoGoogleNormal}
                contentFit="cover"
                source={require("../assets/logo--google--normal.png")}
              />
            </View>
          </View>
          <View style={[styles.buttonSocmed1, styles.buttonLayout]}>
            <View style={[styles.layout1, styles.layoutFlexBox]}>
              <Image
                style={styles.logoGoogleNormal}
                contentFit="cover"
                source={require("../assets/logo--google--normal.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.form, styles.formLayout]}>
        <View style={[styles.formTextEmpty, styles.formLayout]}>
          <View style={[styles.shape, styles.shapeLayout]} />
          <View style={[styles.layout3, styles.layoutFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/icon--email.png")}
            />
            <Text style={[styles.text1, styles.text1Typo]}>Email</Text>
          </View>
        </View>
        <View style={[styles.formTextEmpty1, styles.formLayout]}>
          <View style={[styles.shape, styles.shapeLayout]} />
          <View style={[styles.layout3, styles.layoutFlexBox]}>
            <Image
              style={[styles.iconProfile, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon--profile.png")}
            />
            <Text style={[styles.text1, styles.text1Typo]}>Full name</Text>
          </View>
        </View>
        <View style={[styles.formPasswordEmpty, styles.formLayout]}>
          <View style={[styles.shape, styles.shapeLayout]} />
          <View style={[styles.layout3, styles.layoutFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/icon--lock.png")}
            />
            <Text style={[styles.text1, styles.text1Typo]}>Password</Text>
          </View>
        </View>
        <Text style={[styles.showPassword, styles.showPasswordTypo]}>
          Show password
        </Text>
        <Text style={[styles.termsOfService, styles.text4Typo]}>
          Terms of service
        </Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.title1}>
          <Text style={styles.createYour}>{`Create your `}</Text>
          <Text style={styles.account}>account</Text>
        </Text>
        <Text style={[styles.description, styles.text1Typo]}>
          quis nostrud exercitation ullamco laboris nisi ut
        </Text>
      </View>
      <View style={styles.buttonBackSolid}>
        <View style={[styles.group, styles.groupPosition]}>
          <View style={[styles.group, styles.groupPosition]}>
            <View style={[styles.shape3, styles.shapePosition]} />
          </View>
        </View>
        <Image
          style={[styles.iconChevronDown, styles.iconChevronDownLayout]}
          contentFit="cover"
          source={require("../assets/icon--chevron--down.png")}
        />
      </View>
      <View style={[styles.registerFormEmptyChild, styles.shapeLayout]} />
      <Text style={[styles.text4, styles.text4Typo]}>Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition1: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  iconChevronDownLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  layoutFlexBox1: {
    flexDirection: "row",
    position: "absolute",
  },
  buttonLayout: {
    width: 159,
    height: 70,
    backgroundColor: "#f5f4f8",
    borderRadius: 25,
  },
  layoutFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  formLayout: {
    width: 327,
    position: "absolute",
  },
  shapeLayout: {
    borderRadius: 10,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: "Lato-Regular",
    textAlign: "left",
    letterSpacing: 0.4,
    fontSize: 12,
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  showPasswordTypo: {
    top: 250,
    fontWeight: "600",
    color: "#234f68",
    lineHeight: 20,
    letterSpacing: 0.4,
    fontSize: 12,
  },
  text4Typo: {
    fontFamily: "Lato-Bold",
    position: "absolute",
  },
  groupPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  shapePosition: {
    backgroundColor: "#f5f4f8",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  alreadyHaveAn: {
    fontFamily: "Raleway-Regular",
    color: "#53587a",
  },
  login1: {
    fontFamily: "Raleway-Bold",
    color: "#234f68",
    fontWeight: "700",
  },
  login: {
    top: 9127,
    left: "131.73%",
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0.4,
    fontSize: 12,
    position: "absolute",
  },
  itemSeparatorChild: {
    height: "1486.36%",
    top: "50%",
    bottom: "-1436.36%",
    width: 0,
    left: "0%",
  },
  text: {
    fontSize: 10,
    letterSpacing: 0.3,
    color: "#a1a5c1",
    fontFamily: "Raleway-SemiBold",
    fontWeight: "600",
    textAlign: "center",
  },
  january122022: {
    width: "10.7%",
    right: "44.8%",
    left: "44.5%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    bottom: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  itemSeparator: {
    height: 22,
    left: "0%",
    top: 0,
  },
  logoGoogleNormal: {
    width: 25,
    height: 25,
  },
  layout1: {
    marginLeft: -12.75,
    top: 22,
    left: "50%",
  },
  buttonSocmed: {
    height: 70,
  },
  buttonSocmed1: {
    marginLeft: 10,
    height: 70,
  },
  layout: {
    top: 42,
    left: 0,
  },
  register: {
    width: "87.2%",
    top: 8977,
    right: "-100.27%",
    left: "113.07%",
    height: 112,
    position: "absolute",
  },
  shape: {
    backgroundColor: "#f5f4f8",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  text1: {
    textAlign: "left",
    marginLeft: 10,
    color: "#a1a5c1",
  },
  layout3: {
    top: 25,
    left: 16,
  },
  formTextEmpty: {
    top: 85,
    height: 70,
    left: 0,
  },
  iconProfile: {
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  formTextEmpty1: {
    height: 70,
    left: 0,
    top: 0,
  },
  formPasswordEmpty: {
    top: 170,
    height: 70,
    left: 0,
  },
  showPassword: {
    right: 0,
    textAlign: "right",
    fontFamily: "Raleway-SemiBold",
    position: "absolute",
  },
  termsOfService: {
    right: 235,
    top: 250,
    fontWeight: "600",
    color: "#234f68",
    lineHeight: 20,
    letterSpacing: 0.4,
    fontSize: 12,
    textAlign: "left",
  },
  form: {
    top: 254,
    height: 270,
    left: 24,
  },
  createYour: {
    fontWeight: "500",
    fontFamily: "Lato-Light",
    color: "#252b5c",
  },
  account: {
    fontWeight: "800",
    fontFamily: "Lato-Black",
    color: "#234f68",
  },
  title1: {
    fontSize: 25,
    letterSpacing: 0.8,
    lineHeight: 40,
    textAlign: "left",
  },
  description: {
    marginTop: 20,
    textAlign: "left",
    color: "#53587a",
    lineHeight: 20,
  },
  title: {
    top: 124,
    left: 24,
    position: "absolute",
  },
  shape3: {
    borderRadius: 25,
    backgroundColor: "#f5f4f8",
    position: "absolute",
  },
  group: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconChevronDown: {
    height: "36%",
    width: "36%",
    top: "32%",
    right: "32%",
    bottom: "32%",
    left: "32%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  buttonBackSolid: {
    top: 24,
    width: 50,
    height: 50,
    left: 24,
    position: "absolute",
  },
  registerFormEmptyChild: {
    top: 548,
    left: 51,
    backgroundColor: "#8bc83f",
    width: 278,
    height: 63,
  },
  text4: {
    top: 571,
    left: 159,
    fontSize: 16,
    letterSpacing: 0.5,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  registerFormEmpty: {
    borderRadius: 50,
    flex: 1,
    height: 843,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default RegisterFormEmpty;
