import axios from "axios";
export const addStudentInfo = async (studentInfo) => {
   await axios({
        method: 'post',
        url: 'http://localhost:8081/addStudentInfo',
        headers: {}, 
        data: {
          studentInfo
        }
    });
}
