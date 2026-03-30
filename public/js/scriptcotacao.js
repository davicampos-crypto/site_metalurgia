// js/cotacao.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB3ximM7Zis1dDpb3Rs_LtCqLbxtwkRgBg",
    authDomain: "paginametalurgia.firebaseapp.com",
    projectId: "paginametalurgia",
    storageBucket: "paginametalurgia.firebasestorage.app",
    messagingSenderId: "1088193424815",
    appId: "1:1088193424815:web:d50e37ef0119847ee8935a",
    measurementId: "G-51ZF8TEN6X"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Estado dos serviços selecionados
let selecionados = 0;

// Função para adicionar/remover serviço
function toggleServico(btn) {
    const card = btn.closest('.card-cotacao');
    if (!card) return;

    card.classList.toggle('selected');
    const isSelected = card.classList.contains('selected');

    selecionados += isSelected ? 1 : -1;
    const countSpan = document.getElementById('count-servicos');
    if (countSpan) countSpan.innerText = selecionados;

    const barra = document.getElementById('status-cotacao');
    if (barra) {
        if (selecionados > 0) {
            barra.classList.remove('hidden');
        } else {
            barra.classList.add('hidden');
        }
    }

    btn.innerHTML = isSelected
        ? '<i class="fas fa-check"></i> ADICIONADO'
        : '<i class="fas fa-plus"></i> ADICIONAR À COTAÇÃO';
}

// Função para rolar até o formulário
window.scrollParaDados = function () {
    const formSecao = document.getElementById('form-detalhes');
    if (!formSecao) return;

    formSecao.classList.remove('hidden');
    formSecao.classList.add('fade-in-visible');

    setTimeout(() => {
        formSecao.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
};

// Função para enviar dados ao Firebase
async function enviarParaFirebase(event) {
    event.preventDefault();
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;

    try {
        btn.disabled = true;
        btn.innerText = "ENVIANDO...";

        const formData = new FormData(form);
        const dados = {
            ...Object.fromEntries(formData.entries()),
            servicos_selecionados: Array.from(document.querySelectorAll('.card-cotacao.selected'))
                .map(card => card.getAttribute('data-servico') || card.querySelector('h3')?.innerText),
            origem_pagina: window.location.pathname,
            data_envio: new Date().toISOString(),
            status: "Novo"
        };

        await addDoc(collection(db, "orcamentos_completos"), dados);
        alert("Orçamento enviado com sucesso! Em breve nossa equipe entrará em contato.");
        form.reset();

        // Opcional: resetar seleção de serviços
        document.querySelectorAll('.card-cotacao.selected').forEach(card => {
            card.classList.remove('selected');
            const btn = card.querySelector('.btn-add-servico');
            if (btn) btn.innerHTML = '<i class="fas fa-plus"></i> ADICIONAR À COTAÇÃO';
        });
        selecionados = 0;
        const countSpan = document.getElementById('count-servicos');
        if (countSpan) countSpan.innerText = "0";
        const barra = document.getElementById('status-cotacao');
        if (barra) barra.classList.add('hidden');
    } catch (error) {
        console.error("Erro ao enviar:", error);
        alert("Ocorreu um erro ao enviar. Tente novamente.");
    } finally {
        btn.disabled = false;
        btn.innerText = originalText;
    }
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar eventos aos botões de serviço
    const btnsAddServico = document.querySelectorAll('.btn-add-servico');
    btnsAddServico.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            toggleServico(this);
        });
    });

    // Evento do botão "PROSSEGUIR"
    const btnProximo = document.querySelector('.btn-proximo');
    if (btnProximo) {
        btnProximo.addEventListener('click', window.scrollParaDados);
    }

    // Evento do formulário
    const formCotacao = document.getElementById('final-quote-form');
    if (formCotacao) {
        formCotacao.addEventListener('submit', enviarParaFirebase);
    }
});