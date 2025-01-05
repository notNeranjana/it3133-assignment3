import { View, Text, StyleSheet } from "react-native";

const Profile = ({ route }) => {
  const { student } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {student.name}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
