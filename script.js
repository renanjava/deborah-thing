const diseasesData = [
    {
        id: 1,
        nome: "Cancro Cítrico",
        patogeno: "Xanthomonas citri subsp. citri",
        tipo: "bacteriana",
        severidade: "alta",
        icone: "🍋",
        classificacao: ["Plesionecrótico", "Localizado"],
        descricao: "Doença bacteriana quarentenária que causa lesões características em folhas, ramos e frutos de citros, sendo de notificação obrigatória no Brasil.",
        sintomas: "Lesões circulares salientes (cancros) com centro necrótico e halo amarelado característico em folhas e frutos. As lesões têm aspecto corticoso e podem causar desfolha prematura.",
        sintomas_detalhados: "Morfologia: Lesões circulares de 2-10mm de diâmetro, salientes, com centro necrótico marrom e halo amarelo bem definido. Forma: Circular a irregular. Cor: Centro marrom-escuro com halo amarelo-claro. Padrão: Distribuição aleatória na superfície foliar.",
        culturas: ["Limão", "Laranja", "Tangerina", "Pomelo"],
        controle: [
            "Medidas quarentenárias rigorosas",
            "Eliminação de plantas infectadas",
            "Aplicação preventiva de compostos cúpricos",
            "Controle do minador-dos-citros (vetor)",
            "Desinfecção de ferramentas",
            "Quebra-vento para reduzir disseminação"
        ],
        impacto: "Doença de importância quarentenária que pode inviabilizar a exportação de citros e causar prejuízos econômicos de milhões de reais ao agronegócio brasileiro."
    },
    {
        id: 2,
        nome: "Verrugose dos Citros",
        patogeno: "Elsinoë fawcettii",
        tipo: "fungica",
        severidade: "media",
        icone: "🍊",
        classificacao: ["Hiperplástico", "Localizado"],
        descricao: "Doença fúngica que causa lesões verrucosas características em frutos jovens e folhas de citros, afetando principalmente a qualidade dos frutos.",
        sintomas: "Lesões verrucosas, salientes e irregulares em frutos jovens. Em folhas, manchas pequenas com centro claro e bordas escuras.",
        sintomas_detalhados: "Morfologia: Lesões verrucosas, corticosas e salientes de 1-5mm. Forma: Irregular, com superfície rugosa. Cor: Marrom-clara a escura. Padrão: Agrupadas em frutos jovens, esparsas em folhas maduras.",
        culturas: ["Limão", "Laranja doce", "Tangerina"],
        controle: [
            "Aplicação de fungicidas cúpricos",
            "Fungicidas sistêmicos em períodos críticos",
            "Poda para arejamento da copa",
            "Eliminação de frutos afetados",
            "Controle da irrigação"
        ],
        impacto: "Reduz significativamente o valor comercial dos frutos, especialmente para mercado in natura, podendo causar perdas de até 30% no valor da produção."
    },
    {
        id: 3,
        nome: "Morte dos Ponteiros da Manga",
        patogeno: "Lasiodiplodia theobromae",
        tipo: "fungica",
        severidade: "alta",
        icone: "🥭",
        classificacao: ["Holonecrótico", "Sistêmico"],
        descricao: "Doença fúngica devastadora que causa necrose dos ponteiros e ramos da mangueira, podendo levar à morte da planta em casos severos.",
        sintomas: "Necrose progressiva dos ponteiros, escurecimento vascular, gomose e morte descendente dos ramos. Folhas amarelam e secam rapidamente.",
        sintomas_detalhados: "Morfologia: Necrose descendente dos ramos, escurecimento vascular interno. Forma: Linear ao longo dos ramos. Cor: Marrom-escura a preta. Padrão: Progressão descendente dos ponteiros para ramos mais grossos.",
        culturas: ["Manga", "Cajá", "Seriguela"],
        controle: [
            "Poda sanitária dos ramos afetados",
            "Aplicação de fungicidas sistêmicos",
            "Pasta bordalesa em ferimentos",
            "Manejo nutricional adequado",
            "Controle de estresse hídrico",
            "Eliminação de material vegetal infectado"
        ],
        impacto: "Pode causar morte de plantas adultas e perdas de até 40% na produção em pomares severamente afetados, representando sérios prejuízos econômicos."
    },
    {
        id: 4,
        nome: "Sigatoka da Bananeira",
        patogeno: "Mycosphaerella fijiensis",
        tipo: "fungica",
        severidade: "alta",
        icone: "🍌",
        classificacao: ["Plesionecrótico", "Foliar"],
        descricao: "Doença fúngica mais destrutiva da bananicultura mundial, causando necrose foliar severa e redução drástica da produtividade.",
        sintomas: "Estrias amarelas que evoluem para manchas necróticas com halo amarelo. Coalescência das lesões causa necrose de grandes áreas foliares.",
        sintomas_detalhados: "Morfologia: Inicialmente estrias cloróticas de 1-2mm que evoluem para manchas elípticas de 10-20mm. Forma: Elíptica a irregular. Cor: Centro necrótico marrom com halo amarelo. Padrão: Paralelo às nervuras foliares.",
        culturas: ["Banana", "Plátano"],
        controle: [
            "Aplicação sistemática de fungicidas",
            "Remoção de folhas infectadas",
            "Melhoramento do arejamento",
            "Controle da irrigação",
            "Uso de variedades resistentes",
            "Adubação equilibrada"
        ],
        impacto: "Considerada a doença mais destrutiva da bananicultura, pode causar perdas de até 50% na produção e inviabilizar o cultivo em regiões tropicais úmidas."
    },
    {
        id: 5,
        nome: "Fumagina dos Citros",
        patogeno: "Capnodium citri",
        tipo: "fungica",
        severidade: "media",
        icone: "🍃",
        classificacao: ["Hiperplástico", "Superficial"],
        descricao: "Doença fúngica superficial que forma uma camada escura semelhante à fuligem sobre folhas e frutos, reduzindo a fotossíntese.",
        sintomas: "Camada superficial escura, semelhante à fuligem, que recobre folhas, ramos e frutos. Facilmente removível com fricção.",
        sintomas_detalhados: "Morfologia: Crescimento micelial superficial formando camada escura. Forma: Cobertura uniforme ou em manchas. Cor: Preta a cinza-escura. Padrão: Sobre melada deixada por insetos sugadores.",
        culturas: ["Limão", "Laranja", "Tangerina", "Grapefruit"],
        controle: [
            "Controle de insetos sugadores (cochonilhas, pulgões)",
            "Lavagem das plantas com água",
            "Aplicação de óleo mineral",
            "Melhoria da aeração da copa",
            "Controle de formigas"
        ],
        impacto: "Reduz a capacidade fotossintética das plantas e deprecia a qualidade comercial dos frutos, causando perdas econômicas moderadas."
    },
    {
        id: 6,
        nome: "Mancha de Alga do Abacate",
        patogeno: "Cephaleuros virescens",
        tipo: "algal",
        severidade: "media",
        icone: "🥑",
        classificacao: ["Plesionecrótico", "Foliar"],
        descricao: "Doença causada por alga parasita que forma manchas características verde-alaranjadas em folhas de abacate, especialmente em regiões úmidas.",
        sintomas: "Manchas circulares verde-alaranjadas com bordas bem definidas. Em casos severos, pode causar desfolha e redução do vigor da planta.",
        sintomas_detalhados: "Morfologia: Manchas circulares de 2-15mm de diâmetro. Forma: Circular a oval. Cor: Verde-alaranjada a ferrugínea. Padrão: Distribuição aleatória na superfície foliar, mais comum na face superior.",
        culturas: ["Abacate", "Manga", "Citros"],
        controle: [
            "Aplicação de fungicidas cúpricos",
            "Melhoria da aeração da copa",
            "Controle da umidade",
            "Poda de limpeza",
            "Adubação equilibrada"
        ],
        impacto: "Causa desfolha prematura e redução do vigor das plantas, afetando a produtividade em 15-25% em condições favoráveis ao patógeno."
    },
    {
        id: 7,
        nome: "Podridão Vermelha da Cana",
        patogeno: "Colletotrichum falcatum",
        tipo: "fungica",
        severidade: "alta",
        icone: "🎋",
        classificacao: ["Holonecrótico", "Vascular"],
        descricao: "Doença fúngica devastadora que causa podridão interna dos colmos da cana-de-açúcar, caracterizada por coloração avermelhada típica.",
        sintomas: "Podridão interna do colmo com coloração avermelhada característica. Externamente pode apresentar manchas avermelhadas e crescimento de fungos.",
        sintomas_detalhados: "Morfologia: Podridão interna do colmo com descoloração. Forma: Linear ao longo do colmo. Cor: Vermelha intensa no interior do colmo. Padrão: Progressão ascendente ou descendente no colmo.",
        culturas: ["Cana-de-açúcar"],
        controle: [
            "Uso de variedades resistentes",
            "Tratamento térmico de mudas",
            "Controle de pragas que causam ferimentos",
            "Evitar ferimentos mecânicos",
            "Rotação de culturas",
            "Eliminação de touceiras infectadas"
        ],
        impacto: "Uma das principais doenças da cana-de-açúcar, pode causar perdas de 20-30% na produção e significativa redução na qualidade do caldo."
    },
    {
        id: 8,
        nome: "Encarquilhamento da Soja",
        patogeno: "Bean pod mottle virus (BPMV)",
        tipo: "viral",
        severidade: "media",
        icone: "🌿",
        classificacao: ["Hipoplástico", "Sistêmico"],
        descricao: "Doença viral transmitida por besouros que causa deformação e encarquilhamento das folhas de soja, afetando o desenvolvimento da planta.",
        sintomas: "Encarquilhamento e deformação das folhas, mosaico verde-claro e escuro, nanismo da planta e redução no tamanho das vagens.",
        sintomas_detalhados: "Morfologia: Deformação foliar com encarquilhamento das bordas. Forma: Folhas distorcidas e curvadas. Cor: Mosaico de tons verdes. Padrão: Sintomas sistêmicos em toda a planta.",
        culturas: ["Soja", "Feijão"],
        controle: [
            "Controle de besouros vetores",
            "Uso de variedades resistentes",
            "Eliminação de plantas hospedeiras alternativas",
            "Manejo integrado de pragas",
            "Rotação de culturas"
        ],
        impacto: "Pode causar redução de 10-20% na produtividade e afetar a qualidade dos grãos, especialmente em infecções precoces."
    },
    {
        id: 9,
        nome: "Oídio do Quiabo",
        patogeno: "Erysiphe cichoracearum",
        tipo: "fungica",
        severidade: "media",
        icone: "🌶️",
        classificacao: ["Hiperplástico", "Superficial"],
        descricao: "Doença fúngica que forma uma camada pulverulenta branca sobre folhas e ramos de quiabo, especialmente em condições de baixa umidade.",
        sintomas: "Crescimento pulverulento branco na superfície das folhas, inicialmente em manchas circulares que se expandem e coalescem.",
        sintomas_detalhados: "Morfologia: Crescimento micelial superficial pulverulento. Forma: Manchas circulares que se expandem. Cor: Branca a cinza-clara. Padrão: Inicialmente na face superior das folhas, expandindo-se para ambas as faces.",
        culturas: ["Quiabo", "Berinjela", "Jiló"],
        controle: [
            "Aplicação de fungicidas sistêmicos",
            "Enxofre em pó ou calda sulfocálcica",
            "Melhoria da aeração",
            "Evitar adubação nitrogenada excessiva",
            "Controle da irrigação"
        ],
        impacto: "Reduz a capacidade fotossintética das plantas e pode causar perdas de 15-30% na produção de frutos comerciais."
    },
    {
        id: 10,
        nome: "Ferrugem da Pitanga",
        patogeno: "Puccinia psidii",
        tipo: "fungica",
        severidade: "média",
        icone: "🍂",
        classificacao: ["Foliar", "Epidérmica"],
        descricao: "Doença fúngica que afeta diversas espécies da família Myrtaceae, incluindo a pitangueira, provocando lesões foliares e queda prematura das folhas.",
        sintomas: "Manchas cloróticas nas folhas jovens, seguidas por pústulas alaranjadas na face inferior, que liberam esporos.",
        sintomas_detalhados: "Morfologia: Pústulas arredondadas. Cor: Laranja vivo. Localização: Predominantemente na face inferior das folhas, podendo atingir ramos e frutos.",
        culturas: ["Pitangueira", "Goiabeira", "Eucalipto", "Jambolão"],
        controle: [
            "Plantio de variedades resistentes",
            "Poda de ramos infectados",
            "Aplicação de fungicidas sistêmicos e de contato",
            "Evitar excesso de umidade nas folhas",
            "Remoção de plantas hospedeiras alternativas próximas"
        ],
        impacto: "Compromete o desenvolvimento da planta, provoca desfolha precoce, reduz a frutificação e afeta o valor comercial das frutas."
    }
]

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
        
        <div class="severity-indicator severity-${disease.severidade}">
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
                <span class="severity-indicator severity-${disease.severidade}">
                    Severidade ${disease.severidade.charAt(0).toUpperCase() + disease.severidade.slice(1)}
                </span>
            </div>
        </div>
    </div>

    <div style="margin-bottom: 20px;">
        <h3 style="color: #2c3e50; margin-bottom: 10px;">📋 Descrição</h3>
        <p style="line-height: 1.6; color: #555;">${disease.descricao}</p>
    </div>

    <div style="margin-bottom: 20px;">
        <h3 style="color: #e74c3c; margin-bottom: 10px;">⚠️ Sintomas</h3>
        <p style="line-height: 1.6; color: #555;">${disease.sintomas}</p>
    </div>

    <div style="margin-bottom: 20px;">
        <h3 style="color: #3498db; margin-bottom: 10px;">🌾 Culturas Afetadas</h3>
        <div class="disease-crops">
            ${disease.culturas.map(cultura => `<span class="crop-tag">${cultura}</span>`).join('')}
        </div>
    </div>

    <div style="margin-bottom: 20px;">
        <h3 style="color: #27ae60; margin-bottom: 10px;">🛡️ Controle e Manejo</h3>
        <p style="line-height: 1.6; color: #555;">${disease.controle}</p>
    </div>

    <div>
        <h3 style="color: #f39c12; margin-bottom: 10px;">📊 Impacto Econômico</h3>
        <p style="line-height: 1.6; color: #555;">${disease.impacto}</p>
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

document.addEventListener('DOMContentLoaded', () => {
renderDiseases(diseasesData);
});

window.openModal = openModal;