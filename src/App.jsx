
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameNav from "./components/GameNav";
import TrueFalseGame from "./components/TrueFalseGame";

function App() {
  return (
    <>
      <Header />

      {/* You can keep the nav if you like the layout,
          even if it only shows True/False now */}
      <GameNav />

      <main style={{ padding: "20px" }}>
        <TrueFalseGame />
      </main>

      <Footer />
    </>
  );
}

export default App;
