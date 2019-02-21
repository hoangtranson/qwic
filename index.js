const moment = require('moment');

const productionCycle = () => {

    const getCycle = input => {
        try {
            validateInput(input);
            return 3;
        } catch(e) {
            return e;
        }
    }

    const validateInput = arr => {
        const input = arrWrapper(arr);
        if(arr && arr.length > 100000) {
            throw "quantity of possible schedules should less than 100000";
        }

        const durations = input('duration');
        if(Math.max(...durations) > 1000) {
            throw "duration should less than 1000";
        }

        const startingDays = input('startingDay');
        const listDateInThePast = startingDays.filter( date => moment().isAfter(moment(date)));
        if(listDateInThePast.length > 0) {
            throw "startingDay > current date";
        }
    }

    const arrWrapper = arr => {
        return key => arr.map( item => item[key]);
    }

    return {
        getCycle
    };
}

module.exports  = productionCycle();
