import React  from 'react';
import {Chart as ChartJS, RadialLinearScale, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import {Radar} from 'react-chartjs-2';
import studentData from './data.json';
import Chart from 'chart.js/auto';

// Register chart.js components
ChartJS.register(RadialLinearScale, LineElement, Filler, Tooltip, Legend);

const AssessmentReport = () => {
  const {scores} = studentData;

  // Calculate Overall Score (Average of all metrics)
  const scoreValues = Object.values(scores);
  const overallScore = (scoreValues.reduce((a,b) => a + b, 0) / scoreValues.length).toFixed(1);

  // Logic : Descriptive Feedback

  const getFeedback = (score) => {
    if(score >= 8){
    return "Excellent performance with strong control.";
    }
    if(score >= 6){
      return "Good performance with minor inaccuracies";
    }
    return "Needs improvement.";
  };


  // Chart Data Configuration
  const chartData = {
    labels : ['Prononciation', 'Fluency', 'Vocabulary', 'Grammer'],
    datasets: [{
      label : 'Student Scores',
      data : [scores.pronunciation, scores.fluency, scores.vocabulary, scores.grammar],
      backgroundColor : 'rgba(54, 162, 235, 0.2)',
      borderColor : 'rgba(54, 162, 235, 1)',
      borderWidth : 2,
    }],
  };

    return (
    <div style={{
      padding: '40px', 
      fontFamily:'Arial, sans-serif', 
      maxWidth : '800px',
      margin: '0 auto'}}>

      <header style={{
        borderBottom: '2px solid #eee',
        marginBottom: '40px'}}>
          <h1>Speaking Assessment Report</h1>
          <p>Student : <strong>{studentData.studentName}</strong></p>
      </header>


      {/* Summary Section */}

      <section style={{
        display: 'flex',
        gap: '40px',
        marginBottom: '40px',
        alignItems: 'center'
      }}>

        <div style={{
          textAlign: 'center',
          background: '#f4f7f6',
          padding: '30px',
          borderRadius: '15px',
          flex: '1',
        }}>

          <h2 style={{
            fontSize: '14px',
            color: '#666',
          }}> Overall </h2>

          <div style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#2c3e50'
          }}>
            {overallScore}<span style={{fontSize: '20px', color:'#999'}}>/9</span>
          </div>
        </div>


          <div style={{flex:'2'}}>
            <h3>Descriptive Feedback</h3>
            <p style={{
              fontSize: '18px',
              color: '#34495e',
              padding: '15px',
              background: '#e8f4fd',
              borderRadius: '8px',
              borderLeft: '5px solid #3494db'
            }}> "{getFeedback(overallScore)}"</p>
          </div>
        </section>

      
      {/* Graph Representation */}
      <section style={{
        display:"grid",
        gridTemplateColumns: '1fr 1fr',
        gap : '40px'}}>

          <div>
            <h3>Skill-wise Breakdown</h3>
            {Object.entries(scores).map(([skill, val]) => (
              <div key={skill} style={{marginBottom: '15px'}}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '5px',
                  textTransform: 'capitalize'}}>
                    <span>{skill}</span>
                    <span>{val}/9</span>
                </div>

                <div style={{
                  height:'10px',
                  background: '#eee',
                  borderRadius: '5px'}}>

                    <div style={{
                      width: '${(val/9) * 100}%',
                      height: '100%',
                      background: '#3498db',
                      borderRadius: '5px',
                      transition: 'width 0.5s'}}>
                    </div>

                </div>

              </div>
            ))}
          </div>


          <div style={{maxWidth: '300px'}}>
            <h3>Score Radar</h3>
            <Radar data={chartData}
              options={{scales: {r: {min: 0, max:9, ticks: {stepSize: 1}}}}}/>
          </div>

      </section>

    </div>
  );

} 

export default AssessmentReport ;


