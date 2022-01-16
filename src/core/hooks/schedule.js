import axios from "axios"
export async function fetchUserSchedule() {
    try {
      const result = await axios.get("https://mocki.io/v1/e662c410-d71c-4529-8e1c-91d4cfc8b8c8");
      return result.data
    } catch (error) {
      console.error(error);
      return ("error" + error)
    }
}
