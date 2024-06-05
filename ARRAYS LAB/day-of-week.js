function dayOfWeek(numberOfDays) {
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    const result = days[numberOfDays - 1];
    
    if (result != undefined) {
        console.log(result);
    } else {
        console.log('Invalid day!');
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(33);
dayOfWeek(-5);
dayOfWeek('asd');