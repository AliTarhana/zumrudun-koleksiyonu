/* =========================
   CONFIG / INITIAL DATA
   ========================= */
const ADMIN_PASSWORD = '230215Zz';
const PLACEHOLDER_SVG = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1E293B"/>
                <stop offset="100%" stop-color="#0F172A"/>
            </linearGradient>
            <linearGradient id="gem" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#7C3AED"/>
                <stop offset="50%" stop-color="#8B5CF6"/>
                <stop offset="100%" stop-color="#A78BFA"/>
            </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#bg)"/>
        <path d="M300,150 L350,200 L300,250 L250,200 Z" fill="url(#gem)" opacity="0.7"/>
        <text x="300" y="320" text-anchor="middle" font-family="Arial" font-size="20" fill="#94A3B8">Resim Yüklenemedi</text>
    </svg>`
);

const initialGems = [
    { 
        id: 1, 
        name: "Zümrüt", 
        properties: "Özellikleri: Berilyum mineralinin yeşil bir türü olan Zümrüt, en değerli taşlardan biridir. Rengi, yapısındaki krom ve/veya vanadyum elementlerinden gelir. Nadiren kusursuz çıkar, içindeki doğal çatlaklar (jardin) orijinallik işareti kabul edilir.\n\nİnsanlar Üzerindeki Etkileri: Kalp çakrası ile ilişkilendirilir. Sadakati, sevgiyi ve uyumu artırdığına; zihinsel berraklık, hafıza güçlendirme ve duygusal denge sağladığına inanılır. Negatif enerjileri uzaklaştırarak iç huzur getirdiği düşünülür.", 
        images: ["https://github.com/AliTarhana/zumrudun-koleksiyonu/blob/main/images/Z%C3%BCmr%C3%BCt.jpg?raw=true"]
    },
    { 
        id: 2, 
        name: "Ametist", 
        properties: "Özellikleri: Mor, leylak ve eflatun tonlarındaki kuvars türüdür. Rengi, demir elementinin yapıda bulunması ve doğal radyasyona maruz kalmasından kaynaklanır. Oldukça yaygın bulunmasına rağmen koyu mor ve berrak olanları değerlidir.\n\nİnsanlar Üzerindeki Etkileri: Alın ve taç çakraları ile ilişkilendirilir. Sakinleştirici, stressavar, meditasyona yardımcı bir taş olarak bilinir. Zihni dinginleştirdiği, sezgileri güçlendirdiği, kötü düşüncelerden ve bağımlılıklardan koruduğuna inanılır.", 
        images: ["https://github.com/AliTarhana/zumrudun-koleksiyonu/blob/main/images/Amatista_Laye_2.jpg?raw=true"]
    },
    { 
        id: 3, 
        name: "Safir", 
        properties: "Özellikleri: Korindon mineralinin, kırmızı dışındaki (ki o yakut olur) tüm renklerdeki değerli taş çeşididir. En klasik rengi mavidir (kobalt veya titanyum ile), ancak pembe, sarı, yeşil, beyaz (renksiz) gibi birçok renkte bulunur. Sertliği elmastan sonra gelir.\n\nİnsanlar Üzerindeki Etkileri: Alın ve boğaz çakrası ile ilişkilendirilir. Odaklanmayı, disiplini, netliği ve iç huzuru artırdığına; gerçeği görmeye ve ilham vermeye yardımcı olduğuna inanılır. Mavi safirlerin sakinleştirici, koruyucu ve zihinsel berraklık getirdiği düşünülür.", 
        images: ["https://github.com/AliTarhana/zumrudun-koleksiyonu/blob/main/images/sapphire_2048x-1-1-1.png?raw=true"]
    },
    { 
        id: 4, 
        name: "Opal", 
        properties: "Özellikleri: Su içeren amorf bir silika mineralidir. İç yapısındaki mikro küreciklerin ışığı kırmasıyla oluşan renk oyunu (opalesans) ile ünlüdür. Şeffaf, yarı şeffaf veya opak olabilir. Değerli Opal ve Ateş Opali en bilinen türleridir.\n\nİnsanlar Üzerindeki Etkileri: Tüm çakraları dengeleyebildiği söylenir. Yaratıcılık, ilham ve hayal gücünü tetiklediğine; duygusal ifadeyi kolaylaştırdığına inanılır. Kişinin içindeki renkleri (yeteklerini) ortaya çıkardığı düşünülür.", 
        images: ["https://github.com/AliTarhana/zumrudun-koleksiyonu/blob/main/images/opal-tasi-nedir.webp?raw=true"]
    },
    { 
        id: 5, 
        name: "Ametrin", 
        properties: "Özellikleri: Doğal olarak bir arada bulunan Ametist ve Sitrin minerallerinin melezidir. Taşın içinde mor (ametist) ve sarı/altın rengi (sitrin) bölgeler yan yana veya geçişli olarak bulunur. Bu renkler, demir elementinin farklı oksidasyon durumlarından kaynaklanır.\n\nİnsanlar Üzerindeki Etkileri: Hem üst (ametist) hem de alt (sitrin) çakraları birleştirdiğine inanılır. Ametist'in spiritüel ve sakinleştirici etkisi ile Sitrin'in enerji veren ve bolluk çeken etkisini bir arada sunduğu düşünülür. Karar verme ve uyum sağlama süreçlerine yardımcı olduğu söylenir.", 
        images: ["https://github.com/AliTarhana/zumrudun-koleksiyonu/blob/main/images/Ametrin-Tasi-Ozellikleri-ve-Faydalari-960x640.jpg?raw=true"]
    },
    { 
        id: 6, 
        name: "Pembe Kuvars", 
        properties: "Özellikleri: En yaygın ve bilinen pembe taşlardan biridir. Rengi, yapısındaki eser miktardaki titanyum, demir veya manganez elementinden gelir. Genellikle büyük, opak veya yarı şeffaf kütleler halinde bulunur. Şeffaf ve parlak kesimlik kristalleri nadirdir.\n\nİnsanlar Üzerindeki Etkileri: Kalp çakrasının ana taşıdır. Koşulsuz sevgi, şefkat, duygusal iyileşme ve öz-sevgi ile güçlü bir şekilde bağlantılıdır. Kalpteki kırgınlıkları ve travmaları iyileştirdiği, ilişkilerde uyum ve bağlılık getirdiğine inanılır.", 
        images: ["https://github.com/AliTarhana/zumrudun-koleksiyonu/blob/main/images/Pembe%20Kuvars.webp?raw=true"]
    },
    { 
        id: 7, 
        name: "Turkuaz", 
        properties: "Özellikleri: Bakır ve alüminyumun hidratlı fosfatı olan opak bir mineraldir. Mavi ve yeşilimsi mavi renkleri bakırdan, yeşil tonları ise demirden kaynaklanır. Gözenekli yapısı nedeniyle zamanla renk değiştirebilir (solma veya yeşilleşme). Kültürel olarak çok önemli bir taştır.\n\nİnsanlar Üzerindeki Etkileri: Boğaz çakrası ile ilişkilendirilir. İletişimi, samimiyeti ve ifade özgürlüğünü güçlendirdiğine inanılır. Güçlü bir koruyucu ve şans taşı olduğu, olumsuz enerjileri emdiği ve sahibi için erken uyarı sinyali verdiği (renk değiştirerek) düşünülür.", 
        images: ["https://github.com/AliTarhana/zumrudun-koleksiyonu/blob/main/images/Turkuaz.jpg?raw=true"]
    },
    { 
        id: 8, 
        name: "Akik", 
        properties: "Özellikleri: Yarı şeffaf ila opak, ince katmanlı (bantlı) yapıya sahip bir kalsedon (mikro-kristalli kuvars) türüdür. Doğada en yaygın bulunan taşlardan biridir ve renk paleti çok geniştir (kahverengi, beyaz, gri, mavi, kırmızı, yeşil, sarı). Bantları, yosunumsu desenleri veya göz şeklindeki halkaları ile ünlüdür.\n\nİnsanlar Üzerindeki Etkileri: Kök çakra başta olmak üzere, rengine göre farklı çakralarla ilişkilendirilir. Güçlü bir topraklayıcı ve dengeleyici taş olduğuna inanılır. İç huzur, güven, istikrar ve cesaret verdiği; negatif enerjileri emdiği ve kişiyi koruduğu düşünülür.", 
        images: ["https://github.com/AliTarhana/zumrudun-koleksiyonu/blob/main/images/Akik.webp?raw=true"]
    },
    { 
        id: 9, 
        name: "Elmas", 
        properties: "Özellikleri: Bilinen en sert doğal mineraldir. Saf karbondan oluşur ve mükemmel kristal yapısı ona eşsiz sertlik ve parlaklık (ışık kırılımı) kazandırır. Renksiz olabildiği gibi, eser elementlere bağlı olarak sarı, kahverengi, mavi, pembe vb. çeşitli renklerde de bulunabilir.\n\nİnsanlar Üzerindeki Etkileri: Taç çakrayı temsil eder. Saflığı, berraklığı, gücü, cesareti ve ebedi aşkı simgeler. Zihni berraklaştırdığına, kararlılık ve odaklanma getirdiğine, negatif enerjileri dağıttığına ve kişinin en yüksek potansiyeline ulaşmasına yardımcı olduğuna inanılır.", 
        images: ["https://github.com/AliTarhana/zumrudun-koleksiyonu/blob/main/images/Elmas.webp?raw=true"]
    }
];

/* =========================
   STATE
   ========================= */
let gems = [];
let selectedId = null;
let isAdmin = false;
let editingId = null;
let currentPage = 'main'; // 'main' or 'admin'

/* =========================
   DOM REFERENCES
   ========================= */
// Notification
const note = document.getElementById('notification');

// Pages
const mainPage = document.getElementById('mainPage');
const adminPage = document.getElementById('adminPage');

// Main Page Elements
const statusBadge = document.getElementById('statusBadge');
const openLogin = document.getElementById('openLogin');
const logoutBtn = document.getElementById('logoutBtn');
const adminPanelBtn = document.getElementById('adminPanelBtn');
const backToMain = document.getElementById('backToMain');
const adminLogoutBtn = document.getElementById('adminLogoutBtn');

const detailName = document.getElementById('detailName');
const detailSub = document.getElementById('detailSub');
const detailProps = document.getElementById('detailProps');
const detailImage = document.getElementById('detailImage');
const detailImagePlaceholder = document.getElementById('detailImagePlaceholder');
const thumbs = document.getElementById('thumbs');
const detailActionBtns = document.getElementById('detailActionBtns');
const editBtn = document.getElementById('editBtn');
const deleteBtn = document.getElementById('deleteBtn');
const detailActions = document.getElementById('detailActions');

// Scroll buttons
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

// Admin Page Elements
const adminStatus = document.getElementById('adminStatus');
const adminFName = document.getElementById('adminFName');
const adminFProps = document.getElementById('adminFProps');
const adminFImages = document.getElementById('adminFImages');
const adminSaveBtn = document.getElementById('adminSaveBtn');
const adminCancelEdit = document.getElementById('adminCancelEdit');
const adminAddNew = document.getElementById('adminAddNew');
const adminGemsList = document.getElementById('adminGemsList');

// Login Modal Elements
const loginOverlay = document.getElementById('loginOverlay');
const loginPass = document.getElementById('loginPass');
const loginConfirm = document.getElementById('loginConfirm');
const loginCancelBtn = document.getElementById('loginCancelBtn');
const loginCancel = document.getElementById('loginCancel');
const loginError = document.getElementById('loginError');

/* ============= Helper Functions ============= */
function showNotification(msg, type = 'info', timeout = 3000) {
    note.textContent = msg;
    note.className = `notification notification-${type}`;
    note.style.display = 'flex';
    
    clearTimeout(note._timeout);
    note._timeout = setTimeout(() => {
        note.style.display = 'none';
    }, timeout);
}

function saveLocal() {
    localStorage.setItem('gems_collection', JSON.stringify(gems));
    showNotification('Veriler kaydedildi.', 'success');
}

function loadLocal() {
    try {
        const raw = localStorage.getItem('gems_collection');
        if (raw) {
            gems = JSON.parse(raw);
            if (!Array.isArray(gems) || gems.length === 0) {
                gems = JSON.parse(JSON.stringify(initialGems)); // Deep copy
                saveLocal();
            }
        } else {
            gems = JSON.parse(JSON.stringify(initialGems)); // Deep copy
            saveLocal();
        }
    } catch (e) {
        console.error('Veri yükleme hatası:', e);
        gems = JSON.parse(JSON.stringify(initialGems)); // Deep copy
    }
}

function parseImageLines(text) {
    if (!text) return [];
    const lines = text.split(/\r?\n/).map(s => s.trim()).filter(s => s);
    const filtered = lines.filter(line => {
        // GitHub raw URL'lerini kontrol et
        if (line.startsWith('https://github.com/') && line.includes('raw=true')) return true;
        if (line.startsWith('data:')) return true;
        if (/^https?:\/\//i.test(line)) return /\.(jpe?g|png|gif|svg|webp|bmp)$/i.test(line);
        return false;
    });
    return filtered;
}

function switchPage(page) {
    if (page === 'main') {
        mainPage.classList.remove('hidden');
        adminPage.classList.add('hidden');
        currentPage = 'main';
        window.location.hash = 'main';
        renderThumbs();
        if (gems.length > 0 && selectedId) {
            const g = gems.find(x => x.id === selectedId);
            renderDetail(g);
        }
    } else if (page === 'admin') {
        if (!isAdmin) {
            showNotification('Admin paneline erişmek için giriş yapmalısınız.', 'error');
            return;
        }
        mainPage.classList.add('hidden');
        adminPage.classList.remove('hidden');
        currentPage = 'admin';
        window.location.hash = 'admin';
        renderAdminGemsList();
        resetAdminForm();
    }
}

/* =========================
   RENDER FUNCTIONS
   ========================= */
function renderThumbs() {
    thumbs.innerHTML = '';
    
    if (gems.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'text-center';
        emptyMsg.innerHTML = `
            <div style="padding: 40px 20px;">
                <i class="fas fa-gem" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 20px;"></i>
                <p>Henüz taş eklenmemiş.</p>
                ${isAdmin ? '<button id="addFirstGem" class="btn btn-primary mt-20"><i class="fas fa-plus"></i> İlk Taşı Ekle</button>' : ''}
            </div>
        `;
        thumbs.appendChild(emptyMsg);
        
        const addFirstBtn = document.getElementById('addFirstGem');
        if (addFirstBtn) {
            addFirstBtn.addEventListener('click', () => {
                switchPage('admin');
                showNotification('Yeni taş eklemek için admin panelini kullanın.', 'info');
            });
        }
        return;
    }
    
    gems.forEach(g => {
        const thumb = document.createElement('div');
        thumb.className = `gem-thumb ${selectedId === g.id ? 'active' : ''}`;
        thumb.dataset.id = g.id;
        
        const img = document.createElement('img');
        img.alt = g.name;
        const src = (g.images && g.images.length > 0) ? g.images[0] : '';
        img.src = src || PLACEHOLDER_SVG;
        img.onerror = () => { 
            img.src = PLACEHOLDER_SVG;
            img.style.objectFit = 'contain';
            img.style.padding = '20px';
        };
        
        const name = document.createElement('div');
        name.className = 'gem-thumb-name';
        name.innerText = g.name;
        
        thumb.appendChild(img);
        thumb.appendChild(name);
        
        thumb.addEventListener('click', () => selectGem(g.id));
        thumbs.appendChild(thumb);
    });
}

function renderDetail(g) {
    if (!g) {
        detailName.innerText = 'Taş Seçiniz';
        detailSub.innerText = 'Koleksiyondan bir taş seçin veya admin olarak giriş yapın.';
        detailProps.innerText = 'Detaylarını görmek için koleksiyondan bir taş seçin veya admin olarak giriş yaparak yeni bir taş ekleyin.';
        detailImage.classList.add('hidden');
        detailImagePlaceholder.classList.remove('hidden');
        detailActionBtns.classList.add('hidden');
        detailActions.classList.add('hidden');
        return;
    }
    
    detailName.innerText = g.name;
    detailSub.innerText = g.properties ? g.properties.split('\n')[0].substring(0, 60) + '...' : 'Detaylar yükleniyor...';
    detailProps.innerText = g.properties || 'Bu taş için açıklama bulunmuyor.';
    
    // Show first valid image
    const imgUrl = (g.images && g.images.length > 0) ? g.images[0] : '';
    if (imgUrl) {
        detailImage.src = imgUrl;
        detailImage.onerror = () => {
            detailImage.src = PLACEHOLDER_SVG;
            detailImage.classList.remove('hidden');
            detailImagePlaceholder.classList.add('hidden');
        };
        detailImage.classList.remove('hidden');
        detailImagePlaceholder.classList.add('hidden');
    } else {
        detailImage.classList.add('hidden');
        detailImagePlaceholder.classList.remove('hidden');
    }
    
    // Admin actions visibility
    if (isAdmin) {
        detailActionBtns.classList.remove('hidden');
        detailActions.classList.remove('hidden');
    } else {
        detailActionBtns.classList.add('hidden');
        detailActions.classList.add('hidden');
    }
}

function renderAdminGemsList() {
    adminGemsList.innerHTML = '';
    
    if (gems.length === 0) {
        adminGemsList.innerHTML = '<p class="text-muted">Henüz taş eklenmemiş.</p>';
        return;
    }
    
    gems.forEach(g => {
        const item = document.createElement('div');
        item.className = 'gem-list-item';
        item.dataset.id = g.id;
        
        const imagesCount = (g.images && g.images.length) || 0;
        
        item.innerHTML = `
            <div class="gem-list-item-header">
                <div>
                    <h4 style="margin: 0;">${g.name}</h4>
                    <div class="gem-list-item-info">
                        <span class="info-badge">
                            <i class="fas fa-hashtag"></i> ${g.id}
                        </span>
                        <span class="info-badge">
                            <i class="fas fa-image"></i> ${imagesCount} resim
                        </span>
                    </div>
                </div>
                <div class="gem-list-item-actions">
                    <button class="btn btn-sm btn-secondary admin-edit-btn" data-id="${g.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger admin-delete-btn" data-id="${g.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div style="font-size: 0.9rem; color: var(--text-muted); margin-top: 8px;">
                ${g.properties ? g.properties.substring(0, 100) + (g.properties.length > 100 ? '...' : '') : 'Açıklama yok'}
            </div>
        `;
        
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = '';
        });
        
        item.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                selectGem(g.id);
                switchPage('main');
            }
        });
        
        adminGemsList.appendChild(item);
    });
    
    // Add event listeners to admin buttons
    document.querySelectorAll('.admin-edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            editGemInAdmin(id);
        });
    });
    
    document.querySelectorAll('.admin-delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            deleteGem(id, true);
        });
    });
}

/* =========================
   SELECTION / CRUD
   ========================= */
function selectGem(id) {
    selectedId = id;
    const g = gems.find(x => x.id === id);
    renderThumbs();
    renderDetail(g);
}

function resetAdminForm() {
    adminFName.value = '';
    adminFProps.value = '';
    adminFImages.value = '';
    editingId = null;
    adminSaveBtn.innerHTML = '<i class="fas fa-save"></i> Kaydet';
    adminSaveBtn.classList.remove('btn-success');
    adminSaveBtn.classList.add('btn-primary');
}

function editGemInAdmin(id) {
    const g = gems.find(x => x.id === id);
    if (!g) return;
    
    editingId = g.id;
    adminFName.value = g.name;
    adminFProps.value = g.properties;
    adminFImages.value = (g.images || []).join('\n');
    
    adminSaveBtn.innerHTML = '<i class="fas fa-save"></i> Güncelle';
    adminSaveBtn.classList.remove('btn-primary');
    adminSaveBtn.classList.add('btn-success');
    
    showNotification(`"${g.name}" düzenleme modunda.`, 'info');
    
    // Scroll to form
    adminFName.scrollIntoView({ behavior: 'smooth', block: 'start' });
    adminFName.focus();
}

function deleteGem(id, fromAdmin = false) {
    if (!isAdmin) {
        showNotification('Bu işlem için admin olmalısınız.', 'error');
        return;
    }
    
    const g = gems.find(x => x.id === id);
    if (!g) return;
    
    if (!confirm(`"${g.name}" adlı taşı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.`)) {
        return;
    }
    
    gems = gems.filter(x => x.id !== id);
    saveLocal();
    
    if (selectedId === id) {
        selectedId = null;
    }
    
    if (fromAdmin) {
        renderAdminGemsList();
    } else {
        renderThumbs();
        renderDetail(null);
    }
    
    showNotification(`"${g.name}" silindi.`, 'success');
}

function saveGem() {
    if (!isAdmin) {
        showNotification('Bu işlem için admin olmalısınız.', 'error');
        return;
    }
    
    const name = adminFName.value.trim();
    const props = adminFProps.value.trim();
    const images = parseImageLines(adminFImages.value);
    
    if (!name) {
        showNotification('Taş adı gerekli.', 'error');
        adminFName.focus();
        return;
    }
    
    if (images.length === 0) {
        showNotification('En az 1 resim URL\'si ekleyin.', 'error');
        adminFImages.focus();
        return;
    }
    
    if (editingId) {
        const idx = gems.findIndex(x => x.id === editingId);
        if (idx !== -1) {
            gems[idx].name = name;
            gems[idx].properties = props;
            gems[idx].images = images;
            showNotification(`"${name}" güncellendi.`, 'success');
        }
    } else {
        const newId = Date.now();
        gems.push({ id: newId, name, properties: props, images });
        showNotification(`"${name}" eklendi.`, 'success');
        selectedId = newId;
    }
    
    saveLocal();
    renderAdminGemsList();
    resetAdminForm();
    
    // If we're on main page, update the view
    if (currentPage === 'main') {
        renderThumbs();
        const g = gems.find(x => x.id === selectedId);
        renderDetail(g);
    }
}

/* =========================
   EVENT LISTENERS
   ========================= */
// Scroll buttons
scrollLeft.addEventListener('click', () => {
    thumbs.scrollBy({ left: -200, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
    thumbs.scrollBy({ left: 200, behavior: 'smooth' });
});

// Main page buttons
editBtn.addEventListener('click', () => {
    if (!isAdmin) {
        showNotification('Admin girişi gerekli', 'error');
        return;
    }
    
    if (!selectedId) {
        showNotification('Önce bir taş seçin', 'error');
        return;
    }
    
    switchPage('admin');
    editGemInAdmin(selectedId);
});

deleteBtn.addEventListener('click', () => {
    if (!selectedId) {
        showNotification('Önce bir taş seçin', 'error');
        return;
    }
    deleteGem(selectedId, false);
});

// Admin page buttons
adminSaveBtn.addEventListener('click', saveGem);

adminCancelEdit.addEventListener('click', () => {
    resetAdminForm();
    showNotification('Form sıfırlandı.', 'info');
});

adminAddNew.addEventListener('click', () => {
    resetAdminForm();
    showNotification('Yeni taş eklemek için formu doldurun.', 'info');
    adminFName.focus();
});

// Page navigation
adminPanelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchPage('admin');
});

backToMain.addEventListener('click', (e) => {
    e.preventDefault();
    switchPage('main');
});

// Logout buttons
logoutBtn.addEventListener('click', handleLogout);
adminLogoutBtn.addEventListener('click', handleLogout);

function handleLogout() {
    isAdmin = false;
    updateAdminUI();
    showNotification('Admin çıkışı yapıldı.', 'info');
    if (currentPage === 'admin') {
        switchPage('main');
    }
}

/* =========================
   AUTHENTICATION
   ========================= */
openLogin.addEventListener('click', () => {
    loginOverlay.style.display = 'flex';
    loginPass.value = '';
    loginError.style.display = 'none';
    loginPass.focus();
});

loginCancelBtn.addEventListener('click', closeLoginModal);
loginCancel.addEventListener('click', closeLoginModal);

function closeLoginModal() {
    loginOverlay.style.display = 'none';
    loginPass.value = '';
    loginError.style.display = 'none';
}

loginConfirm.addEventListener('click', attemptLogin);

loginPass.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        attemptLogin();
    }
});

function attemptLogin() {
    const p = loginPass.value;
    if (p === ADMIN_PASSWORD) {
        isAdmin = true;
        loginOverlay.style.display = 'none';
        loginPass.value = '';
        loginError.style.display = 'none';
        updateAdminUI();
        showNotification('Admin olarak giriş yapıldı.', 'success');
    } else {
        loginError.style.display = 'block';
        loginError.textContent = 'Hatalı şifre!';
        loginPass.classList.add('pulse');
        setTimeout(() => loginPass.classList.remove('pulse'), 2000);
        loginPass.focus();
        loginPass.select();
    }
}

function updateAdminUI() {
    if (isAdmin) {
        statusBadge.innerText = 'Admin';
        statusBadge.className = 'badge badge-admin';
        openLogin.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
        adminPanelBtn.classList.remove('hidden');
        if (document.getElementById('adminStatus')) {
            document.getElementById('adminStatus').innerText = 'Admin modu aktif';
        }
    } else {
        statusBadge.innerText = 'Misafir';
        statusBadge.className = 'badge badge-guest';
        openLogin.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
        adminPanelBtn.classList.add('hidden');
        if (document.getElementById('adminStatus')) {
            document.getElementById('adminStatus').innerText = 'Giriş yapılmadı';
        }
    }
}

/* =========================
   INITIALIZATION
   ========================= */
function init() {
    loadLocal();
    renderThumbs();
    
    if (gems.length > 0) {
        selectGem(gems[0].id);
    } else {
        renderDetail(null);
    }
    
    updateAdminUI();
    
    // Handle hash navigation
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
}

function handleHashChange() {
    const hash = window.location.hash.substring(1);
    if (hash === 'admin' && isAdmin) {
        switchPage('admin');
    } else {
        switchPage('main');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Global error handling
window.addEventListener('error', function(e) {
    console.error('Global hata:', e.error);
    showNotification('Bir hata oluştu. Lütfen sayfayı yenileyin.', 'error');
});