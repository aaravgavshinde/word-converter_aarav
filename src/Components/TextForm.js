import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here!")

  const DefaultTxt = () => {
    let a = "Enter Text Here!";
    setText(a);
    props.showAlert(": Back to default text","success");
  }

  const ToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(": Changed to Upper Case","success");
  }

  const ToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(": Changed to Lower Case","success")
  }

  const ClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert(": Text Cleared","success");
  }

  const CopyText = () => {
    var text = document.getElementById("Textarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(": Text Copied","success");
  }

  const RemoveES = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(": Extra-spaces removed","success");
  }

  const OnChange = (event) => {
    setText(event.target.value);
  }


  return (
    <div>
      <div className="mb-3 mt-5">
        {/* <div className="form-check form-switch">
          <input style={props.dlstyle} className="form-check-input" onClick={props.toggleStyle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <span style={props.dlstyle} className='border border-1 p-1 rounded'>{props.btnText}</span>
        </div> */}
        <h4>Enter your text here:</h4>
        <textarea style={props.dlstyle} value={text} onChange={OnChange} className="form-control" id="Textarea1" rows="8" ></textarea>
        <button disabled={!text.length} className={`btn bg-${props.mode2} text-${props.mode3} mx-1 my-1`} onClick={ToUpperCase}>Convert to Upper-case</button>
        <button disabled={!text.length} className={`btn bg-${props.mode2} text-${props.mode3} mx-1 my-1`} onClick={ToLowerCase}>Convert to Lower-case</button>
        <button disabled={!text.length} className={`btn bg-${props.mode2} text-${props.mode3} mx-1 my-1`} onClick={CopyText}>Copy Text</button>
        <button disabled={!text.length} className={`btn bg-${props.mode2} text-${props.mode3} mx-1 my-1`} onClick={ClearText}>Clear Text</button>
        <button className={`btn bg-${props.mode2} text-${props.mode3} mx-1 my-1`} onClick={DefaultTxt}>Default Text</button>
        <button disabled={!text.length} className={`btn bg-${props.mode2} text-${props.mode3} mx-1 my-1`} onClick={RemoveES}>Remove Extra Spaces</button>
      </div>
      <div>
        <h2 className='text-black'>Word Counter</h2>
        {/* <div className='text-primary-emphasis'>{text.split(" ").length - 1} words and {text.length} characters</div> */}
        <div className={`h5 text-${props.mode1}`}>{text.split(" ").length-1} words and {text.length} characters</div>
        <h2 className='text-black'>Time to read the text</h2>
        <div className={`h5 text-${props.mode1}`}>{0.008 * text.split(" ").length - 0.008} minutes</div>
        <h2 className='text-black'>Text Preview</h2>
        <div className={`text-${props.mode1}`}>{text}</div>
      </div>
    </div>
  )
}
