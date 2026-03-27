import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 1. Configuração Única do Banco
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "ferrotech-projeto.firebaseapp.com",
    projectId: "ferrotech-projeto",
    storageBucket: "ferrotech-projeto.appspot.com",
    appId: "SUA_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ---------------------------------------------------------
// 2. Lógica Global (Funciona em todas as páginas)
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    console.log("FerroTech Engine: Sistema Central Conectado.");
    
    // Identifica qual formulário está na página atual
    const formCotacao = document.getElementById('final-quote-form');
    const formContato = document.getElementById('form-contato-simples'); // Para comunicacao.html

    if (formCotacao) {
        formCotacao.addEventListener('submit', (e) => enviarParaFirebase(e, "orcamentos_completos"));
    }
    if (formContato) {
        formContato.addEventListener('submit', (e) => enviarParaFirebase(e, "leads_contato"));
    }
});

// ---------------------------------------------------------
// 3. Função de Envio Universal
// ---------------------------------------------------------
async function enviarParaFirebase(event, colecao) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const btn = event.target.querySelector('button');
    
    // Captura serviços se for a página de cotação
    const cards = document.querySelectorAll('.card-cotacao.selected');
    const servicos = Array.from(cards).map(c => c.dataset.servico);

    const dados = {
        ...Object.fromEntries(formData.entries()),
        servicos_interesse: servicos,
        origem_pagina: window.location.pathname,
        data_envio: new Date().toISOString()
    };

    try {
        btn.disabled = true;
        btn.innerText = "ENVIANDO...";
        
        await addDoc(collection(db, colecao), dados);
        
        alert("Recebemos sua solicitação! Entraremos em contato em breve.");
        event.target.reset();
    } catch (error) {
        console.error("Erro no Firebase:", error);
        alert("Erro ao conectar com o servidor.");
    } finally {
        btn.disabled = false;
        btn.innerText = "ENVIAR";
    }
}

// Expõe as funções de interface para o HTML
window.scrollParaDados = function() {
    const form = document.getElementById('form-detalhes');
    form.classList.remove('hidden');
    form.scrollIntoView({ behavior: 'smooth' });
};