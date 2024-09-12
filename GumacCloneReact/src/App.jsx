import styles from "./App.module.css";
import Navbar from "./navbar/Navbar";
import Banner from "./banner/Banner";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Banner />
      {/* <Promotion/>
        <Collections/>
        <Services/> */}

      {/* <Footer/> */}
    </div>
  );
}

export default App;
