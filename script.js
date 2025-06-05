function carregarJSON () {
    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            diseasesData = data;
            renderDiseases(diseasesData);
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
}
carregarJSON()


const diseasesGrid = document.getElementById('diseasesGrid');
const searchInput = document.getElementById('searchInput');
const filters = document.getElementById('filters');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('diseaseModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

let currentFilter = 'all';
let currentSearch = '';

function renderDiseases(diseases) {
    if (diseases.length === 0) {
        diseasesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    diseasesGrid.style.display = 'grid';
    noResults.style.display = 'none';

    diseasesGrid.innerHTML = diseases.map(disease => `
        <div class="disease-card" onclick="openModal(${disease.id})">
            <div class="disease-header">
                <div class="disease-icon">${disease.icone}</div>
                <div>
                    <div class="disease-title">${disease.nome}</div>
                    <div class="disease-pathogen">${disease.patogeno}</div>
                </div>
            </div>
            
            <div class="disease-description">${disease.descricao}</div>
            
            <div class="disease-symptoms">
                <div class="symptoms-title">Sintomas Principais</div>
                <div class="symptoms-list">${disease.sintomas.substring(0, 120)}...</div>
            </div>
            
            <div class="disease-crops">
                ${disease.culturas.map(cultura => `<span class="crop-tag">${cultura}</span>`).join('')}
            </div>
            
            <div class="severity-indicator severity-${disease.severidade.toLowerCase()}">
                Severidade ${disease.severidade.charAt(0).toUpperCase() + disease.severidade.slice(1)}
            </div>
        </div>
    `).join('');
}

function filterDiseases() {
let filtered = diseasesData;

if (currentFilter !== 'all') {
    if (currentFilter === 'alta') {
        filtered = filtered.filter(disease => disease.severidade === 'alta');
    } else {
        filtered = filtered.filter(disease => disease.tipo === currentFilter);
    }
}

if (currentSearch) {
    const searchTerm = currentSearch.toLowerCase().trim();
    filtered = filtered.filter(disease =>
        disease.nome.toLowerCase().includes(searchTerm) ||
        disease.patogeno.toLowerCase().includes(searchTerm) ||
        disease.culturas.some(cultura => cultura.toLowerCase().includes(searchTerm)) ||
        disease.sintomas.toLowerCase().includes(searchTerm) ||
        disease.descricao.toLowerCase().includes(searchTerm)
    );
}

renderDiseases(filtered);
}
    function openModal(diseaseId) {
    const disease = diseasesData.find(d => d.id === diseaseId);
    if (!disease) return;
    
    modalContent.innerHTML = `
        <div class="disease-header" style="margin-bottom: 25px;">
            <div class="disease-icon" style="width: 60px; height: 60px; font-size: 2rem;">${disease.icone}</div>
            <div>
                <div class="disease-title" style="font-size: 1.5rem; margin-bottom: 5px;">${disease.nome}</div>
                <div class="disease-pathogen" style="font-size: 1rem;">${disease.patogeno}</div>
                <div style="margin-top: 10px;">
                    <span class="severity-indicator severity-${disease.severidade.toLowerCase()}">
                        Severidade ${disease.severidade.charAt(0).toUpperCase() + disease.severidade.slice(1)}
                    </span>
                </div>
            </div>
        </div>
    
        <div style="margin-bottom: 20px;">
            <h3 style="color: #4f8cff; margin-bottom: 10px;">📋 Descrição</h3>
            <p style="line-height: 1.6; color: #b0b6be;">${disease.descricao}</p>
        </div>
    
        <div style="margin-bottom: 20px;">
            <h3 style="color: #ff6b6b; margin-bottom: 10px;">⚠️ Sintomas</h3>
            <p style="line-height: 1.6; color: #e5e7eb;">${disease.sintomas}</p>
        </div>
    
        <div style="margin-bottom: 20px;">
            <h3 style="color: #27ae60; margin-bottom: 10px;">🌾 Culturas Afetadas</h3>
            <div class="disease-crops">
                ${disease.culturas.map(cultura => `<span class="crop-tag">${cultura}</span>`).join('')}
            </div>
        </div>
    
        <div style="margin-bottom: 20px;">
            <h3 style="color: #ffd166; margin-bottom: 10px;">🛡️ Controle e Manejo</h3>
            <ul style="line-height: 1.6; color: #b0b6be; padding-left: 18px;">
                ${Array.isArray(disease.controle) ? disease.controle.map(item => `<li>${item}</li>`).join('') : disease.controle}
            </ul>
        </div>
    
        <div>
            <h3 style="color: #f1c40f; margin-bottom: 10px;">📊 Impacto Econômico</h3>
            <p style="line-height: 1.6; color: #e5e7eb;">${disease.impacto}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
modal.style.display = 'none';
document.body.style.overflow = 'auto';
}

searchInput.addEventListener('input', (e) => {
currentSearch = e.target.value;
filterDiseases();
});

filters.addEventListener('click', (e) => {
if (e.target.classList.contains('filter-btn')) {
    filters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));

    e.target.classList.add('active');

    currentFilter = e.target.dataset.filter;
    filterDiseases();
}
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
if (e.key === 'Escape') closeModal();
});

window.openModal = openModal;