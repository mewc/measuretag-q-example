let consume = () => {
    console.log('CONSUMED')
    const q = window['myCustomEventTracker'].q;
    window['myCustomEventTracker'].q = [];
    return q;
}

module.exports = {
    q: [], consume
}