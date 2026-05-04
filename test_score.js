function getTrackScore(trackName, artistName, expectedArtist, expectedTitle, playCount = 0) {
    let score = 100;
    const t = (trackName || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const a = (artistName || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const et = (expectedTitle || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const ea = (expectedArtist || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Perfect Match Bonus (now immune to accent mismatches)
    if (t === et) score += 40;
    else if (t.includes(et) || et.includes(t)) score += 15;
    
    // Playcount Advantage
    const plays = parseInt(playCount, 10) || 0;
    score += Math.min(60, Math.floor(plays / 500000)); // Up to +60 points for massive hits
    
    // Auto-Penalize low quality or variant formats unless specifically searched for
    if (t.includes('cover') && !et.includes('cover')) score -= 80;
    if (t.includes('karaoke') && !et.includes('karaoke')) score -= 80;
    if (t.includes('tribute') && !et.includes('tribute')) score -= 80;
    if (t.includes('remake') && !et.includes('remake')) score -= 80;
    if (t.includes('instrumental') && !et.includes('instrumental')) score -= 60;
    
    if (t.includes('lofi') && !et.includes('lofi')) score -= 50;
    if (t.includes('slowed') && !et.includes('slowed')) score -= 50;
    if (t.includes('reverb') && !et.includes('reverb')) score -= 50;
    if (t.includes('8d') && !et.includes('8d')) score -= 50;
    if (t.includes('nightcore') && !et.includes('nightcore')) score -= 50;
    if (t.includes('sped up') && !et.includes('sped up')) score -= 50;
    
    if (t.includes('acoustic') && !et.includes('acoustic')) score -= 50;
    if (t.includes('live') && !et.includes('live')) score -= 40;
    if (t.includes('remix') && !et.includes('remix')) score -= 60;
    if (t.includes('mix') && !et.includes('mix')) score -= 40;
    if (t.includes('remaster') && !et.includes('remaster')) score -= 15; // Small penalty so original non-remaster wins if available
    if (t.includes('edit') && !et.includes('edit')) score -= 20;
    
    // Boost explicit searches
    if (et.includes('acoustic') && t.includes('acoustic')) score += 50;
    if (et.includes('live') && t.includes('live')) score += 50;
    if (et.includes('remix') && t.includes('remix')) score += 50;
    
    // Official markers
    if (t.includes('official audio') || t.includes('official video')) score += 10;
    
    // Advanced Artist Tokenization Match
    let matchedArtist = false;
    if (ea && a) {
        const aClean = a.replace(/[^a-z0-9\s]/g, '');
        const eaClean = ea.replace(/[^a-z0-9\s]/g, '');
        
        // Try strict substring first
        if (aClean.includes(eaClean.split(' ')[0])) {
            matchedArtist = true;
            score += 50;
        } else {
            // Try token matching (at least one word longer than 2 chars must match)
            const eaWords = eaClean.split(' ').filter(w => w.length > 2);
            for (let w of eaWords) {
                if (aClean.includes(w)) {
                    matchedArtist = true;
                    score += 30;
                    break;
                }
            }
            
            // Devastating penalty for completely unrelated foreign artists hijacking the title
            if (!matchedArtist && eaWords.length > 0) {
                score -= 1000;
            }
        }
    }
    
    return { score, aClean: a.replace(/[^a-z0-9\s]/g, ''), eaClean: ea.replace(/[^a-z0-9\s]/g, ''), matchedArtist };
}

console.log(getTrackScore("November Rain", "Guns N' Roses", "Guns N' Roses", "November Rain"));
console.log(getTrackScore("Gasolina", "Daddy Yankee", "Daddy Yankee", "Gasolina"));
console.log(getTrackScore("Tití Me Preguntó", "Bad Bunny", "Bad Bunny", "Titi Me Pregunto"));
console.log(getTrackScore("Boy's a Liar Pt. 2", "PinkPantheress & Ice Spice", "PinkPantheress", "Boy's a Liar Pt. 2"));

const urls = [
    "https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=" + encodeURIComponent("Tití Me Preguntó Bad Bunny") + "&limit=10"
];
Promise.all(urls.map(u => fetch(u).then(r=>r.json()).catch(e=>null))).then(res => {
    res.forEach((data, i) => {
        if (!data) return;
        const hits = data.data && data.data.results ? data.data.results : (data.results ? data.results : []);
        console.log("\nURL:", urls[i]);
        hits.forEach(t => {
            const hArtist = t.primaryArtists || t.singers || '';
            const scores = getTrackScore(t.name || t.title, hArtist, "Bad Bunny", "Tití Me Preguntó", t.playCount);
            console.log(t.name || t.title, "by", hArtist, "=> Score:", scores.score);
        });
    });
});
