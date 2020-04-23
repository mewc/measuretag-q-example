
const q = require('./q');
const api = require('./api');


const pushToQueue = (data) => {
    console.debug('PUSH TO Q', data);
    //TODO get more specific data from what we're targeting
    window['myCustomEventTracker'].q.push(data);
}

const init = () => {
    console.debug('INIT');
    const allAnchorTags = [...document.querySelectorAll('a')];
    allAnchorTags.forEach(a => a.addEventListener('click', pushToQueue));
    document.addEventListener('DOMContentLoaded', (event) => {
        console.debug('DOM loaded')
        setInterval(() => { api.dispatch(q.consume()) },
            myCustomEventTrackerConfig.timing);
    })
    return {...q}
}

window['myCustomEventTrackerConfig'] = window['myCustomEventTrackerConfig'] || { timing: 2000, url: "https://testurl.com" };
window['myCustomEventTracker'] = window['myCustomEventTracker'] || init();



