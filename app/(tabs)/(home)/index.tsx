import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Link href="/discover">Descobrir</Link>
      <Link
        href={{
          pathname: "/details/[id]",
          params: {
            id: 1,
          },
        }}
      >
        Ver 1
      </Link>
    </View>
  );
}
