import axios from "axios"
export async function fetchUserAccount() {
    try {
      const result = await axios.get("https://mocki.io/v1/4b26a47d-5052-46d3-8195-fa1990e879d9");
      return result.data
    } catch (error) {
      console.error(error);
      return ("error" + error)
    }
}
