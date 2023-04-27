import "./App.css";
import Food from "./Components/Food";

function App() {
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <Food />
        </section>
      </main>
    </>
  );
}

export default App;
