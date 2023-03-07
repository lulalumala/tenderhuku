import '@/styles/globals.css'
import States from '@/states'


export default function App({ Component, pageProps }) {
  return (
    <States>
      <Component {...pageProps} />
    </States>
  )
}
