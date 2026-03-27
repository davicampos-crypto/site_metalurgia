// js/main.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuração do Firebase (mesma do site)
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

// Aguardar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.hero-comunicacao-form form');
    if (!form) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Coletar dados do formulário usando seletores
        const nome = form.querySelector('input[placeholder="Seu Nome"]')?.value || '';
        const email = form.querySelector('input[placeholder="Seu E-mail"]')?.value || '';
        const assuntoSelect = form.querySelector('select');
        const assunto = assuntoSelect?.options[assuntoSelect.selectedIndex]?.text || '';
        const mensagem = form.querySelector('textarea')?.value || '';

        // Validação básica
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Desabilitar botão e mostrar estado de envio
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'ENVIANDO...';

        try {
            // Enviar para o Firestore (coleção 'comunicacoes')
            await addDoc(collection(db, "comunicacoes"), {
                nome,
                email,
                assunto,
                mensagem,
                data_envio: new Date().toISOString(),
                status: "Nova Mensagem",
                origem: window.location.pathname
            });

            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset(); // Limpar formulário

        } catch (error) {
            console.error('Erro ao enviar:', error);
            alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        }
    });
});