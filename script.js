const searchInput = document.getElementById('searchInput');
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

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function savePlaylists() {
    localStorage.setItem('webMusicPlaylists', JSON.stringify(playlists));
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
    searchView.style.display = 'none';
    playlistsView.style.display = 'none';
    playlistDetailView.style.display = 'none';
    artistDetailView.style.display = 'none';
    if(albumDetailView) albumDetailView.style.display = 'none';
    homeView.style.display = 'none';
    
    if(mainHeader) mainHeader.style.display = 'block';
    
    if(tabHome) tabHome.classList.remove('active');
    if(tabSearch) tabSearch.classList.remove('active');
    if(tabPlaylists) tabPlaylists.classList.remove('active');
    
    if (viewId === 'home') {
        homeView.style.display = 'flex';
        tabHome.classList.add('active');
        mainTitle.textContent = "Inicio";
        createNewPlaylistBtn.style.display = 'none';
        renderHomePlaylists();
        if (!homeLoaded) loadHomeData();
    } else if (viewId === 'search') {
        searchView.style.display = 'flex';
        tabSearch.classList.add('active');
        mainTitle.textContent = "Buscar";
        createNewPlaylistBtn.style.display = 'none';
    } else if (viewId === 'playlists') {
        playlistsView.style.display = 'flex';
        tabPlaylists.classList.add('active');
        mainTitle.textContent = "Tu Biblioteca";
        createNewPlaylistBtn.style.display = 'flex';
        renderPlaylists();
    } else if (viewId === 'playlistDetail') {
        playlistDetailView.style.display = 'flex';
        if(mainHeader) mainHeader.style.display = 'none';
        mainTitle.textContent = "Detalles de Playlist";
        createNewPlaylistBtn.style.display = 'none';
    } else if (viewId === 'artistDetail') {
        artistDetailView.style.display = 'flex';
        if(mainHeader) mainHeader.style.display = 'none';
        createNewPlaylistBtn.style.display = 'none';
    } else if (viewId === 'albumDetail') {
        if(albumDetailView) albumDetailView.style.display = 'flex';
        if(mainHeader) mainHeader.style.display = 'none';
        createNewPlaylistBtn.style.display = 'none';
    }
}

