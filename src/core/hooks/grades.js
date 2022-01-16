import axios from "axios"
export async function fetchUserGrades() {
    try {
      const result = await axios.get("https://mocki.io/v1/2e3e07c1-da23-42df-91c0-93fd7bd0c844");
      return result.data
    } catch (error) {
      console.error(error);
      return ("error" + error)
    }
}
