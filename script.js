const searchInput = document.getElementById('searchInput');
const searchSuggestionsContainer = document.getElementById('searchSuggestionsContainer');
const searchResults = document.getElementById('searchResults');
const audioPlayer = document.getElementById('audioPlayer');
const mainTitle = document.getElementById('mainTitle');

// Navigation Elements
const tabHome = document.getElementById('tabHome');
const tabSearch = document.getElementById('tabSearch');
const tabPlaylists = document.getElementById('tabPlaylists');
const homeView = document.getElementById('homeView');
const searchView = document.getElementById('searchView');
const playlistsView = document.getElementById('playlistsView');
const playlistDetailView = document.getElementById('playlistDetailView');
const artistDetailView = document.getElementById('artistDetailView');
const albumDetailView = document.getElementById('albumDetailView');
const settingsView = document.getElementById('settingsView');

// Settings UI Elements
const headerProfileBtn = document.getElementById('headerProfileBtn');
const headerProfileImg = document.getElementById('headerProfileImg');
const backFromSettingsBtn = document.getElementById('backFromSettingsBtn');
const settingsProfileImg = document.getElementById('settingsProfileImg');
const editProfileImgBtn = document.getElementById('editProfileImgBtn');
const profileImgInput = document.getElementById('profileImgInput');
const settingsProfileNameDisplay = document.getElementById('settingsProfileNameDisplay');
const editProfileNameBtn = document.getElementById('editProfileNameBtn');
const profileNameDisplayContainer = document.getElementById('profileNameDisplayContainer');
const editProfileNameContainer = document.getElementById('editProfileNameContainer');
const settingsProfileNameInput = document.getElementById('settingsProfileNameInput');
const saveProfileNameBtn = document.getElementById('saveProfileNameBtn');
const cancelProfileNameBtn = document.getElementById('cancelProfileNameBtn');
// Note: Selects have been replaced by custom dropdowns

// Album UI Elements
const backFromAlbumBtn = document.getElementById('backFromAlbumBtn');
const stickyAlbumTitle = document.getElementById('stickyAlbumTitle');
const stickyAlbumPlayBtn = document.getElementById('stickyAlbumPlayBtn');
const albumDetailMain = document.getElementById('albumDetailMain');
const albumHeroImage = document.getElementById('albumHeroImage');
const detailAlbumTitleHero = document.getElementById('detailAlbumTitleHero');
const detailAlbumInfo = document.getElementById('detailAlbumInfo');
const playAllAlbumBtn = document.getElementById('playAllAlbumBtn');
const shuffleAlbumBtn = document.getElementById('shuffleAlbumBtn');
const saveAlbumBtn = document.getElementById('saveAlbumBtn');
const albumSongsContainer = document.getElementById('albumSongsContainer');
const albumControlsRow = document.getElementById('albumControlsRow');

// Artist UI Elements
const backFromArtistBtn = document.getElementById('backFromArtistBtn');
const stickyArtistTitle = document.getElementById('stickyArtistTitle');
const stickyArtistPlayBtn = document.getElementById('stickyArtistPlayBtn');
const artistDetailMain = document.getElementById('artistDetailMain');
const artistHeroImage = document.getElementById('artistHeroImage');
const detailArtistTitleHero = document.getElementById('detailArtistTitleHero');
const detailArtistInfo = document.getElementById('detailArtistInfo');
const playAllArtistBtn = document.getElementById('playAllArtistBtn');
const shuffleArtistBtn = document.getElementById('shuffleArtistBtn');
const artistSongsContainer = document.getElementById('artistSongsContainer');
const artistControlsRow = document.getElementById('artistControlsRow');
const artistSongsShowAllWrapper = document.getElementById('artistSongsShowAllWrapper');
const showAllArtistSongsBtn = document.getElementById('showAllArtistSongsBtn');

// All Artist Songs UI Elements
const allArtistSongsView = document.getElementById('allArtistSongsView');
const backFromAllSongsBtn = document.getElementById('backFromAllSongsBtn');
const allSongsArtistTitle = document.getElementById('allSongsArtistTitle');
const allArtistSongsMain = document.getElementById('allArtistSongsMain');
const allArtistSongsListContainer = document.getElementById('allArtistSongsListContainer');
const allArtistSongsLoader = document.getElementById('allArtistSongsLoader');
const allArtistSongsFilterInput = document.getElementById('allArtistSongsFilterInput');

// Home View Elements
const homeUserPlaylists = document.getElementById('homeUserPlaylists');
const homeMixes = document.getElementById('homeMixes');
const homeRandom = document.getElementById('homeRandom');
let homeLoaded = false;

// Playlists View Elements
const playlistsContainer = document.getElementById('playlistsContainer');
const createNewPlaylistBtn = document.getElementById('createNewPlaylistBtn');
const createPlaylistDropdown = document.getElementById('createPlaylistDropdown');
const btnDropdownNew = document.getElementById('btnDropdownNew');
const btnDropdownImport = document.getElementById('btnDropdownImport');
const importTxtInput = document.getElementById('importTxtInput');

// Playlist Detail Elements
const backToPlaylistsBtn = document.getElementById('backToPlaylistsBtn');
const detailPlaylistTitleHero = document.getElementById('detailPlaylistTitleHero');
const detailPlaylistInfo = document.getElementById('detailPlaylistInfo');
const detailPlaylistCover = document.getElementById('detailPlaylistCover');
const playAllPlaylistBtn = document.getElementById('playAllPlaylistBtn');
const playlistSongsContainer = document.getElementById('playlistSongsContainer');
const playlistDetailMain = document.getElementById('playlistDetailMain');
const playlistFilterInput = document.getElementById('playlistFilterInput');
const stickyPlaylistTitle = document.getElementById('stickyPlaylistTitle');
const stickyPlayBtn = document.getElementById('stickyPlayBtn');
const editPlaylistBtn = document.getElementById('editPlaylistBtn');
const deletePlaylistBtn = document.getElementById('deletePlaylistBtn');
const shufflePlaylistBtn = document.getElementById('shufflePlaylistBtn');

// Modal Elements
const addPlaylistModal = document.getElementById('addPlaylistModal');
const closePlaylistModal = document.getElementById('closePlaylistModal');
const modalPlaylistList = document.getElementById('modalPlaylistList');
const createPlaylistBtnModal = document.getElementById('createPlaylistBtnModal');

// Create Playlist Modal Elements
const createPlaylistModal = document.getElementById('createPlaylistModal');
const closeCreatePlaylistModal = document.getElementById('closeCreatePlaylistModal');
const newPlaylistNameInput = document.getElementById('newPlaylistNameInput');
const cancelCreatePlaylistBtn = document.getElementById('cancelCreatePlaylistBtn');
const confirmCreatePlaylistBtn = document.getElementById('confirmCreatePlaylistBtn');
const createPlaylistModalTitle = document.getElementById('createPlaylistModalTitle');
const importFileContainer = document.getElementById('importFileContainer');
const selectedFileNameDisplay = document.getElementById('selectedFileNameDisplay');
let isImportMode = false;

// Edit Playlist Modal Elements
const editPlaylistModal = document.getElementById('editPlaylistModal');
const closeEditPlaylistModal = document.getElementById('closeEditPlaylistModal');
const editPlaylistNameInput = document.getElementById('editPlaylistNameInput');
const cancelEditPlaylistBtn = document.getElementById('cancelEditPlaylistBtn');
const confirmEditPlaylistBtn = document.getElementById('confirmEditPlaylistBtn');

// Delete Modal & Toasts
const deleteConfirmModal = document.getElementById('deleteConfirmModal');
const closeDeleteConfirmModal = document.getElementById('closeDeleteConfirmModal');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const toastContainer = document.getElementById('toastContainer');

// TXT Importer Modal
const importResultsModal = document.getElementById('importResultsModal');
const closeImportResultsModal = document.getElementById('closeImportResultsModal');
const importResultsList = document.getElementById('importResultsList');
const finishImportBtn = document.getElementById('finishImportBtn');

// Player UI
const miniPlayer = document.getElementById('miniPlayer');
const openPlayerBtn = document.getElementById('openPlayerBtn');
const miniCover = document.getElementById('miniCover');
const miniTitle = document.getElementById('miniTitle');
const miniArtist = document.getElementById('miniArtist');
const miniPlayPauseBtn = document.getElementById('miniPlayPauseBtn');
const miniProgress = document.getElementById('miniProgress');

const fullPlayer = document.getElementById('fullPlayer');
const closePlayerBtn = document.getElementById('closePlayerBtn');
const fullCover = document.getElementById('fullCover');
const fullTitle = document.getElementById('fullTitle');
const fullArtist = document.getElementById('fullArtist');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationTimeEl = document.getElementById('durationTime');

// Global State
let searchQueue = [];
let currentQueue = [];
let currentIndex = -1;
let debounceTimer;
let currentPlayRequestId = 0; // Tracks rapid skipping calls to avoid race conditions
let isChangingTrack = false; // Prevent async pause events from overwriting loading UI

// Pagination State
let currentSearchQuery = '';
let currentPage = 1;
let isFetching = false;
let hasMoreResults = true;

// Artist Album Pagination State
let currentArtistAlbumPage = 1;
let isFetchingArtistAlbums = false;
let hasMoreArtistAlbums = true;
let currentArtistIdForAlbums = null;

// All Artist Songs Pagination State
let currentAllArtistSongsPage = 1;
let isFetchingAllArtistSongs = false;
let hasMoreAllArtistSongs = true;
let currentArtistIdForAllSongs = null;
let currentAllArtistSongsData = [];

let playlists = JSON.parse(localStorage.getItem('webMusicPlaylists')) || [];
let trackToAdd = null;
let currentViewedPlaylist = null;
let pendingTrackToAdd = null;
let isShuffleOn = false; // Estado del modo aleatorio
let activeContextId = null; // Tracks which list/context is currently playing

// --- Formatting & Utilities ---
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

function formatArtistLinks(namesStr, idsStr, pointerEventsAuto = false) {
    if (!namesStr) return getI18n("song.artist_unknown");
    const names = namesStr.split(',').map(n => n.trim());
    const ids = (idsStr || '').split(',').map(i => i.trim());

    if (!idsStr) return decodeHTML(namesStr);

    const extraStyle = pointerEventsAuto ? " pointer-events: auto;" : "";

    return names.map((name, index) => {
        const id = ids[index] || ids[0];
        if (id && id !== '') {
            return `<span class="artist-link" data-artist-id="${id}" style="cursor: pointer;${extraStyle}">${decodeHTML(name)}</span>`;
        }
        return decodeHTML(name);
    }).join(', ');
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function updateAllTrackButtons() {
    const btns = document.querySelectorAll('.add-to-playlist-btn');
    btns.forEach(btn => {
        const tid = btn.getAttribute('data-track-id');
        if (tid) {
            const saved = isTrackSaved(tid);
            if (saved) {
                btn.className = 'add-to-playlist-btn added';
                btn.innerHTML = '<i class="fa-solid fa-check"></i>';
                btn.title = 'AÃ±adido a playlist';
            } else {
                btn.className = 'add-to-playlist-btn';
                btn.innerHTML = '<i class="fa-solid fa-plus"></i>';
                btn.title = 'AÃ±adir a playlist';
            }
        }
    });

    try {
        if (currentViewedAlbumMeta) {
            const albumName = decodeHTML(currentViewedAlbumMeta.name || currentViewedAlbumMeta.title);
            const albumExists = playlists.some(p => p.name === albumName && p.isAlbum === true);
            const saveBtn = document.getElementById('saveAlbumBtn');
            if (saveBtn) {
                if (albumExists) {
                    saveBtn.classList.add('added');
                    saveBtn.innerHTML = '<i class="fa-solid fa-check" style="font-size: 16px;"></i>';
                } else {
                    saveBtn.classList.remove('added');
                    saveBtn.innerHTML = '<i class="fa-solid fa-plus" style="font-size: 16px;"></i>';
                }
            }
        }
    } catch (e) { }
}

function savePlaylists() {
    localStorage.setItem('webMusicPlaylists', JSON.stringify(playlists));
    updateAllTrackButtons();
}

function isTrackSaved(trackId) {
    if (!trackId) return false;
    return playlists.some(p => p.tracks && p.tracks.some(t => t.id === trackId.toString()));
}

function getTrackAddButtonHTML(track) {
    const saved = isTrackSaved(track.id);
    const cls = saved ? 'add-to-playlist-btn added' : 'add-to-playlist-btn';
    const icon = saved ? 'fa-check' : 'fa-plus';
    const title = saved ? 'AÃ±adido a playlist' : 'AÃ±adir a playlist';
    return `<button class="${cls}" data-track-id="${track.id}" title="${title}"><i class="fa-solid ${icon}"></i></button>`;
}

// --- Toast Notifications ---
function showToast(message, icon = "fa-check-circle") {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color: var(--accent-color);"></i> ${message}`;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// --- Navigation ---
const mainHeader = document.querySelector('.main-header');

function switchView(viewId) {
    if (typeof fullPlayer !== 'undefined' && fullPlayer) fullPlayer.classList.remove('active');
    searchView.style.display = 'none';
    playlistsView.style.display = 'none';
    playlistDetailView.style.display = 'none';
    artistDetailView.style.display = 'none';
    if (albumDetailView) albumDetailView.style.display = 'none';
    if (allArtistSongsView) allArtistSongsView.style.display = 'none';
    if (settingsView) settingsView.style.display = 'none';
    homeView.style.display = 'none';

    if (mainHeader) mainHeader.style.display = 'block';

    if (tabHome) tabHome.classList.remove('active');
    if (tabSearch) tabSearch.classList.remove('active');
    if (tabPlaylists) tabPlaylists.classList.remove('active');

    if (viewId === 'home') {
        homeView.style.display = 'flex';
        tabHome.classList.add('active');
        mainTitle.setAttribute('data-i18n', 'nav.home');
        mainTitle.textContent = getI18n("nav.home");
        createNewPlaylistBtn.style.display = 'none';
        renderHomePlaylists();
        if (!homeLoaded) loadHomeData();
    } else if (viewId === 'search') {
        searchView.style.display = 'flex';
        tabSearch.classList.add('active');
        mainTitle.setAttribute('data-i18n', 'nav.search');
        mainTitle.textContent = getI18n("nav.search");
        createNewPlaylistBtn.style.display = 'none';
    } else if (viewId === 'playlists') {
        playlistsView.style.display = 'flex';
        tabPlaylists.classList.add('active');
        mainTitle.setAttribute('data-i18n', 'nav.library');
        mainTitle.textContent = getI18n("nav.library");
        createNewPlaylistBtn.style.display = 'flex';
        renderPlaylists();
    } else if (viewId === 'playlistDetail') {
        playlistDetailView.style.display = 'flex';
        if (mainHeader) mainHeader.style.display = 'none';
        mainTitle.textContent = "Detalles de Playlist";
        createNewPlaylistBtn.style.display = 'none';
    } else if (viewId === 'artistDetail') {
        artistDetailView.style.display = 'flex';
        if (mainHeader) mainHeader.style.display = 'none';
        createNewPlaylistBtn.style.display = 'none';
    } else if (viewId === 'albumDetail') {
        if (albumDetailView) albumDetailView.style.display = 'flex';
        if (mainHeader) mainHeader.style.display = 'none';
        createNewPlaylistBtn.style.display = 'none';
    } else if (viewId === 'allArtistSongs') {
        if (allArtistSongsView) allArtistSongsView.style.display = 'flex';
        if (mainHeader) mainHeader.style.display = 'none';
        createNewPlaylistBtn.style.display = 'none';
    } else if (viewId === 'settings') {
        if (settingsView) settingsView.style.display = 'flex';
        if (mainHeader) mainHeader.style.display = 'none';
        createNewPlaylistBtn.style.display = 'none';
    }
}

tabHome.addEventListener('click', () => switchView('home'));
tabSearch.addEventListener('click', () => switchView('search'));
tabPlaylists.addEventListener('click', () => switchView('playlists'));
backToPlaylistsBtn.addEventListener('click', () => switchView('playlists'));
if (backFromArtistBtn) backFromArtistBtn.addEventListener('click', () => switchView('search'));
if (backFromAlbumBtn) backFromAlbumBtn.addEventListener('click', () => switchView('artistDetail'));
if (backFromAllSongsBtn) backFromAllSongsBtn.addEventListener('click', () => switchView('artistDetail'));
if (headerProfileBtn) headerProfileBtn.addEventListener('click', () => switchView('settings'));
if (backFromSettingsBtn) backFromSettingsBtn.addEventListener('click', () => switchView('home'));

// --- Playlists Feature ---
function generatePlaylistCoverHTML(playlist, isCard = false) {
    if (playlist.isAlbum && playlist.albumCover) {
        const artworkObj = playlist.albumCover.find(img => img.quality && img.quality.includes('150')) || playlist.albumCover[0];
        const cover = artworkObj ? (artworkObj.url || artworkObj.link) : '';
        if (isCard) return `<img src="${cover}" loading="lazy">`;
        return `<div class="playlist-icon" style="padding:0;"><img src="${cover}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" loading="lazy"></div>`;
    }

    if (playlist.tracks.length >= 4) {
        const imgs = playlist.tracks.slice(0, 4).map(track => {
            const artworkObj = track.image.find(img => img.quality && img.quality.includes('150')) || track.image[0];
            return artworkObj ? (artworkObj.url || artworkObj.link) : 'https://via.placeholder.com/150';
        });

        const baseClass = isCard ? 'card-cover cover-grid' : 'playlist-icon cover-grid';
        return `
            <div class="${baseClass}">
                <img src="${imgs[0]}" loading="lazy">
                <img src="${imgs[1]}" loading="lazy">
                <img src="${imgs[2]}" loading="lazy">
                <img src="${imgs[3]}" loading="lazy">
            </div>
        `;
    } else if (playlist.tracks.length > 0) {
        const track = playlist.tracks[0];
        const artworkObj = track.image.find(img => img.quality && img.quality.includes('150')) || track.image[0];
        const cover = artworkObj ? (artworkObj.url || artworkObj.link) : '';

        if (isCard) {
            return `<img src="${cover}" loading="lazy">`;
        } else {
            return `<div class="playlist-icon" style="padding:0;"><img src="${cover}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" loading="lazy"></div>`;
        }
    } else {
        if (isCard) {
            return `<div class="card-cover" style="display:flex; justify-content:center; align-items:center; background: var(--secondary-bg); color: var(--text-secondary); width: 100%; aspect-ratio: 1/1; border-radius: 8px; box-sizing: border-box;"><i class="fa-solid fa-music" style="font-size: 50px;"></i></div>`;
        } else {
            return `<div class="playlist-icon"><i class="fa-solid fa-music"></i></div>`;
        }
    }
}

function renderPlaylists() {
    if (playlists.length === 0) {
        playlistsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-layer-group"></i>
                <p data-i18n="playlists.empty">${getI18n("playlists.empty")}</p>
            </div>
        `;
        return;
    }

    playlistsContainer.innerHTML = '';
    playlists.forEach(playlist => {
        const item = document.createElement('div');
        item.className = 'playlist-item';

        const count = playlist.tracks.length;
        const coverHTML = generatePlaylistCoverHTML(playlist, false);

        item.innerHTML = `
            ${coverHTML}
            <div class="playlist-info">
                <h4>${playlist.name}</h4>
                <p>${count} cancion${count !== 1 ? 'es' : ''}</p>
            </div>
        `;

        item.addEventListener('click', () => openPlaylistDetail(playlist));
        playlistsContainer.appendChild(item);
    });
}

function updatePlaylistInfoDisplay(playlist) {
    if (!detailPlaylistInfo) return;
    const totalSeconds = playlist.tracks.reduce((acc, t) => {
        let dur = 0;
        if (t.duration) dur = parseInt(t.duration) || 0;
        else if (t.trackTimeMillis) dur = Math.floor(t.trackTimeMillis / 1000) || 0;
        if (dur === 0) dur = 180; // Legacy fallback estimation for old imported tracks
        return acc + dur;
    }, 0);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    let timeStr = '';
    if (playlist.tracks.length > 0 && totalSeconds > 0) {
        if (hours > 0) {
            timeStr = ` â€¢ ${hours}h ${minutes}m`;
        } else {
            timeStr = ` â€¢ ${Math.max(1, minutes)}m`;
        }
    }
    detailPlaylistInfo.textContent = `${playlist.tracks.length} cancion${playlist.tracks.length !== 1 ? 'es' : ''}${timeStr}`;
}

function openPlaylistDetail(playlist) {
    currentViewedPlaylist = playlist;
    detailPlaylistTitleHero.textContent = playlist.name;
    updatePlaylistInfoDisplay(playlist);
    detailPlaylistCover.innerHTML = generatePlaylistCoverHTML(playlist, true);

    // Reflejar estado del modo aleatorio de ESTA playlist
    isShuffleOn = playlist.shuffleMode || false;

    if (isShuffleOn) {
        shufflePlaylistBtn.classList.add('active');
    } else {
        shufflePlaylistBtn.classList.remove('active');
    }

    switchView('playlistDetail');

    stickyPlaylistTitle.textContent = playlist.name;
    stickyPlaylistTitle.style.opacity = '0';
    stickyPlayBtn.style.opacity = '0';
    stickyPlayBtn.style.pointerEvents = 'none';
    stickyPlayBtn.style.transform = 'translateY(10px)';

    updatePlayState(!audioPlayer.paused);

    playlistFilterInput.value = '';
    renderPlaylistSongs(playlist.tracks);

    setTimeout(() => {
        playlistDetailMain.scrollTop = 60;
    }, 10);
}

function renderPlaylistSongs(tracksToRender) {
    playlistSongsContainer.style.minHeight = '100vh';

    if (tracksToRender.length === 0) {
        playlistSongsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-compact-disc"></i>
                <p data-i18n="playlist.empty">${getI18n("playlist.empty")}</p>
            </div>
        `;
        return;
    }

    playlistSongsContainer.innerHTML = '';
    tracksToRender.forEach((track, index) => {
        const artworkObj = track.image.find(img => img.quality && img.quality.includes('150')) || track.image[0];
        const smallArtworkUrl = artworkObj ? (artworkObj.url || artworkObj.link) : 'https://via.placeholder.com/150';

        const artistNameStr = track.primaryArtists || track.singers || getI18n("song.artist_unknown");
        const trackName = decodeHTML(track.name || track.title);

        const artistIdStr = track.primaryArtistsId || track.artistId || "";
        const artistHtml = `<p>${formatArtistLinks(artistNameStr, artistIdStr)}</p>`;

        const item = document.createElement('div');
        item.className = 'song-item'; item.dataset.trackJson = encodeURIComponent(JSON.stringify(track));
        item.innerHTML = `
            <img src="${smallArtworkUrl}" alt="Cover" loading="lazy">
            <div class="song-info">
                <h4>${trackName}</h4>
                ${artistHtml}
            </div>
            <button class="icon-btn remove-from-playlist" style="color:var(--text-secondary); width:30px;"><i class="fa-solid fa-trash"></i></button>
        `;

        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('artist-link')) {
                e.stopPropagation();
                openArtistDetail(e.target.getAttribute('data-artist-id'), e.target.textContent);
                return;
            }
            if (!e.target.closest('.remove-from-playlist')) {
                activeContextId = currentViewedPlaylist.id;
                playTrack(index, tracksToRender.slice());
            }
        });

        const removeBtn = item.querySelector('.remove-from-playlist');
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const originalIndex = currentViewedPlaylist.tracks.findIndex(t => t.id === track.id);
            if (originalIndex !== -1) {
                currentViewedPlaylist.tracks.splice(originalIndex, 1);
                savePlaylists();
                updatePlaylistInfoDisplay(currentViewedPlaylist);
                detailPlaylistCover.innerHTML = generatePlaylistCoverHTML(currentViewedPlaylist, true);
                renderHomePlaylists();
                playlistFilterInput.dispatchEvent(new Event('input'));
            }
        });

        playlistSongsContainer.appendChild(item);
    });
}

playlistFilterInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    if (!currentViewedPlaylist) return;
    if (!q) {
        renderPlaylistSongs(currentViewedPlaylist.tracks);
        return;
    }
    const filtered = currentViewedPlaylist.tracks.filter(t => {
        const title = (t.name || t.title || '').toLowerCase();
        const artist = (t.primaryArtists || t.singers || '').toLowerCase();
        return title.includes(q) || artist.includes(q);
    });
    renderPlaylistSongs(filtered);
});

let filterScrollTimer;
const playlistControlsRow = document.getElementById('playlistControlsRow');

playlistDetailMain.addEventListener('scroll', () => {
    const st = playlistDetailMain.scrollTop;

    let showSticky = false;
    if (playlistControlsRow) {
        const rect = playlistControlsRow.getBoundingClientRect();
        if (rect.bottom < 50) showSticky = true;
    } else if (st > 280) {
        showSticky = true;
    }

    if (showSticky) {
        stickyPlaylistTitle.style.opacity = '1';
        stickyPlayBtn.style.opacity = '1';
        stickyPlayBtn.style.pointerEvents = 'auto';
        stickyPlayBtn.style.transform = 'translateY(0)';
    } else {
        stickyPlaylistTitle.style.opacity = '0';
        stickyPlayBtn.style.opacity = '0';
        stickyPlayBtn.style.pointerEvents = 'none';
        stickyPlayBtn.style.transform = 'translateY(10px)';
    }

    clearTimeout(filterScrollTimer);
    filterScrollTimer = setTimeout(() => {
        if (playlistDetailMain.scrollTop > 0 && playlistDetailMain.scrollTop < 60) {
            playlistDetailMain.scrollTo({
                top: playlistDetailMain.scrollTop > 30 ? 60 : 0,
                behavior: 'smooth'
            });
        }
    }, 150);
});

stickyPlayBtn.addEventListener('click', () => {
    playAllPlaylistBtn.click();
});

playAllPlaylistBtn.addEventListener('click', () => {
    if (!currentViewedPlaylist || currentViewedPlaylist.tracks.length === 0) return;

    if (activeContextId === currentViewedPlaylist.id) {
        togglePlay();
    } else {
        let startIndex = 0;
        if (isShuffleOn) {
            startIndex = Math.floor(Math.random() * currentViewedPlaylist.tracks.length);
        }
        activeContextId = currentViewedPlaylist.id;
        playTrack(startIndex, currentViewedPlaylist.tracks.slice());
    }
});

// --- Edit Playlist Logic ---
function openEditPlaylistModal() {
    if (!currentViewedPlaylist) return;
    editPlaylistNameInput.value = currentViewedPlaylist.name;
    editPlaylistModal.style.display = 'flex';
    editPlaylistNameInput.focus();
}

function closeEditModal() {
    editPlaylistModal.style.display = 'none';
}

closeEditPlaylistModal.addEventListener('click', closeEditModal);
cancelEditPlaylistBtn.addEventListener('click', closeEditModal);
editPlaylistModal.addEventListener('click', (e) => {
    if (e.target === editPlaylistModal) closeEditModal();
});

function confirmRename() {
    if (!currentViewedPlaylist) return;
    const newName = editPlaylistNameInput.value.trim();
    if (!newName) return;

    currentViewedPlaylist.name = newName;
    savePlaylists();
    detailPlaylistTitleHero.textContent = newName;
    closeEditModal();
    renderPlaylists();
}

confirmEditPlaylistBtn.addEventListener('click', confirmRename);
editPlaylistNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') confirmRename();
});

editPlaylistBtn.addEventListener('click', openEditPlaylistModal);

// --- Delete Playlist ---
function closeDeleteModal() {
    deleteConfirmModal.style.display = 'none';
}

closeDeleteConfirmModal.addEventListener('click', closeDeleteModal);
cancelDeleteBtn.addEventListener('click', closeDeleteModal);
deleteConfirmModal.addEventListener('click', (e) => {
    if (e.target === deleteConfirmModal) closeDeleteModal();
});

deletePlaylistBtn.addEventListener('click', () => {
    if (!currentViewedPlaylist) return;
    deleteConfirmModal.style.display = 'flex';
});

confirmDeleteBtn.addEventListener('click', () => {
    if (!currentViewedPlaylist) return;
    playlists = playlists.filter(p => p.id !== currentViewedPlaylist.id);
    savePlaylists();
    closeDeleteModal();
    switchView('playlists');
    showToast("Playlist eliminada correctamente", "fa-trash");
});

// --- Shuffle Playlist Mode ---
shufflePlaylistBtn.addEventListener('click', () => {
    isShuffleOn = !isShuffleOn;

    if (currentViewedPlaylist) {
        currentViewedPlaylist.shuffleMode = isShuffleOn;
        savePlaylists();
    }

    if (isShuffleOn) {
        shufflePlaylistBtn.classList.add('active');
    } else {
        shufflePlaylistBtn.classList.remove('active');
    }
    showToast(isShuffleOn ? "Modo Aleatorio activado" : "Modo Aleatorio desactivado", "fa-shuffle");
});

// Modal Logic
function openAddModal(track) {
    trackToAdd = track;
    renderModalPlaylists();
    addPlaylistModal.style.display = 'flex';
}

function closeAddModal() {
    addPlaylistModal.style.display = 'none';
    trackToAdd = null;
}

closePlaylistModal.addEventListener('click', closeAddModal);
addPlaylistModal.addEventListener('click', (e) => {
    if (e.target === addPlaylistModal) closeAddModal();
});

// Custom Create Playlist Modal Logic
function openCreatePlaylistModal(initialTrack = null) {
    pendingTrackToAdd = initialTrack;
    newPlaylistNameInput.value = '';

    // Si viene desde el botÃ³n del modal "AÃ±adir a Playlist", se oculta temporalmente el primero
    if (addPlaylistModal.style.display === 'flex') {
        addPlaylistModal.style.display = 'none';
    }

    createPlaylistModal.style.display = 'flex';
    newPlaylistNameInput.focus();
}

function closeCreateModal() {
    createPlaylistModal.style.display = 'none';
    pendingTrackToAdd = null;
    trackToAdd = null; // Reiniciar por seguridad
}

closeCreatePlaylistModal.addEventListener('click', closeCreateModal);
cancelCreatePlaylistBtn.addEventListener('click', closeCreateModal);
createPlaylistModal.addEventListener('click', (e) => {
    if (e.target === createPlaylistModal) closeCreateModal();
});

function confirmCreation() {
    const name = newPlaylistNameInput.value.trim();
    if (!name) {
        showToast("Introduce un nombre para la playlist", "fa-triangle-exclamation");
        return;
    }

    if (isImportMode) {
        const file = importTxtInput.files[0];
        if (!file) {
            showToast("Debes adjuntar un archivo .txt primero", "fa-triangle-exclamation");
            return;
        }
        closeCreateModal();
        executeTxtImport(name, file);
        return;
    }

    const newPlaylist = {
        id: generateId(),
        name: name,
        tracks: pendingTrackToAdd ? [pendingTrackToAdd] : [],
        shuffleMode: false
    };

    playlists.push(newPlaylist);
    savePlaylists();

    closeCreateModal();

    if (pendingTrackToAdd) {
        // Se aÃ±adiÃ³ una canciÃ³n directamente al crear la lista
        showToast(`Â¡CanciÃ³n aÃ±adida a ${name}!`);
        trackToAdd = null;
    } else {
        renderPlaylists();
        showToast(`Playlist "${name}" creada`);
    }
}

confirmCreatePlaylistBtn.addEventListener('click', confirmCreation);

newPlaylistNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        confirmCreation();
    }
});

// --- Dropdown Toggle UI ---
createNewPlaylistBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = createPlaylistDropdown.style.display === 'block';

    if (isVisible) {
        createPlaylistDropdown.style.opacity = '0';
        createPlaylistDropdown.style.transform = 'translateY(-10px)';
        setTimeout(() => createPlaylistDropdown.style.display = 'none', 200);
    } else {
        createPlaylistDropdown.style.display = 'block';
        setTimeout(() => {
            createPlaylistDropdown.style.opacity = '1';
            createPlaylistDropdown.style.transform = 'translateY(0)';
        }, 10);
    }
});

document.addEventListener('click', () => {
    if (createPlaylistDropdown && createPlaylistDropdown.style.display === 'block') {
        createPlaylistDropdown.style.opacity = '0';
        createPlaylistDropdown.style.transform = 'translateY(-10px)';
        setTimeout(() => createPlaylistDropdown.style.display = 'none', 200);
    }
});

// Original Modal Triggers mapped dynamically
btnDropdownNew.addEventListener('click', () => {
    isImportMode = false;
    createPlaylistModalTitle.textContent = "Nueva Playlist";
    importFileContainer.style.display = 'none';
    confirmCreatePlaylistBtn.textContent = "Crear";
    openCreatePlaylistModal(null);
});
createPlaylistBtnModal.addEventListener('click', () => {
    isImportMode = false;
    createPlaylistModalTitle.textContent = "Nueva Playlist";
    importFileContainer.style.display = 'none';
    confirmCreatePlaylistBtn.textContent = "Crear";
    openCreatePlaylistModal(trackToAdd);
});

// --- TXT Importer Engine ---
btnDropdownImport.addEventListener('click', (e) => {
    e.stopPropagation();
    isImportMode = true;
    createPlaylistModalTitle.textContent = "Importar Playlist (.txt)";
    importFileContainer.style.display = 'block';
    selectedFileNameDisplay.textContent = "";
    importTxtInput.value = '';
    confirmCreatePlaylistBtn.textContent = "Importar";
    openCreatePlaylistModal(null);
});

importFileContainer.addEventListener('click', () => {
    importTxtInput.click();
});

importTxtInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        selectedFileNameDisplay.textContent = e.target.files[0].name;
    }
});

