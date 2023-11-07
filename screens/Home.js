import * as React from "react";
import { Text, StyleSheet, View, Image,ScrollView } from "react-native";

const HomeShort = () => {
  
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>

    <View style={styles.homeShort}>
      <View style={[styles.featuredEstates, styles.featuredEstatesLayout]}>
        <View style={[styles.itemHeaderTextButton, styles.textPosition]}>
          <View style={[styles.group, styles.groupPosition]}>
            <Text style={[styles.featuredEstates1, styles.textTypo5]}>
              Featured Estates
            </Text>
          </View>
          <Text style={styles.text}>view all</Text>
        </View>
      </View>
      <View style={[styles.category, styles.layoutFlexBox1]}>
        <View style={[styles.buttonCategoryRounded, styles.buttonSpaceBlock]}>
          <View style={styles.layoutFlexBox}>
            <Text style={[styles.text1, styles.textTypo4]}>🏡️</Text>
            <Text style={[styles.text2, styles.textTypo3]}>All</Text>
          </View>
        </View>
        <View style={[styles.buttonCategoryRounded1, styles.buttonSpaceBlock]}>
          <View style={styles.layoutFlexBox}>
            <Text style={styles.textTypo4}>🏠</Text>
            <Text style={styles.text4}>House</Text>
          </View>
        </View>
        <View style={[styles.buttonCategoryRounded1, styles.buttonSpaceBlock]}>
          <View style={styles.layoutFlexBox}>
            <Text style={styles.textTypo4}>🏢</Text>
            <Text style={styles.text4}>Apartment</Text>
          </View>
        </View>
        <View style={[styles.buttonCategoryRounded1, styles.buttonSpaceBlock]}>
          <View style={styles.layoutFlexBox}>
            <Text style={styles.textTypo4}>🏠</Text>
            <Text style={styles.text4}>House</Text>
          </View>
        </View>
      </View>
      <View style={styles.formSearchEmpty}>
        <View style={[styles.shape, styles.shapePosition]} />
        <View style={[styles.layout4, styles.layoutFlexBox]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <Text style={[styles.text9, styles.textTypo2]}>
            Search House, Apartment, etc
          </Text>
        </View>
        <Image
          style={[styles.iconMicActive, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon--mic--active.png")}
        />
        <Image
          style={[styles.formSearchEmptyChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-4.png")}
        />
      </View>
      <Text style={styles.heyJonathanLetsContainer}>
        <Text style={styles.hey}>
          <Text style={styles.hey1}>Hey,</Text>
          <Text style={styles.text10}>{` `}</Text>
        </Text>
        <Text style={styles.jonathan}>
          <Text style={styles.jonathan1}>Jonathan!</Text>
        </Text>
        <Text style={styles.hey}>
          <Text style={styles.jonathan}>{` `}</Text>
          <Text style={styles.hey1}>Let's explore</Text>
          <Text style={styles.text10}>{` `}</Text>
          <Text style={styles.hey1}>{` `}</Text>
        </Text>
      </Text>
      
      <Image
        style={[styles.image25Icon, styles.image25IconLayout]}
        contentFit="cover"
        source={require("../assets/image-25.png")}
      />
      <Image
        style={[styles.homeShortChild, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <View style={[styles.homeShortItem, styles.homeLayout]} />
      <View style={styles.group2}>
        <Text style={[styles.text14, styles.textClr]}>{`Summer
Vacation`}</Text>
        <Text style={[styles.text15, styles.textClr]}>
          All discount up to 60%
        </Text>
      </View>
      <View style={[styles.shape2, styles.shapeLayout]} />
      <Image
        style={[styles.groupIcon2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <View style={[styles.layout6, styles.layoutFlexBox1]}>
        <View style={styles.estatesCardLayout}>
          <View style={[styles.shape3, styles.shape3Position]}>
            <Image
              style={[styles.shapeIcon, styles.shapeIconLayout]}
              contentFit="cover"
              source={require("../assets/shape.png")}
            />
            <View style={styles.buttonCategorySquareT}>
              <View style={styles.layoutFlexBox}>
                <Text style={styles.text16}>🏢</Text>
                <Text style={[styles.text17, styles.textTypo1]}>Apartment</Text>
              </View>
            </View>
            <Image
              style={[styles.buttonFavorite, styles.shape3Position]}
              contentFit="cover"
              source={require("../assets/button--favorite.png")}
            />
          </View>
          <View style={[styles.layout8, styles.layoutFlexBox1]}>
            <Text style={styles.text18}>$ 290</Text>
            <Text style={[styles.text19, styles.textTypo1]}>/month</Text>
          </View>
          <View style={styles.layout9}>
            <Text style={[styles.text20, styles.textTypo2]}>{`Sky Dandelions
Apartment`}</Text>
            <View style={styles.layout10}>
              <View style={styles.layoutFlexBox}>
                <Image
                  style={styles.iconStarSmall}
                  contentFit="cover"
                  source={require("../assets/icon--star--small.png")}
                />
                <Text style={[styles.text21, styles.textTypo]}>4.9</Text>
              </View>
              <View style={[styles.layout12, styles.layoutFlexBox]}>
                <Image
                  style={styles.iconStarSmall}
                  contentFit="cover"
                  source={require("../assets/icon--location1.png")}
                />
                <Text style={[styles.text22, styles.textTypo]}>
                  Jakarta, Indonesia
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[styles.estatesCardHorizontalSh1, styles.estatesCardLayout]}
        >
          <View style={[styles.shape3, styles.shape3Position]}>
            <Image
              style={[styles.shapeIcon1, styles.shapeIconLayout]}
              contentFit="cover"
              source={require("../assets/shape1.png")}
            />
            <View style={styles.buttonCategorySquareT}>
              <View style={styles.layoutFlexBox}>
                <Text style={styles.text16} />
                <Text style={[styles.text17, styles.textTypo1]}>Villa</Text>
              </View>
            </View>
            <Image
              style={[styles.buttonFavorite, styles.shape3Position]}
              contentFit="cover"
              source={require("../assets/component-8.png")}
            />
          </View>
          <View style={[styles.layout8, styles.layoutFlexBox1]}>
            <Text style={styles.text18}>$ 220</Text>
            <Text style={[styles.text19, styles.textTypo1]}>/month</Text>
          </View>
          <View style={styles.layout9}>
            <Text style={[styles.text20, styles.textTypo2]}>{`Sky Dandelions
Apartment`}</Text>
            <View style={styles.layout10}>
              <View style={styles.layoutFlexBox}>
                <Image
                  style={styles.iconStarSmall}
                  contentFit="cover"
                  source={require("../assets/icon--star--small.png")}
                />
                <Text style={[styles.text21, styles.textTypo]}>{`4.2 `}</Text>
              </View>
              <View style={[styles.layout12, styles.layoutFlexBox]}>
                <Image
                  style={styles.iconStarSmall}
                  contentFit="cover"
                  source={require("../assets/icon--location1.png")}
                />
                <Text style={[styles.text22, styles.textTypo]}>
                  Jakarta, Indonesia
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.homeShortInner, styles.homeLayout]} />
      <Text style={[styles.text28, styles.textClr]}>{`Halloween Sale!`}</Text>
      <Text style={[styles.text29, styles.textClr]}>
        All discount up to 60%
      </Text>
      <View style={[styles.shape5, styles.shapeLayout]} />
      <Image
        style={[styles.groupIcon3, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  featuredEstatesLayout: {
    height: 21,
    width: 327,
    position: "absolute",
  },
  textPosition: {
    top: 0,
    left: 0,
  },
  groupPosition: {
    top: "0%",
    left: 0,
    position: "absolute",
  },
  textTypo5: {
    fontSize: 18,
    letterSpacing: 0.5,
  },
  layoutFlexBox1: {
    flexDirection: "row",
    position: "absolute",
  },
  buttonSpaceBlock: {
    paddingHorizontal: 24,
    borderRadius: 20,
    paddingVertical: 18,
  },
  textTypo4: {
    display: "none",
    fontSize: 15,
    fontFamily: "Raleway-Regular",
    textAlign: "left",
    color: "#252b5c",
    letterSpacing: 0.5,
  },
  textTypo3: {
    fontFamily: "Raleway-Bold",
    fontWeight: "700",
  },
  shapePosition: {
    left: "0%",
    right: "0%",
  },
  layoutFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo2: {
    letterSpacing: 0.4,
    fontSize: 12,
    textAlign: "left",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  shape1Border: {
    borderStyle: "solid",
    borderRadius: 25,
    position: "absolute",
    backgroundColor: "#fff",
  },
  image25IconLayout: {
    height: 180,
    width: 270,
    borderRadius: 25,
    position: "absolute",
  },
  homePosition: {
    top: 365,
    left: 291,
  },
  homeLayout: {
    backgroundColor: "#000",
    height: 180,
    width: 270,
    borderRadius: 25,
    position: "absolute",
  },
  textClr: {
    color: "#fff",
    textAlign: "left",
    position: "absolute",
  },
  shapeLayout: {
    height: 56,
    width: 93,
    borderTopRightRadius: 25,
    backgroundColor: "#234f68",
    position: "absolute",
  },
  groupIconLayout: {
    height: 8,
    width: 18,
    bottom: 291,
    position: "absolute",
  },
  shape3Position: {
    top: 8,
    left: 8,
    position: "absolute",
  },
  shapeIconLayout: {
    borderRadius: 18,
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  textTypo1: {
    letterSpacing: 0.2,
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
  },
  textTypo: {
    marginLeft: 2,
    color: "#53587a",
    fontSize: 8,
    textAlign: "left",
  },
  estatesCardLayout: {
    height: 156,
    width: 268,
    borderRadius: 25,
    backgroundColor: "#f5f4f8",
  },
  featuredEstates1: {
    textAlign: "left",
    color: "#252b5c",
    fontFamily: "Lato-Bold",
    fontWeight: "700",
    letterSpacing: 0.5,
    top: "0%",
    left: 0,
    position: "absolute",
  },
  group: {
    height: "104.76%",
    bottom: "-4.76%",
    width: 144,
  },
  text: {
    top: "42.86%",
    right: 0,
    lineHeight: 9,
    fontFamily: "Raleway-SemiBold",
    textAlign: "right",
    color: "#234f68",
    fontWeight: "600",
    letterSpacing: 0.3,
    fontSize: 10,
    position: "absolute",
  },
  itemHeaderTextButton: {
    left: 0,
    height: 21,
    width: 327,
    position: "absolute",
  },
  featuredEstates: {
    top: 560,
    left: 25,
  },
  text1: {
    lineHeight: 15,
  },
  text2: {
    marginLeft: 8,
    color: "#f5f4f8",
    letterSpacing: 0.3,
    fontSize: 10,
    textAlign: "left",
  },
  buttonCategoryRounded: {
    paddingVertical: 18,
    backgroundColor: "#234f68",
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  text4: {
    fontFamily: "Raleway-Medium",
    fontWeight: "500",
    marginLeft: 8,
    letterSpacing: 0.3,
    fontSize: 10,
    textAlign: "left",
    color: "#252b5c",
  },
  buttonCategoryRounded1: {
    marginLeft: 10,
    backgroundColor: "#f5f4f8",
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  category: {
    top: 299,
    left: 24,
  },
  shape: {
    borderRadius: 10,
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: "#f5f4f8",
    position: "absolute",
  },
  groupIcon: {
    width: 20,
    height: 20,
  },
  text9: {
    color: "#a1a5c1",
    marginLeft: 10,
    fontFamily: "Raleway-Regular",
  },
  layout4: {
    top: 25,
    left: 16,
    position: "absolute",
  },
  iconMicActive: {
    height: "28.57%",
    width: "6.12%",
    top: "35.71%",
    right: "4.89%",
    bottom: "35.71%",
    left: "88.99%",
  },
  formSearchEmptyChild: {
    height: "54%",
    width: "0.4%",
    top: "23.36%",
    right: "15.7%",
    bottom: "22.64%",
    left: "83.9%",
    opacity: 0.2,
  },
  formSearchEmpty: {
    top: 209,
    height: 70,
    left: 24,
    width: 327,
    position: "absolute",
  },
  hey1: {
    fontFamily: "Lato-Light",
    fontWeight: "500",
  },
  text10: {
    fontWeight: "600",
    fontFamily: "Lato-Bold",
  },
  hey: {
    color: "#252b5c",
  },
  jonathan1: {
    color: "#234f68",
  },
  jonathan: {
    fontWeight: "800",
    fontFamily: "Lato-Black",
  },
  heyJonathanLetsContainer: {
    top: 109,
    left: 27,
    fontSize: 25,
    letterSpacing: 0.8,
    lineHeight: 40,
    textAlign: "left",
    position: "absolute",
  },
  menuHome: {
    bottom: 0,
    width: 375,
    height: 90,
    left: 0,
    position: "absolute",
  },
  iconLocation: {
    width: 15,
    height: 15,
  },
  iconChevronDown: {
    width: 10,
    height: 10,
    marginLeft: 8,
  },
  buttonLocationDropdown: {
    left: 21,
    borderColor: "#ecedf3",
    borderWidth: 1,
    paddingHorizontal: 16,
    top: 29,
    paddingVertical: 18,
  },
  buttonNotification: {
    left: 240,
    width: 50,
    height: 50,
    top: 29,
    position: "absolute",
  },
  groupIcon1: {
    height: "1.48%",
    width: "3.2%",
    top: "4.8%",
    right: "10.13%",
    bottom: "93.72%",
    left: "86.67%",
  },
  ionnotificationsOutlineIcon: {
    height: "2.46%",
    width: "5.33%",
    top: "5.42%",
    right: "10.67%",
    bottom: "92.12%",
    left: "84%",
  },
  shape1: {
    borderColor: "#dfdfdf",
    borderWidth: 1.2,
    left: "0%",
    right: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
  },
  group1: {
    height: "6.16%",
    width: "13.33%",
    top: "3.57%",
    right: "6.67%",
    bottom: "90.27%",
    left: "80%",
    position: "absolute",
  },
  ellipseIcon: {
    top: 32,
    left: 303,
    width: 44,
    height: 44,
    position: "absolute",
  },
  image25Icon: {
    left: 8,
    top: 364,
  },
  homeShortChild: {
    left: 291,
    height: 180,
    width: 270,
    borderRadius: 25,
    position: "absolute",
  },
  homeShortItem: {
    opacity: 0.3,
    left: 291,
    top: 365,
  },
  text14: {
    fontFamily: "Raleway-Bold",
    fontWeight: "700",
    letterSpacing: 0.5,
    fontSize: 18,
    left: 0,
    top: 0,
  },
  text15: {
    top: 50,
    fontFamily: "Raleway-Regular",
    fontSize: 10,
    left: 0,
  },
  group2: {
    top: 402,
    left: 310,
    width: 103,
    height: 62,
    position: "absolute",
  },
  shape2: {
    bottom: 267,
    left: 291,
  },
  groupIcon2: {
    left: 326,
  },
  shapeIcon: {
    right: "-49.21%",
    left: "49.21%",
  },
  text16: {
    fontSize: 11,
    fontFamily: "Raleway-Regular",
    letterSpacing: 0.3,
    textAlign: "left",
    color: "#252b5c",
  },
  text17: {
    marginLeft: 6,
    fontFamily: "Raleway-Medium",
    color: "#f5f4f8",
  },
  buttonCategorySquareT: {
    bottom: 8,
    borderRadius: 8,
    backgroundColor: "rgba(63, 70, 124, 0.69)",
    padding: 7,
    left: 8,
    position: "absolute",
  },
  buttonFavorite: {
    width: 25,
    height: 25,
  },
  shape3: {
    width: 126,
    height: 140,
  },
  text18: {
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    textAlign: "left",
    color: "#252b5c",
    letterSpacing: 0.5,
  },
  text19: {
    lineHeight: 13,
    fontFamily: "Montserrat-Medium",
    color: "#252b5c",
  },
  layout8: {
    bottom: 21,
    left: 150,
    alignItems: "flex-end",
  },
  text20: {
    lineHeight: 18,
    width: 108,
    fontFamily: "Raleway-Bold",
    fontWeight: "700",
    color: "#252b5c",
  },
  iconStarSmall: {
    width: 9,
    height: 9,
  },
  text21: {
    lineHeight: 8,
    fontFamily: "Montserrat-Bold",
    fontWeight: "700",
  },
  text22: {
    fontFamily: "Raleway-Regular",
  },
  layout12: {
    marginTop: 8,
  },
  layout10: {
    marginTop: 8,
  },
  layout9: {
    top: 16,
    right: 10,
    position: "absolute",
  },
  shapeIcon1: {
    left: "0%",
    right: "0%",
    borderRadius: 18,
  },
  estatesCardHorizontalSh1: {
    marginLeft: 10,
  },
  layout6: {
    top: 590,
    left: -70,
  },
  homeShortInner: {
    opacity: 0.39,
    left: 8,
    top: 364,
  },
  text28: {
    top: 407,
    left: 28,
    fontFamily: "Raleway-Bold",
    fontWeight: "700",
    letterSpacing: 0.5,
    fontSize: 18,
  },
  text29: {
    top: 457,
    left: 29,
    fontFamily: "Raleway-Regular",
    fontSize: 10,
  },
  shape5: {
    bottom: 268,
    left: 8,
  },
  groupIcon3: {
    left: 42,
  },
  homeShort: {
    borderRadius: 50,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});


export default HomeShort;
