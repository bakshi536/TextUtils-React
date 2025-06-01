import React, {useState} from 'react'

export default function TextForm(props) {

    const onUpClick=()=>{
    let newText=text.toUpperCase(); 
     setText(newText);
     props.showAlert("Your text has been converted to UpperCase.","success");
    }
    const onLowClick=()=>{
        let newText=text.toLowerCase(); 
         setText(newText);
         props.showAlert("Your text has been converted to LowerCase.","success");
        }
        const onClear=()=>{
            let newText=""; 
             setText(newText);
             props.showAlert("Your textbox has been cleared.","success");
            }
    const onChangeHandle=(event)=>{
     setText(event.target.value);
    }
    const [text, setText]=useState('');

  return (
    <>
    <div className="container mb-3">
  <h2 className={`my-3 text-${props.mode==='light' ? 'dark' : 'light'}`}>{props.value}</h2>
  <textarea className="form-control my-4" value={text} onChange={onChangeHandle}id="TextForm" rows="8" style={{backgroundColor:props.mode==='light'?'white':'black' , color:props.mode==='light'?'black':'white'}} ></textarea>
  <button disabled={text.length===0} className="btn btn-primary my-3" onClick={onUpClick}>{props.btn1}</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={onLowClick}>{props.btn2}</button>
  <button disabled={text.length===0}className="btn btn-primary my-3 mx-3" onClick={onClear}>Clear Text</button>
</div>
<div className={`container  text-${props.mode==='light' ? 'dark' : 'light'}`}>
    <h2>Your text summary </h2>
    <p>{text.split(" ").filter((element)=>{
      return element.length!==0;
    }).length} words and {text.length} charac</p>
    <p>{text.split(" ").filter((element)=>{
      return element.length!==0;
    }).length*0.008} Minutes Read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in textbox that you would like to preview"}</p>
</div>
    </>

  )
}
