import React, {useState} from 'react';

const HungerTimer = ({title, hungerAmount}) => {

    const [start, setStart] = useState(100);

    const getHungry = () => {
        while(start>0){
            setTimeout( () => {
                  start--;
                },
                4 * 1000
              );
        }
    }
    const relieveHunger = () => {
    setTotal(start + hungerAmount);
    }

    return(
        <>
            <h5> {title}: {start} </h5>
            <button onClick ={() => relieveHunger()}>Relieve Hunger</button>
        </>
    )
}

export default HungerTimer;
