import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Alert, Linking} from "react-native";
import { theme } from "./theme";

export default function App() {

  const handleSignUp = () => {
    Alert.alert("Register for GHW", "Are you interested to participate in MLH?",
      [{text: "Nope",
        style: "destructive"
      }, 
      {text: "Yes!",
        style: "default",
        onPress: () => Linking.openURL("https://ghw.mlh.io/schedule")
      }]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headlineText}> MLH REACT NATIVE APP </Text>
      <Text> GLOBAL HACK WEEK </Text>
      <Text style={styles.bodyText}> Everyday we have a variety of live sessions for you to tune into and learn more about. Click below to see each day's schedule.</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}> 
        <Text style={styles.signUpButtonText}> Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: "center",
  },
  bodyText: {
    fontSize: 16,
    fontFamily: "System",
    color: "black",
    width: "80%", 
    marginVertical: 10, 
  }, 
  headlineText: {
    ...theme.textVariants.headLine,
    fontWeight: "bold"
  },
  signUpButton: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    padding: 16
  },
  signUpButtonText: {
    color: theme.colors.white 
  }
  
});
