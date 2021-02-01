import React, {useState} from "react";
import Button from './Button';

const StatBar = ({stat, statName, increaseStat, buttonLabel, rate}) => {

    const statLabel = Math.round(stat);

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
      
  return(
      <div>
            <div style={containerStyles}>
                <div style={fillerStyle}>
                    <span style={labelStyles}>{statName}: {`${statLabel}%`}</span>
                </div>
                <Button statName={statName} increaseStat={increaseStat} rate={rate} buttonLabel={buttonLabel}/>
            </div>
      </div>
  )
};

export default StatBar;