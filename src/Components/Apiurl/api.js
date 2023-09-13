import axios from "axios";

export async function FetchApi() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch data from the api")
  }
}
