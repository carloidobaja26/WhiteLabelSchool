import axios from "axios"
export async function fetchUserGrades() {
    try {
      const result = await axios.get("https://retoolapi.dev/26h3Nf/data");
      return result.data
    } catch (error) {
      console.error(error);
      return ("error" + error)
    }
}
