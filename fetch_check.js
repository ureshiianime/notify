const fs = require('fs');
const https = require('https');
https.get('https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=bad+bunny', res => {
    let d='';
    res.on('data', c=>d+=c);
    res.on('end', ()=> {
        const json = JSON.parse(d);
        fs.writeFileSync('res.json', JSON.stringify(json.data.results[0] || json.results[0] || json.data[0], null, 2));
    });
});
