import NewCard, { NewsArticle } from "@/components/news-card";
import useFetch from "@/hooks/useFetch";
import React from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const RenderNewsContainer = ({ category }: { category: string }) => {
  const { data, loading, error } = useFetch(category as string) as {
    data: { articles: NewsArticle[] } | null;
    loading: boolean;
    error: string | null;
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {category.toUpperCase()} NEWS
      </Text>
      <FlatList
        data={data?.articles ?? []}
        renderItem={({ item }) => <NewCard item={item} />}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RenderNewsContainer;
