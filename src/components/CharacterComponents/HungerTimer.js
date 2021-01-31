import React, {useState} from 'react';

const HungerTimer = ({title, hungerAmount, feedAmount}) => {

    const [start, setStart] = useState(10000);

    
    const relieveHunger = () => {
        if(setStart!=100){
            setStart(start + feedAmount);
        }
    }
    const getHungry = () => {
        if(setStart!=0){
            setStart(start- hungerAmount);
        }
    }    
    requestAnimationFrame(getHungry);

    return(
        <>
            <h5> {title}: {start} </h5>
            <button onClick ={() => relieveHunger()}>Relieve Hunger</button>
        </>
    )
}

export default HungerTimer;