// --- 3-Layer Strict Filtraton Wall ---
function passesStrictFilters(trackObj, expectedArtist, expectedTitle) {
    if (!trackObj) return false;

    // Normalize inputs
    const tName = (trackObj.name || trackObj.title || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const tArtist = (trackObj.primaryArtists || trackObj.singers || trackObj.artist || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const tLang = (trackObj.language || '').toLowerCase().trim();

    const eTitle = (expectedTitle || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const eArtist = (expectedArtist || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // 1. Language Wall
    // Block unwanted regional languages UNLESS explicitly requested in the query
    const forbiddenLangs = ['hindi', 'tamil', 'telugu', 'punjabi', 'arabic', 'marathi', 'gujarati', 'bengali', 'kannada', 'malayalam', 'urdu', 'bhojpuri', 'haryanvi', 'rajasthani', 'odia', 'assamese'];
    if (forbiddenLangs.includes(tLang)) {
        // If the expected title or artist actually contains the language name, we allow it (explicit search)
        const isExplicitlyRequested = forbiddenLangs.some(lang => eTitle.includes(lang) || eArtist.includes(lang));
        if (!isExplicitlyRequested) return false;
    }

    // 2. Exact Artist Wall
    if (eArtist) {
        // We require the returned artist string to explicitly contain the expected artist name.
        // E.g. If searching "Radiohead", the artist MUST contain "radiohead". "Cover Band" fails.
        const eArtistClean = eArtist.replace(/[^a-z0-9]/g, '');
        const tArtistClean = tArtist.replace(/[^a-z0-9]/g, '');

        if (eArtistClean.length > 2) { // Only enforce for meaningful names
            if (!tArtistClean.includes(eArtistClean) && !eArtistClean.includes(tArtistClean)) {
                return false;
            }
        }
    }

    // 3. Prohibited Terms Wall (Covers/Tributes)
    const prohibitedTerms = ['cover', 'tribute', 'remix', 'tributo', 'version', 'karaoke', 'instrumental', 'sped up', 'slowed', 'remake'];
    for (const term of prohibitedTerms) {
        // If the track name has a prohibited term...
        if (tName.includes(term)) {
            // ...but the user DID NOT explicitly ask for it, BLOCK IT.
            if (!eTitle.includes(term)) {
                return false;
            }
        }
    }

    return true; // Passed all layers
}

// Global Heuristic Scorer for Audio Variant Filtration
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
    if (ea && a) {
        let matchedArtist = false;
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
        }
    }

    return score;
}

async function executeTxtImport(pName, sourceData, targetPlaylistId = null, resumeProcessed = 0, resumeFailedList = []) {
    let lines = [];
    if (Array.isArray(sourceData)) {
        lines = sourceData;
    } else {
        let text = '';
        if (typeof sourceData === 'string') text = sourceData;
        else text = await sourceData.text();
        lines = text.split('\n').map(l => l.trim()).filter(l => l !== '');
    }

    let targetPlaylist = playlists.find(p => p.id === targetPlaylistId);
    if (!targetPlaylist) {
        targetPlaylist = {
            id: generateId(),
            name: pName,
            tracks: [],
            shuffleMode: false
        };
        playlists.push(targetPlaylist);
    }

    savePlaylists();
    renderPlaylists();

    // UI Progress Banner
    const banner = document.getElementById('importProgressBanner');
    const bText = document.getElementById('importProgressText');
    const bBar = document.getElementById('importProgressBar');
    banner.style.display = 'block';

    let failedList = resumeFailedList || [];
    let processed = resumeProcessed || 0;

    bText.textContent = `Procesando ${processed} de ${lines.length} canciones`;
    bBar.style.width = `${(processed / lines.length) * 100}%`;

    // Asynchronous Line Loop Extraction Engine
    for (let i = processed; i < lines.length; i++) {
        const line = lines[i];
        try {
            const rawQuery = line;
            let expectedArtist = '';
            let expectedTitle = rawQuery;
            if (rawQuery.includes('-')) {
                const parts = rawQuery.split('-');
                expectedArtist = parts[0].trim();
                expectedTitle = parts.slice(1).join('-').trim();
            }

            let jioData = null;
            let successFetch = false;

            // 3-Strike Retry Mechanism to bypass sudden rate limits
            for (let attempt = 1; attempt <= 3; attempt++) {
                try {
                    const jioUrl = `https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${encodeURIComponent(rawQuery)}&limit=7`;
                    const jioRes = await fetch(jioUrl);

                    if (jioRes.status === 429) {
                        await new Promise(r => setTimeout(r, 4000));
                        continue;
                    }

                    if (jioRes.ok) {
                        const jd = await jioRes.json();
                        let hits = [];
                        if (jd.data && jd.data.results) hits = jd.data.results;
                        else if (jd.results) hits = jd.results;

                        if (hits && hits.length > 0) {
                            // STRICT FILTRATION WALL
                            const validHits = hits.filter(h => passesStrictFilters(h, expectedArtist, expectedTitle));

                            if (validHits.length > 0) {
                                validHits.sort((a, b) => b.playCount - a.playCount);
                                jioData = validHits[0];
                                successFetch = true;
                                break;
                            }
                        }
                    }
                } catch (netErr) {
                    await new Promise(r => setTimeout(r, 2000));
                }
            }

            if (!successFetch || !jioData) {
                // FALLBACK TO ALTERNATE JIOSAAVN INSTANCE if the primary fails
                const fbApis = [
                    `https://saavn.dev/api/search/songs?query=${encodeURIComponent(rawQuery)}&limit=5`,
                    `https://saavn.me/search/songs?query=${encodeURIComponent(rawQuery)}&limit=5`
                ];
                for (let fu of fbApis) {
                    try {
                        const fr = await fetch(fu);
                        if (fr.ok) {
                            const fd = await fr.json();
                            let fHits = [];
                            if (fd.data && fd.data.results) fHits = fd.data.results;
                            else if (fd.results) fHits = fd.results;
                            else if (Array.isArray(fd.data)) fHits = fd.data;

                            if (fHits.length > 0) {
                                const validHits = fHits.filter(h => passesStrictFilters(h, expectedArtist, expectedTitle));
                                if (validHits.length > 0) {
                                    validHits.sort((a, b) => b.playCount - a.playCount);
                                    jioData = validHits[0];
                                    break;
                                }
                            }
                        }
                    } catch (e) { }
                }
            }

            if (jioData) {
                const rawAudioUrl = getBestAudioUrl(jioData.downloadUrl) || '';
                const isPreview = !rawAudioUrl;

                const newTrack = {
                    id: jioData.id.toString(),
                    name: decodeHTML(jioData.name || jioData.title),
                    title: decodeHTML(jioData.name || jioData.title),
                    primaryArtists: decodeHTML(jioData.primaryArtists || jioData.singers),
                    primaryArtistsId: (jioData.primaryArtistsId || '').toString(),
                    image: jioData.image || [],
                    downloadUrl: rawAudioUrl ? [{ quality: '320kbps', url: rawAudioUrl }] : [],
                    previewUrl: rawAudioUrl, // Usar la misma porque no hay otra
                    playCount: Number(jioData.playCount || 0),
                    album: { name: decodeHTML((jioData.album && jioData.album.name) || ''), id: '' },
                    isPreview: isPreview,
                    duration: jioData.duration ? jioData.duration.toString() : "0"
                };

                targetPlaylist.tracks.push(newTrack);
                savePlaylists(); // Live-save

                // Live UI update if currently viewing this specific playlist
                if (currentViewedPlaylist && currentViewedPlaylist.id === targetPlaylist.id) {
                    updatePlaylistInfoDisplay(targetPlaylist);
                    renderPlaylistSongs(targetPlaylist.tracks);
                } else if (playlistsView.style.display === 'flex') {
                    renderPlaylists();
                }

                // Background Apple Music Artwork Fetch (Master Quality)
                const applyAppleQuery = `${newTrack.name} ${newTrack.primaryArtists.split(',')[0]}`;
                fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(applyAppleQuery)}&entity=song&limit=5`)
                    .then(r => r.json())
                    .then(appleData => {
                        const appleTracks = appleData.results || [];
                        const localSafeName = newTrack.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                        const masterHit = appleTracks.find(at => {
                            const atName = (at.trackName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                            return atName.includes(localSafeName) || localSafeName.includes(atName);
                        });
                        if (masterHit && masterHit.artworkUrl100) {
                            newTrack.image = [{ quality: '500x500', url: masterHit.artworkUrl100.replace('100x100', '500x500') }];
                            savePlaylists();
                            if (currentViewedPlaylist && currentViewedPlaylist.id === targetPlaylist.id) {
                                const imgEl = document.querySelector(`.playlist-song-item img[data-track-index="${targetPlaylist.tracks.length - 1}"]`);
                                if (imgEl) imgEl.src = newTrack.image[0].url;
                            }
                        }
                    }).catch(() => { });

            } else {
                failedList.push({ request: line, reason: "No se encontrÃ³ audio original." });
            }
        } catch (globalError) {
            failedList.push({ request: line, reason: "Fallo crÃ­tico en API de escÃ¡ner." });
        }

        processed++;
        bText.textContent = `Procesando ${processed} de ${lines.length} canciones`;
        bBar.style.width = `${(processed / lines.length) * 100}%`;

        const importState = {
            playlistName: targetPlaylist.name,
            lines: lines,
            processedCount: processed,
            failedList: failedList,
            targetPlaylistId: targetPlaylist.id
        };
        localStorage.setItem('notify_import_state', JSON.stringify(importState));

        // Permanent Throttle: Honor Apple's global API quotas by delaying precisely 1200ms between lines
        await new Promise(resolve => setTimeout(resolve, 1200));
    }

    // Finished Cleanup
    localStorage.removeItem('notify_import_state');
    banner.style.display = 'none';
    if (createPlaylistDropdown) createPlaylistDropdown.style.display = 'none';
    showToast(`Â¡Playlist compilada exitosamente!`, 'fa-check');

    // Dynamic failure reporter injection mappings
    if (failedList.length > 0) {
        importResultsList.innerHTML = '';
        failedList.forEach(fail => {
            const item = document.createElement('div');
            item.style = 'padding: 10px; border-radius: 8px; background: rgba(255,69,58,0.1); border-left: 3px solid #ff453a;';
            item.innerHTML = `<strong style="font-size: 13px;">${decodeHTML(fail.request)}</strong><p style="margin: 4px 0 0 0; font-size: 12px; color: var(--text-secondary);">${fail.reason}</p>`;
            importResultsList.appendChild(item);
        });

        let retryBtn = document.getElementById('retryFailedBtn');
        if (!retryBtn) {
            retryBtn = document.createElement('button');
            retryBtn.id = 'retryFailedBtn';
            retryBtn.className = 'btn primary w-full';
            retryBtn.style.marginTop = '15px';
            document.querySelector('#importResultsModal .modal-content').appendChild(retryBtn);
        }

        // Clone and replace to strip old listeners
        const newRetryBtn = retryBtn.cloneNode(true);
        retryBtn.replaceWith(newRetryBtn);
        newRetryBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Reintentar Fallidas';

        newRetryBtn.addEventListener('click', () => {
            const rawFailedText = failedList.map(f => f.request).join('\n');
            importResultsModal.style.display = 'none';
            showToast('Reintentando peticiones...', 'fa-rotate');
            executeTxtImport(pName, rawFailedText, targetPlaylist.id);
        });

        importResultsModal.style.display = 'flex';
    }

    importTxtInput.value = '';
}

closeImportResultsModal.addEventListener('click', () => importResultsModal.style.display = 'none');
finishImportBtn.addEventListener('click', () => importResultsModal.style.display = 'none');
importResultsModal.addEventListener('click', (e) => {
    if (e.target === importResultsModal) importResultsModal.style.display = 'none';
});

function renderModalPlaylists() {
    if (playlists.length === 0) {
        modalPlaylistList.innerHTML = `
            <div style="text-align:center; padding: 20px; color: var(--text-secondary);">
                No tienes playlists aÃºn.
            </div>
        `;
        return;
    }

    modalPlaylistList.innerHTML = '';
    playlists.forEach(playlist => {
        const item = document.createElement('div');
        item.className = 'modal-playlist-item';

        const trackIndex = playlist.tracks.findIndex(t => t.id === trackToAdd.id);
        const trackExists = trackIndex !== -1;

        const coverHTML = generatePlaylistCoverHTML(playlist, false);
        const subtitle = trackExists
            ? 'La canciÃ³n ya estÃ¡ en la playlist.'
            : `${playlist.tracks.length} cancion${playlist.tracks.length !== 1 ? 'es' : ''}`;

        const subtitleColor = trackExists ? 'var(--text-secondary)' : 'var(--text-secondary)';

        item.innerHTML = `
            ${coverHTML}
            <div style="flex:1; display:flex; flex-direction:column; justify-content:center; margin-left: 12px;">
                <span style="font-size: 16px; font-weight: 500; margin-bottom: 2px;">${playlist.name}</span>
                <span style="color:${subtitleColor}; font-size:13px;">${subtitle}</span>
            </div>
            ${trackExists ? '<i class="fa-solid fa-check" style="color: var(--accent-color); font-size: 18px; margin-right: 0;"></i>' : ''}
        `;

        item.addEventListener('click', () => {
            if (trackExists) {
                playlist.tracks.splice(trackIndex, 1);
                savePlaylists();

                // Si la playlist actual que se estÃ¡ viendo es esta, la actualizamos
                if (currentViewedPlaylist && currentViewedPlaylist.id === playlist.id) {
                    updatePlaylistInfoDisplay(currentViewedPlaylist);
                    detailPlaylistCover.innerHTML = generatePlaylistCoverHTML(currentViewedPlaylist, true);
                    renderPlaylistSongs(currentViewedPlaylist.tracks);
                }
                renderHomePlaylists();

                showToast(`CanciÃ³n eliminada de ${playlist.name}`);
            } else {
                playlist.tracks.push(trackToAdd);
                savePlaylists();

                if (currentViewedPlaylist && currentViewedPlaylist.id === playlist.id) {
                    updatePlaylistInfoDisplay(currentViewedPlaylist);
                    detailPlaylistCover.innerHTML = generatePlaylistCoverHTML(currentViewedPlaylist, true);
                    renderPlaylistSongs(currentViewedPlaylist.tracks);
                }
                renderHomePlaylists();

                showToast(`CanciÃ³n aÃ±adida a ${playlist.name}`);
            }
            closeAddModal();
        });

        modalPlaylistList.appendChild(item);
    });
}

// Helper: Determinar el tipo de conexiÃ³n red
function getNetworkType() {
    if (navigator.connection) {
        if (navigator.connection.type === 'cellular') return 'cellular';
        const effType = navigator.connection.effectiveType;
        if (effType && (effType === 'slow-2g' || effType === '2g' || effType === '3g')) return 'cellular';
    }
    return 'wifi';
}

// Helper: Resuelve la URL de audio segÃºn la calidad configurada en ajustes
function getBestAudioUrl(downloadUrlArray) {
    if (!downloadUrlArray || !Array.isArray(downloadUrlArray) || downloadUrlArray.length === 0) return null;

    let targetQuality;
    const netType = getNetworkType();

    // Obtenemos la configuraciÃ³n de calidad actual
    const activeSetting = netType === 'cellular' ? (userProfile.dataQuality || 'normal') : (userProfile.wifiQuality || 'premium');

    switch (activeSetting) {
        case 'low': targetQuality = '96'; break;
        case 'normal': targetQuality = '160'; break;
        case 'high': targetQuality = '320'; break;
        case 'premium': targetQuality = 'premium'; break;
        default: targetQuality = '160';
    }

    if (targetQuality === 'premium') {
        const highest = downloadUrlArray[downloadUrlArray.length - 1];
        if (highest && (highest.url || highest.link)) return highest.url || highest.link;
    } else {
        const exact = downloadUrlArray.find(url => url.quality && url.quality.includes(targetQuality));
        if (exact && (exact.url || exact.link)) return exact.url || exact.link;

        // Fallbacks
        const fb160 = downloadUrlArray.find(u => u.quality && u.quality.includes('160'));
        if (targetQuality === '320' && fb160 && (fb160.url || fb160.link)) return fb160.url || fb160.link;

        const fb320 = downloadUrlArray.find(u => u.quality && u.quality.includes('320'));
        if (targetQuality === '160' && fb320 && (fb320.url || fb320.link)) return fb320.url || fb320.link;

        const fb96 = downloadUrlArray.find(u => u.quality && u.quality.includes('96'));
        if (fb96 && (fb96.url || fb96.link)) return fb96.url || fb96.link;
    }

    // Ultimate fallback
    const fallback = downloadUrlArray[0];
    return fallback ? (fallback.url || fallback.link) : null;
}

// --- Search API with Pagination ---
async function searchSongs(query, page = 1) {
    if (!query.trim()) {
        searchResults.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-music"></i>
                <p>Busca tus canciones favoritas para empezar</p>
            </div>
        `;
        searchQueue = [];
        hasMoreResults = false;
        return;
    }

    if (isFetching || (!hasMoreResults && page > 1)) return;
    isFetching = true;
    currentSearchQuery = query;

    if (page === 1) {
        currentPage = 1;
        searchQueue = [];
        hasMoreResults = true;
        searchResults.innerHTML = `
            <div class="loading-state">
                <i class="fa-solid fa-circle-notch"></i>
                <p>${getI18n("search.loading")}</p>
            </div>
        `;
    } else {
        const loader = document.createElement('div');
        loader.className = 'bottom-loader';
        loader.id = 'bottomLoader';
        loader.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span data-i18n="search.loading">${getI18n("search.loading")}</span>`;
        loader.style.textAlign = 'center';
        loader.style.padding = '20px';
        loader.style.color = 'var(--text-secondary)';
        searchResults.appendChild(loader);
    }

    try {
        let artistPromise = null;
        if (page === 1) {
            artistPromise = fetchArtistSearch(query);
        }

        // 1. Pristine Master Fetch from JioSaavn (Audio + Metadata Master)
        let jioTracks = [];
        const jioApis = [
            `https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${encodeURIComponent(query)}&page=${page}&limit=40`,
            `https://saavn.dev/api/search/songs?query=${encodeURIComponent(query)}&page=${page}&limit=40`,
            `https://saavn.me/search/songs?query=${encodeURIComponent(query)}&page=${page}&limit=40`
        ];

        for (let u of jioApis) {
            try {
                const jioRes = await fetch(u);
                if (jioRes.ok) {
                    const jd = await jioRes.json();
                    if (jd.data && jd.data.results) { jioTracks = jd.data.results; break; }
                    else if (jd.results) { jioTracks = jd.results; break; }
                }
            } catch (e) { }
        }

        if (jioTracks.length === 0 && page > 1) {
            hasMoreResults = false;
            isFetching = false;
            const oldLoader = document.getElementById('bottomLoader');
            if (oldLoader) oldLoader.remove();
            return;
        }

        // Parse explicit expected title & artist roughly from query if user used a dash
        let expectedArtist = '';
        let expectedTitle = query;
        if (query.includes('-')) {
            const parts = query.split('-');
            expectedArtist = parts[0].trim();
            expectedTitle = parts.slice(1).join('-').trim();
        }

        // 2. Strict Filtration Wall (Language, Correct Artist, Prohibited terms)
        const validTracks = jioTracks.filter(jt => passesStrictFilters(jt, expectedArtist, expectedTitle));

        // 3. Format Tracks & Extract Highest Quality Audio (320kbps prioritized)
        let newTracks = validTracks.map(jt => {
            const rawAudioUrl = getBestAudioUrl(jt.downloadUrl) || '';
            const isPreview = !rawAudioUrl; // If we somehow lost audio, flag as preview visually

            return {
                id: jt.id.toString(),
                name: decodeHTML(jt.name || jt.title),
                title: decodeHTML(jt.name || jt.title),
                primaryArtists: decodeHTML(jt.primaryArtists || jt.singers),
                primaryArtistsId: (jt.primaryArtistsId || '').toString(),
                image: jt.image || [{ quality: '150x150', url: 'https://via.placeholder.com/150' }],
                downloadUrl: rawAudioUrl ? [{ quality: '320kbps', url: rawAudioUrl }] : [],
                previewUrl: rawAudioUrl, // Reusing main URL so fallback doesn't break
                playCount: Number(jt.playCount || 0),
                album: { name: decodeHTML((jt.album && jt.album.name) || ''), id: (jt.album && jt.album.id) || '' },
                isPreview: isPreview
            };
        });

        // Sort by playCount (popularity heuristics)
        newTracks.sort((a, b) => b.playCount - a.playCount);

        // 4. Fallback or Background Apple Music Cover Art Enrichment
        if (newTracks.length === 0 && page === 1) {
            // Apple Fallback for Previews!
            try {
                const appleRes = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=15`);
                const appleData = await appleRes.json();
                if (appleData.results && appleData.results.length > 0) {
                    newTracks = appleData.results.map(at => {
                        const hqImage = at.artworkUrl100 ? at.artworkUrl100.replace('100x100bb', '500x500bb') : 'https://via.placeholder.com/500';
                        return {
                            id: 'apple_' + at.trackId,
                            name: decodeHTML(at.trackName),
                            title: decodeHTML(at.trackName),
                            primaryArtists: decodeHTML(at.artistName),
                            primaryArtistsId: '',
                            image: [{ quality: '500x500', url: hqImage }],
                            downloadUrl: at.previewUrl ? [{ quality: '160kbps', url: at.previewUrl }] : [],
                            previewUrl: at.previewUrl,
                            playCount: 0,
                            album: { name: decodeHTML(at.collectionName || ''), id: '' },
                            isPreview: true
                        };
                    });
                } else {
                    throw new Error("No se encontraron resultados ni en el servidor principal ni en Apple Music.");
                }
            } catch (e) {
                if (e.message) throw e;
                else throw new Error("Fallo de conexiÃ³n.");
            }
        } else if (newTracks.length > 0) {
            // Background enrichment for existing Jio Tracks
            const appleQuery = `${newTracks[0].name} ${newTracks[0].primaryArtists.split(',')[0]}`;
            fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(appleQuery)}&entity=song&limit=15`)
                .then(r => r.json())
                .then(appleData => {
                    const appleTracks = appleData.results || [];
                    newTracks.forEach((localTrack) => {
                        const localSafeName = localTrack.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                        const masterHit = appleTracks.find(at => {
                            const atName = (at.trackName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                            return atName.includes(localSafeName) || localSafeName.includes(atName);
                        });

                        // Si encontramos una coincidencia en Apple, robamos su Artwork HD
                        if (masterHit && masterHit.artworkUrl100) {
                            localTrack.image = [{ quality: '500x500', url: masterHit.artworkUrl100.replace('100x100bb', '500x500bb') }];
                            // Re-render visual de la carÃ¡tula si el DOM ya se pintÃ³
                            const imgEl = document.querySelector(`.song-item img[data-track-id="${localTrack.id}"]`);
                            if (imgEl) imgEl.src = localTrack.image[0].url;
                        }
                    });
                }).catch(e => console.warn("Apple Cover Art Fetch Failed", e));
        }

        if (newTracks.length === 0) {
            throw new Error("No hay pistas renderizables");
        }

        if (page === 1) {
            searchResults.innerHTML = '';
            if (artistPromise) {
                try {
                    const smartData = await artistPromise;
                    if (smartData && smartData.artists && smartData.artists.length > 0) {
                        renderArtistsScroll(smartData.artists);
                    }
                } catch (e) { }
            }

            const header = document.createElement('h3');
            header.innerText = 'Canciones Principales';
            header.style.padding = '5px 20px 10px';
            searchResults.appendChild(header);
        } else {
            const oldLoader = document.getElementById('bottomLoader');
            if (oldLoader) oldLoader.remove();
        }

        const startIndex = searchQueue.length;
        searchQueue = searchQueue.concat(newTracks);
        appendResults(newTracks, startIndex);

        currentPage = page;
        isFetching = false;
        hasMoreResults = newTracks.length >= 10; // If jioSaavn returned fewer than 10 valid, assume end
    } catch (error) {
        console.error("API Error: ", error);
        isFetching = false;
        if (page === 1) {
            searchResults.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <p>No se encontraron resultados compatibles</p>
                </div>
            `;
        } else {
            const oldLoader = document.getElementById('bottomLoader');
            if (oldLoader) oldLoader.remove();
            hasMoreResults = false;
        }
    }
}

function appendResults(newTracks, startIndex) {
    newTracks.forEach((track, idx) => {
        const absoluteIndex = startIndex + idx;
        const artworkObj = track.image.find(img => img.quality && img.quality.includes('500')) || track.image[track.image.length - 1];
        const artworkUrl = artworkObj ? (artworkObj.url || artworkObj.link) : 'https://via.placeholder.com/150';

        const smallArtworkObj = track.image.find(img => img.quality && img.quality.includes('150')) || track.image[0];
        const smallArtworkUrl = smallArtworkObj ? (smallArtworkObj.url || smallArtworkObj.link) : artworkUrl;

        const artistNameStr = track.primaryArtists || track.singers || getI18n("song.artist_unknown");
        const trackName = decodeHTML(track.name || track.title);

        const tagHtml = track.isPreview ? `<span class="preview-tag" style="background: rgba(255,0,0,0.2); color: #ff6b6b; padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-left: 8px; vertical-align: middle; white-space: nowrap;">${getI18n("toast.preview.tag")}</span>` : '';

        const artistIdStr = track.primaryArtistsId || track.artistId || "";
        const artistHtml = `<p>${formatArtistLinks(artistNameStr, artistIdStr)}</p>`;

        const item = document.createElement('div');
        item.className = 'song-item'; item.dataset.trackJson = encodeURIComponent(JSON.stringify(track));
        item.innerHTML = `
            <img src="${smallArtworkUrl}" alt="Cover" loading="lazy">
            <div class="song-info">
                <h4>${trackName} ${tagHtml}</h4>
                ${artistHtml}
            </div>
            <div class="song-actions">
                ${getTrackAddButtonHTML(track)}
            </div>
        `;

        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('artist-link')) {
                e.stopPropagation();
                openArtistDetail(e.target.getAttribute('data-artist-id'), e.target.textContent);
                return;
            }
            // Only play if they didn't click inside the actions container
            if (!e.target.closest('.song-actions')) {
                activeContextId = 'search';
                playTrack(absoluteIndex, searchQueue);
            }
        });

        const addBtn = item.querySelector('.add-to-playlist-btn');
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openAddModal(track);
        });

        searchResults.appendChild(item);
    });
}

let suggestionsTimer;

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();

    if (!query) {
        searchSuggestionsContainer.style.display = 'none';
        return;
    }

    clearTimeout(suggestionsTimer);
    suggestionsTimer = setTimeout(() => {
        fetchSearchSuggestions(query);
    }, 300);
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query) {
            searchSuggestionsContainer.style.display = 'none';
            searchSongs(query, 1);
            searchInput.blur();
        }
    }
});

searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim() && searchSuggestionsContainer.innerHTML.trim() !== '') {
        searchSuggestionsContainer.style.display = 'block';
    }
});

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchSuggestionsContainer.contains(e.target)) {
        searchSuggestionsContainer.style.display = 'none';
    }
});

async function fetchSearchSuggestions(query) {
    try {
        const [artistSearchData, songRes] = await Promise.all([
            fetchArtistSearch(query).catch(() => null),
            fetch(`https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${encodeURIComponent(query)}&limit=15`).catch(() => null)
        ]);

        let html = '';
        let artists = [];
        if (artistSearchData && artistSearchData.artists) {
            artists = artistSearchData.artists.slice(0, 2);
        }

        let songs = [];
        if (songRes && songRes.ok) {
            const songData = await songRes.json();
            let hits = songData.data && songData.data.results ? songData.data.results : (songData.results || []);
            songs = hits.filter(s => passesStrictFilters(s, '', '')).slice(0, 4);
        }

        if (artists.length > 0) {
            artists.forEach(artist => {
                let img = 'https://via.placeholder.com/150';
                if (Array.isArray(artist.image) && artist.image.length > 0) {
                    img = artist.image[0].url || artist.image[0].link || img;
                }

                html += `
                <div class="suggestion-item" onclick="handleSuggestionClick('artist', '${artist.id}', '${(artist.name || '').replace(/'/g, "\\'")}')">
                    <i class="fa-solid fa-search suggestion-icon"></i>
                    <img src="${img}" class="suggestion-img artist" alt="Artist">
                    <div class="suggestion-info">
                        <div class="suggestion-title">${artist.name}</div>
                        <div class="suggestion-subtitle">${getI18n("search.suggestion.artist")}</div>
                    </div>
                </div>
                `;
            });
        }

        if (songs.length > 0) {
            songs.forEach(song => {
                let img = 'https://via.placeholder.com/150';
                if (Array.isArray(song.image)) {
                    const imgObj = song.image.find(i => i.quality && i.quality.includes('150')) || song.image[0];
                    if (imgObj) img = imgObj.link || imgObj.url;
                } else if (typeof song.image === 'string') {
                    img = song.image;
                }

                const sTitle = song.title || song.name || '';
                const sArtist = song.primaryArtists || song.singers || getI18n("song.artist_unknown");

                html += `
                <div class="suggestion-item" onclick="handleSuggestionClick('song', '${sTitle.replace(/'/g, "\\'")}', '${sArtist.replace(/'/g, "\\'")}')">
                    <i class="fa-solid fa-search suggestion-icon"></i>
                    <img src="${img}" class="suggestion-img" alt="Cover">
                    <div class="suggestion-info">
                        <div class="suggestion-title">${sTitle}</div>
                        <div class="suggestion-subtitle">${getI18n("search.suggestion.song")} â€¢ ${sArtist}</div>
                    </div>
                </div>
                `;
            });
        }

        if (html) {
            searchSuggestionsContainer.innerHTML = html;
            searchSuggestionsContainer.style.display = 'block';
        } else {
            searchSuggestionsContainer.style.display = 'none';
        }
    } catch (e) {
        console.error("Error fetching suggestions", e);
    }
}

window.handleSuggestionClick = function (type, idOrTitle, artistName) {
    searchSuggestionsContainer.style.display = 'none';
    if (type === 'artist') {
        searchInput.value = '';
        openArtistDetail(idOrTitle, artistName);
    } else if (type === 'song') {
        const q = idOrTitle + ' ' + artistName;
        searchInput.value = q;
        searchSongs(q, 1);
    }
};

searchResults.addEventListener('scroll', () => {
    if (isFetching || !hasMoreResults || currentSearchQuery === '') return;

    // Si llegamos a 100px cerca del final, carga la siguiente pÃ¡gina
    if (searchResults.scrollTop + searchResults.clientHeight >= searchResults.scrollHeight - 100) {
        searchSongs(currentSearchQuery, currentPage + 1);
    }
});

artistDetailView.addEventListener('scroll', () => {
    if (isFetchingArtistAlbums || !hasMoreArtistAlbums || !currentArtistIdForAlbums) return;

    if (artistDetailView.scrollTop + artistDetailView.clientHeight >= artistDetailView.scrollHeight - 200) {
        fetchMoreArtistAlbums(currentArtistIdForAlbums, currentArtistAlbumPage + 1);
    }
});


// --- Artist Detail Feature ---
let currentArtistQueue = [];

async function fetchArtistSearch(query) {
    let topArtists = [];
    try {
        const u = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=40`;
        const res = await fetch(u);
        if (!res.ok) throw new Error("Apple HTTP " + res.status);
        const data = await res.json();
        const songs = data.results || [];

        const artistMap = new Map();
        songs.forEach(s => {
            if (!s.artistId) return;
            if (!artistMap.has(s.artistId)) {
                artistMap.set(s.artistId, {
                    id: s.artistId.toString(),
                    name: s.artistName,
                    image: [{ quality: '500x500', url: (s.artworkUrl100 || '').replace('100x100', '500x500') }],
                    followerCount: '0',
                    score: 0
                });
            }
            artistMap.get(s.artistId).score += 1;
        });

        topArtists = Array.from(artistMap.values()).sort((a, b) => b.score - a.score);

        const qLower = query.toLowerCase().replace(/[^a-z0-9]/g, '');
        topArtists.sort((a, b) => {
            const aExact = a.name.toLowerCase().replace(/[^a-z0-9]/g, '') === qLower ? 1 : 0;
            const bExact = b.name.toLowerCase().replace(/[^a-z0-9]/g, '') === qLower ? 1 : 0;
            return bExact - aExact;
        });

        if (topArtists.length > 0) {
            // Background fetch listeners globally from JioSaavn
            fetch(`https://jiosaavn-api-privatecvc2.vercel.app/search/artists?query=${encodeURIComponent(topArtists[0].name)}&limit=5`)
                .then(r => { if (r.ok) return r.json(); else throw new Error(); })
                .then(d => {
                    const hits = d.data && d.data.results ? d.data.results : (d.results ? d.results : []);
                    const match = hits.find(h => (h.title || '').toLowerCase() === topArtists[0].name.toLowerCase() || (h.name || '').toLowerCase() === topArtists[0].name.toLowerCase());
                    if (match && match.followerCount) {
                        topArtists[0].followerCount = match.followerCount;
                    }
                }).catch(() => { });
        }
    } catch (e) { console.warn("iTunes Artist Extract Failed", e.message); }

    if (topArtists.length === 0) return null;
    return { artists: topArtists.slice(0, 10), topSongs: [] };
}

function renderArtistsScroll(artists) {
    const header = document.createElement('h3');
    header.innerText = 'Artistas';
    header.style.padding = '10px 20px 0';
    header.style.marginBottom = '10px';
    searchResults.appendChild(header);

    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'horizontal-scroll';
    scrollContainer.style.marginBottom = '25px';
    scrollContainer.style.paddingLeft = '20px';
    scrollContainer.style.paddingRight = '20px';

    artists.slice(0, 10).forEach(artistData => {
        const imgUrl = artistData.image && artistData.image.length > 0
            ? (artistData.image[artistData.image.length - 1].link || artistData.image[artistData.image.length - 1].url)
            : 'https://via.placeholder.com/150?text=Artist';

        const card = document.createElement('div');
        card.style.display = 'inline-block';
        card.style.marginRight = '15px';
        card.style.textAlign = 'center';
        card.style.cursor = 'pointer';
        card.style.width = '100px';

        card.innerHTML = `
            <img src="${imgUrl}" style="border-radius: 50%; width: 100px; height: 100px; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3); margin-bottom: 8px;" loading="lazy">
            <h4 style="font-size:13px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${decodeHTML(artistData.name)}</h4>
        `;
        card.addEventListener('click', () => openArtistDetail(artistData.id));
        scrollContainer.appendChild(card);
    });

    searchResults.appendChild(scrollContainer);
}

async function openArtistDetail(artistId, artistNameFallback = '') {
    switchView('artistDetail');
    artistSongsContainer.innerHTML = `<div class="bottom-loader" style="padding: 20px; text-align: center; color: var(--text-secondary);"><i class="fa-solid fa-circle-notch fa-spin"></i> <span data-i18n="search.loading">${getI18n("search.loading")}</span></div>`;

    artistHeroImage.src = '';
    detailArtistTitleHero.textContent = '';
    detailArtistInfo.textContent = 'Cargando...';
    stickyArtistTitle.textContent = '';
    stickyArtistTitle.style.opacity = '0';
    stickyArtistPlayBtn.style.opacity = '0';
    stickyArtistPlayBtn.style.pointerEvents = 'none';
    stickyArtistPlayBtn.style.transform = 'translateY(10px)';
    if (artistSongsShowAllWrapper) artistSongsShowAllWrapper.style.display = 'none';

    try {
        let u = `https://itunes.apple.com/lookup?id=${artistId}&entity=song&limit=30`;
        let res = await fetch(u);
        let data = await res.json();

        if (!data.results || data.results.length === 0) {
            // Failsafe: Si el ID era de JioSaavn y fallÃ³ en Apple, buscamos el artista por su nombre exacto.
            if (artistNameFallback) {
                const searchQ = encodeURIComponent(artistNameFallback);
                const sUrl = `https://itunes.apple.com/search?term=${searchQ}&entity=musicArtist&limit=1`;
                const sRes = await fetch(sUrl);
                const sData = await sRes.json();

                if (sData.results && sData.results.length > 0) {
                    const trueArtistId = sData.results[0].artistId;
                    u = `https://itunes.apple.com/lookup?id=${trueArtistId}&entity=song&limit=30`;
                    res = await fetch(u);
                    data = await res.json();
                }
            }
        }

        if (!data.results || data.results.length === 0) throw new Error("Artista no encontrado en iTunes.");

        const artistInfo = data.results[0];
        const songsData = data.results.length > 1 ? data.results.slice(1) : []; // Safely handle 0 songs
        const aName = decodeHTML(artistInfo.artistName || "Artista");

        detailArtistTitleHero.textContent = aName;
        stickyArtistTitle.textContent = aName;

        // Grab artwork from best hit safely
        let imgUrl = 'https://via.placeholder.com/500?text=Artist';
        if (songsData && songsData.length > 0 && songsData[0].artworkUrl100) {
            imgUrl = songsData[0].artworkUrl100.replace('100x100', '1000x1000');
        } else if (artistInfo.artistLinkUrl) {
            // Sometimes artist lookup doesn't return songs but we can still show a generic avatar
            imgUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(aName)}&size=500&background=random`;
        }
        artistHeroImage.src = imgUrl;

        // 1. Apple provides the official Artist Name, Hero Image, and Albums.
        // But for TOP TRACKS, we fetch from JioSaavn, filter them strictly, and extract 320kbps.

        let jioTracks = [];
        try {
            fetch(`https://jiosaavn-api-privatecvc2.vercel.app/search/artists?query=${encodeURIComponent(aName)}&limit=3`)
                .then(r => r.json())
                .then(d => {
                    const hits = d.data && d.data.results ? d.data.results : (d.results ? d.results : []);
                    const match = hits.find(h => (h.title || '').toLowerCase() === aName.toLowerCase() || (h.name || '').toLowerCase() === aName.toLowerCase());
                    if (match && match.followerCount) {
                        detailArtistInfo.textContent = `${Number(match.followerCount).toLocaleString()} ${getI18n("artist.monthly_listeners")}`;
                    } else {
                        detailArtistInfo.textContent = `Artista Oficial`;
                    }

                    if (match && match.id) {
                        currentArtistIdForAllSongs = { type: 'id', value: match.id };
                    } else {
                        currentArtistIdForAllSongs = { type: 'query', value: aName };
                    }
                }).catch(() => {
                    detailArtistInfo.textContent = `Artista Oficial`;
                    currentArtistIdForAllSongs = { type: 'query', value: aName };
                });

            const jioSongsRes = await fetch(`https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${encodeURIComponent(aName)}&limit=50`);
            const jioSongsData = await jioSongsRes.json();
            if (jioSongsData.data && jioSongsData.data.results) jioTracks = jioSongsData.data.results;
            else if (jioSongsData.results) jioTracks = jioSongsData.results;
        } catch (e) { }

        // 2. Strict Filtration Wall (Language, Correct Artist, Prohibited terms)
        let validTracks = jioTracks.filter(jt => passesStrictFilters(jt, aName, ''));

        // Failsafe: Si la bÃºsqueda general no dio canciones vÃ¡lidas (error de coincidencia genÃ©rica),
        // buscamos individualmente las canciones de Apple Music para forzar resultados vÃ¡lidos.
        if (validTracks.length === 0 && songsData && songsData.length > 0) {
            const trackNamesToTry = songsData.slice(0, 5).map(t => t.trackName);
            for (let tName of trackNamesToTry) {
                try {
                    const fallbackQuery = aName + " " + tName;
                    const fallbackRes = await fetch(`https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${encodeURIComponent(fallbackQuery)}&limit=5`);
                    const fallbackData = await fallbackRes.json();
                    let hits = [];
                    if (fallbackData.data && fallbackData.data.results) hits = fallbackData.data.results;
                    else if (fallbackData.results) hits = fallbackData.results;

                    const bestHit = hits.find(h => passesStrictFilters(h, aName, ''));
                    if (bestHit && !validTracks.some(v => v.id === bestHit.id)) {
                        validTracks.push(bestHit);
                    }
                } catch (e) { }
            }
        }

        // Deduplicate validTracks to prevent the same song from appearing multiple times
        const uniqueValidTracks = [];
        const seenValidNames = new Set();
        validTracks.forEach(jt => {
            const trackTitle = (jt.name || jt.title || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\([^)]*\)/g, '').trim();
            if (!seenValidNames.has(trackTitle) && trackTitle.length > 0) {
                seenValidNames.add(trackTitle);
                uniqueValidTracks.push(jt);
            }
        });
        validTracks = uniqueValidTracks;

        // 3. Format Tracks & Extract Highest Quality Audio (320kbps prioritized)
        currentArtistQueue = validTracks.slice(0, 30).map(jt => {
            const rawAudioUrl = getBestAudioUrl(jt.downloadUrl) || '';
            const isPreview = !rawAudioUrl; // If we somehow lost audio, flag as preview visually

            return {
                id: jt.id.toString(),
                name: decodeHTML(jt.name || jt.title),
                title: decodeHTML(jt.name || jt.title),
                primaryArtists: decodeHTML(jt.primaryArtists || jt.singers),
                primaryArtistsId: (jt.primaryArtistsId || '').toString(),
                image: jt.image || [{ quality: '150x150', url: 'https://via.placeholder.com/150' }],
                downloadUrl: rawAudioUrl ? [{ quality: '320kbps', url: rawAudioUrl }] : [],
                previewUrl: rawAudioUrl, // Reusing main URL so fallback doesn't break
                playCount: Number(jt.playCount || 0),
                album: { name: decodeHTML((jt.album && jt.album.name) || ''), id: (jt.album && jt.album.id) || '' },
                isPreview: isPreview,
                duration: jt.duration ? jt.duration.toString() : "0"
            };
        });

        // Background Apple Music Cover Art Enrichment for Artist Tracks
        if (currentArtistQueue.length > 0) {
            currentArtistQueue.forEach((localTrack) => {
                const localSafeName = localTrack.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                const masterHit = songsData.find(at => {
                    const atName = (at.trackName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                    return atName.includes(localSafeName) || localSafeName.includes(atName);
                });

                if (masterHit && masterHit.artworkUrl100) {
                    localTrack.image = [{ quality: '500x500', url: masterHit.artworkUrl100.replace('100x100', '500x500') }];
                }
            });
        }

        renderArtistSongs();

        if (currentArtistQueue.length > 5) {
            artistSongsShowAllWrapper.style.display = 'flex';
        } else {
            artistSongsShowAllWrapper.style.display = 'none';
        }

        currentArtistIdForAlbums = artistId;
        currentArtistAlbumPage = 1;
        hasMoreArtistAlbums = true;
        isFetchingArtistAlbums = false;
        artistAlbumsContainer.innerHTML = '';

        fetchMoreArtistAlbums(artistId, 1);
        updatePlayState(!audioPlayer.paused);

    } catch (e) {
        console.error("Error OpenArtistDetail: ", e);
        artistSongsContainer.innerHTML = '<p style="padding: 20px; color: var(--text-secondary);">Error cargando informaciÃ³n del artista.</p>';
        detailArtistTitleHero.textContent = "Artista no encontrado";
    }
}

