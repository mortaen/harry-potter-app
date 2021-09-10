import { useData } from "./useData"

export function fetchStudents() {
  fetch("http://hp-api.herokuapp.com/api/characters/students")
    .then((response) => response.json())
    .then((studentData) => {
      useData(studentData)
    })
    .catch((error) => {
      console.log("Oh no! Error: ", error)
    })
}
