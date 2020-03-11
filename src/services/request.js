import axios from 'axios'

const get = async (api) => {
  try { return await axios.get(api) }

  catch (err) {
    console.error(err)
    return null
  }
}



export default get
