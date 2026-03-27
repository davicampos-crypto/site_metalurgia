import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3ximM7Zis1dDpb3Rs_LtCqLbxtwkRgBg",
  authDomain: "paginametalurgia.firebaseapp.com",
  projectId: "paginametalurgia",
  storageBucket: "paginametalurgia.firebasestorage.app",
  messagingSenderId: "1088193424815",
  appId: "1:1088193424815:web:d50e37ef0119847ee8935a",
  measurementId: "G-51ZF8TEN6X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function enviarParaFirebase(event, colecao) {
    event.preventDefault();
    const form = event.target;
    const btn = form.querySelector('button[type="submit"]');

    try {
        btn.disabled = true;
        btn.innerText = "ENVIANDO...";

        const formData = new FormData(form);
        const dados = {
            ...Object.fromEntries(formData.entries()),
            origem_pagina: window.location.pathname,
            data_envio: new Date().toISOString(),
            status: "Novo"
        };

        // Salva apenas o texto no Firestore
        await addDoc(collection(db, colecao), dados);
        
        alert("Dados salvos no sistema!");
        form.reset();

    } catch (error) {
        console.error("Erro:", error);
    } finally {
        btn.disabled = false;
        btn.innerText = "ENVIAR";
    }
}

// Para a página de cotação
const formCotacao = document.getElementById('final-quote-form');
if (formCotacao) {
    formCotacao.addEventListener('submit', (e) => enviarParaFirebase(e, "orcamentos_completos"));
}

// Para o formulário de candidatos (Modal de Pessoas)
const formCandidato = document.getElementById('candidateForm');
if (formCandidato) {
    formCandidato.addEventListener('submit', (e) => enviarParaFirebase(e, "candidatos"));
}




    