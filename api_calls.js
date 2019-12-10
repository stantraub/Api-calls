let urls = ['https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01', 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01']

function gFetch(urls) {
    let counter = 0;
    const callback = () => {
        counter++;
        if (urls[counter]) {
            sFetch(url[counter], callback)
        } else {
            doneFetch();
        }
    }
    function sFetch(urls[counter], callback) {
        // whatever they gave us
    }
}

function doneFetch() {
    console.log('done fetching')
}