import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <TouchableOpacity>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        ></Button>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