async function fetchMoreArtistAlbums(artistId, page) {
    if (page > 1) {
        hasMoreArtistAlbums = false;
        return;
    }
    if (isFetchingArtistAlbums || !hasMoreArtistAlbums) return;
    isFetchingArtistAlbums = true;
    currentArtistAlbumPage = page;

    const loader = document.createElement('div');
    loader.id = 'artistAlbumLoader';
    loader.style = 'padding: 20px; text-align: center; color: var(--text-secondary); width: 100%;';
    loader.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span data-i18n="album.loading">${getI18n("album.loading")}</span>`;
    artistAlbumsContainer.appendChild(loader);

    let albumsData = [];
    try {
        // STRICT APPLE MUSIC CATALOG FOR ALBUMS
        const u = `https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=50`;
        const res = await fetch(u);
        const val = await res.json();
        if (val.results && val.results.length > 1) {
            albumsData = val.results.slice(1);

            // Deduplicate albums by name to avoid Deluxe/Standard duplicate spam
            const uniqueMap = new Map();
            albumsData.forEach(a => {
                const safeName = (a.collectionName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                if (!uniqueMap.has(safeName) && a.collectionType === "Album") {
                    uniqueMap.set(safeName, a);
                }
            });
            albumsData = Array.from(uniqueMap.values());

            // Sort by release date descending
            albumsData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        }
    } catch (e) {
        console.error("Error Fetching Apple Albums: ", e);
    }

    const oldLoader = document.getElementById('artistAlbumLoader');
    if (oldLoader) oldLoader.remove();

    if (albumsData.length === 0) {
        hasMoreArtistAlbums = false;
        artistAlbumsContainer.innerHTML = '<p style="padding: 20px; color: var(--text-secondary);">No hay Ã¡lbumes oficiales disponibles.</p>';
    } else {
        albumsData.forEach(album => {
            const card = document.createElement('div');
            card.className = 'card';

            const coverUrl = album.artworkUrl100 ? album.artworkUrl100.replace('100x100', '500x500') : 'https://via.placeholder.com/150';
            const releaseDate = album.releaseDate ? album.releaseDate.substring(0, 4) : '';
            const albName = decodeHTML(album.collectionName || 'Ãlbum Desconocido');

            card.innerHTML = `
                <img src="${coverUrl}" loading="lazy" class="card-cover">
                <h4>${albName}</h4>
                <p>${releaseDate}</p>
            `;

            card.addEventListener('click', () => openAlbumDetail(album.collectionId.toString(), albName));
            artistAlbumsContainer.appendChild(card);
        });
        hasMoreArtistAlbums = false;
    }

    isFetchingArtistAlbums = false;
}

function renderArtistSongs() {
    if (currentArtistQueue.length === 0) {
        artistSongsContainer.innerHTML = '<p style="padding: 20px; color: var(--text-secondary);">No hay canciones populares disponibles.</p>';
        return;
    }

    artistSongsContainer.innerHTML = '';
    currentArtistQueue.forEach((track, index) => {
        const artworkObj = track.image.find(img => img.quality && img.quality.includes('150')) || track.image[0];
        const smallArtworkUrl = artworkObj ? (artworkObj.url || artworkObj.link) : 'https://via.placeholder.com/150';

        const artistNameStr = track.primaryArtists || track.singers || getI18n("song.artist_unknown");
        const trackName = decodeHTML(track.name || track.title);

        const artistIdStr = track.primaryArtistsId || track.artistId || "";
        const artistHtml = `<p>${formatArtistLinks(artistNameStr, artistIdStr)}</p>`;

        const item = document.createElement('div');
        item.className = 'song-item'; item.dataset.trackJson = encodeURIComponent(JSON.stringify(track));
        item.innerHTML = `
            <img src="${smallArtworkUrl}" alt="Cover" loading="lazy">
            <div class="song-info">
                <h4>${trackName}</h4>
                ${artistHtml}
            </div>
            <div class="song-actions">
                ${getTrackAddButtonHTML(track)}
            </div>
        `;

        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('artist-link')) {
                e.stopPropagation();
                openArtistDetail(e.target.getAttribute('data-artist-id'), e.target.textContent);
                return;
            }
            if (!e.target.closest('.song-actions')) {
                activeContextId = 'artist_' + currentArtistIdForAlbums;
                playTrack(index, currentArtistQueue.slice());
            }
        });

        const addBtn = item.querySelector('.add-to-playlist-btn');
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openAddModal(track);
        });

        artistSongsContainer.appendChild(item);
    });
}

artistDetailMain.addEventListener('scroll', () => {
    const st = artistDetailMain.scrollTop;
    let showSticky = false;
    if (artistControlsRow) {
        const rect = artistControlsRow.getBoundingClientRect();
        if (rect.bottom < 50) showSticky = true;
    } else if (st > 280) {
        showSticky = true;
    }

    if (showSticky) {
        stickyArtistTitle.style.opacity = '1';
        stickyArtistPlayBtn.style.opacity = '1';
        stickyArtistPlayBtn.style.pointerEvents = 'auto';
        stickyArtistPlayBtn.style.transform = 'translateY(0)';
    } else {
        stickyArtistTitle.style.opacity = '0';
        stickyArtistPlayBtn.style.opacity = '0';
        stickyArtistPlayBtn.style.pointerEvents = 'none';
        stickyArtistPlayBtn.style.transform = 'translateY(10px)';
    }
});

stickyArtistPlayBtn.addEventListener('click', () => {
    playAllArtistBtn.click();
});

playAllArtistBtn.addEventListener('click', () => {
    if (currentArtistQueue.length === 0) return;

    if (activeContextId === 'artist_' + currentArtistIdForAlbums) {
        togglePlay();
    } else {
        let startIndex = 0;
        if (isShuffleOn) {
            startIndex = Math.floor(Math.random() * currentArtistQueue.length);
        }
        activeContextId = 'artist_' + currentArtistIdForAlbums;
        playTrack(startIndex, currentArtistQueue.slice());
    }
});

shuffleArtistBtn.addEventListener('click', () => {
    isShuffleOn = !isShuffleOn;
    if (isShuffleOn) {
        shuffleArtistBtn.classList.add('active');
    } else {
        shuffleArtistBtn.classList.remove('active');
    }
    showToast(isShuffleOn ? "Modo Aleatorio activado" : "Modo Aleatorio desactivado", "fa-shuffle");
});

// --- Album Detail Feature ---
let currentAlbumQueue = [];
let currentViewedAlbumMeta = null;

async function openAlbumDetail(albumId, albumNameFallback = 'Ãlbum') {
    switchView('albumDetail');
    albumSongsContainer.innerHTML = `<div class="bottom-loader" style="padding: 20px; text-align: center; color: var(--text-secondary);"><i class="fa-solid fa-circle-notch fa-spin"></i> <span data-i18n="album.loading">${getI18n("album.loading")}</span></div>`;

    albumHeroImage.src = '';
    detailAlbumTitleHero.textContent = '';
    detailAlbumInfo.textContent = '';
    stickyAlbumTitle.textContent = '';
    saveAlbumBtn.style.color = 'var(--text-secondary)';

    let appleSongs = [];
    let albumMeta = null;

    try {
        const u = `https://itunes.apple.com/lookup?id=${albumId}&entity=song&limit=200`;
        const res = await fetch(u);
        const data = await res.json();

        if (data.results && data.results.length > 0) {
            albumMeta = data.results[0]; // The first result is the Album itself
            appleSongs = data.results.slice(1); // The rest are the tracks
        }
    } catch (e) {
        console.error("Apple Album Lookup Failed", e);
    }

    if (!albumMeta) {
        albumSongsContainer.innerHTML = '<p style="padding: 20px; color: var(--text-secondary);">Error cargando informaciÃ³n del Ã¡lbum oficial.</p>';
        return;
    }

    currentViewedAlbumMeta = {
        id: albumId,
        name: albumMeta.collectionName || albumNameFallback,
        image: [{ url: albumMeta.artworkUrl100 ? albumMeta.artworkUrl100.replace('100x100', '500x500') : '' }],
        songs: [] // Will populate after Jio fetch
    };

    const imgUrl = currentViewedAlbumMeta.image[0].url || 'https://via.placeholder.com/500?text=Album';
    albumHeroImage.src = imgUrl;

    const aName = decodeHTML(currentViewedAlbumMeta.name);
    detailAlbumTitleHero.textContent = aName;
    stickyAlbumTitle.textContent = aName;

    stickyAlbumTitle.style.opacity = '0';
    stickyAlbumPlayBtn.style.opacity = '0';
    stickyAlbumPlayBtn.style.pointerEvents = 'none';
    stickyAlbumPlayBtn.style.transform = 'translateY(10px)';

    const count = appleSongs.length;
    const year = albumMeta.releaseDate ? ` â€¢ ${albumMeta.releaseDate.substring(0, 4)}` : '';
    detailAlbumInfo.textContent = `${count} cancion${count !== 1 ? 'es' : ''}${year}`;

    // Convert Apple Songs to Standard Queue Format, missing Audio for now
    currentAlbumQueue = appleSongs.map(itrack => {
        return {
            id: itrack.trackId.toString(),
            name: itrack.trackName,
            title: itrack.trackName,
            primaryArtists: itrack.artistName,
            primaryArtistsId: (itrack.artistId || '').toString(),
            image: [{ quality: '500x500', url: (itrack.artworkUrl100 || '').replace('100x100', '500x500') }],
            downloadUrl: [],
            previewUrl: itrack.previewUrl || '',
            playCount: 0,
            album: { name: itrack.collectionName || '', id: itrack.collectionId || '' },
            isPreview: true,
            duration: Math.floor((itrack.trackTimeMillis || 0) / 1000).toString()
        };
    });

    // Background Audio Resolver from JioSaavn
    if (currentAlbumQueue.length > 0) {
        currentAlbumQueue.forEach(async (track, idx) => {
            const cleanArtist = track.primaryArtists.split(',')[0].trim();
            const safeSearch = `${track.name} ${cleanArtist}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9\s-]/g, '');
            const q1 = encodeURIComponent(safeSearch);

            try {
                const jRes = await fetch(`https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${q1}&limit=5`);
                if (jRes.ok) {
                    const jData = await jRes.json();
                    let hits = [];
                    if (jData.data && jData.data.results) hits = jData.data.results;
                    else if (jData.results) hits = jData.results;

                    if (hits.length > 0) {
                        const validHits = hits.filter(h => passesStrictFilters(h, cleanArtist, track.name));
                        if (validHits.length > 0) {
                            validHits.sort((a, b) => b.playCount - a.playCount);
                            const bestAudio = getBestAudioUrl(validHits[0].downloadUrl);
                            if (bestAudio) {
                                currentAlbumQueue[idx].downloadUrl = [{ quality: '320kbps', url: bestAudio }];
                                currentAlbumQueue[idx].previewUrl = bestAudio;
                                currentAlbumQueue[idx].isPreview = false;

                                // Clean up the preview tag in UI immediately if visible
                                const tag = document.querySelector(`.album-track-${track.id} .preview-tag`);
                                if (tag) tag.remove();
                            }
                        }
                    }
                }
            } catch (e) { }
        });
    }

    currentViewedAlbumMeta.songs = currentAlbumQueue;
    renderAlbumSongs();

    updatePlayState(!audioPlayer.paused);
}

function renderAlbumSongs() {
    albumSongsContainer.innerHTML = '';
    if (currentAlbumQueue.length === 0) {
        albumSongsContainer.innerHTML = '<p style="padding: 20px; color: var(--text-secondary);">El Ã¡lbum no contiene canciones.</p>';
        return;
    }

    currentAlbumQueue.forEach((track, index) => {
        const artistNameStr = track.primaryArtists || track.singers || getI18n("song.artist_unknown");
        const trackName = decodeHTML(track.name || track.title);

        const artistIdStr = track.primaryArtistsId || track.artistId || "";
        const artistHtml = `<p>${formatArtistLinks(artistNameStr, artistIdStr)}</p>`;

        const previewBadge = track.isPreview ? ` <span class="preview-tag" style="background: rgba(255,0,0,0.2); color: #ff6b6b; padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-left: 8px; vertical-align: middle; white-space: nowrap;">Loading HQ...</span>` : '';

        const item = document.createElement('div');
        item.className = `song-item album-track-${track.id}`;
        item.dataset.trackJson = encodeURIComponent(JSON.stringify(track));
        item.innerHTML = `
            <div class="song-info" style="margin-left: 10px;">
                <h4 style="font-size: 16px;">${index + 1}. ${trackName}${previewBadge}</h4>
                ${artistHtml}
            </div>
            <div class="song-actions">
                ${getTrackAddButtonHTML(track)}
            </div>
        `;

        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('artist-link')) {
                e.stopPropagation();
                openArtistDetail(e.target.getAttribute('data-artist-id'), e.target.textContent);
                return;
            }
            if (!e.target.closest('.song-actions')) {
                activeContextId = 'album_' + currentViewedAlbumMeta.id;
                playTrack(index, currentAlbumQueue.slice());
            }
        });

        const addBtn = item.querySelector('.add-to-playlist-btn');
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openAddModal(track);
        });

        albumSongsContainer.appendChild(item);
    });
}

albumDetailMain.addEventListener('scroll', () => {
    const st = albumDetailMain.scrollTop;
    let showSticky = false;
    if (albumControlsRow) {
        const rect = albumControlsRow.getBoundingClientRect();
        if (rect.bottom < 50) showSticky = true;
    } else if (st > 280) {
        showSticky = true;
    }

    if (showSticky) {
        stickyAlbumTitle.style.opacity = '1';
        stickyAlbumPlayBtn.style.opacity = '1';
        stickyAlbumPlayBtn.style.pointerEvents = 'auto';
        stickyAlbumPlayBtn.style.transform = 'translateY(0)';
    } else {
        stickyAlbumTitle.style.opacity = '0';
        stickyAlbumPlayBtn.style.opacity = '0';
        stickyAlbumPlayBtn.style.pointerEvents = 'none';
        stickyAlbumPlayBtn.style.transform = 'translateY(10px)';
    }
});

stickyAlbumPlayBtn.addEventListener('click', () => playAllAlbumBtn.click());

playAllAlbumBtn.addEventListener('click', () => {
    if (currentAlbumQueue.length === 0 || !currentViewedAlbumMeta) return;
    const ctx = 'album_' + currentViewedAlbumMeta.id;
    if (activeContextId === ctx) {
        togglePlay();
    } else {
        let startIndex = 0;
        if (isShuffleOn) startIndex = Math.floor(Math.random() * currentAlbumQueue.length);
        activeContextId = ctx;
        playTrack(startIndex, currentAlbumQueue.slice());
    }
});

shuffleAlbumBtn.addEventListener('click', () => {
    isShuffleOn = !isShuffleOn;
    if (isShuffleOn) shuffleAlbumBtn.classList.add('active');
    else shuffleAlbumBtn.classList.remove('active');
    showToast(isShuffleOn ? "Modo Aleatorio activado" : "Modo Aleatorio desactivado", "fa-shuffle");
});

saveAlbumBtn.addEventListener('click', () => {
    if (!currentViewedAlbumMeta) return;

    // Check if already saved
    const exists = playlists.some(p => p.name === decodeHTML(currentViewedAlbumMeta.name || currentViewedAlbumMeta.title) && p.isAlbum === true);
    if (exists) {
        showToast("El Ã¡lbum ya estÃ¡ en tu biblioteca", "fa-info-circle");
        return;
    }

    const newPlaylist = {
        id: generateId(),
        name: decodeHTML(currentViewedAlbumMeta.name || currentViewedAlbumMeta.title),
        tracks: currentAlbumQueue.map(t => ({ ...t })),
        shuffleMode: false,
        isAlbum: true,
        albumCover: currentViewedAlbumMeta.image
    };

    playlists.push(newPlaylist);
    savePlaylists();

    saveAlbumBtn.style.color = 'var(--accent-color)';
    showToast("Ãlbum guardado en tu biblioteca", "fa-check-circle");
});

// --- Audio Playback ---
async function playTrack(index, queueArray = null, autoPlay = true, resumeTime = 0) {
    currentPlayRequestId++;
    const sessionId = currentPlayRequestId;

    isChangingTrack = true;
    audioPlayer._pendingResumeTime = 0; // Prevent leak from previous tracks

    // Warm up/Claim audio element immediately in sync context for iOS
    audioPlayer.load();

    if (queueArray) currentQueue = queueArray;
    if (index < 0 || index >= currentQueue.length) {
        isChangingTrack = false;
        return;
    }

    let slideDirection = 'next';
    if (currentIndex !== -1 && index < currentIndex) slideDirection = 'prev';

    currentIndex = index;
    const track = currentQueue[currentIndex];

    // UI Feedback: Show loading spinner immediately
    updatePlayState('loading');

    const artworkObj = track.image.find(img => img.quality && img.quality.includes('500')) || track.image[track.image.length - 1];
    const highQualityArtwork = artworkObj ? (artworkObj.url || artworkObj.link) : 'https://via.placeholder.com/500';

    const smallArtworkObj = track.image.find(img => img.quality && img.quality.includes('150')) || track.image[0];
    const smallArtworkUrl = smallArtworkObj ? (smallArtworkObj.url || smallArtworkObj.link) : highQualityArtwork;

    const artistNameStr = track.primaryArtists || track.singers || getI18n("song.artist_unknown");
    const trackName = decodeHTML(track.name || track.title);
    const artistIdStr = track.primaryArtistsId || track.artistId || "";

    if (window.innerWidth < 768) miniPlayer.style.display = 'flex';

    // Trigger text slide animation
    const miniTextContainer = document.querySelector('.mini-text');
    const fullTextContainer = document.querySelector('.player-info');
    if (miniTextContainer && fullTextContainer) {
        miniTextContainer.classList.remove('text-slide-next-in', 'text-slide-prev-in');
        fullTextContainer.classList.remove('text-slide-next-in', 'text-slide-prev-in');
        void miniTextContainer.offsetWidth; // trigger reflow
        void fullTextContainer.offsetWidth;
        const animClass = slideDirection === 'next' ? 'text-slide-next-in' : 'text-slide-prev-in';
        miniTextContainer.classList.add(animClass);
        fullTextContainer.classList.add(animClass);
    }

    miniCover.src = smallArtworkUrl;
    miniTitle.textContent = trackName;
    miniArtist.innerHTML = formatArtistLinks(artistNameStr, artistIdStr, true);

    fullCover.src = highQualityArtwork;
    fullTitle.textContent = trackName;
    fullArtist.innerHTML = formatArtistLinks(artistNameStr, artistIdStr, true);

    // Resolve Audio URL
    let audioUrl = getBestAudioUrl(track.downloadUrl);

    if (!audioUrl) {
        try {
            const cleanArtist = artistName.split(',')[0].trim();
            const safeSearch = `${trackName} ${cleanArtist}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9\s-]/g, '');
            const q1 = encodeURIComponent(safeSearch);
            const apis = [
                `https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${q1}&limit=5`,
                `https://saavn.dev/api/search/songs?query=${q1}&limit=5`,
                `https://saavn.me/search/songs?query=${q1}&limit=5`
            ];
            let hits = [];
            for (let u of apis) {
                try {
                    const res = await fetch(u);
                    if (res.ok) {
                        const d = await res.json();
                        if (d.data && d.data.results) { hits = d.data.results; break; }
                        else if (d.results) { hits = d.results; break; }
                        else if (Array.isArray(d.data)) { hits = d.data; break; }
                    }
                } catch (e) { }
            }
            if (hits && hits.length > 0) {
                const validHits = hits.filter(h => passesStrictFilters(h, cleanArtist, trackName));
                if (validHits.length > 0) {
                    validHits.sort((a, b) => b.playCount - a.playCount);
                    audioUrl = getBestAudioUrl(validHits[0].downloadUrl);
                    if (audioUrl) track.downloadUrl = validHits[0].downloadUrl;
                }
            }
        } catch (e) { console.warn("Headless Audio Extraction Failed"); }
    }

    // Abort if a NEW track was requested during the await
    if (sessionId !== currentPlayRequestId) {
        // isChangingTrack is managed by the NEW track's request, so don't set it to false here.
        return;
    }

    if (!audioUrl) {
        if (track.previewUrl) {
            audioUrl = track.previewUrl;
            showToast(getI18n("toast.preview"), "fa-info-circle");
            track.isPreview = true;
            document.querySelectorAll('.song-item h4').forEach(h4 => {
                if (h4.textContent.trim().includes(trackName) && !h4.querySelector('.preview-tag')) {
                    h4.innerHTML += ` <span class="preview-tag" style="background: rgba(255,0,0,0.2); color: #ff6b6b; padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-left: 8px; vertical-align: middle; white-space: nowrap;">${getI18n("toast.preview.tag")}</span>`;
                }
            });
        } else {
            showToast(getI18n("toast.audioNotAvailable"), "fa-triangle-exclamation");
            isChangingTrack = false;
            setTimeout(playNext, 1500);
            return;
        }
    }

    // Configurar metadatos del reproductor de iOS antes de iniciar el audio
    const safeSmallArt = smallArtworkUrl ? smallArtworkUrl.replace('http://', 'https://') : 'https://via.placeholder.com/150';
    const safeLargeArt = highQualityArtwork ? highQualityArtwork.replace('http://', 'https://') : 'https://via.placeholder.com/500';
    setupMediaSession(trackName, artistNameStr, (track.album && track.album.name) || getI18n("song.single"), safeSmallArt, safeLargeArt);

    audioPlayer.src = audioUrl;

    if (autoPlay) {
        audioPlayer.play().then(() => {
            if (sessionId !== currentPlayRequestId) { audioPlayer.pause(); return; }
            isChangingTrack = false;
            updatePlayState(true);
            try {
                if (resumeTime > 0) audioPlayer.currentTime = resumeTime;
            } catch (err) {
                console.error("Non-critical error after play:", err);
            }
        }, e => {
            if (sessionId === currentPlayRequestId) {
                isChangingTrack = false;
                updatePlayState(false);
            }
            console.error("Playback error", e);
        });
    } else {
        isChangingTrack = false;
        updatePlayState(false);

        if (resumeTime > 0) {
            audioPlayer._pendingResumeTime = resumeTime;

            // Calculamos duraciÃ³n aproximada para mostrar la barra sin necesidad de que el audio haya cargado
            let trackDuration = parseInt(track.duration) || Math.floor(track.trackTimeMillis / 1000) || 180;

            // ActualizaciÃ³n visual inmediata
            currentTimeEl.textContent = formatTime(resumeTime);
            durationTimeEl.textContent = formatTime(trackDuration);
            const percent = (resumeTime / trackDuration) * 100;
            progressBar.style.width = `${percent}%`;
            miniProgress.style.width = `${percent}%`;

            // Simular el HUD de pantalla de bloqueo
            if ('mediaSession' in navigator && navigator.mediaSession.setPositionState) {
                try {
                    navigator.mediaSession.setPositionState({
                        duration: trackDuration,
                        playbackRate: 1,
                        position: resumeTime
                    });
                } catch (e) { }
            }

            // Aplicar el salto de tiempo robustamente cuando el audio empiece a reproducirse de verdad
            const applyResumeTime = () => {
                if (audioPlayer._pendingResumeTime > 0) {
                    try { audioPlayer.currentTime = audioPlayer._pendingResumeTime; } catch (e) { }
                    updateMediaSessionPosition();
                }
            };

            const finalizeResumeTime = () => {
                if (audioPlayer._pendingResumeTime > 0) {
                    try { audioPlayer.currentTime = audioPlayer._pendingResumeTime; } catch (e) { }
                    audioPlayer._pendingResumeTime = 0;
                    updateMediaSessionPosition();
                }
            };

            audioPlayer.addEventListener('loadedmetadata', applyResumeTime, { once: true });
            audioPlayer.addEventListener('canplay', applyResumeTime, { once: true });
            audioPlayer.addEventListener('playing', finalizeResumeTime, { once: true });
        }
    }
}

