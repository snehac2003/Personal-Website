// import logo from './logo.svg';
import './App.css';
import React from "react";
import background from "./background_pic/snow.png"
import About from './About.js';

function App() {
  return (
    <div>
    <div style={{ backgroundImage: `url(${background})`,
    height: '100vh', 
    backgroundSize: 'cover', 
    backgroundPosition: '50% 70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', 
    fontFamily: 'baskerville-display-pt, serif',
    fontSize: '40px',
    fontWeight: 'Bold',
    textAlign:'center',
    }}> <div style={{
      backgroundColor: '#DBE1FF80',
      width: '350px',
      height:'180px',
      padding: '30px',
      borderRadius: '30px',
      marginTop:'80px'
    }}>
      Sneha Chaliki
      <div style={{
        fontSize:'20px',
        fontWeight:'normal',
        marginTop:'20px',
      }}>
        Computer Science | Psychology | Macroeconomics
      </div>
    </div>

    <div style={{
      display:'flex',
      justifyContent:'space-between',
      gap:'300px',
      marginTop: '100px'
    }}>
      <button style={{
        backgroundColor:'#DBE1FF90',
        color:'white',
        border:'none',
        borderRadius:'10px',
        padding:'15px 40px',
        cursor:'pointer',
        fontFamily: 'Times, serif',
        fontWeight: 'Bold',
        fontSize: '20px'
      }}>
        About
      </button>
      <button style={{
        backgroundColor:'#DBE1FF90',
        color:'white',
        border:'none',
        borderRadius:'10px',
        padding:'15px 40px',
        cursor:'pointer',
        fontFamily: 'Times, serif',
        fontWeight: 'Bold',
        fontSize: '20px'
      }}>
        Projects
      </button>
      <button style={{
        backgroundColor:'#DBE1FF90',
        color:'white',
        border:'none',
        borderRadius:'10px',
        padding:'15px 40px',
        cursor:'pointer',
        fontFamily: 'Times, serif',
        fontWeight: 'Bold',
        fontSize: '20px'
      }}>
        Interests
      </button>
    </div>
    </div>

    <div className="gradient-background">
      <About />
    </div>
    </div>
  );
}

export default App;
