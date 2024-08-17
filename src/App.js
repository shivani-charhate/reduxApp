import logo from "./logo.svg";
import "./App.css";
import User from "./User";

function App() {
  return (
    <div>
      <User data={{ name: "Shivani" }} age={30} mail={"test@gmail.com"} />
    </div>
  );
}

export default App;
