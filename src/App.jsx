import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Announcement from './components/Announcement/Announcement'
import Guarantee from './components/Guarantee/Guarantee'
import InfoAndPrices from './components/InfoAndPrices/InfoAndPrices'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Announcement />
      <Guarantee />
      <InfoAndPrices />
      <Footer />
    </>
  )
}

export default App
