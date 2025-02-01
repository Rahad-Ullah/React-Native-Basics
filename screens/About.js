import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const About = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>About Screen</Text>
      <TouchableOpacity>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        ></Button>
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
