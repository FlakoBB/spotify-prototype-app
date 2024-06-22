import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const HomePage = () => {
  const location = useLocation()

  const getTokens = async () => {
    const credentials = btoa(`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`)
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
      })

      if (!response.ok) {
        throw new Error('Error al obtener el token')
      }

      const data = await response.json()
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const spotifyCode = urlParams.get('code')
    console.log(spotifyCode)
    getTokens()
  }, [location.search])

  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/profile'>Profile</Link>
    </div>
  )
}

export default HomePage
