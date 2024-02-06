import { useSelector } from "react-redux";
import "./App.css";
import Accounts from "./components/Accounts";
import Bonuses from "./components/Bonuses";
import Rewards from "./components/Rewards";

function App() {

  const amount = useSelector((state) => state.account.amount)
  const points = useSelector((state) => state.bonus.points)

  return (
    <div className="App">
      <div>
        <h1>App</h1>
        <h1>Current Amount: {amount}</h1>
        <h1>Total Bonus: {points}</h1>
      </div>
      <hr />
      <Accounts />
      <hr />
      <Bonuses />
      <hr />
      <Rewards/>
    </div>
  );
}

export default App;
