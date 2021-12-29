export const fetchData = async (props) => {
  const { url, cb, options } = props
  // console.log('my props', url, cb, options )
  try {

      const response = options ? await fetch(url, options) : await fetch(url)
      const data = await response.json()
      if ( cb ) cb(data)

  } catch (error) {
    console.error('fetchData', error)
  }
}

export const fetchJSON = async (props) => {
  const { url, cb, options } = props
  console.log('my json props', url, cb, options )
  try {

      const response = options ? await fetch(url, options) : await fetch(url)
      console.log('got response', response)
      if ( cb ) cb(response)

  } catch (error) {
    console.error('fetchData', error)
  }
}