tabHome.addEventListener('click', () => switchView('home'));
tabSearch.addEventListener('click', () => switchView('search'));
tabPlaylists.addEventListener('click', () => switchView('playlists'));
backToPlaylistsBtn.addEventListener('click', () => switchView('playlists'));
if(backFromArtistBtn) backFromArtistBtn.addEventListener('click', () => switchView('search'));
if(backFromAlbumBtn) backFromAlbumBtn.addEventListener('click', () => switchView('artistDetail'));

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
                <p>No tienes playlists. Crea una para empezar.</p>
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
    const totalSeconds = playlist.tracks.reduce((acc, t) => acc + (parseInt(t.duration) || 0), 0);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    
    let timeStr = '';
    if (playlist.tracks.length > 0) {
        if (hours > 0) {
            timeStr = ` • ${hours}h ${minutes}m`;
        } else {
            timeStr = ` • ${Math.max(1, minutes)}m`;
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
                <p>Esta playlist está vacía</p>
            </div>
        `;
        return;
    }
    
    playlistSongsContainer.innerHTML = '';
    tracksToRender.forEach((track, index) => {
        const artworkObj = track.image.find(img => img.quality && img.quality.includes('150')) || track.image[0];
        const smallArtworkUrl = artworkObj ? (artworkObj.url || artworkObj.link) : 'https://via.placeholder.com/150';
        
        const artistName = decodeHTML(track.primaryArtists || track.singers || "Artista Desconocido");
        const trackName = decodeHTML(track.name || track.title);
        
        const artistId = (track.primaryArtistsId || '').split(',')[0].trim() || (track.artistId || '').split(',')[0].trim();
        let artistHtml = `<p>${artistName}</p>`;
        if (artistId) {
            artistHtml = `<p><span class="artist-link" data-artist-id="${artistId}" style="cursor: pointer;">${artistName}</span></p>`;
        }
        
        const item = document.createElement('div');
        item.className = 'song-item';
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
                openArtistDetail(e.target.getAttribute('data-artist-id'));
                return;
            }
            if(!e.target.closest('.remove-from-playlist')) {
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
    
    // Si viene desde el botón del modal "Añadir a Playlist", se oculta temporalmente el primero
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
        // Se añadió una canción directamente al crear la lista
        showToast(`¡Canción añadida a ${name}!`);
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

// Global Heuristic Scorer for Audio Variant Filtration
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

async function executeTxtImport(pName, sourceData, targetPlaylistId = null) {
    let text = '';
    if (typeof sourceData === 'string') text = sourceData;
    else text = await sourceData.text();
    
    const lines = text.split('\n').map(l => l.trim()).filter(l => l !== '');
    
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
    bText.textContent = `Procesando 0 de ${lines.length} canciones`;
    bBar.style.width = '0%';
    
    let failedList = [];
    let processed = 0;
    
    // Asynchronous Line Loop Extraction Engine
    for (const line of lines) {
        try {
            const rawQuery = line;
            let expectedArtist = '';
            let expectedTitle = rawQuery;
            if (rawQuery.includes('-')) {
                const parts = rawQuery.split('-');
                expectedArtist = parts[0].trim();
                expectedTitle = parts.slice(1).join('-').trim();
            }
            
            let itunesData = null;
            let successFetch = false;
            
            // 3-Strike Retry Mechanism to bypass sudden Apple 429 Limits and TCP Drops
            for (let attempt = 1; attempt <= 3; attempt++) {
                try {
                    const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(rawQuery)}&entity=song&limit=5`;
                    const itunesRes = await fetch(itunesUrl);
                    
                    if (itunesRes.status === 429 || itunesRes.status === 403) {
                        await new Promise(r => setTimeout(r, 4000)); // Rest for 4 seconds before retrying
                        continue;
                    }
                    
                    if (itunesRes.ok) {
                        itunesData = await itunesRes.json();
                        if (itunesData.results && itunesData.results.length > 0) {
                            itunesData.results.sort((a,b) => getTrackScore(b.trackName, b.artistName, expectedArtist, expectedTitle) - getTrackScore(a.trackName, a.artistName, expectedArtist, expectedTitle));
                        }
                        successFetch = true;
                        break;
                    }
                } catch(netErr) {
                    await new Promise(r => setTimeout(r, 2000));
                }
            }
            
            if (!successFetch || !itunesData || !itunesData.results || itunesData.results.length === 0) {
                // FALLBACK: If Apple actively blocked us via 403 permanently or returned empty, query JioSaavn cleanly.
                let fbData = null;
                const fbApis = [
                    `https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${encodeURIComponent(rawQuery)}&limit=5`,
                    `https://saavn.dev/api/search/songs?query=${encodeURIComponent(rawQuery)}&limit=5`,
                    `https://saavn.me/search/songs?query=${encodeURIComponent(rawQuery)}&limit=5`
                ];
                for (let fu of fbApis) {
                    try {
                        const fr = await fetch(fu);
                        if(fr.ok) {
                            const fd = await fr.json();
                            let fHits = [];
                            if (fd.data && fd.data.results) fHits = fd.data.results;
                            else if (fd.results) fHits = fd.results;
                            else if (Array.isArray(fd.data)) fHits = fd.data;
                            
                            if (fHits.length > 0) {
                                fHits.sort((a,b) => getTrackScore(b.name || b.title, b.primaryArtists || b.singers, expectedArtist, expectedTitle, b.playCount) - getTrackScore(a.name || a.title, a.primaryArtists || a.singers, expectedArtist, expectedTitle, a.playCount));
                                fbData = fHits[0];
                                break;
                            }
                        }
                    } catch(e){}
                }
                
                if (fbData) {
                    targetPlaylist.tracks.push({
                        id: fbData.id.toString(),
                        name: decodeHTML(fbData.name || fbData.title),
                        title: decodeHTML(fbData.name || fbData.title),
                        primaryArtists: decodeHTML(fbData.primaryArtists || fbData.singers),
                        primaryArtistsId: (fbData.primaryArtistsId || '').toString(),
                        image: fbData.image || [],
                        downloadUrl: fbData.downloadUrl || [],
                        previewUrl: '',
                        playCount: 0,
                        album: { name: decodeHTML((fbData.album && fbData.album.name) || ''), id: '' },
                        isPreview: false
                    });
                    savePlaylists(); // Live-save
                    if (currentViewedPlaylist && currentViewedPlaylist.id === targetPlaylist.id) {
                        updatePlaylistInfoDisplay(targetPlaylist);
                        renderPlaylistSongs(targetPlaylist.tracks);
                    } else if (playlistsView.style.display === 'flex') {
                        renderPlaylists();
                    }
                } else {
                    failedList.push({ request: line, reason: "Catálogo de Apple rechazó petición y motores de respaldo inalcanzables" });
                }
            } else {
                const itrack = itunesData.results[0];
                const cleanArtist = (itrack.artistName || '').split(',')[0].trim();
                const safeQuery = `${itrack.trackName} ${cleanArtist}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9\s-]/g, '');
                const q1 = encodeURIComponent(safeQuery);
                
                let audioUrl = '';
                let cacheObj = [];
                let isPreview = true;
                
                const jioApis = [
                    `https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${q1}&limit=5`,
                    `https://saavn.dev/api/search/songs?query=${q1}&limit=5`,
                    `https://saavn.me/search/songs?query=${q1}&limit=5`
                ];
                
                for (let u of jioApis) {
                    try {
                        const res = await fetch(u);
                        if (res.ok) {
                            const d = await res.json();
                            let hits = [];
                            if (d.data && d.data.results) hits = d.data.results;
                            else if (d.results) hits = d.results;
                            else if (Array.isArray(d.data)) hits = d.data;
                            
                            if (hits && hits.length > 0) {
                                // HEURISTIC AUDIO MATCHER
                                hits.sort((a,b) => getTrackScore(b.name || b.title, b.primaryArtists || b.singers, cleanArtist, itrack.trackName, b.playCount) - getTrackScore(a.name || a.title, a.primaryArtists || a.singers, cleanArtist, itrack.trackName, a.playCount));
                                
                                const aObj = hits[0].downloadUrl && Array.isArray(hits[0].downloadUrl) ? (hits[0].downloadUrl.find(url => url.quality && url.quality.includes('320')) || hits[0].downloadUrl[hits[0].downloadUrl.length - 1]) : null;
                                if (aObj) {
                                    audioUrl = aObj.url || aObj.link;
                                    cacheObj = hits[0].downloadUrl;
                                    isPreview = false;
                                }
                                break;
                            }
                        }
                    } catch(e) {}
                }
                
                if (isPreview) {
                    failedList.push({ request: line, reason: "Solo disponible como Preview (30s) de Apple. Se añadió igual." });
                }
                
                targetPlaylist.tracks.push({
                    id: itrack.trackId.toString(),
                    name: itrack.trackName,
                    title: itrack.trackName,
                    primaryArtists: itrack.artistName,
                    primaryArtistsId: (itrack.artistId || '').toString(),
                    image: [ { quality: '500x500', url: (itrack.artworkUrl100 || '').replace('100x100', '500x500') } ],
                    downloadUrl: cacheObj,
                    previewUrl: itrack.previewUrl || '',
                    playCount: 0,
                    album: { name: itrack.collectionName || '', id: itrack.collectionId || '' },
                    isPreview: isPreview
                });
                
                savePlaylists(); // Live-save
                
                // Live UI update if currently viewing this specific playlist
                if (currentViewedPlaylist && currentViewedPlaylist.id === targetPlaylist.id) {
                    updatePlaylistInfoDisplay(targetPlaylist);
                    renderPlaylistSongs(targetPlaylist.tracks);
                } else if (playlistsView.style.display === 'flex') {
                    // Update generic library view thumbs live
                    renderPlaylists();
                }
            }
        } catch (globalError) {
            failedList.push({ request: line, reason: "Fallo crítico en API de escáner." });
        }
        
        processed++;
        bText.textContent = `Procesando ${processed} de ${lines.length} canciones`;
        bBar.style.width = `${(processed / lines.length) * 100}%`;
        
        // Permanent Throttle: Honor Apple's global API quotas by delaying precisely 1200ms between lines
        await new Promise(resolve => setTimeout(resolve, 1200));
    }
    
    // Finished Cleanup
    banner.style.display = 'none';
    if (createPlaylistDropdown) createPlaylistDropdown.style.display = 'none';
    showToast(`¡Playlist compilada exitosamente!`, 'fa-check');
    
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
                No tienes playlists aún.
            </div>
        `;
        return;
    }
    
    modalPlaylistList.innerHTML = '';
    playlists.forEach(playlist => {
        const item = document.createElement('div');
        item.className = 'modal-playlist-item';
        const trackExists = playlist.tracks.find(t => t.id === trackToAdd.id);
        
        item.innerHTML = `
            <i class="fa-solid ${trackExists ? 'fa-check' : 'fa-list'}"></i>
            <span style="flex:1;">${playlist.name}</span>
            <span style="color:var(--text-secondary); font-size:12px;">${playlist.tracks.length}</span>
        `;
        
        if (!trackExists) {
            item.addEventListener('click', () => {
                playlist.tracks.push(trackToAdd);
                savePlaylists();
                closeAddModal();
                showToast(`Canción añadida a ${playlist.name}`);
            });
        }
        modalPlaylistList.appendChild(item);
    });
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
                <p>Buscando canciones completas...</p>
            </div>
        `;
    } else {
        // Append bottom loader
        const loader = document.createElement('div');
        loader.className = 'bottom-loader';
        loader.id = 'bottomLoader';
        loader.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Cargando más...';
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

        // 1. Pristine Master Fetch from Apple iTunes
        const offset = (page - 1) * 30;
        const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=30&offset=${offset}`;
        const itunesRes = await fetch(itunesUrl);
        const itunesData = await itunesRes.json();
        const itunesTracks = itunesData.results || [];

        if (itunesTracks.length === 0) {
            if (page === 1) throw new Error("No se encontraron resultados en iTunes.");
            else {
                hasMoreResults = false;
                isFetching = false;
                const oldLoader = document.getElementById('bottomLoader');
                if (oldLoader) oldLoader.remove();
                return;
            }
        }

        // 2. Background JioSaavn Fetch for Stream Resolution
        let jioTracks = [];
        try {
            const jioUrl = `https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${encodeURIComponent(query)}&page=${page}&limit=40`;
            const jioRes = await fetch(jioUrl);
            if (jioRes.ok) {
                const jd = await jioRes.json();
                if (jd.data && jd.data.results) jioTracks = jd.data.results;
                else if (jd.results) jioTracks = jd.results;
            }
        } catch(e) {}

        // 3. Perfect Formatting & Stream Cross-Referencing
        let newTracks = itunesTracks.map(itrack => {
            const cleanArtist = (itrack.artistName || '').split(',')[0].trim();
            const appleName = itrack.trackName || '';
            const safeAppleName = appleName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, '');
            
            // Score all JioSaavn tracks against this specific Apple metadata
            let bestMatch = null;
            let bestScore = -Infinity;
            
            for (let jt of jioTracks) {
                const jtName = (jt.name || jt.title || '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, '');
                if (jtName.includes(safeAppleName) || safeAppleName.includes(jtName)) {
                    const score = getTrackScore(jt.name || jt.title, jt.primaryArtists || jt.singers, cleanArtist, appleName, jt.playCount);
                    if (score > bestScore) {
                        bestScore = score;
                        bestMatch = jt;
                    }
                }
            }

            return {
                id: itrack.trackId.toString(),
                name: itrack.trackName,
                title: itrack.trackName,
                primaryArtists: itrack.artistName,
                primaryArtistsId: (itrack.artistId || '').toString(),
                image: [ { quality: '500x500', url: (itrack.artworkUrl100 || '').replace('100x100', '500x500') } ],
                downloadUrl: (bestMatch && bestMatch.downloadUrl) ? bestMatch.downloadUrl : [], // If missed -> Empty array -> triggers Unavailable Tag
                previewUrl: itrack.previewUrl || '',
                playCount: 0,
                album: { name: itrack.collectionName || '', id: itrack.collectionId || '' }
            };
        });

        if (page === 1) {
            searchResults.innerHTML = '';
            if (artistPromise) {
                try {
                    const smartData = await artistPromise;
                    if (smartData && smartData.artists && smartData.artists.length > 0) {
                        renderArtistsScroll(smartData.artists);
                    }
                } catch(e) {}
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
    } catch (error) {
        console.error("API Error: ", error);
        isFetching = false;
        if (page === 1) {
            searchResults.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <p>Error buscando en los servidores. Inténtalo de nuevo.</p>
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

        const artistName = decodeHTML(track.primaryArtists || track.singers || "Artista Desconocido");
        const trackName = decodeHTML(track.name || track.title);
        
        const tagHtml = track.isPreview ? `<span class="preview-tag" style="background: rgba(255,0,0,0.2); color: #ff6b6b; padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-left: 8px; vertical-align: middle; white-space: nowrap;">Solo Preview</span>` : '';
        
        const artistId = (track.primaryArtistsId || '').split(',')[0].trim() || (track.artistId || '').split(',')[0].trim();
        let artistHtml = `<p>${artistName}</p>`;
        if (artistId) {
            artistHtml = `<p><span class="artist-link" data-artist-id="${artistId}" style="cursor: pointer;">${artistName}</span></p>`;
        }
        
        const item = document.createElement('div');
        item.className = 'song-item';
        item.innerHTML = `
            <img src="${smallArtworkUrl}" alt="Cover" loading="lazy">
            <div class="song-info">
                <h4 style="display: flex; align-items: center;">${trackName} ${tagHtml}</h4>
                ${artistHtml}
            </div>
            <div class="song-actions">
                <button class="add-to-playlist-btn" title="Añadir a playlist"><i class="fa-solid fa-plus"></i></button>
            </div>
        `;
        
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('artist-link')) {
                e.stopPropagation();
                openArtistDetail(e.target.getAttribute('data-artist-id'));
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

searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        searchSongs(e.target.value, 1);
    }, 600);
});

searchResults.addEventListener('scroll', () => {
    if (isFetching || !hasMoreResults || currentSearchQuery === '') return;
    
    // Si llegamos a 100px cerca del final, carga la siguiente página
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
                    image: [ { quality: '500x500', url: (s.artworkUrl100 || '').replace('100x100', '500x500') } ],
                    followerCount: '0',
                    score: 0
                });
            }
            artistMap.get(s.artistId).score += 1;
        });
        
        topArtists = Array.from(artistMap.values()).sort((a,b) => b.score - a.score);
        
        const qLower = query.toLowerCase().replace(/[^a-z0-9]/g, '');
        topArtists.sort((a,b) => {
            const aExact = a.name.toLowerCase().replace(/[^a-z0-9]/g, '') === qLower ? 1 : 0;
            const bExact = b.name.toLowerCase().replace(/[^a-z0-9]/g, '') === qLower ? 1 : 0;
            return bExact - aExact;
        });
        
        if (topArtists.length > 0) {
            // Background fetch listeners globally from JioSaavn
            fetch(`https://jiosaavn-api-privatecvc2.vercel.app/search/artists?query=${encodeURIComponent(topArtists[0].name)}&limit=5`)
                .then(r => { if(r.ok) return r.json(); else throw new Error(); })
                .then(d => {
                     const hits = d.data && d.data.results ? d.data.results : (d.results ? d.results : []);
                     const match = hits.find(h => (h.title || '').toLowerCase() === topArtists[0].name.toLowerCase() || (h.name || '').toLowerCase() === topArtists[0].name.toLowerCase());
                     if (match && match.followerCount) {
                         topArtists[0].followerCount = match.followerCount;
                     }
                }).catch(()=>{});
        }
    } catch(e) { console.warn("iTunes Artist Extract Failed", e.message); }
    
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
            ? (artistData.image[artistData.image.length-1].link || artistData.image[artistData.image.length-1].url) 
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

