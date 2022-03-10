import axios from "axios";
export const logInStudent = async (studentInfo) => {
    const result = await axios({
        method: 'post',
        url: 'http://localhost:8081/logInStudentInfo',
        headers: {}, 
        data: {
          studentInfo
        }
    });
    return result.data
}
