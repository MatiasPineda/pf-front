import axios from 'axios'

export function getProjects() {
  const path = 'http://127.0.0.1:8000/api/v1.0/projects/'
  axios.get(path).then((response) => {
    this.farmacias = response.data
  })
      .catch((error) => {
        console.log(error)
      })
}