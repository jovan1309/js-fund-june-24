function solve(day, age) {
    if ((age >= 0) & (age <= 18)) {
        switch (day) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$');
                break;
            case 'Holiday':
                console.log('5$');
                break;
            default:
                break;
        }
    } else if (age > 18 && age <= 64) {
        switch (day) {
            case 'Weekday':
                console.log('18$');
                break;
            case 'Weekend':
                console.log('20$');
                break;
            case 'Holiday':
                console.log('12$');
                break;
            default:
                break;
        }
    } else if (age > 64 && age <= 122) {
        switch (day) {
            case 'Weekday':
                console.log('12$');
                break;
            case 'Weekend':
                console.log('15$');
                break;
            case 'Holiday':
                console.log('10$');
                break;
            default:
                break;
        }
    } else {
        console.log('Error!');
    }
}

solve('Weekday', 2);
solve('Weekday', 42);
solve('Weekday', 82);

solve('Holiday', 2);
solve('Holiday', 42);
solve('Holiday', 82);

solve('Weekend', 2);
solve('Weekend', 42);
solve('Weekend', 82);