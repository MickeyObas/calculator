import { useState } from "react"
import Button  from './Button.js';

export default function Calculator(){
    const [screenValue, setScreenValue] = useState('0');
    const [answerValue, setAnswerValue] = useState(null);
    const [currentOperator, setCurrentOperator] = useState(null);
    const [equalFlag, setEqualFlag] = useState(false);

    function handleEqualClick(){
        setEqualFlag(true);
        calculate();
        setAnswerValue(null);
    }

    function handleDecimalClick(){
      if(!equalFlag){
        setScreenValue((sv) => sv += ".");
      } else{
        setScreenValue("0.");
        setEqualFlag(false);
      }
    }

    function handleOperatorClick(op){
      setEqualFlag(false);
      if(screenValue && answerValue){
        calculate();
        setCurrentOperator(op);
        return;
      }
      setAnswerValue(screenValue);
      setCurrentOperator(op);
    };

    function handleNumberClick(value){
      if(screenValue === '0' || answerValue === 0){
        setScreenValue(value);
      }else{
        if(answerValue && currentOperator && screenValue === answerValue){
          setScreenValue(value);
        }else if(equalFlag){
          setScreenValue(value);
          setEqualFlag(false);
        }
        else{
          setScreenValue((sv) => sv += value.toString());
        }
      }
    }

    function calculate(){
      if(answerValue){
        const answerString = `${answerValue} ${currentOperator} ${screenValue}`;
        const answer = eval(answerString);
        setAnswerValue(answer);
        setScreenValue(answer);
      }
    }

    return (
        <div id='calculatorBox'>
          <input id='calculatorScreen' type='text' value={screenValue} readOnly></input>
          <div id='calculatorGrid'>
            <div className='row row-of-four first'>
              <button className='box'>&#8634;</button>
              <button className='box'>&#8592;</button>
              <button 
              className='box'
              onClick={() => setScreenValue('0')}
              >C</button>
              <button className='box'
              onClick={() => {
                setScreenValue('0');
                setAnswerValue(null);
                setCurrentOperator(null);
                setEqualFlag(false);
              }}>AC</button>
            </div>
            <div className='row row-of-four second'>
              <button className='box'>mc</button>
              <button className='box'>m+</button>
              <button className='box'>m-</button>
              <button className='box'>mr</button>
            </div>
            <div className='row row-of-five'>
              <Button value={7} handleClick={handleNumberClick}/>
              <Button value={8} handleClick={handleNumberClick}/>
              <Button value={9} handleClick={handleNumberClick}/>
              <Button value={'/'} handleClick={handleOperatorClick}/>
              <button className='box operator'>R</button>
            </div>
            <div className='row row-of-five'>
              <Button value={4} handleClick={handleNumberClick}/>
              <Button value={5} handleClick={handleNumberClick}/>
              <Button value={6} handleClick={handleNumberClick}/>
              <Button value={'*'} handleClick={handleOperatorClick}/>
              <button className='box operator'>x^2</button>
            </div>
            <div className='row row-of-five'>
              <Button value={1} handleClick={handleNumberClick}/>
              <Button value={2} handleClick={handleNumberClick}/>
              <Button value={3} handleClick={handleNumberClick}/>
              <Button value={'-'} handleClick={handleOperatorClick}/>
              <button className='box operator'>1/x</button>
            </div>
            <div className='row row-of-five'>
              <Button value={0} handleClick={handleNumberClick}/>
              <Button value={"."} handleClick={handleDecimalClick}/>
              <button className='box operator'>+-</button>
              <Button value={'+'} handleClick={handleOperatorClick}>+</Button>
              <button className='box equal' onClick={handleEqualClick}>=</button>
            </div>
          </div>
        </div>
    )
}