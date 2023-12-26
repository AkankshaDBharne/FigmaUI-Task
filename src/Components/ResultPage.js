import React from 'react';
import './ResultPage.css';
import { icons } from '../utils/icons';

const SummaryCard = ({ title, score, backgroundColor, textColor, icon }) => (
  <div className="row">
    <div className="card" style={{ backgroundColor }}>
      <div className="card-header">
        {icons[icon]}
        <h4 style={{ color: textColor }}>{title}</h4>
      </div>
      <p style={{ color: textColor }}>{score}</p>
    </div>
  </div>
);

const ResultPage = () => {
  return (
    <div className='container'>
       <div className="row">
            <div className="column" >
                <h2>Your Result</h2>
                <div className="circle">
                    <p>76</p>
                    <span> of 100</span>
                </div>
                <div className='description'>
                    <h2>Great</h2>
                    <p>Your performance exceeds 65% of the people conducting the test here!</p>
                </div>
            </div>

            <div className="column" >
                <h2>Summary</h2>
                
                <SummaryCard title="Reaction" score="80/100" icon="lightning" backgroundColor="#fef5f5" textColor="#fe5555" />
                <SummaryCard title="Memory" score="92/100" icon="brain" backgroundColor="#fffbf4" textColor="#ffb21e" />
                <SummaryCard title="Verbal" score="61/100" icon="chat" backgroundColor="#f2fcf9" textColor="#00bb8f" />
                <SummaryCard title="Visual" score="73/100" icon="eye" backgroundColor="#f3f4fd" textColor="#1125d6" />
        
                <button className="button">Continue</button>
        
            </div>
        </div>
    </div>
  )
}

export default ResultPage;
