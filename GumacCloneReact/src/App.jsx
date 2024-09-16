import styles from "./App.module.css";
import Navbar from "./navbar/Navbar";
import Banner from "./banner/Banner";
import StickySidebar from "./sidebar/StickySidebar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <StickySidebar />
      <main>
        <Banner />
        {/* <Promotion/>
        <Collections/>
        <Services/> */}
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