function updatePlayState(state) {
    if (state === 'loading') {
        miniPlayPauseBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
        playPauseBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
        fullCover.classList.remove('paused');
    } else if (state === true) {
        miniPlayPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause" style="margin-left: -4px;"></i>';
        fullCover.classList.remove('paused');
        if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
    } else {
        miniPlayPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        fullCover.classList.add('paused');
        if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
    }

    const isPlayingOrLoading = (state === true || state === 'loading');
    const loadingIcon = '<i class="fa-solid fa-circle-notch fa-spin"></i>';

    // Sincronizar botones de la playlist actual si estamos en una (tanto el grande como el fijo)
    if (playAllPlaylistBtn && stickyPlayBtn && currentViewedPlaylist) {
        if (isPlayingOrLoading && activeContextId === currentViewedPlaylist.id) {
            playAllPlaylistBtn.innerHTML = state === 'loading' ? loadingIcon : '<i class="fa-solid fa-pause"></i>';
            stickyPlayBtn.innerHTML = state === 'loading' ? loadingIcon : '<i class="fa-solid fa-pause"></i>';
        } else {
            playAllPlaylistBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left: 4px;"></i>';
            stickyPlayBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left: 2px;"></i>';
        }
    }

    // Sincronizar botones de artista si estamos en uno
    if (playAllArtistBtn && stickyArtistPlayBtn) {
        if (isPlayingOrLoading && activeContextId === 'artist_' + currentArtistIdForAlbums) {
            playAllArtistBtn.innerHTML = state === 'loading' ? loadingIcon : '<i class="fa-solid fa-pause"></i>';
            stickyArtistPlayBtn.innerHTML = state === 'loading' ? loadingIcon : '<i class="fa-solid fa-pause"></i>';
        } else {
            playAllArtistBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left: 4px;"></i>';
            stickyArtistPlayBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left: 2px;"></i>';
        }
    }

    // Sincronizar botones de album
    if (playAllAlbumBtn && stickyAlbumPlayBtn && currentViewedAlbumMeta) {
        const ctx = 'album_' + currentViewedAlbumMeta.id;
        if (isPlayingOrLoading && activeContextId === ctx) {
            playAllAlbumBtn.innerHTML = state === 'loading' ? loadingIcon : '<i class="fa-solid fa-pause"></i>';
            stickyAlbumPlayBtn.innerHTML = state === 'loading' ? loadingIcon : '<i class="fa-solid fa-pause"></i>';
        } else {
            playAllAlbumBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left: 4px;"></i>';
            stickyAlbumPlayBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left: 2px;"></i>';
        }
    }
}

