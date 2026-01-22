const apiClient = async (category: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}top-headlines?country=us&category=${category}&apiKey=${process.env.EXPO_PUBLIC_API_KEY}`,
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default apiClient;
