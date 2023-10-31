const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

//screens
import OnboardingSplashScreen from "./screens/OnboardingSplashScreen";
import OnboardingProductTour01 from './screens/OnboardingProductTour01';
import LoginOption from "./screens/LoginOption";
import RegisterFormEmpty from "./screens/RegisterFormEmpty";
import LoginFormEmpty from "./screens/LoginFormEmpty";
import AccountSetupUserEmpty from "./screens/AccountSetupUserEmpty";
import HomeShort from "./screens/HomeShort";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),

    "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
    "Raleway-SemiBold": require("./assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-Bold": require("./assets/fonts/Raleway-Bold.ttf"),
    
    //
    "Raleway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),

    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),

    //
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="OnboardingSplashScreen"
              component={OnboardingSplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingProductTour01"
              component={OnboardingProductTour01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginOption"
              component={LoginOption}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginFormEmpty"
              component={LoginFormEmpty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterFormEmpty"
              component={RegisterFormEmpty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountSetupUserEmpty"
              component={AccountSetupUserEmpty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeShort"
              component={HomeShort}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;