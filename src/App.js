import './App.css';
import {useState,useEffect} from 'react'


function App() {
  
  let [Interest,setInterest]=useState(7/100)
  let [Principal,setPrincipal]=useState('')
  let [Timeperiod,setTimeperiod]=useState(1)
  let [Result,setResult]=useState(0)
  let [Ischecked,setIschecked]=useState(false)
  let [Isclicked,setIsclicked]=useState(false)
  
   let calculate=()=>{
     let result=Principal*Math.pow(1+Interest,Timeperiod).toFixed(2)
     setResult(result)
     
   }


   let includeApy=()=>{
    //  APY= (1 + r/n )n – 1
    let apy_result=Math.pow(1 + (Interest/Timeperiod),Timeperiod)-1
    let result=Principal*Math.pow(1+apy_result,Timeperiod).toFixed(2)
     setResult(result)
     
   }
   
   useEffect(()=>{
     Ischecked?includeApy():calculate()
    },[Ischecked])
    
    useEffect(()=>{
      calculate()
    },[Timeperiod,Principal])
    
  let changeTimeframeStyle=(target)=>{
      let all_timeframes=[...document.querySelectorAll('.timeframe_btn')]
      all_timeframes.forEach((i)=>{
        if(i==target){
          i.style.backgroundColor='rgb(243 224 91)'
          i.style.border='3px solid #ffd500;'
          i.style.color='black'
          console.log(i.textContent)
        }
        else{
          i.style.backgroundColor=''
          i.style.color='grey'
  
        }
      })
  
    }
    

  let changeTierStyle=(target)=>{
    let all_tier=[...document.querySelectorAll('.tier_btn')]
    all_tier.forEach((i)=>{
      if(i==target){
        i.style.backgroundColor='rgb(243 224 91)'
        i.style.border='3px solid #ffd500;'
        i.style.color='black'
        
      }
      else{
        i.style.backgroundColor=''
        i.style.color='grey'

      }
    })

  }

  return (
    <div>

       <div className='header'>
          <h1 className='roi_title'>ROI CALCULATOR</h1>
          <div>
          <label className='switch_lb ' id='header_switch'  >
              <input  type='checkbox' />
              <span className='slider ' id='header_slider'/>
            </label>
            <span className='usd'>USD</span>
          </div>
       </div>
       <input 
       className='default_amt'
       type='number' 
       value={Principal}
       placeholder='0.000 USD' 
       onChange={(e)=>{
         setPrincipal(e.target.value)
       }}/>
       <div className='default_amt_div'>
          <button 
          className='default_amt_btn'
          onClick={(e)=>{
            setPrincipal(parseInt(e.target.innerText.split(' ')[1]))
          }}>$ 1000
          </button> 

          <button
          className='default_amt_btn'
          onClick={(e)=>{
            setPrincipal(parseInt(e.target.innerText.split(' ')[1]))
          }}>$ 100</button> 
       </div>
       
{/* ========Timeframe================ */}
       <div className='timeframe'>
        <h1 className='timeframe_title'>Timeframe</h1>
        <div className='timeframe_btn_container'>
          <button className='timeframe_btn'
          onClick={(e)=>{
            setTimeperiod(1/365)
            setIsclicked(!Isclicked)
            changeTimeframeStyle(e.target)
            
            
          }}>1 Day</button>
          <button className='timeframe_btn' 
          onClick={(e)=>{
            setTimeperiod(7/365)
            setIsclicked(!Isclicked)
            changeTimeframeStyle(e.target)
          }}>7 Days</button>

          <button className='timeframe_btn'
          onClick={(e)=>{
            setTimeperiod(30/365)
            setIsclicked(!Isclicked)
            changeTimeframeStyle(e.target)
          }}>30 Days</button>

          <button className='timeframe_btn'
           onClick={(e)=>{
            setTimeperiod(1)
            setIsclicked(!Isclicked)
            changeTimeframeStyle(e.target)
          }}>1 year</button>

          <button className='timeframe_btn' 
          onClick={(e)=>{
            setTimeperiod(5)
            setIsclicked(!Isclicked)
            changeTimeframeStyle(e.target)
          }}> 5 year</button>
        </div>
       
       </div>
   
{/*============= slider=========== */}
       <div className='apy_div'>
          <h1 className='apy_title'>Enable accelerated APY</h1>
          <div className='switch'  >
            <label className='switch_lb'  >
              <input  type='checkbox' />
              <span className='slider'onClick={()=>{
            setIschecked(!Ischecked)
            }} />
            </label>
          </div>
       </div>

       <div className='tier'>
        <h2 className='tier_title'>SELECT TIER</h2>
        <div className='tier_btn_container'>
          <button className='tier_btn' onClick={(e)=>{changeTierStyle(e.target)}}>Tier 2</button>
          <button className='tier_btn' onClick={(e)=>{changeTierStyle(e.target)}}>Tier 1</button>
          <button className='tier_btn' onClick={(e)=>{changeTierStyle(e.target)}}>Tier 3</button>
          <button className='tier_btn' onClick={(e)=>{changeTierStyle(e.target)}}>Tier 4</button>
          <button className='tier_btn' onClick={(e)=>{changeTierStyle(e.target)}}>Tier 5</button>
        </div>
       </div>
      
{/* ===========Output============= */}
       <div className='output'>
          <input className='output_inp' type='number' readOnly value={Result}/>
       </div>

    </div>
  );
}

export default App;
