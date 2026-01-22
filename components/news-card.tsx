import React from "react";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
export interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}
interface NewsCardProps {
  item: NewsArticle;
}

const NewCard = ({ item }: NewsCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.urlToImage || "https://via.placeholder.com/150" }}
        style={styles.urlToImage}
        resizeMode="cover"
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.readMore} onPress={() => Linking.openURL(item.url)}>
        Read more
      </Text>
    </View>
  );
};

export default NewCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f8eded",
    borderRadius: 5,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  urlToImage: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#ccc",
    
  },
  readMore: {
    color: "blue",
    marginTop: 10,

    //add button like style
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    alignSelf: "flex-start",
  },
});