function togglePlay() {
    if (!audioPlayer.src || currentIndex === -1) return;

    if (audioPlayer.paused) {
        stopKeepAlive(); // Stop silent loop before playing real audio
        // If there's a pending resume time (page just loaded), seek before playing
        const pending = audioPlayer._pendingResumeTime || 0;

        if (pending > 0) {
            try { audioPlayer.currentTime = pending; } catch (e) { }
        }

        audioPlayer.play().then(() => {
            if (pending > 0) {
                try { audioPlayer.currentTime = pending; } catch (e) { }
                updateMediaSessionPosition();
            }
            updatePlayState(true);
        }).catch(e => {
            console.error("Play failed", e);
        });
    } else {
        // Start keepalive HERE (inside user gesture) before pausing
        startKeepAlive();
        audioPlayer.pause();
    }
}

function playNext() {
    if (isShuffleOn && currentQueue.length > 1) {
        let nextIndex = Math.floor(Math.random() * currentQueue.length);
        if (nextIndex === currentIndex) {
            nextIndex = (nextIndex + 1) % currentQueue.length;
        }
        playTrack(nextIndex);
        return;
    }

    if (currentIndex < currentQueue.length - 1) {
        playTrack(currentIndex + 1);
    } else if (currentQueue.length > 0) {
        playTrack(0);
    }
}

function playPrev() {
    if (audioPlayer.currentTime > 5) {
        audioPlayer.currentTime = 0;
        audioPlayer._pendingResumeTime = 0;
    } else if (currentIndex > 0) {
        playTrack(currentIndex - 1);
    } else if (currentQueue.length > 0) {
        playTrack(currentQueue.length - 1);
    }
}

playPauseBtn.addEventListener('click', togglePlay);
miniPlayPauseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlay();
});
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);

openPlayerBtn.addEventListener('click', () => {
    fullPlayer.classList.add('active');
});

closePlayerBtn.addEventListener('click', () => {
    fullPlayer.classList.remove('active');
});

// Swipe/Scroll on Mini Player to change songs
let miniPlayerTouchStartX = 0;
let isSwipingMiniPlayer = false;

miniPlayer.addEventListener('touchstart', (e) => {
    miniPlayerTouchStartX = e.touches[0].clientX;
    isSwipingMiniPlayer = true;
    openPlayerBtn.style.transition = 'none';
}, { passive: true });

miniPlayer.addEventListener('touchmove', (e) => {
    if (!isSwipingMiniPlayer) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - miniPlayerTouchStartX;

    // Difuminar y mover solo la informacion del bloque
    const moveX = deltaX;
    const opacity = Math.max(0, 1 - Math.abs(moveX) / (window.innerWidth * 0.4));

    openPlayerBtn.style.transform = `translateX(${moveX}px)`;
    openPlayerBtn.style.opacity = opacity.toString();
}, { passive: true });

miniPlayer.addEventListener('touchend', (e) => {
    if (!isSwipingMiniPlayer) return;
    isSwipingMiniPlayer = false;
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchEndX - miniPlayerTouchStartX;

    openPlayerBtn.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease';

    if (swipeDistance < -50) {
        // Swipe left -> Next song
        openPlayerBtn.style.transform = `translateX(-100%)`;
        openPlayerBtn.style.opacity = '0';
        setTimeout(() => {
            playNext();
            resetMiniPlayerPosition('right'); // Entra desde la derecha
        }, 300);
    } else if (swipeDistance > 50) {
        // Swipe right -> Previous song
        openPlayerBtn.style.transform = `translateX(100%)`;
        openPlayerBtn.style.opacity = '0';
        setTimeout(() => {
            playPrev();
            resetMiniPlayerPosition('left'); // Entra desde la izquierda
        }, 300);
    } else {
        // Not far enough, restore
        resetMiniPlayerPosition('center');
    }
});

function resetMiniPlayerPosition(fromDirection) {
    if (fromDirection === 'right' || fromDirection === 'left') {
        // Colocarlo instantÃ¡neamente en el lado opuesto invisiblemente
        openPlayerBtn.style.transition = 'none';
        openPlayerBtn.style.transform = fromDirection === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
        openPlayerBtn.style.opacity = '0';

        // Forzar reflujo para que el navegador registre la posiciÃ³n sin transiciÃ³n
        void openPlayerBtn.offsetWidth;

        // Animar hacia el centro
        openPlayerBtn.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease';
    }

    openPlayerBtn.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
    openPlayerBtn.style.opacity = '1';

    setTimeout(() => {
        if (!isSwipingMiniPlayer) {
            openPlayerBtn.style.transition = '';
            openPlayerBtn.style.transform = '';
        }
    }, 400);
}


let isScrollingMiniPlayer = false;
miniPlayer.addEventListener('wheel', (e) => {
    if (isScrollingMiniPlayer) return;
    if (Math.abs(e.deltaX) > 20) {
        isScrollingMiniPlayer = true;
        // Scroll right -> Next song
        if (e.deltaX > 0) {
            playNext();
        }
        // Scroll left -> Previous song
        else {
            playPrev();
        }
        setTimeout(() => { isScrollingMiniPlayer = false; }, 500); // Debounce
    }
}, { passive: true });

// Swipe Down to Close Player
let playerTouchStartY = 0;

fullPlayer.addEventListener('touchstart', (e) => {
    playerTouchStartY = e.touches[0].clientY;
}, { passive: true });

fullPlayer.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const swipeDistance = touchEndY - playerTouchStartY;

    // If swiped down more than 80px, close the player
    if (swipeDistance > 80) {
        fullPlayer.classList.remove('active');
    }
}, { passive: true });

audioPlayer.addEventListener('ended', playNext);

function savePlaybackState() {
    if (currentIndex === -1 || currentQueue.length === 0) return;
    const state = {
        queue: currentQueue,
        index: currentIndex,
        time: audioPlayer.currentTime,
        contextId: activeContextId,
        shuffle: isShuffleOn
    };
    localStorage.setItem('webMusicPlayerState', JSON.stringify(state));
}

// Wall-clock throttle: save at most every 5 real seconds while playing
let _lastSaveWallTime = 0;
audioPlayer.addEventListener('timeupdate', () => {
    let current = audioPlayer.currentTime;
    let duration = audioPlayer.duration;

    // Si hay un resumeTime pendiente evitamos que el navegador lo mande a 0 visualmente.
    if (audioPlayer._pendingResumeTime > 0) {
        current = audioPlayer._pendingResumeTime;
        // Si no hay duraciÃ³n todavÃ­a, usamos una estimaciÃ³n o no actualizamos la barra
        if (!duration || isNaN(duration)) {
            const track = currentQueue[currentIndex];
            duration = track ? (parseInt(track.duration) || Math.floor(track.trackTimeMillis / 1000) || 180) : 180;
        }
    }

    if (duration && !isScrubbing) {
        const percent = (current / duration) * 100;
        progressBar.style.width = `${percent}%`;
        miniProgress.style.width = `${percent}%`;
        currentTimeEl.textContent = formatTime(current);
    }

    const now = Date.now();
    if (now - _lastSaveWallTime >= 5000) {
        savePlaybackState();
        _lastSaveWallTime = now;
    }
    updateMediaSessionPosition();
});

// --- iOS Audio Session Keepalive ---
// iOS suspends AudioContext when backgrounded, so we use a second <audio> element
// looping a tiny silent WAV. iOS Safari keeps the audio session alive only when
// an <audio> element is actually playing. Must be started inside a user gesture.
const _silentAudio = new Audio();
_silentAudio.loop = true;
// Minimal valid silent WAV (1 sample, 8kHz mono, 8-bit PCM)
_silentAudio.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAgD4AAAB9AAACABAA' +
    'ZGF0YQAAAAA=';
_silentAudio.volume = 0.001;

let _keepAliveTimer = null;
const KEEPALIVE_LIMIT_MS = 15 * 60 * 1000; // 15 minutes limit for iOS pause state

function startKeepAlive() {
    stopKeepAlive();

    // Refresh src to ensure the stream isn't 'stale' for iOS
    _silentAudio.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAgD4AAAB9AAACABAA' +
        'ZGF0YQAAAAA=';
    _silentAudio.loop = true;

    const playPromise = _silentAudio.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // Attempt recovery: browsers may block, but we try again on any interaction
        });
    }

    // Extend survival time to 30 mins
    _keepAliveTimer = setTimeout(stopKeepAlive, 30 * 60 * 1000);
}

function stopKeepAlive() {
    _silentAudio.pause();
    _silentAudio.currentTime = 0;
    if (_keepAliveTimer) { clearTimeout(_keepAliveTimer); _keepAliveTimer = null; }
}

audioPlayer.addEventListener('play', () => {
    stopKeepAlive(); // No need while playing
    updatePlayState(true);
    updateMediaSessionPosition();
});

audioPlayer.addEventListener('waiting', () => {
    // Show loading spinner on play buttons
    miniPlayPauseBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
    playPauseBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
});

audioPlayer.addEventListener('playing', () => {
    updatePlayState(true);
});

