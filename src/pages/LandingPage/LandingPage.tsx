import React from 'react';
import Tilt from 'react-parallax-tilt';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {

  var navigate = useNavigate();

  return (
    <div className="LandingPage">
      <div 
        style={{
          display:'flex',
          height:'100%', 
          width:'100%',
          justifyContent:'center',
          alignItems:'center'
        }}
        onClick={()=> navigate("./products")}
      >
        <Tilt
          className="TiltCard"
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          glareEnable={false}
          transitionSpeed={2000}
          scale={1.02}
        >
          <div className="Card1" style={{ padding: 20 }}>
            <img
              src={require('../../assests/click_logo_c.png')}
              alt="Logo 2"
              style={{
                height: '80%',
                width: '70%',
                alignSelf:'center'
              }}
            />
            <img
              src={require('../../assests/click_logo_letters.png')}
              alt="Logo 2"
              style={{
                height: '100%',
                width: '100%',
                margin: 7,
              }}
            />
          </div>
        </Tilt>
      </div>
      <div 
        style={{
          display:'flex',
          height:'100%', 
          width:'100%',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <Tilt
          className="TiltCard"
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          glareEnable={false}
          transitionSpeed={2000}
          scale={1.02}
        >
          <div className="Card2" style={{padding: 20}}>
            <img
              src={require('../../assests/click_logo_c.png')}
              alt="Logo 2"
              style={{
                height: '80%',
                width: '70%',
                alignSelf:'center'
              }}
            />
            <img
              src={require('../../assests/click_logo_letters.png')}
              alt="Logo 2"
              style={{
                height: '100%',
                width: '100%',
                margin: 7,
              }}
            />
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default LandingPage;
