import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div id='container'>
        <div id='calculatorBox'>
          <div id='calculatorScreen'></div>
          <div id='calculatorGrid'>
            <div className='row row-of-four first'>
              <button className='box'>&#8634;</button>
              <button className='box'>&#8592;</button>
              <button className='box'>C</button>
              <button className='box'>AC</button>
            </div>
            <div className='row row-of-four second'>
              <button className='box'>mc</button>
              <button className='box'>m+</button>
              <button className='box'>m-</button>
              <button className='box'>mr</button>
            </div>
            <div className='row row-of-five'>
              <button className='box number'>7</button>
              <button className='box number'>8</button>
              <button className='box number'>9</button>
              <button className='box operator'>/</button>
              <button className='box operator'>R</button>
            </div>
            <div className='row row-of-five'>
              <button className='box number'>4</button>
              <button className='box number'>5</button>
              <button className='box number'>6</button>
              <button className='box operator'>*</button>
              <button className='box operator'>x^2</button>
            </div>
            <div className='row row-of-five'>
              <button className='box number'>1</button>
              <button className='box number'>2</button>
              <button className='box number'>3</button>
              <button className='box operator'>-</button>
              <button className='box operator'>1/x</button>
            </div>
            <div className='row row-of-five'>
              <button className='box number'>0</button>
              <button className='box operator'>.</button>
              <button className='box operator'>+-</button>
              <button className='box operator'>+</button>
              <button className='box equal'>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
