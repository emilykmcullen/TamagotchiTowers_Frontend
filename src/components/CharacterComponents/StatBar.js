import React, {useState} from "react";
import Button from './Button';

const StatBar = ({stat, statName}) => {

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }

      const fillerStyle = {
        height: '100%',
        width: `${stat}%`,
        backgroundColor: `${stat>20 ? 'green':'red'}` ,
        borderRadius: 'inherit',
        textAlign: 'right'
      }
      function move() {
        var elem = document.getElementById("containerStyles");   
        var width = 0;
        var id = setInterval(frame, 1);
        // i want it to be done in 7 seconds
        var time = 7000;
        function frame() {
          if (width >= time) {
            clearInterval(id);
          } else {
            width++; 
            elem.style.width = 100-(100*width)/time + '%'; 
            elem.innerHTML = 100-Math.round((100*width)/time)  + '%';
          }
        }
      }
  return(
      <div>
            <div style={containerStyles}>
                <div style={fillerStyle}>
                    <span style={labelStyles}>{statName}: {`${stat}%`}</span>
                    <Button/>
                </div>
            </div>
      </div>
  )
};

export default StatBar;