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
              <div className='box'>&#8634;</div>
              <div className='box'>&#8592;</div>
              <div className='box'>C</div>
              <div className='box'>AC</div>
            </div>
            <div className='row row-of-four second'>
              <div className='box'>mc</div>
              <div className='box'>m+</div>
              <div className='box'>m-</div>
              <div className='box'>mr</div>
            </div>
            <div className='row row-of-five'>
              <div className='box number'>7</div>
              <div className='box number'>8</div>
              <div className='box number'>9</div>
              <div className='box operator'>/</div>
              <div className='box operator'>R</div>
            </div>
            <div className='row row-of-five'>
              <div className='box number'>4</div>
              <div className='box number'>5</div>
              <div className='box number'>6</div>
              <div className='box operator'>*</div>
              <div className='box operator'>x^2</div>
            </div>
            <div className='row row-of-five'>
              <div className='box number'>1</div>
              <div className='box number'>2</div>
              <div className='box number'>3</div>
              <div className='box operator'>-</div>
              <div className='box operator'>1/x</div>
            </div>
            <div className='row row-of-five'>
              <div className='box number'>0</div>
              <div className='box operator'>.</div>
              <div className='box operator'>+-</div>
              <div className='box operator'>+</div>
              <div className='box equal'>=</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
