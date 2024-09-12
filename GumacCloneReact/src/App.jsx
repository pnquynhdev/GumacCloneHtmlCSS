import { Collection } from 'mongoose';
import styles from './App.module.css'
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <main>
        <Banner/>
        {/* <Promotion/>
        <Collections/>
        <Services/> */}
      </main>
      {/* <Footer/> */}
    </div>
  )
}

export default App
