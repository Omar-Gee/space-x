import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="bg-gray-800">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
