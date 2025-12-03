/* =========================
   KONFİGÜRASYON VE VERİLER
   ============================================================ */
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

const gems = [
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
        images: ["https://github.com/AliTarhana/zumrudun-koleksiyonu/blob/main/images/turkuaz-2-800x800.jpg?raw=true"]
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
   DURUM DEĞİŞKENLERİ
   ============================================================ */
let selectedId = null;

/* =========================
   DOM ELEMENTLERİ
   ============================================================ */
const detailName = document.getElementById('detailName');
const detailSub = document.getElementById('detailSub');
const detailProps = document.getElementById('detailProps');
const detailImage = document.getElementById('detailImage');
const detailImagePlaceholder = document.getElementById('detailImagePlaceholder');
const thumbs = document.getElementById('thumbs');
const gemCount = document.getElementById('gemCount');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

/* =========================
   RENDER FONKSİYONLARI
   ============================================================ */
function renderThumbs() {
    thumbs.innerHTML = '';
    
    // Taş sayısını güncelle
    gemCount.textContent = gems.length;
    
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
        detailSub.innerText = 'Koleksiyondan bir taş seçin';
        detailProps.innerText = 'Detaylarını görmek için koleksiyondan bir taş seçin.';
        detailImage.classList.add('hidden');
        detailImagePlaceholder.classList.remove('hidden');
        return;
    }
    
    detailName.innerText = g.name;
    detailSub.innerText = g.properties ? g.properties.split('\n')[0].substring(0, 60) + '...' : 'Detaylar yükleniyor...';
    detailProps.innerText = g.properties || 'Bu taş için açıklama bulunmuyor.';
    
    // İlk geçerli resmi göster
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
}

/* =========================
   TAŞ SEÇME FONKSİYONU
   ============================================================ */
function selectGem(id) {
    selectedId = id;
    const g = gems.find(x => x.id === id);
    renderThumbs();
    renderDetail(g);
}

/* =========================
   EVENT LISTENERS
   ============================================================ */
scrollLeft.addEventListener('click', () => {
    thumbs.scrollBy({ left: -200, behavior: 'smooth' });
});

scrollRight.addEventListener('click', () => {
    thumbs.scrollBy({ left: 200, behavior: 'smooth' });
});

/* =========================
   İNİTİALİZASYON
   ============================================================ */
function init() {
    renderThumbs();
    
    if (gems.length > 0) {
        // İlk taşı seç
        selectGem(gems[0].id);
        
        // 3 saniye sonra taş sayısını göster
        setTimeout(() => {
            gemCount.textContent = gems.length;
        }, 3000);
    } else {
        renderDetail(null);
    }
}

// DOM yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', init);

// Global hata yakalama
window.addEventListener('error', function(e) {
    console.error('Global hata:', e.error);
});