const urls = [
    "https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=" + encodeURIComponent("Guns N' Roses November Rain") + "&limit=5"
];
Promise.all(urls.map(u => fetch(u).then(r=>r.json()).catch(e=>null))).then(res => {
    res.forEach((data, i) => {
        if (!data) return console.log(urls[i] + ' FAILED');
        console.log("Raw data:", data);
        const hits = data.data && data.data.results ? data.data.results : (data.results ? data.results : []);
        console.log(urls[i]);
        console.log("DOWNLOAD URL FIELD IS: ", typeof hits[0].downloadUrl);
        if (hits[0].downloadUrl) console.log("Is Array? ", Array.isArray(hits[0].downloadUrl));
    });
});
