import './SeasonDisplay.css';
import React from 'react';

//Creates a general object where the properties to use later in the code are declared
//allowing for a cleaner structure and easy modification
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun',
    },
    winter: {
        text: "Brrr, it's chilly!",
        iconName: 'snowflake',
    },
};

const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.latitude, new Date().getMonth());

    //This destructures the general object and already extracts the properties into the variables
    //defined, allowing to use them without need of additional logic
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;
