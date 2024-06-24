// import React from 'react';
// import './LandingPage.css';

// const LandingPage: React.FC = () => {
//   return (
//     <div className="LandingPage">
//       <div style={{backgroundColor:'red', height:'100%', width:'100%'}}>
//         {/* one card with logo - modify code here */}
//       </div>
//       <div style={{backgroundColor:'green', height:'100%', width:'100%'}}>
//         {/* second card with logo - modify code here*/}
//       </div>
//     </div>
//   );
// }

// export default LandingPage;

import React from 'react';
import Tilt from 'react-parallax-tilt';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="LandingPage">
      <div 
        style={{
          display:'flex',
          backgroundColor:'green', 
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
          <div className="Card" style={{ backgroundColor: 'red' }}>
            <img
              src="https://seeklogo.com/images/L/logo-com-hr-logo-5636A4D2D5-seeklogo.com.png"
              alt="Logo 1"
              className="Logo"
            />
            <h2 className="CardTitle">Card 1</h2>
          </div>
        </Tilt>
      </div>
      <div 
        style={{
          display:'flex',
          backgroundColor:'red', 
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
          <div className="Card" style={{ backgroundColor: 'green' }}>
            <img
              src="https://seeklogo.com/images/L/logo-com-hr-logo-5636A4D2D5-seeklogo.com.png"
              alt="Logo 2"
              className="Logo"
            />
            <h2 className="CardTitle">Card 2</h2>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default LandingPage;
