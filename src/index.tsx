import  ReactDOM  from "react-dom";
// import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
const App = () => {
    return <GuestList />
}

ReactDOM.render(<App />, document.querySelector('#root'))