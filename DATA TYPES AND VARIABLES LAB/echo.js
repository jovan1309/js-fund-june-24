function echo(data) {
    console.log(typeof data);
    if (typeof data === 'string' || typeof data === 'number') {
        console.log(data);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echo(null);