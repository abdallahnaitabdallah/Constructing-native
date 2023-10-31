import * as React from "react";
import { StyleSheet, View, Text,Image } from "react-native";

const AccountSetupUserEmpty = () => {
  return (
    <View style={styles.accountSetupUserEmpty}>
      <View style={[styles.form, styles.formLayout1]}>
        <View style={[styles.formTextFill, styles.formLayout]}>
          <View style={[styles.shape, styles.shapeLayout]} />
          <Image
            style={[styles.iconProfile, styles.iconLayout]}
            source={require("../assets/icon--profile.svg")}
          />
          <Text style={[styles.text, styles.textTypo]}>Jonathan Anderson</Text>
        </View>
        <View style={[styles.formTextDisabled, styles.formLayout]}>
          <View style={[styles.shape1, styles.shapeLayout]} />
          <Image
            style={[styles.iconEmail, styles.iconLayout]}
            source={require("../assets/icon--email.svg")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>
            <Text style={styles.textTypo}>jonathan</Text>
            <Text style={styles.text2}>@</Text>
            <Text style={styles.textTypo}>email.com</Text>
          </Text>
        </View>
        <View style={[styles.formTextEmpty, styles.formLayout]}>
          <View style={[styles.shape, styles.shapeLayout]} />
          <View style={[styles.layout, styles.layoutFlexBox]}>
            <Image
              style={styles.iconCall}
              source={require("../assets/icon--call.svg")}
            />
            <Text style={[styles.text3, styles.textTypo1]}>mobile number</Text>
          </View>
        </View>
        <Image
          style={styles.photosUserMediumEdit}
          source={require("../assets/photos--user--medium--edit--empty.svg")}
        />
      </View>
      <View style={styles.title}>
        <Text style={styles.title1}>
          <Text
            style={[styles.fillYour, styles.below1Typo]}
          >{`Fill your `}</Text>
          <Text style={styles.information}>
            <Text style={styles.information1}>information</Text>
            <Text style={styles.text4}>{` 
`}</Text>
          </Text>
          <Text style={styles.text4}>
            <Text style={styles.below1Typo}>{`below `}</Text>
          </Text>
        </Text>
        <Text style={[styles.description, styles.textTypo1]}>
          You can edit this later on your account setting.
        </Text>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.buttonBackSolid, styles.headerLayout]}>
          <View style={[styles.group, styles.shapePosition]}>
            <View style={[styles.group, styles.shapePosition]}>
              <View style={[styles.shape3, styles.shapePosition]} />
            </View>
          </View>
          <Image
            style={[styles.iconChevronDown, styles.iconLayout]}
            source={require("../assets/icon--chevron--down.svg")}
          />
        </View>
        <View style={[styles.buttonSmall, styles.layoutFlexBox]}>
          <Text style={[styles.text5, styles.textTypo1]}>skip</Text>
        </View>
      </View>
      <View style={[styles.accountSetupUserEmptyChild, styles.shapeLayout]} />
      <Text style={styles.text6}>Next</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formLayout1: {
    width: 327,
    left: 24,
  },
  formLayout: {
    height: 70,
    left: 0,
    width: 327,
    position: "absolute",
  },
  shapeLayout: {
    borderRadius: 10,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: "Raleway-SemiBold",
    fontWeight: "600",
  },
  textTypo1: {
    letterSpacing: 0.4,
    fontSize: 12,
    textAlign: "left",
  },
  layoutFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  below1Typo: {
    fontFamily: "Lato-Light",
    fontWeight: "500",
  },
  headerLayout: {
    height: 50,
    position: "absolute",
  },
  shapePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  shape: {
    backgroundColor: "#f5f4f8",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iconProfile: {
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    width: 20,
    bottom: "35.71%",
    right: 16,
    top: "35.71%",
    height: "28.57%",
    maxHeight: "100%",
  },
  text: {
    textAlign: "left",
    color: "#252b5c",
    letterSpacing: 0.4,
    fontSize: 12,
    left: "4.89%",
    top: "40%",
    position: "absolute",
  },
  formTextFill: {
    top: 130,
  },
  shape1: {
    backgroundColor: "#234f68",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iconEmail: {
    width: 20,
    bottom: "35.71%",
    right: 16,
    top: "35.71%",
    height: "28.57%",
    maxHeight: "100%",
  },
  text2: {
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
  },
  text1: {
    color: "#ecedf3",
    textAlign: "left",
    left: "4.89%",
    top: "40%",
    fontSize: 12,
    position: "absolute",
  },
  formTextDisabled: {
    top: 300,
  },
  iconCall: {
    height: 20,
    width: 20,
  },
  text3: {
    fontFamily: "Raleway-Regular",
    color: "#a1a5c1",
    marginLeft: 10,
    textAlign: "left",
  },
  layout: {
    top: 25,
    left: 16,
    alignItems: "center",
  },
  formTextEmpty: {
    top: 215,
  },
  photosUserMediumEdit: {
    left: 114,
    width: 100,
    height: 100,
    top: 0,
    position: "absolute",
  },
  form: {
    top: 295,
    height: 370,
    position: "absolute",
  },
  fillYour: {
    color: "#252b5c",
  },
  information1: {
    color: "#234f68",
  },
  text4: {
    color: "#252b5c",
  },
  information: {
    fontWeight: "800",
    fontFamily: "Lato-Black",
  },
  title1: {
    fontSize: 25,
    letterSpacing: 0.8,
    lineHeight: 40,
    textAlign: "left",
  },
  description: {
    lineHeight: 20,
    fontFamily: "DMSans-Regular",
    color: "#53587a",
    marginTop: 20,
    textAlign: "left",
  },
  title: {
    top: 125,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  shape3: {
    borderRadius: 25,
    backgroundColor: "#f5f4f8",
    position: "absolute",
  },
  group: {
    position: "absolute",
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
    width: 50,
    top: 0,
    left: 0,
    height: 50,
    overflow: "hidden",
  },
  text5: {
    lineHeight: 22,
    fontFamily: "Montserrat-Regular",
    color: "#3a3f67",
    textAlign: "left",
  },
  buttonSmall: {
    top: 7,
    left: 241,
    borderRadius: 100,
    paddingHorizontal: 30,
    paddingVertical: 8,
    backgroundColor: "#f5f4f8",
  },
  header: {
    top: 24,
    width: 327,
    left: 24,
  },
  accountSetupUserEmptyChild: {
    top: 697,
    left: 49,
    backgroundColor: "#8bc83f",
    width: 278,
    height: 63,
  },
  text6: {
    top: 720,
    left: 172,
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: "Lato-Bold",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
  },
  accountSetupUserEmpty: {
    borderRadius: 50,
    backgroundColor: "#fff",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default AccountSetupUserEmpty;
