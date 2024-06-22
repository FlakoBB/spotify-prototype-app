const LoginPage = () => {
  const loginSpotify = () => {
    const queryParams = new URLSearchParams({
      response_type: 'code',
      client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
      redirect_uri: import.meta.env.VITE_SPOTIFY_CALLBACK_HOST
    })

    const authorizationUrl = `https://accounts.spotify.com/authorize?${queryParams}`

    window.location.replace(authorizationUrl)
  }
  return (
    <main className="h-dvh flex flex-col items-center justify-center gap-8">
      <h1 className="font-bold text-3xl">Music Prototype App</h1>
      <button
        onClick={loginSpotify}
        className="py-2 px-6 rounded-3xl bg-flkblue font-semibold text-xl text-flkblue-light"
      >
        Login
      </button>
    </main>
  )
}

export default LoginPage
