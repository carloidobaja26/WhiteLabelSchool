import axios from "axios"
export async function fetchUserDetails() {
  try {
    const result = await axios.get("https://mocki.io/v1/34a2f095-0522-4db4-bd2f-63b5cc3d410e")
    return result.data
  } catch (error) {
    console.error(error);
    return ("error" + error)
  }
}