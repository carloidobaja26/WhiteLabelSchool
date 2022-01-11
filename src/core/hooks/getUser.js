import axios from "axios"

export async function fetchUserDetails() {
  try {
    const result = await axios.get("https://retoolapi.dev/OedV66/data")
    return result.data
  } catch (error) {
    console.error(error)
    return "error" + error
  }
}
