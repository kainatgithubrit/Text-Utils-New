import React, { useState } from 'react';


export default function TextForm(props) {
  const [text, setText] = useState("");
  const HandleUpClick=()=>{
   
    let newText = text.toUpperCase();
    setText(newText);
  }
  const HandleClearClick=()=>{
   
    let newText = " ";
    setText(newText);
  }
  const HandleloClick=()=>{
   
    let newText = text.toLowerCase();
    setText(newText);
  }
  const HandleDownloadClick = () => {
    // Create a blob with the current text
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element and trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'textfile.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Revoke the URL to free up memory
    URL.revokeObjectURL(url);

    // Clear the text input
    setText('');
  };
  const HandleOnChange=(event)=>{
  
    setText(event.target.value);
  }
  
  return (
    <>
    <div className="container">
     <h1>{props.heading}</h1> 
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={HandleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className='btn btn-primary ' onClick={HandleUpClick}>Convert to uppercase</button>
<button className='btn btn-primary mx-2' onClick={HandleloClick}>Convert to lowercase</button>
<button className='btn btn-primary mx-2' onClick={HandleClearClick}>Clear Text</button>
<button className='btn btn-primary mx-2' onClick={HandleDownloadClick}>Download Text</button>
    </div>
    <div className="container my-2">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p> 
      <p>{0.008 *text.split(" ").length} Minutes Read</p>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </>
  )
}