async function openArtistDetail(artistId) {
    switchView('artistDetail');
    artistSongsContainer.innerHTML = '<div class="bottom-loader" style="padding: 20px; text-align: center; color: var(--text-secondary);"><i class="fa-solid fa-circle-notch fa-spin"></i> Cargando artista desde Apple...</div>';
    
    artistHeroImage.src = '';
    detailArtistTitleHero.textContent = '';
    detailArtistInfo.textContent = 'Calculando oyentes...';
    stickyArtistTitle.textContent = '';
    stickyArtistTitle.style.opacity = '0';
    stickyArtistPlayBtn.style.opacity = '0';
    stickyArtistPlayBtn.style.pointerEvents = 'none';
    stickyArtistPlayBtn.style.transform = 'translateY(10px)';
    
    try {
        const u = `https://itunes.apple.com/lookup?id=${artistId}&entity=song&limit=30`;
        const res = await fetch(u);
        const data = await res.json();
        
        if (!data.results || data.results.length === 0) throw new Error("Artista no encontrado en iTunes.");
        
        const artistInfo = data.results[0];
        const songsData = data.results.slice(1);
        const aName = decodeHTML(artistInfo.artistName || "Artista");
        
        detailArtistTitleHero.textContent = aName;
        stickyArtistTitle.textContent = aName;
        
        // Grab artwork from best hit
        let imgUrl = 'https://via.placeholder.com/500?text=Artist';
        if (songsData.length > 0 && songsData[0].artworkUrl100) {
             imgUrl = songsData[0].artworkUrl100.replace('100x100', '1000x1000');
        }
        artistHeroImage.src = imgUrl;
        
        // Asynchronously fetch JioSaavn stat listeners and background cross-reference array for Top Tracks
        let jioTracks = [];
        try {
             fetch(`https://jiosaavn-api-privatecvc2.vercel.app/search/artists?query=${encodeURIComponent(aName)}&limit=3`)
             .then(r => r.json())
             .then(d => {
                 const hits = d.data && d.data.results ? d.data.results : (d.results ? d.results : []);
                 const match = hits.find(h => (h.title || '').toLowerCase() === aName.toLowerCase() || (h.name || '').toLowerCase() === aName.toLowerCase());
                 if (match && match.followerCount) {
                     detailArtistInfo.textContent = `${Number(match.followerCount).toLocaleString()} oyentes mensuales`;
                 } else {
                     detailArtistInfo.textContent = `Artista Oficial (Apple Music)`;
                 }
             }).catch(()=>{detailArtistInfo.textContent = `Artista Oficial (Apple Music)`;});
             
             const jioSongsRes = await fetch(`https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${encodeURIComponent(aName)}&limit=50`);
             const jioSongsData = await jioSongsRes.json();
             if (jioSongsData.data && jioSongsData.data.results) jioTracks = jioSongsData.data.results;
             else if (jioSongsData.results) jioTracks = jioSongsData.results;
        } catch(e) {}
             
        currentArtistQueue = songsData.map(itrack => {
             const safeName = (itrack.trackName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
             const jMatch = jioTracks.find(jt => {
                 const jtName = (jt.name || jt.title || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                 return jtName.includes(safeName) || safeName.includes(jtName);
             });
             
             return {
                 id: itrack.trackId.toString(),
                 name: itrack.trackName,
                 title: itrack.trackName,
                 primaryArtists: itrack.artistName,
                 primaryArtistsId: (itrack.artistId || '').toString(),
                 image: [ { quality: '500x500', url: (itrack.artworkUrl100 || '').replace('100x100', '500x500') } ],
                 downloadUrl: (jMatch && jMatch.downloadUrl) ? jMatch.downloadUrl : [],
                 previewUrl: itrack.previewUrl || '',
                 playCount: 0,
                 album: { name: itrack.collectionName || '', id: itrack.collectionId || '' }
             };
        });
        
        renderArtistSongs();
        
        currentArtistIdForAlbums = artistId;
        currentArtistAlbumPage = 1;
        hasMoreArtistAlbums = true;
        isFetchingArtistAlbums = false;
        artistAlbumsContainer.innerHTML = '';
        
        fetchMoreArtistAlbums(artistId, 1);
        updatePlayState(!audioPlayer.paused);
        
    } catch(e) {
        artistSongsContainer.innerHTML = '<p style="padding: 20px; color: var(--text-secondary);">Error cargando información del artista desde Apple.</p>';
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
    loader.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Cargando álbumes oficiales...';
    artistAlbumsContainer.appendChild(loader);

    let albumsData = [];
    try {
        const u = `https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=50`;
        const res = await fetch(u);
        const val = await res.json();
        if (val.results && val.results.length > 1) {
            albumsData = val.results.slice(1);
        }
    } catch(e) {}
    
    const oldLoader = document.getElementById('artistAlbumLoader');
    if (oldLoader) oldLoader.remove();
    
    if (albumsData.length === 0) {
        hasMoreArtistAlbums = false;
        artistAlbumsContainer.innerHTML = '<p style="padding: 20px; color: var(--text-secondary);">No hay álbumes oficiales disponibles.</p>';
    } else {
        albumsData.forEach(album => {
            const card = document.createElement('div');
            card.className = 'card';
            
            const coverUrl = album.artworkUrl100 ? album.artworkUrl100.replace('100x100', '500x500') : 'https://via.placeholder.com/150';
            const releaseDate = album.releaseDate ? album.releaseDate.substring(0, 4) : '';
            
            card.innerHTML = `
                <img src="${coverUrl}" loading="lazy" class="card-cover">
                <h4>${decodeHTML(album.collectionName || 'Álbum Desconocido')}</h4>
                <p>${releaseDate}</p>
            `;
            // NOTE: We don't have openAlbumDetail refactored to Apple IDs yet, but we will pass the Apple collectionId!
            card.addEventListener('click', () => openAlbumDetail(album.collectionId.toString()));
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
        
        const artistName = decodeHTML(track.primaryArtists || track.singers || "Artista Desconocido");
        const trackName = decodeHTML(track.name || track.title);
        
        const artistId = (track.primaryArtistsId || '').split(',')[0].trim() || (track.artistId || '').split(',')[0].trim();
        let artistHtml = `<p>${artistName}</p>`;
        if (artistId) {
            artistHtml = `<p><span class="artist-link" data-artist-id="${artistId}" style="cursor: pointer;">${artistName}</span></p>`;
        }
        
        const item = document.createElement('div');
        item.className = 'song-item';
        item.innerHTML = `
            <img src="${smallArtworkUrl}" alt="Cover" loading="lazy">
            <div class="song-info">
                <h4>${trackName}</h4>
                ${artistHtml}
            </div>
            <div class="song-actions">
                <button class="add-to-playlist-btn" title="Añadir a playlist"><i class="fa-solid fa-plus"></i></button>
            </div>
        `;
        
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('artist-link')) {
                e.stopPropagation();
                openArtistDetail(e.target.getAttribute('data-artist-id'));
                return;
            }
            if (!e.target.closest('.song-actions')) {
                activeContextId = 'artist'; 
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
    
    if (activeContextId === 'artist') {
        togglePlay();
    } else {
        let startIndex = 0;
        if (isShuffleOn) { 
            startIndex = Math.floor(Math.random() * currentArtistQueue.length);
        }
        activeContextId = 'artist';
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

async function openAlbumDetail(albumId) {
    switchView('albumDetail');
    albumSongsContainer.innerHTML = '<div class="bottom-loader" style="padding: 20px; text-align: center; color: var(--text-secondary);"><i class="fa-solid fa-circle-notch fa-spin"></i> Cargando álbum...</div>';
    
    albumHeroImage.src = '';
    detailAlbumTitleHero.textContent = '';
    detailAlbumInfo.textContent = '';
    stickyAlbumTitle.textContent = '';
    saveAlbumBtn.style.color = 'var(--text-secondary)';
    
    const urls = [
        `https://jiosaavn-api-privatecvc2.vercel.app/albums?id=${albumId}`,
        `https://saavn.dev/api/albums?id=${albumId}`,
        `https://saavn.me/albums?id=${albumId}`
    ];
    
    let albumData = null;
    for (let u of urls) {
         try {
             const res = await fetch(u);
             if(res.ok) {
                 const d = await res.json();
                 if(d.data && d.data.songs) { albumData = d.data; break; }
                 else if (d.songs) { albumData = d; break; }
             }
         } catch(e) {}
    }
    
    if(!albumData) {
        albumSongsContainer.innerHTML = '<p style="padding: 20px; color: var(--text-secondary);">Error cargando información del álbum.</p>';
        return;
    }
    
    currentViewedAlbumMeta = albumData;
    
    const coverArr = albumData.image || [];
    const imgUrl = coverArr.length > 0 ? (coverArr[coverArr.length-1].link || coverArr[coverArr.length-1].url) : 'https://via.placeholder.com/500?text=Album';
    albumHeroImage.src = imgUrl;
    
    const aName = decodeHTML(albumData.name || albumData.title);
    detailAlbumTitleHero.textContent = aName;
    stickyAlbumTitle.textContent = aName;
    
    stickyAlbumTitle.style.opacity = '0';
    stickyAlbumPlayBtn.style.opacity = '0';
    stickyAlbumPlayBtn.style.pointerEvents = 'none';
    stickyAlbumPlayBtn.style.transform = 'translateY(10px)';
    
    const count = albumData.songCount || (albumData.songs && albumData.songs.length) || 0;
    const year = albumData.year ? ` • ${albumData.year}` : '';
    detailAlbumInfo.textContent = `${count} cancion${count !== 1 ? 'es' : ''}${year}`;
    
    currentAlbumQueue = albumData.songs || [];
    renderAlbumSongs();
    
    updatePlayState(!audioPlayer.paused);
}

function renderAlbumSongs() {
    albumSongsContainer.innerHTML = '';
    if (currentAlbumQueue.length === 0) {
        albumSongsContainer.innerHTML = '<p style="padding: 20px; color: var(--text-secondary);">El álbum no contiene canciones.</p>';
        return;
    }
    
    currentAlbumQueue.forEach((track, index) => {
        const artistName = decodeHTML(track.primaryArtists || track.singers || "Artista Desconocido");
        const trackName = decodeHTML(track.name || track.title);
        
        const artistId = (track.primaryArtistsId || '').split(',')[0].trim() || (track.artistId || '').split(',')[0].trim();
        let artistHtml = `<p>${artistName}</p>`;
        if (artistId) {
            artistHtml = `<p><span class="artist-link" data-artist-id="${artistId}" style="cursor: pointer;">${artistName}</span></p>`;
        }
        
        const item = document.createElement('div');
        item.className = 'song-item';
        item.innerHTML = `
            <div class="song-info" style="margin-left: 10px;">
                <h4 style="font-size: 16px;">${index + 1}. ${trackName}</h4>
                ${artistHtml}
            </div>
            <div class="song-actions">
                <button class="add-to-playlist-btn" title="Añadir a playlist"><i class="fa-solid fa-plus"></i></button>
            </div>
        `;
        
        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('artist-link')) {
                e.stopPropagation();
                openArtistDetail(e.target.getAttribute('data-artist-id'));
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
        showToast("El álbum ya está en tu biblioteca", "fa-info-circle");
        return;
    }
    
    const newPlaylist = {
        id: generateId(),
        name: decodeHTML(currentViewedAlbumMeta.name || currentViewedAlbumMeta.title),
        tracks: currentAlbumQueue.map(t => ({...t})),
        shuffleMode: false,
        isAlbum: true,
        albumCover: currentViewedAlbumMeta.image
    };
    
    playlists.push(newPlaylist);
    savePlaylists();
    
    saveAlbumBtn.style.color = 'var(--accent-color)';
    showToast("Álbum guardado en tu biblioteca", "fa-check-circle");
});

// --- Audio Playback ---
async function playTrack(index, queueArray = null, autoPlay = true, resumeTime = 0) {
    if (queueArray) {
        currentQueue = queueArray;
    }
    
    if (index < 0 || index >= currentQueue.length) return;
    
    currentIndex = index;
    const track = currentQueue[currentIndex];
    
    const artworkObj = track.image.find(img => img.quality && img.quality.includes('500')) || track.image[track.image.length - 1];
    const highQualityArtwork = artworkObj ? (artworkObj.url || artworkObj.link) : 'https://via.placeholder.com/500';
    
    const smallArtworkObj = track.image.find(img => img.quality && img.quality.includes('150')) || track.image[0];
    const smallArtworkUrl = smallArtworkObj ? (smallArtworkObj.url || smallArtworkObj.link) : highQualityArtwork;
    
    const artistName = decodeHTML(track.primaryArtists || track.singers || "Artista Desconocido");
    const trackName = decodeHTML(track.name || track.title);
    
    const artistId = (track.primaryArtistsId || '').split(',')[0].trim() || (track.artistId || '').split(',')[0].trim();
    
    if (window.innerWidth < 768) {
        miniPlayer.style.display = 'flex';
    }
    
    miniCover.src = smallArtworkUrl;
    miniTitle.textContent = trackName;
    if (artistId) {
        miniArtist.innerHTML = `<span class="artist-link" data-artist-id="${artistId}" style="cursor: pointer; pointer-events: auto;">${artistName}</span>`;
    } else {
        miniArtist.textContent = artistName;
    }
    
    fullCover.src = highQualityArtwork;
    fullTitle.textContent = trackName;
    if (artistId) {
        fullArtist.innerHTML = `<span class="artist-link" data-artist-id="${artistId}" style="cursor: pointer; pointer-events: auto;">${artistName}</span>`;
    } else {
        fullArtist.textContent = artistName;
    }
    
    // Resolve Audio URL Dynamic Fallback
    let audioUrl = '';
    if (track.downloadUrl && track.downloadUrl.length > 0) {
        const aObj = track.downloadUrl.find(url => url.quality && url.quality.includes('320')) || track.downloadUrl[track.downloadUrl.length - 1];
        audioUrl = aObj ? (aObj.url || aObj.link) : '';
    }
    
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
                } catch(e) {}
            }
            
            if (hits && hits.length > 0) {
                // Heuristic audio selection to avoid playing unrelated proxy content
                const cleanA = artistName.split(',')[0].trim();
                hits.sort((a,b) => getTrackScore(b.name || b.title, b.primaryArtists || b.singers, cleanA, trackName, b.playCount) - getTrackScore(a.name || a.title, a.primaryArtists || a.singers, cleanA, trackName, a.playCount));
                
                const aObj = hits[0].downloadUrl && Array.isArray(hits[0].downloadUrl) ? (hits[0].downloadUrl.find(url => url.quality && url.quality.includes('320')) || hits[0].downloadUrl[hits[0].downloadUrl.length - 1]) : null;
                if (aObj) {
                    audioUrl = aObj.url || aObj.link;
                    track.downloadUrl = hits[0].downloadUrl; // Cache to prevent re-fetch
                }
            }
        } catch(e) { console.warn("Headless Audio Extraction Failed"); }
    }
    
    if (!audioUrl) {
        if (track.previewUrl) {
            audioUrl = track.previewUrl;
            showToast("Reproduciendo original de prueba (30s)", "fa-info-circle");
            track.isPreview = true;
            
            document.querySelectorAll('.song-item').forEach(item => {
                const h4 = item.querySelector('h4');
                const p = item.querySelector('p');
                if (h4 && p && h4.textContent.trim().includes(trackName)) {
                    if (!h4.querySelector('.preview-tag')) {
                        h4.innerHTML += ` <span class="preview-tag" style="background: rgba(255,0,0,0.2); color: #ff6b6b; padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-left: 8px; vertical-align: middle; white-space: nowrap;">Solo Preview</span>`;
                    }
                }
            });
            
        } else {
            showToast("Audio completo no disponible. Saltando...", "fa-triangle-exclamation");
            setTimeout(playNext, 1500);
            return;
        }
    }
    
    audioPlayer.src = audioUrl;
    
    if (autoPlay) {
        if (resumeTime > 0) audioPlayer.currentTime = resumeTime;
        audioPlayer.play().then(() => {
            updatePlayState(true);
            setupMediaSession(trackName, artistName, (track.album && track.album.name) || 'Sencillo', smallArtworkUrl, highQualityArtwork);
        }).catch(e => {
            console.error("Playback error", e);
            updatePlayState(false);
        });
    } else {
        updatePlayState(false);
        setupMediaSession(trackName, artistName, (track.album && track.album.name) || 'Sencillo', smallArtworkUrl, highQualityArtwork);
        if (resumeTime > 0) {
            audioPlayer.addEventListener('loadedmetadata', () => {
                audioPlayer.currentTime = resumeTime;
                currentTimeEl.textContent = formatTime(resumeTime);
            }, { once: true });
        }
    }
}

function updatePlayState(isPlaying) {
    if (isPlaying) {
        miniPlayPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause" style="margin-left: -4px;"></i>'; 
        fullCover.classList.remove('paused');
    } else {
        miniPlayPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        fullCover.classList.add('paused');
    }
    
    // Sincronizar botones de la playlist actual si estamos en una (tanto el grande como el fijo)
    if (playAllPlaylistBtn && stickyPlayBtn && currentViewedPlaylist) {
        if (isPlaying && activeContextId === currentViewedPlaylist.id) {
            playAllPlaylistBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            stickyPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            playAllPlaylistBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left: 4px;"></i>';
            stickyPlayBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left: 2px;"></i>';
        }
    }
    
    // Sincronizar botones de artista si estamos en uno
    if (playAllArtistBtn && stickyArtistPlayBtn) {
        if (isPlaying && activeContextId === 'artist') {
            playAllArtistBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            stickyArtistPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            playAllArtistBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left: 4px;"></i>';
            stickyArtistPlayBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left: 2px;"></i>';
        }
    }
    
    // Sincronizar botones de album
    if (playAllAlbumBtn && stickyAlbumPlayBtn && currentViewedAlbumMeta) {
        const ctx = 'album_' + currentViewedAlbumMeta.id;
        if (isPlaying && activeContextId === ctx) {
            playAllAlbumBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            stickyAlbumPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            playAllAlbumBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left: 4px;"></i>';
            stickyAlbumPlayBtn.innerHTML = '<i class="fa-solid fa-play" style="margin-left: 2px;"></i>';
        }
    }
}

function togglePlay() {
    if (!audioPlayer.src || currentIndex === -1) return;
    
    if (audioPlayer.paused) {
        audioPlayer.play();
        updatePlayState(true);
    } else {
        audioPlayer.pause();
        updatePlayState(false);
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

let lastSaveTime = 0;
audioPlayer.addEventListener('timeupdate', () => {
    const current = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    if (duration) {
        const percent = (current / duration) * 100;
        progressBar.style.width = `${percent}%`;
        miniProgress.style.width = `${percent}%`;
        currentTimeEl.textContent = formatTime(current);
    }
    
    if (Math.abs(current - lastSaveTime) > 5) {
        savePlaybackState();
        lastSaveTime = current;
    }
    updateMediaSessionPosition();
});

audioPlayer.addEventListener('play', () => {
    updateMediaSessionPosition();
});

audioPlayer.addEventListener('pause', () => {
    updateMediaSessionPosition();
});

audioPlayer.addEventListener('seeked', () => {
    updateMediaSessionPosition();
});

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

progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioPlayer.currentTime = percent * audioPlayer.duration;
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
            title: title,
            artist: artist,
            album: album,
            artwork: [
                { src: smallArtwork, sizes: '150x150', type: 'image/jpeg' },
                { src: largeArtwork, sizes: '500x500', type: 'image/jpeg' }
            ]
        });

        navigator.mediaSession.setActionHandler('play', () => {
            audioPlayer.play();
            updatePlayState(true);
        });
        
        navigator.mediaSession.setActionHandler('pause', () => {
            audioPlayer.pause();
            updatePlayState(false);
        });
        
        navigator.mediaSession.setActionHandler('previoustrack', playPrev);
        navigator.mediaSession.setActionHandler('nexttrack', playNext);

        try {
            navigator.mediaSession.setActionHandler('seekto', (details) => {
                if (details.seekTime !== undefined && details.seekTime !== null) {
                    audioPlayer.currentTime = details.seekTime;
                    updateMediaSessionPosition();
                }
            });
            
            navigator.mediaSession.setActionHandler('seekbackward', (details) => {
                const skipTime = details.seekOffset || 10;
                audioPlayer.currentTime = Math.max(audioPlayer.currentTime - skipTime, 0);
                updateMediaSessionPosition();
            });

            navigator.mediaSession.setActionHandler('seekforward', (details) => {
                const skipTime = details.seekOffset || 10;
                audioPlayer.currentTime = Math.min(audioPlayer.currentTime + skipTime, audioPlayer.duration);
                updateMediaSessionPosition();
            });
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
               if(response.ok) break;
            } catch(e) {}
        }
        if(!response || !response.ok) return;
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
            const artistName = decodeHTML(track.primaryArtists || track.singers || "Artista Desconocido");
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
    const mixQueries = ["reggaeton", "trap latino", "pop en espanol", "exitos españa"];
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
        } catch(e) {
            console.warn("Failed to load playback state", e);
        }
    }
}

[miniArtist, fullArtist].forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target.classList.contains('artist-link')) {
            e.stopPropagation();
            const aid = e.target.getAttribute('data-artist-id');
            if (aid) {
                if (fullPlayer && fullPlayer.classList.contains('active')) {
                    fullPlayer.classList.remove('active');
                }
                openArtistDetail(aid);
            }
        }
    });
});

// Initial View Load
switchView('home');
loadPlaybackState();
