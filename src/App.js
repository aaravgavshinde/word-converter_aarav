import Nav from "./Components/Nav";
import TextForm from "./Components/TextForm";
import DLMode from "./Components/DLMode";
import Services from "./Components/Services";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react'

function App(props) {

  // ALERT
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // DARK MODE - LIGHT MODE
  //Btn Text Toggle
  const [btnText, setBtnText] = useState("Dark Text-area")

  //Text-area Toggle
  const [dlstyle, setMydlstyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid black"
  });

  const toggleStyle = () => {
    if (dlstyle.color === 'white') {
      setMydlstyle({
        color: 'black',
        backgroundColor: 'white'
      })
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setBtnText("Dark Mode")
      setMode('dark-subtle')
      setMode1('black')
      setMode2('dark-subtle')
      showAlert(": Mode enabled", "light");
    }
    else {
      setMydlstyle({
        color: 'white',
        backgroundColor: '#333331'
      })
      document.body.style.backgroundColor = "#3b3e5e";
      document.body.style.color = "white";
      setBtnText("Light Mode")
      setMode('dark')
      setMode1('white')
      setMode2('dark-subtle')
      showAlert(": Mode enabled", "dark");
    }
  }

  //COLORFUL BACKGROUND BUTTONS
  //Set Color BG
  const [mode, setMode] = useState('dark-subtle')
  //Set Nav Text
  const [mode1, setMode1] = useState('black')
  //Set Btn Color
  const [mode2, setMode2] = useState('dark-subtle')
  //Set Btn Text Color
  const [mode3, setMode3] = useState('dark')

  //BLUE MODE
  const toggleColor1 = () => {
    if (mode === "dark-subtle" || mode === "danger" || mode === "success" || mode === "warning" || mode === "#707073" || mode === "black" || mode === "dark") {
      setMode("primary");
      setMode1("white")
      setMode2("primary-subtle")
      setMode3("black")
      document.body.style.backgroundColor = "#87e3ff";
      document.body.style.color = "black";
      showAlert(": Blue mode enabled", 'primary');
    }
  }

  //RED MODE
  const toggleColor2 = () => {
    if (mode === "dark-subtle" || mode === "primary" || mode === "success" || mode === "warning" || mode === "#707073" || mode === "black" || mode === "dark") {
      setMode("danger");
      setMode1("white")
      setMode2("danger-subtle")
      setMode3("black")
      document.body.style.backgroundColor = "#ff7a7a";
      document.body.style.color = "white";
      showAlert(": Red mode enabled", "danger");
    }
  }

  //YELLOW MODE
  const toggleColor3 = () => {
    if (mode === "dark-subtle" || mode === "primary" || mode === "success" || mode === "danger" || mode === "#707073" || mode === "black" || mode === "dark") {
      setMode("warning");
      setMode1("black")
      setMode2("warning-subtle")
      setMode3("black")
      document.body.style.backgroundColor = "#ffff52";
      document.body.style.color = "black";
      showAlert(": Yellow mode enabled", "warning");
    }
  }

  //GREEN MODE
  const toggleColor4 = () => {
    if (mode === "dark-subtle" || mode === "primary" || mode === "danger" || mode === "warning" || mode === "#707073" || mode === "black" || mode === "dark") {
      setMode("success");
      setMode1("white")
      setMode2("success-subtle")
      setMode3("black")
      document.body.style.backgroundColor = "#3efaa2";
      document.body.style.color = "black";
      showAlert(": Green mode enabled", "success");
    }
  }

  
  return (
    <>
      {/* <Router> */}
        <Nav showAlert={showAlert} toggleStyle={toggleStyle} toggleColor1={toggleColor1} toggleColor2={toggleColor2} toggleColor3={toggleColor3} toggleColor4={toggleColor4} mode={mode} mode1={mode1} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} toggleStyle={toggleStyle} dlstyle={dlstyle} btnText={btnText} mode2={mode2} mode3={mode3} />} /> */}
            {/* <Route exact path="/dlmode" element={<DLMode dlstyle={dlstyle} />} /> */}
            {/* <Route exact path="/services" element={<Services />} /> */}
          {/* </Routes> */}
          <TextForm showAlert={showAlert} toggleStyle={toggleStyle} dlstyle={dlstyle} btnText={btnText} mode2={mode2} mode3={mode3} />
          <DLMode dlstyle={dlstyle} />
          <Services />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
