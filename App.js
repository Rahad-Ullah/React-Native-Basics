import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        onPress={() => console.log("Tapped")}
        style={{ fontSize: 50, fontWeight: "bold" }}
      >
        Hello <Text style={{ color: "red" }}>World!</Text>
      </Text>
      <View
        style={{
          height: 200,
          width: "80%",
          backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: "red",
            borderRadius: 50,
          }}
        ></View>
      </View>
      <Button
        title="Press me"
        color={"red"}
        onPress={() => console.log("Button pressed")}
      ></Button>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => console.log("Tapped")}
      >
        <View
          style={{ backgroundColor: "red", height: 100, width: 100 }}
        ></View>
      </TouchableOpacity>
      <TouchableHighlight
        underlayColor={"black"}
        activeOpacity={0.5}
        onPress={() => console.log("Touchable Highlight Tapped")}
      >
        <View
          style={{ backgroundColor: "green", height: 100, width: 100 }}
        ></View>
      </TouchableHighlight>
      {/* <TouchableWithoutFeedback onPress={() => alert("Touchable Tapped")}>
        <View
          style={{ backgroundColor: "orange", height: 100, width: 100 }}
        ></View>
      </TouchableWithoutFeedback> */}

      <Image
        source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
        width={250}
        height={180}
      />
      {/* <Image
        source={require("./assets/splash-icon.png")}
        width={250}
        height={180}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