audioPlayer.addEventListener('pause', () => {
    // If native OS paused the player (e.g. pulling out headphones), we MUST start keepalive
    // to prevent instant PWA death within 10s on iOS.
    startKeepAlive();

    // Ignore async pause events that fire while we are actively buffering a new track
    if (!isChangingTrack && audioPlayer.paused) {
        updatePlayState(false);
    }
    savePlaybackState();
    updateMediaSessionPosition();
});

// Persistence Listeners
window.addEventListener('pagehide', () => savePlaybackState());
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') savePlaybackState(); });
window.addEventListener('beforeunload', () => savePlaybackState());

audioPlayer.addEventListener('seeked', () => {
    savePlaybackState();
    updateMediaSessionPosition();
});

// Periodic save while playing (every 10s instead of 5s filter)
setInterval(() => {
    if (currentIndex !== -1 && !audioPlayer.paused) {
        savePlaybackState();
    }
}, 10000);

audioPlayer.addEventListener('loadedmetadata', () => {
    durationTimeEl.textContent = formatTime(audioPlayer.duration);
    updateMediaSessionPosition();
});

function updateMediaSessionPosition() {
    if ('mediaSession' in navigator && navigator.mediaSession.setPositionState && audioPlayer.duration && !isNaN(audioPlayer.duration)) {
        try {
            navigator.mediaSession.setPositionState({
                duration: audioPlayer.duration,
                playbackRate: audioPlayer.playbackRate,
                position: audioPlayer.currentTime
            });
        } catch (e) {
            console.warn("Could not set media session position state", e);
        }
    }
}

let isScrubbing = false;

function updateScrubbing(e) {
    const rect = progressContainer.getBoundingClientRect();
    const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : (e.changedTouches && e.changedTouches.length > 0 ? e.changedTouches[0].clientX : e.clientX);
    let percent = (clientX - rect.left) / rect.width;
    percent = Math.max(0, Math.min(1, percent));

    progressBar.style.width = `${percent * 100}%`;
    miniProgress.style.width = `${percent * 100}%`;

    let duration = audioPlayer.duration;
    if (!duration || isNaN(duration)) {
        const track = currentQueue[currentIndex];
        duration = track ? (parseInt(track.duration) || Math.floor(track.trackTimeMillis / 1000) || 180) : 180;
    }
    currentTimeEl.textContent = formatTime(percent * duration);
    return { percent, duration };
}

progressContainer.addEventListener('mousedown', (e) => {
    isScrubbing = true;
    updateScrubbing(e);
});
progressContainer.addEventListener('touchstart', (e) => {
    isScrubbing = true;
    updateScrubbing(e);
}, { passive: true });

document.addEventListener('mousemove', (e) => {
    if (!isScrubbing) return;
    updateScrubbing(e);
});
document.addEventListener('touchmove', (e) => {
    if (!isScrubbing) return;
    updateScrubbing(e);
}, { passive: true });

document.addEventListener('mouseup', (e) => {
    if (isScrubbing) {
        isScrubbing = false;
        const { percent, duration } = updateScrubbing(e);
        audioPlayer._pendingResumeTime = 0;
        audioPlayer.currentTime = percent * duration;
        updateMediaSessionPosition();
    }
});
document.addEventListener('touchend', (e) => {
    if (isScrubbing) {
        isScrubbing = false;
        const { percent, duration } = updateScrubbing(e);
        audioPlayer._pendingResumeTime = 0;
        audioPlayer.currentTime = percent * duration;
        updateMediaSessionPosition();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        miniPlayer.style.display = 'none';
    } else if (currentIndex !== -1) {
        miniPlayer.style.display = 'flex';
    }
});

function setupMediaSession(title, artist, album, smallArtwork, largeArtwork) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: title || 'Ã‘otify',
            artist: artist || getI18n("song.artist_unknown"),
            album: album || getI18n("song.single"),
            artwork: [
                { src: smallArtwork, sizes: '150x150' },
                { src: largeArtwork, sizes: '500x500' },
                { src: largeArtwork, sizes: '1024x1024' }
            ]
        });

        navigator.mediaSession.setActionHandler('play', () => {
            audioPlayer.play().then(() => {
                navigator.mediaSession.playbackState = 'playing';
                updatePlayState(true);
                updateMediaSessionPosition();
            }).catch(() => { });
        });

        navigator.mediaSession.setActionHandler('pause', () => {
            // Lock screen pause MUST trigger keepalive synchronously
            startKeepAlive();
            audioPlayer.pause();
            navigator.mediaSession.playbackState = 'paused';
            updatePlayState(false);
            updateMediaSessionPosition();
        });

        navigator.mediaSession.setActionHandler('previoustrack', playPrev);
        navigator.mediaSession.setActionHandler('nexttrack', playNext);

        try {
            navigator.mediaSession.setActionHandler('seekto', (details) => {
                if (details.seekTime !== undefined && details.seekTime !== null) {
                    audioPlayer._pendingResumeTime = 0;
                    audioPlayer.currentTime = details.seekTime;
                    updateMediaSessionPosition();
                }
            });

            // Note: seekbackward/seekforward removed to prioritize Next/Previous buttons on iOS lockscreen
        } catch (e) {
            console.warn("Seeking action handlers not supported", e);
        }
    }
}

// --- Home Data Loading ---
async function fetchHomeRandom(query, container) {
    try {
        const apis = [
            `https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${encodeURIComponent(query)}&limit=15`,
            `https://saavn.dev/api/search/songs?query=${encodeURIComponent(query)}&limit=15`,
            `https://saavn.me/search/songs?query=${encodeURIComponent(query)}&limit=15`
        ];
        let response;
        for (const api of apis) {
            try {
                response = await fetch(api);
                if (response.ok) break;
            } catch (e) { }
        }
        if (!response || !response.ok) return;
        const result = await response.json();
        let items = [];
        if (result.success && result.data && result.data.results) {
            items = result.data.results;
        } else if (result.status === "SUCCESS" && result.data && result.data.results) {
            items = result.data.results;
        } else if (result.results) {
            items = result.results;
        }

        container.innerHTML = '';
        const playQueue = items.filter(t => t.downloadUrl && t.downloadUrl.length > 0);

        playQueue.forEach((track, idx) => {
            const artworkObj = track.image.find(img => img.quality && img.quality.includes('500')) || track.image[track.image.length - 1];
            const artworkUrl = artworkObj ? (artworkObj.url || artworkObj.link) : 'https://via.placeholder.com/150';
            const artistName = decodeHTML(track.primaryArtists || track.singers || getI18n("song.artist_unknown"));
            const trackName = decodeHTML(track.name || track.title);

            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${artworkUrl}" loading="lazy">
                <h4>${trackName}</h4>
                <p>${artistName}</p>
            `;
            card.addEventListener('click', () => {
                activeContextId = 'home_random';
                playTrack(idx, playQueue);
            });
            container.appendChild(card);
        });

    } catch (err) {
        container.innerHTML = '<p style="color:var(--text-secondary); font-size:12px; padding: 20px;">Error al cargar</p>';
    }
}

function renderHomePlaylists() {
    const validPlaylists = playlists.filter(p => p.tracks.length > 0);

    if (validPlaylists.length === 0) {
        homeUserPlaylists.innerHTML = `
            <div class="card" style="display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding: 20px;">
               <i class="fa-solid fa-plus" style="font-size:24px; margin-bottom:10px; color:var(--text-secondary)"></i>
               <h4 style="color:var(--text-secondary)">Crear lista</h4>
            </div>
        `;
        homeUserPlaylists.querySelector('.card').addEventListener('click', () => {
            openCreatePlaylistModal();
        });
        return;
    }

    homeUserPlaylists.innerHTML = '';
    validPlaylists.forEach(playlist => {
        const card = document.createElement('div');
        card.className = 'card';
        const coverHTML = generatePlaylistCoverHTML(playlist, true);

        card.innerHTML = `
            ${coverHTML}
            <h4>${playlist.name}</h4>
            <p>${playlist.tracks.length} canciones</p>
        `;
        card.addEventListener('click', () => openPlaylistDetail(playlist));
        homeUserPlaylists.appendChild(card);
    });
}

function loadHomeData() {
    homeLoaded = true;
    const mixQueries = ["reggaeton", "trap latino", "pop en espanol", "exitos espaÃ±a"];
    const randomQueries = ["english pop", "top hits english", "rap us", "lofi english"];

    const q1 = mixQueries[Math.floor(Math.random() * mixQueries.length)];
    const q2 = randomQueries[Math.floor(Math.random() * randomQueries.length)];

    fetchHomeRandom(q1, homeMixes);
    fetchHomeRandom(q2, homeRandom);
}

function loadPlaybackState() {
    const saved = localStorage.getItem('webMusicPlayerState');
    if (saved) {
        try {
            const state = JSON.parse(saved);
            if (state.queue && state.queue.length > 0 && state.index >= 0 && state.index < state.queue.length) {
                isShuffleOn = !!state.shuffle;
                activeContextId = state.contextId || null;

                if (isShuffleOn && shufflePlaylistBtn) {
                    shufflePlaylistBtn.classList.add('active');
                }

                playTrack(state.index, state.queue, false, state.time || 0);
            }
        } catch (e) {
            console.warn("Failed to load playback state", e);
        }
    }
}

fullArtist.addEventListener('click', (e) => {
    if (e.target.classList.contains('artist-link')) {
        e.stopPropagation();
        const aid = e.target.getAttribute('data-artist-id');
        if (aid) {
            if (fullPlayer && fullPlayer.classList.contains('active')) {
                fullPlayer.classList.remove('active');
            }
            openArtistDetail(aid, e.target.textContent);
        }
    }
});

// --- All Artist Songs View Engine ---
showAllArtistSongsBtn.addEventListener('click', () => {
    switchView('allArtistSongs');
    allSongsArtistTitle.textContent = detailArtistTitleHero.textContent;
    allArtistSongsListContainer.innerHTML = '';
    currentAllArtistSongsPage = 1;
    hasMoreAllArtistSongs = true;

    // Iniciar con las canciones del top ya cargadas y desduplicadas
    const seenTopNames = new Set();
    currentAllArtistSongsData = [];
    currentArtistQueue.forEach(t => {
        const norm = t.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\([^)]*\)/g, '').trim();
        if (!seenTopNames.has(norm)) {
            seenTopNames.add(norm);
            currentAllArtistSongsData.push(t);
        }
    });

    if (currentAllArtistSongsData.length > 0) {
        renderAllArtistSongsChunk(currentAllArtistSongsData);
    }

    if (allArtistSongsFilterInput) allArtistSongsFilterInput.value = '';
    allArtistSongsLoader.style.display = 'block';

    fetchNextAllArtistSongs();
});

async function fetchNextAllArtistSongs() {
    if (isFetchingAllArtistSongs || !hasMoreAllArtistSongs || !currentArtistIdForAllSongs) return;
    isFetchingAllArtistSongs = true;
    allArtistSongsLoader.style.display = 'block';

    try {
        let apiUrl = '';
        const searchVal = currentArtistIdForAllSongs.type === 'id' ? detailArtistTitleHero.textContent : currentArtistIdForAllSongs.value;
        apiUrl = `https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${encodeURIComponent(searchVal)}&page=${currentAllArtistSongsPage}&limit=30`;

        const res = await fetch(apiUrl);
        const data = await res.json();

        let newHits = [];
        if (data.data && data.data.results) newHits = data.data.results;
        else if (data.data && Array.isArray(data.data)) newHits = data.data;
        else if (data.results) newHits = data.results;

        if (!newHits || newHits.length === 0) {
            hasMoreAllArtistSongs = false;
        } else {
            // Apply strict filters
            const aName = detailArtistTitleHero.textContent;
            let validTracks = newHits.filter(jt => passesStrictFilters(jt, aName, ''));
            // Sometimes all tracks on a page are filtered out. We still need to increment page.

            if (validTracks.length > 0) {
                const newFormattedTracks = validTracks.map(jt => {
                    const rawAudioUrl = getBestAudioUrl(jt.downloadUrl) || '';
                    return {
                        id: jt.id.toString(),
                        name: decodeHTML(jt.name || jt.title),
                        title: decodeHTML(jt.name || jt.title),
                        primaryArtists: decodeHTML(jt.primaryArtists || jt.singers),
                        primaryArtistsId: (jt.primaryArtistsId || '').toString(),
                        image: jt.image || [{ quality: '150x150', url: 'https://via.placeholder.com/150' }],
                        downloadUrl: rawAudioUrl ? [{ quality: '320kbps', url: rawAudioUrl }] : [],
                        previewUrl: rawAudioUrl,
                        playCount: Number(jt.playCount || 0),
                        album: { name: decodeHTML((jt.album && jt.album.name) || ''), id: (jt.album && jt.album.id) || '' },
                        isPreview: !rawAudioUrl,
                        duration: jt.duration ? jt.duration.toString() : "0"
                    };
                });

                // Fetch high res artwork in background
                enhanceWithAppleArtwork(newFormattedTracks);

                const uniqueNewTracks = [];
                const seenNames = new Set(currentAllArtistSongsData.map(t =>
                    t.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\([^)]*\)/g, '').trim()
                ));

                newFormattedTracks.forEach(newTrack => {
                    const newNormName = newTrack.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\([^)]*\)/g, '').trim();
                    if (!seenNames.has(newNormName)) {
                        seenNames.add(newNormName);
                        uniqueNewTracks.push(newTrack);
                    }
                });

                currentAllArtistSongsData = currentAllArtistSongsData.concat(uniqueNewTracks);

                const q = (allArtistSongsFilterInput.value || '').toLowerCase().trim();
                if (q) {
                    const validChunk = uniqueNewTracks.filter(t => {
                        const title = (t.name || t.title || '').toLowerCase();
                        const artist = (t.primaryArtists || t.singers || '').toLowerCase();
                        return title.includes(q) || artist.includes(q);
                    });
                    renderAllArtistSongsChunk(validChunk);
                } else {
                    renderAllArtistSongsChunk(uniqueNewTracks);
                }
            }
            currentAllArtistSongsPage++;
        }
    } catch (e) {
        console.error("Error fetching all artist songs page", e);
    }

    isFetchingAllArtistSongs = false;
    allArtistSongsLoader.style.display = hasMoreAllArtistSongs ? 'none' : 'none';
}

function enhanceWithAppleArtwork(localTracks) {
    if (localTracks.length === 0) return;

    // Quick async background fetch to find Apple Music artwork for these tracks
    localTracks.forEach(async (localTrack) => {
        try {
            const safeSearch = encodeURIComponent(localTrack.name + " " + localTrack.primaryArtists.split(',')[0]);
            const res = await fetch(`https://itunes.apple.com/search?term=${safeSearch}&entity=song&limit=1`);
            const data = await res.json();
            if (data.results && data.results.length > 0 && data.results[0].artworkUrl100) {
                localTrack.image = [{ quality: '500x500', url: data.results[0].artworkUrl100.replace('100x100', '500x500') }];
                // Force an image update on DOM
                const imgEl = document.getElementById(`all-song-img-${localTrack.id}`);
                if (imgEl) imgEl.src = localTrack.image[0].url;
            }
        } catch (e) { }
    });
}

function renderAllArtistSongsChunk(tracksToRender) {
    tracksToRender.forEach((track) => {
        const artworkObj = track.image.find(img => img.quality && img.quality.includes('150')) || track.image[0];
        const smallArtworkUrl = artworkObj ? (artworkObj.url || artworkObj.link) : 'https://via.placeholder.com/150';
        const artistNameStr = track.primaryArtists || getI18n("song.artist_unknown");
        const trackName = decodeHTML(track.title);
        const artistIdStr = track.primaryArtistsId || "";

        const artistHtml = `<p>${formatArtistLinks(artistNameStr, artistIdStr)}</p>`;

        const item = document.createElement('div');
        item.className = 'song-item'; item.dataset.trackJson = encodeURIComponent(JSON.stringify(track));
        item.innerHTML = `
            <img id="all-song-img-${track.id}" src="${smallArtworkUrl}" alt="Cover" loading="lazy">
            <div class="song-info">
                <h4>${trackName}</h4>
                ${artistHtml}
            </div>
            <div class="song-actions">
                ${getTrackAddButtonHTML(track)}
            </div>
        `;

        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('artist-link')) {
                e.stopPropagation();
                openArtistDetail(e.target.getAttribute('data-artist-id'), e.target.textContent);
                return;
            }
            if (!e.target.closest('.song-actions')) {
                // Determine actual index
                const realIndex = currentAllArtistSongsData.findIndex(t => t.id === track.id);
                if (realIndex !== -1) {
                    activeContextId = "allArtistSongs";
                    playTrack(realIndex, currentAllArtistSongsData.slice());
                }
            }
        });

        const addBtn = item.querySelector('.add-to-playlist-btn');
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openAddModal(track);
        });

        allArtistSongsListContainer.appendChild(item);
    });
}

// Scroll Listener for Infinite Scroll
allArtistSongsMain.addEventListener('scroll', () => {
    if (allArtistSongsMain.scrollTop + allArtistSongsMain.clientHeight >= allArtistSongsMain.scrollHeight - 300) {
        if (!isFetchingAllArtistSongs && hasMoreAllArtistSongs) {
            fetchNextAllArtistSongs();
        }
    }
});

if (allArtistSongsFilterInput) {
    allArtistSongsFilterInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();
        allArtistSongsListContainer.innerHTML = '';

        if (!q) {
            renderAllArtistSongsChunk(currentAllArtistSongsData);
            return;
        }

        const filtered = currentAllArtistSongsData.filter(t => {
            const title = (t.name || t.title || '').toLowerCase();
            const artist = (t.primaryArtists || t.singers || '').toLowerCase();
            return title.includes(q) || artist.includes(q);
        });
        renderAllArtistSongsChunk(filtered);
    });
}

// --- User Profile & Settings ---
let userProfile = JSON.parse(localStorage.getItem('notifyUserProfile')) || {
    name: 'Usuario',
    image: 'logo.png',
    dataQuality: 'normal',
    wifiQuality: 'premium',
    language: 'es'
};

function saveUserProfile() {
    localStorage.setItem('notifyUserProfile', JSON.stringify(userProfile));
}

