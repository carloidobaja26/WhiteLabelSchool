import axios from "axios"
export async function fetchUserSchedule() {
    try {
      const result = await axios.get("https://retoolapi.dev/u17D2U/data");
      return result.data
    } catch (error) {
      console.error(error);
      return ("error" + error)
    }
}
