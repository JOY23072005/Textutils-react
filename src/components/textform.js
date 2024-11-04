import React,{useState} from 'react'

export default function textform(props) {
    const [text,setText]=useState('');
    const handleOnChange=(e)=>{
        console.log("Onchange");
        setText(e.target.value);
    }
    const handleUpClick=()=>{
        console.log("Uppercase Clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
    }
    const handlelowClick=()=>{
        console.log("Uppercase Clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
    }
    const handleswapClick=()=>{
        console.log("Swapcase Clicked");
        let newText=text.split("").map(char=>{
            if(char===char.toUpperCase()){
                return char=char.toLowerCase();
            }
            return char=char.toUpperCase();
        }).join('');
        setText(newText);
        props.showAlert("Inversed the case","success");
    }
    const handleClearClick=()=>{
        console.log("Clear")
        setText("");
        props.showAlert("Cleared the textbox","success")
    }
    const handleEmailClick=()=>{
        props.showAlert("This will Extract Email in textbox","warning");
        setTimeout(()=>{let ans= confirm("This will extract in text Box"? "Are You Sure?":true);
            if(!ans){console.log(ans);props.showAlert("Email not Extracted!","info")}
            else{
            let j=text.indexOf('@');
            if(j==-1)return;
            let i=j;
            let k=j;
            while(i>0&&text[i-1]!=" "){i-=1;}
            while(text[k]!="."){k+=1;}
            setText(text.slice(i,k)+".com")
            props.showAlert("Email Extracted","success")}
        },1500);
    }
    const handleCopyClick=()=>{
        if(text.trim().length==0){return;}
        navigator.clipboard.writeText(text);
        props.showAlert("text copied to clipboard","success");
    }
    const handleRmexspClick=()=>{
        setText(text.split(/[ ]+/).join(" "));//regex syntax-> /[ch]+->means is occurs more than once also get selected/
        props.showAlert("Removed Extra Spaces!","success");
    }
    const wordCount=()=>{
        const trimmedText=text.trim();//removes whitespace if no char is there
        if(trimmedText.length==0){
            return 0;
        }
        return trimmedText.split(" ").filter(trimmedText=>trimmedText!="").length;
    }
    // text=",,sghdkjdgrk";//wrongway
    // setText('JD');
    return (
    <>
        <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea style={{backgroundColor:props.mode==="dark"?"rgb(30,30,30)":"white",color:props.mode==="light"?"black":"white"}} className="form-control" id="mybox" rows="10" onChange={handleOnChange}value={text}placeholder='Enter text here'></textarea>
                <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handlelowClick}>Lowercase</button>  
                <button className="btn btn-primary my-3 mx-2" onClick={handleEmailClick}>Email Extract</button> 
                <button className="btn btn-primary my-3 mx-2" onClick={handleswapClick}>Inverse Case</button> 
                <button className="btn btn-primary my-3 mx-2" onClick={handleCopyClick}>Copy to Clipboard</button> 
                <button className="btn btn-primary my-3 mx-2" onClick={handleRmexspClick}>Remove Extra Spaces</button>
                <br/>
                <button className="btn btn-danger my-3 mx-2" onClick={handleClearClick}>Clear Text</button> 
            </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>No of Characters : {text.length}
                    <br/>
                    No. of Words : {wordCount()}
                    <br/>
                    minutes of reading Words : {0.008*wordCount()}
                </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here."}</p>
            </div>
        </div>
    </>
  )
}