function loadUserProfileUI() {
    if (headerProfileImg) headerProfileImg.src = userProfile.image;
    if (settingsProfileImg) settingsProfileImg.src = userProfile.image;
    if (settingsProfileNameDisplay) settingsProfileNameDisplay.textContent = userProfile.name;
    if (settingsProfileNameInput) settingsProfileNameInput.value = userProfile.name;

    // Update Custom Dropdowns
    const qualityMap = {
        'low': 'Baja (M4A 96kbps)',
        'normal': 'Normal (OPUS 160kbps)',
        'high': 'Alta (MP3 320kbps)',
        'premium': 'Premium (FLAC/Max)'
    };

    const langMap = {
        'es': 'EspaÃ±ol de EspaÃ±a',
        'ca': 'CatalÃ ',
        'en': 'English'
    };

    const dataQ = document.querySelector('#dataQualityWrapper .custom-select-value');
    if (dataQ) dataQ.textContent = qualityMap[userProfile.dataQuality] || qualityMap['normal'];

    const wifiQ = document.querySelector('#wifiQualityWrapper .custom-select-value');
    if (wifiQ) wifiQ.textContent = qualityMap[userProfile.wifiQuality] || qualityMap['premium'];

    const langQ = document.querySelector('#languageWrapper .custom-select-value');
    if (langQ) {
        langQ.setAttribute('data-i18n', 'settings.lang.' + (userProfile.language || 'es'));
        langQ.textContent = getI18n('settings.lang.' + (userProfile.language || 'es'));
    }

    // Mark selected options
    document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
        const id = wrapper.id;
        let val = '';
        if (id === 'dataQualityWrapper') val = userProfile.dataQuality;
        if (id === 'wifiQualityWrapper') val = userProfile.wifiQuality;
        if (id === 'languageWrapper') val = userProfile.language || 'es';

        wrapper.querySelectorAll('.custom-option').forEach(opt => {
            if (opt.getAttribute('data-value') === val) {
                opt.classList.add('selected');
            } else {
                opt.classList.remove('selected');
            }
        });
    });
}

// Attach UI events
if (editProfileImgBtn && profileImgInput) {
    editProfileImgBtn.addEventListener('click', () => profileImgInput.click());
    profileImgInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                userProfile.image = event.target.result;
                saveUserProfile();
                loadUserProfileUI();
                showToast("Foto de perfil actualizada", "fa-camera");
            };
            reader.readAsDataURL(file);
        }
    });
}

if (editProfileNameBtn && profileNameDisplayContainer && editProfileNameContainer) {
    editProfileNameBtn.addEventListener('click', () => {
        profileNameDisplayContainer.style.display = 'none';
        editProfileNameContainer.style.display = 'flex';
        settingsProfileNameInput.focus();
    });

    const saveName = () => {
        const newName = settingsProfileNameInput.value.trim();
        if (newName) {
            userProfile.name = newName;
            saveUserProfile();
            loadUserProfileUI();
            showToast("Nombre actualizado", "fa-user");
        }
        editProfileNameContainer.style.display = 'none';
        profileNameDisplayContainer.style.display = 'flex';
    };

    saveProfileNameBtn.addEventListener('click', saveName);
    settingsProfileNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') saveName();
    });
    cancelProfileNameBtn.addEventListener('click', () => {
        editProfileNameContainer.style.display = 'none';
        profileNameDisplayContainer.style.display = 'flex';
        settingsProfileNameInput.value = userProfile.name;
    });
}

// Custom Dropdown Logic
document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
    const trigger = wrapper.querySelector('.custom-select-trigger');
    const options = wrapper.querySelectorAll('.custom-option');
    const valueSpan = trigger.querySelector('.custom-select-value');

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        // Close others
        document.querySelectorAll('.custom-select-wrapper').forEach(w => {
            if (w !== wrapper) w.classList.remove('open');
        });
        wrapper.classList.toggle('open');
    });

    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const val = option.getAttribute('data-value');

            // Update UI
            wrapper.querySelectorAll('.custom-option').forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');

            // Copy data-i18n if exists
            if (option.hasAttribute('data-i18n')) {
                valueSpan.setAttribute('data-i18n', option.getAttribute('data-i18n'));
            }
            valueSpan.textContent = option.textContent;

            // Save settings
            if (wrapper.id === 'dataQualityWrapper') userProfile.dataQuality = val;
            if (wrapper.id === 'wifiQualityWrapper') userProfile.wifiQuality = val;
            if (wrapper.id === 'languageWrapper') {
                userProfile.language = val;
                saveUserProfile();
                if (typeof applyLanguage === 'function') applyLanguage();
            } else {
                saveUserProfile();
            }

            wrapper.classList.remove('open');
        });
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('open'));
});

// Load settings on boot
loadUserProfileUI();
if (typeof applyLanguage === 'function') applyLanguage();

// Initial View Load
switchView('home');
loadPlaybackState();

// --- Splash Screen & Resume Checks ---
window.addEventListener('load', () => {
    const splash = document.getElementById('appSplashScreen');
    if (splash) {
        // Subtle delay to let the app fully initialize and give a premium feel
        setTimeout(() => {
            splash.style.opacity = '0';
            splash.style.visibility = 'hidden';
            setTimeout(() => {
                splash.remove();
                checkPausedImports();
            }, 500);
        }, 800);
    } else {
        checkPausedImports();
    }
});

function checkPausedImports() {
    const rawState = localStorage.getItem('notify_import_state');
    if (!rawState) return;

    try {
        const state = JSON.parse(rawState);
        if (!state.lines || state.processedCount >= state.lines.length) {
            localStorage.removeItem('notify_import_state');
            return;
        }

        const remaining = state.lines.length - state.processedCount;

        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.style.display = 'flex';
        overlay.style.opacity = '0';
        overlay.style.backdropFilter = 'blur(15px)'; // Ensure intense blur for blockade

        const modal = document.createElement('div');
        modal.className = 'modal-content';

        modal.innerHTML = `
            <div class="modal-header">
                <h3 style="margin: 0;">ImportaciÃ³n Pausada</h3>
            </div>
            <div class="modal-body" style="text-align: center;">
                <i class="fa-solid fa-clock-rotate-left" style="font-size: 32px; color: var(--accent-color); margin-bottom: 15px;"></i>
                <p style="color: var(--text-secondary); font-size: 14px; margin: 0; line-height: 1.5;">
                    Se interrumpiÃ³ la importaciÃ³n de <strong>${state.playlistName}</strong>.<br>
                    Faltan <strong>${remaining}</strong> canciones. Â¿Deseas continuar?
                </p>
            </div>
            <div class="modal-footer" style="display: flex; gap: 10px; border-top: none; padding-top: 5px;">
                <button id="cancelImportBtn" class="primary-btn" style="flex: 1; background: rgba(255,255,255,0.1); justify-content: center;">Cancelar</button>
                <button id="resumeImportBtn" class="primary-btn" style="flex: 1; justify-content: center;">SÃ­, Continuar</button>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Animate in
        requestAnimationFrame(() => {
            overlay.style.opacity = '1';
            modal.style.transform = 'scale(1)';
            modal.style.opacity = '1';
        });

        document.getElementById('resumeImportBtn').addEventListener('click', () => {
            overlay.remove();
            executeTxtImport(state.playlistName, state.lines, state.targetPlaylistId, state.processedCount, state.failedList);
        });

        document.getElementById('cancelImportBtn').addEventListener('click', () => {
            localStorage.removeItem('notify_import_state');
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 200);
        });

    } catch (e) {
        localStorage.removeItem('notify_import_state');
    }
}

// --- Swipe to Action Logic for Mobile ---
(function () {
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isSwiping = false;
    let isHorizontalSwipe = null;
    let swipedItem = null;
    let swipeBg = null;
    let swipeRightContainer = null;
    let actionType = null; // 'add' or 'remove'
    const SWIPE_THRESHOLD = 80;
    const AUTO_TRIGGER_THRESHOLD = 150;

    document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) return;

        if (swipedItem && !e.target.closest('.song-item')) {
            if (e.target.closest('.song-swipe-bg')) {
                return;
            }
            resetSwipe();
        }

        const item = e.target.closest('.song-item');
        if (!item) return;

        if (item === swipedItem && e.target.closest('.song-swipe-action-area')) {
            return;
        }

        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        currentX = startX;
        isSwiping = true;
        isHorizontalSwipe = null;

        if (item !== swipedItem) {
            resetSwipe();
            swipedItem = item;

            const isPlaylist = item.closest('#playlistSongsContainer');
            const hasRemoveQueue = item.querySelector('.remove-from-queue');
            actionType = (isPlaylist || hasRemoveQueue) ? 'remove' : 'add';

            swipeBg = document.createElement('div');
            swipeBg.className = 'song-swipe-bg ' + actionType;
            swipeBg.innerHTML = actionType === 'add'
                ? '<i class="fa-solid fa-plus"></i>'
                : '<i class="fa-solid fa-minus"></i>';

            const btnHeight = 50;
            const btnTop = item.offsetTop + (item.offsetHeight / 2) - 25;

            swipeBg.style.position = 'absolute';
            swipeBg.style.top = btnTop + 'px';
            swipeBg.style.right = '0px';
            swipeBg.style.left = 'auto';
            swipeBg.style.width = '50px';
            swipeBg.style.height = '50px';
            swipeBg.style.zIndex = '1';
            swipeBg.style.justifyContent = 'center';
            swipeBg.style.borderRadius = '25px';
            swipeBg.style.display = 'none';
            swipeBg.style.transition = 'none';

            swipeRightContainer = document.createElement('div');
            swipeRightContainer.className = 'song-swipe-right-container';
            swipeRightContainer.style.position = 'absolute';
            swipeRightContainer.style.top = btnTop + 'px';
            swipeRightContainer.style.left = '0px';
            swipeRightContainer.style.height = '50px';
            swipeRightContainer.style.display = 'none';
            swipeRightContainer.style.gap = '8px';
            swipeRightContainer.style.zIndex = '1';
            swipeRightContainer.style.alignItems = 'center';
            swipeRightContainer.style.transition = 'none';

            const svgAddNext = `<svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M4 5 L10 9 L4 13 Z"/><rect x="12" y="5" width="10" height="2" rx="1"/><rect x="12" y="9" width="10" height="2" rx="1"/><rect x="4" y="13" width="18" height="2" rx="1"/><rect x="4" y="17" width="18" height="2" rx="1"/></svg>`;
            const svgAddEnd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="5" width="18" height="2" rx="1"/><rect x="4" y="9" width="18" height="2" rx="1"/><rect x="12" y="13" width="10" height="2" rx="1"/><rect x="12" y="17" width="10" height="2" rx="1"/><path d="M4 13 L10 17 L4 21 Z"/></svg>`;

            if (currentQueue && currentQueue.length > 0) {
                swipeRightContainer.innerHTML = `
                    <div class="song-swipe-bg blue" data-action="addNext" style="width: 50px; height: 50px; border-radius: 25px; overflow: hidden; justify-content: center;">${svgAddNext}</div>
                    <div class="song-swipe-bg orange" data-action="addEnd" style="width: 50px; height: 50px; border-radius: 25px; overflow: hidden; justify-content: center; opacity: 1;">${svgAddEnd}</div>
                `;
            } else {
                swipeRightContainer.innerHTML = `
                    <div class="song-swipe-bg blue" data-action="addNext" style="width: 50px; height: 50px; border-radius: 25px; overflow: hidden; justify-content: center;">${svgAddNext}</div>
                `;
            }

            const parent = item.parentElement;
            if (window.getComputedStyle(parent).position === 'static') {
                parent.style.position = 'relative';
            }

            item.style.position = 'relative';
            item.style.zIndex = '2';
            item.style.background = 'var(--surface-color)';
            item.style.borderRadius = '20px';
            item.style.transition = 'none';

            parent.insertBefore(swipeBg, item);
            parent.insertBefore(swipeRightContainer, item);
        } else {
            item.style.transition = 'none';
        }
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        if (!isSwiping || !swipedItem) return;

        currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;

        if (isHorizontalSwipe === null) {
            if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
                isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
            }
        }

        if (isHorizontalSwipe === false) {
            resetSwipe();
            return;
        }

        if (isHorizontalSwipe === true) {
            if (e.cancelable) e.preventDefault();
        }

        if (deltaX < 0) {
            if (swipeRightContainer) swipeRightContainer.style.display = 'none';
            if (swipeBg) swipeBg.style.display = 'flex';

            const moveX = Math.max(deltaX, -200);
            swipedItem.style.transform = `translateX(${moveX}px)`;

            const absX = Math.abs(moveX);
            if (absX <= 80) {
                swipeBg.style.right = ((absX - 50) / 2) + 'px';
                swipeBg.style.width = '50px';
                swipeBg.classList.remove('auto-trigger');
            } else {
                swipeBg.style.right = '15px';
                swipeBg.style.width = (absX - 30) + 'px';
                swipeBg.classList.add('auto-trigger');
            }
        } else if (deltaX > 0) {
            if (swipeBg) swipeBg.style.display = 'none';
            if (swipeRightContainer) swipeRightContainer.style.display = 'flex';

            const moveX = Math.min(deltaX, 200);
            swipedItem.style.transform = `translateX(${moveX}px)`;

            const isTwoButtons = currentQueue && currentQueue.length > 0;
            const blueBtn = swipeRightContainer.querySelector('.blue');
            const orangeBtn = swipeRightContainer.querySelector('.orange');

            if (isTwoButtons) {
                if (moveX > 138) {
                    swipeRightContainer.style.left = '15px';
                    swipeRightContainer.style.width = (moveX - 30) + 'px';
                    swipeRightContainer.style.gap = '0px';
                    if (blueBtn) {
                        blueBtn.style.opacity = '0';
                        blueBtn.style.width = '0px';
                        blueBtn.style.margin = '0px';
                    }
                    if (orangeBtn) {
                        orangeBtn.style.width = '100%';
                        orangeBtn.style.opacity = '1';
                        orangeBtn.classList.add('auto-trigger');
                    }
                } else {
                    swipeRightContainer.style.left = ((moveX - 108) / 2) + 'px';
                    swipeRightContainer.style.width = '108px';
                    swipeRightContainer.style.gap = '8px';
                    if (blueBtn) {
                        blueBtn.style.opacity = '1';
                        blueBtn.style.width = '50px';
                    }
                    if (orangeBtn) {
                        orangeBtn.style.opacity = '1';
                        orangeBtn.style.width = '50px';
                        orangeBtn.classList.remove('auto-trigger');
                    }
                }
            } else {
                if (moveX > 80) {
                    swipeRightContainer.style.left = '15px';
                    swipeRightContainer.style.width = (moveX - 30) + 'px';
                    if (blueBtn) {
                        blueBtn.style.width = '100%';
                        blueBtn.classList.add('auto-trigger');
                    }
                } else {
                    swipeRightContainer.style.left = ((moveX - 50) / 2) + 'px';
                    swipeRightContainer.style.width = '50px';
                    if (blueBtn) {
                        blueBtn.style.width = '50px';
                        blueBtn.classList.remove('auto-trigger');
                    }
                }
            }
        }
    }, { passive: false });

    document.addEventListener('touchend', (e) => {
        if (!isSwiping || !swipedItem) return;
        isSwiping = false;

        const deltaX = currentX - startX;
        swipedItem.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';

        if (deltaX < -AUTO_TRIGGER_THRESHOLD) {
            executeAction(swipedItem, actionType);
            resetSwipe();
        } else if (deltaX < -SWIPE_THRESHOLD) {
            swipedItem.style.transform = 'translateX(-80px)';
            swipeBg.style.right = '15px';
            swipeBg.style.width = '50px';
            swipeBg.style.transition = 'width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), right 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
            swipeBg.onclick = () => {
                executeAction(swipedItem, actionType);
                resetSwipe();
            };
        } else if (deltaX > SWIPE_THRESHOLD) {
            const isTwoButtons = currentQueue && currentQueue.length > 0;
            const rightTrigger = isTwoButtons ? 138 : AUTO_TRIGGER_THRESHOLD;

            if (deltaX > rightTrigger) {
                executeAction(swipedItem, isTwoButtons ? 'addEnd' : 'addNext');
                resetSwipe();
            } else {
                const snapX = isTwoButtons ? 138 : 80;
                swipedItem.style.transform = `translateX(${snapX}px)`;
                const blueBtn = swipeRightContainer.querySelector('.blue');
                const orangeBtn = swipeRightContainer.querySelector('.orange');

                if (blueBtn) blueBtn.style.transition = 'width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.3s';
                if (orangeBtn) orangeBtn.style.transition = 'width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.3s';
                swipeRightContainer.style.transition = 'width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), left 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';

                swipeRightContainer.style.gap = '8px';

                if (isTwoButtons) {
                    swipeRightContainer.style.left = '15px';
                    swipeRightContainer.style.width = '108px';
                    if (blueBtn) {
                        blueBtn.style.opacity = '1';
                        blueBtn.style.width = '50px';
                    }
                    if (orangeBtn) {
                        orangeBtn.style.opacity = '1';
                        orangeBtn.style.width = '50px';
                    }
                } else {
                    swipeRightContainer.style.left = '15px';
                    swipeRightContainer.style.width = '50px';
                    if (blueBtn) {
                        blueBtn.style.width = '100%';
                    }
                }

                if (blueBtn) blueBtn.onclick = () => { executeAction(swipedItem, 'addNext'); resetSwipe(); };
                if (orangeBtn) orangeBtn.onclick = () => { executeAction(swipedItem, 'addEnd'); resetSwipe(); };
            }
        } else {
            resetSwipe();
        }
    });

    function executeAction(item, type) {
        if (type === 'add') {
            const btn = item.querySelector('.add-to-playlist-btn');
            if (btn) btn.click();
        } else if (type === 'remove') {
            let btn = item.querySelector('.remove-from-playlist');
            if (!btn) btn = item.querySelector('.remove-from-queue');
            if (btn) btn.click();
        } else if (type === 'addNext' || type === 'addEnd') {
            try {
                if (item.dataset.trackJson) {
                    const track = JSON.parse(decodeURIComponent(item.dataset.trackJson));
                    if (type === 'addNext') window.addTrackToQueueNext(track);
                    if (type === 'addEnd') window.addTrackToQueueEnd(track);
                }
            } catch (e) {
                console.error("Error queueing track", e);
            }
        }
    }

    function resetSwipe() {
        if (swipedItem) {
            swipedItem.style.transform = 'translateX(0)';
            const currentItem = swipedItem;
            setTimeout(() => {
                currentItem.style.background = '';
                currentItem.style.zIndex = '';
                currentItem.style.position = '';
                currentItem.style.borderRadius = '';
            }, 300);
        }
        if (swipeBg) swipeBg.remove();
        if (swipeRightContainer) swipeRightContainer.remove();
        swipedItem = null;
        swipeBg = null;
        swipeRightContainer = null;
    }
})();

// --- Queue Management Functions ---
function addTrackToQueueNext(track) {
    if (!currentQueue || currentQueue.length === 0) {
        currentQueue = [track];
        currentIndex = 0;
        playTrack(0, currentQueue);
    } else {
        currentQueue.splice(currentIndex + 1, 0, track);
    }
    showToast(getI18n('toast.addedToQueueNext') || 'Se reproducirá a continuación', 'fa-play');
}

function addTrackToQueueEnd(track) {
    if (!currentQueue || currentQueue.length === 0) {
        currentQueue = [track];
        currentIndex = 0;
        playTrack(0, currentQueue);
    } else {
        currentQueue.push(track);
    }
    showToast(getI18n('toast.addedToQueue') || 'Añadido a la cola', 'fa-plus');
}

