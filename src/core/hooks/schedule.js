import axios from "axios"
export async function fetchUserSchedule() {
    try {
      const result = await axios.get("https://mocki.io/v1/e662c410-d71c-4529-8e1c-91d4cfc8b8c8");
      // const result = await axios.get("http://localhost:8081/schedule/1/1/stu1");
      return result.data
    } catch (error) {
      console.error(error);
      return ("error" + error)
    }
}
export async function fetchUserDetails() {
  try {
    const result = await axios.get("https://mocki.io/v1/34a2f095-0522-4db4-bd2f-63b5cc3d410e");
    return result.data
  } catch (error) {
    console.error(error);
    return ("error" + error)
  }
}
