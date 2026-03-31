```markdown
# 🔧 Ferrotech Metalurgia de Precisão – Site Institucional

![Status](https://img.shields.io/badge/status-concluído-brightgreen) ![Firebase](https://img.shields.io/badge/Firebase-Hosting%20%7C%20Firestore-orange) ![Responsivo](https://img.shields.io/badge/Responsivo-Sim-blue)

Site institucional profissional para a **Ferrotech Metalurgia de Precisão**, desenvolvido para transmitir credibilidade e profissionalismo para compradores e gestores de suprimentos industriais. Projeto de portfólio e teste admissional.

🔗 **Site em produção:** [https://paginametalurgia.web.app/](https://paginametalurgia.web.app/)

---

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Identidade da Empresa](#identidade-da-empresa)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Estrutura do banco de dados (Firestore)](#estrutura-do-banco-de-dados-firestore)
- [Regras de segurança do Firestore](#regras-de-segurança-do-firestore)
- [Desafios notáveis e soluções](#desafios-notáveis-e-soluções)
- [O que eu faria com mais tempo](#o-que-eu-faria-com-mais-tempo)
- [Como executar localmente](#como-executar-localmente)
- [Deploy e hospedagem](#deploy-e-hospedagem)
- [Links úteis](#links-úteis)
- [Autor](#autor)

---

## Sobre o projeto

O site foi criado para a **Ferrotech Metalurgia de Precisão** e tem como objetivos:

- Transmitir credibilidade e seriedade para compradores industriais e gestores de suprimentos
- Apresentar os diferenciais competitivos da empresa: precisão absoluta, parceria genuína, inovação constante, sustentabilidade e excelência operacional
- Exibir portfólio de serviços especializados: soldagem especializada, usinagem CNC e corte a laser
- Oferecer um catálogo de produtos com opção de solicitação de cotação
- Permitir contato direto via formulários integrados com **Firebase Firestore**
- Oferecer uma experiência responsiva e otimizada para dispositivos móveis

---

## Identidade da Empresa

### Ferrotech Metalurgia de Precisão

| Item | Descrição |
|------|-----------|
| **Nome** | Ferrotech Metalurgia de Precisão |
| **Slogan** | *Precisão que transforma indústrias* |
| **Posicionamento** | Empresa especializada em soluções metalúrgicas de alta complexidade para os setores automotivo, aeronáutico, energético e de máquinas industriais |
| **História** | Fundada em 2010 na região metropolitana de São Paulo, a Ferrotech nasceu com o propósito de oferecer serviços metalúrgicos com tolerâncias rigorosas e atendimento personalizado. Ao longo de 15 anos, consolidou-se como referência em usinagem CNC, soldagem especializada e corte a laser, atendendo grandes indústrias nacionais e multinacionais. |
| **Missão** | Entregar soluções metalúrgicas de alta precisão com agilidade, qualidade e compromisso |
| **Visão** | Ser referência nacional em manufatura de precisão para indústrias de alta complexidade técnica |
| **Valores** | Excelência operacional, inovação contínua, transparência com o cliente, sustentabilidade e valorização das pessoas |

### Diferenciais Estratégicos

| Diferencial | Descrição |
|-------------|-----------|
| **Precisão Absoluta** | Cada peça, cada solda, cada corte executado com tolerâncias rigorosas e controle total de qualidade |
| **Parceria Genuína** | Atuação junto ao cliente desde a engenharia de aplicação até a entrega, construindo soluções sob medida |
| **Inovação Constante** | Investimento contínuo em tecnologia de ponta e capacitação da equipe técnica |
| **Sustentabilidade** | Processos otimizados que reduzem desperdícios e respeitam o meio ambiente |
| **Excelência Operacional** | Gestão enxuta e melhoria contínua para garantir entregas no prazo com a máxima qualidade |

### Serviços Oferecidos

| Serviço | Descrição | Capacidade |
|---------|-----------|------------|
| **Soldagem Especializada** | Soldagem TIG, MIG/MAG, eletrodo revestido e arame tubular para materiais como aço carbono, inoxidável, alumínio e ligas especiais | Certificados EN ISO 3834 e AWS D1.1 |
| **Usinagem CNC** | Centros de usinagem de 3, 4 e 5 eixos com controle dimensional micrométrico | Tolerâncias a partir de ±0,005mm |
| **Corte a Laser** | Corte de chapas metálicas com acabamento de alta qualidade e mínima deformação térmica | Área útil de até 3.000 x 1.500 mm, potência de até 6kW |

---

## Tecnologias utilizadas

| Tecnologia | Finalidade | Motivo da escolha |
|------------|------------|-------------------|
| HTML5, CSS3, JavaScript | Estrutura, estilização e interatividade | Tecnologias consolidadas que garantem total controle sobre o desenvolvimento, excelente desempenho e compatibilidade com todos os navegadores. A familiaridade com o ecossistema permite entregar um código limpo e de fácil manutenção. |
| Firebase Firestore | Banco de dados NoSQL para captura de leads e orçamentos | Escolhido pela simplicidade de integração com aplicações front-end puras, dispensando a necessidade de um backend customizado. A estrutura orientada a coleções e documentos se mostrou ideal para armazenar os diferentes tipos de formulários (contato, cotação e orçamento) com flexibilidade para evoluções futuras. |
| Firebase Hosting | Hospedagem do site com CDN global | Integração nativa com o Firestore, deploy simplificado via CLI e CDN global que garante baixa latência em qualquer região. A versão gratuita atende perfeitamente os requisitos do projeto com recursos profissionais. |
| Git / GitHub | Versionamento e repositório remoto | Ferramenta padrão do mercado para controle de versão, permitindo rastreabilidade do histórico de desenvolvimento, colaboração e deploy integrado. |
| Leonardo.ai | Geração de identidade visual e imagens industriais | Ferramenta de IA com versão gratuita que entrega resultados realistas para ambientes industriais, maquinário e peças metálicas. A qualidade das imagens geradas contribui para a credibilidade visual do site. |
| Gemini / ChatGPT / DeepSeek | Apoio na escrita de código, conteúdo e documentação | As IAs foram utilizadas como assistentes de produtividade: Gemini pela velocidade de raciocínio, DeepSeek pelo amplo limite de contexto para correções de bugs, e ChatGPT para validação de estratégias de copy e conteúdo institucional. |
| GitHub Copilot | Correção de bugs e autocompletar inteligente | Ferramenta que se integra ao VS Code e, por ter acesso ao contexto completo dos arquivos, mostrou-se extremamente eficiente na identificação e correção de problemas de sintaxe e lógica durante o desenvolvimento. |

---

## Estrutura do banco de dados (Firestore)

O projeto utiliza três coleções principais no Firestore, cada uma atendendo a um formulário específico do site:

### Coleção 1: `orcamentos_completos`
Destinada aos formulários de cotação e solicitação de orçamento para projetos personalizados.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `nome` | string | Nome completo do contato |
| `email` | string | E-mail para contato |
| `telefone` | string | Telefone com DDD |
| `empresa` | string | Nome da empresa |
| `descricao` | string | Descrição do projeto ou serviço desejado |
| `servicos_selecionados` | array | Lista de serviços de interesse (soldagem, usinagem CNC, corte laser) |
| `link_projeto` | string | (Opcional) Link para anexos ou arquivos do projeto |
| `data_envio` | timestamp | Data e hora do envio |
| `origem_pagina` | string | Página onde o formulário foi preenchido |
| `status` | string | Status do orçamento ("Novo", "Em análise", "Respondido") |

### Coleção 2: `comunicacoes`
Destinada ao formulário de contato geral da página "Fale Conosco".

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `nome` | string | Nome do remetente |
| `email` | string | E-mail para resposta |
| `assunto` | string | Assunto da mensagem |
| `mensagem` | string | Conteúdo da mensagem |
| `data_envio` | timestamp | Data e hora do envio |
| `origem` | string | Página de origem |
| `status` | string | Status da mensagem ("Nova Mensagem", "Lida", "Respondida") |

### Coleção 3: `candidatos`
Destinada ao formulário de "Trabalhe Conosco" para recrutamento.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `nome` | string | Nome do candidato |
| `email` | string | E-mail de contato |
| `telefone` | string | Telefone com DDD |
| `vaga_interesse` | string | Vaga pretendida |
| `experiencia` | string | Resumo da experiência profissional |
| `link_curriculo` | string | Link para currículo anexado |
| `data_envio` | timestamp | Data e hora do envio |
| `status` | string | Status da candidatura ("Nova", "Em análise", "Contatado") |

> ⚠️ Os dados são inseridos diretamente pelos formulários do site. Para fins de demonstração, as regras de segurança foram configuradas para permitir escrita pública, com leitura restrita para análise via console.

---

## Captura de tela do banco de dados (Firestore)

Abaixo estão exemplos da estrutura de dados armazenada no Firebase Firestore com os leads capturados pelo site:

### Coleção `orcamentos_completos`
![Coleção orcamentos_completos no Firestore](./Captura%20de%20tela%202026-03-31%20164925.png)

### Coleção `comunicacoes`
![Coleção comunicacoes no Firestore](./Captura%20de%20tela%202026-03-31%20164958.png)

### Visão geral das coleções
![Visão geral do Firestore](./Captura%20de%20tela%202026-03-31%20165016.png)

---

## Regras de segurança do Firestore

Arquivo `firestore.rules` utilizado no projeto:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permite escrita para todas as coleções de formulários
    match /orcamentos_completos/{document} {
      allow create: if true;
      allow read: if false;  // Protegido - apenas acesso via console
    }
    match /comunicacoes/{document} {
      allow create: if true;
      allow read: if false;
    }
    match /candidatos/{document} {
      allow create: if true;
      allow read: if false;
    }
  }
}
```

**Observação:** Em um cenário de produção, as regras seriam mais restritivas, com validação de campos obrigatórios e autenticação para leitura.

---

## Desafios notáveis e soluções

| Desafio | Solução adotada |
|---------|-----------------|
| *[A ser preenchido pelo autor]* | |
| *[A ser preenchido pelo autor]* | |
| *[A ser preenchido pelo autor]* | |

---

## O que eu faria com mais tempo

| Funcionalidade | Descrição | Prioridade |
|----------------|-----------|------------|
| **Área administrativa protegida** | Painel com login (Firebase Auth) para gerenciar orçamentos, mensagens e candidaturas em tempo real, com filtros e busca | Alta |
| **Envio automático de e-mail** | Confirmação de recebimento do orçamento/mensagem e notificação interna para a equipe comercial (EmailJS ou SendGrid) | Alta |
| **Validação avançada de formulário** | Impedir envios com dados inválidos (telefone curto, e-mail sem "@", campos obrigatórios vazios) com mensagens amigáveis e feedback visual | Alta |
| **Integração com WhatsApp API** | Botão flutuante de contato com mensagem pré-preenchida para orçamentos rápidos | Média |
| **Galeria de projetos realizados** | Portfólio visual com filtros por tipo de serviço, cliente e setor da indústria | Média |
| **Certificados e selos de qualidade** | Seção dedicada com certificações (ISO 9001, EN ISO 3834, AWS D1.1) e selos de parceiros | Média |
| **Blog técnico** | Artigos sobre processos metalúrgicos, estudos de caso e inovações do setor para fortalecer autoridade | Média |
| **Rastreamento de conversões (GA4)** | Monitorar quais CTAs e páginas geram mais orçamentos e qual a origem dos visitantes | Média |
| **Mapa de localização interativo** | Mapa integrado com endereço da planta industrial e tempo de deslocamento para grandes centros | Baixa |
| **SEO e acessibilidade** | Meta tags otimizadas, schema.org para empresas industriais, contraste adequado e navegação por teclado | Baixa |
| **Modo escuro** | Alternativa visual para melhor experiência em ambientes com pouca luz | Baixa |
| *[A ser complementado pelo autor]* | | |

---

## Como executar localmente

1. **Clone o repositório**

```bash
git clone https://github.com/davicampos-crypto/ferrotech-site.git
cd ferrotech-site
```

2. **Configure o Firebase**

- Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
- Registre um aplicativo web e copie as credenciais (apiKey, authDomain, projectId, etc.)
- Cole essas credenciais no arquivo `js/firebase-config.js` (substitua os placeholders)

3. **Abra o projeto**

- Use o Live Server do VS Code ou qualquer servidor HTTP simples
- Exemplo com Python: `python -m http.server 8000`

4. **Teste os formulários**

- Preencha os formulários de orçamento, contato ou candidatura
- Verifique se os dados são salvos corretamente no Firestore

---

## Deploy e hospedagem

O site está hospedado no Firebase Hosting e pode ser atualizado com um único comando:

```bash
firebase deploy
```

**URL de produção:** [https://paginametalurgia.web.app/](https://paginametalurgia.web.app/)

---

## Links úteis

- **Repositório no GitHub:** [https://github.com/davicampos-crypto/ferrotech-site](https://github.com/davicampos-crypto/ferrotech-site)
- **Site ao vivo:** [https://paginametalurgia.web.app/](https://paginametalurgia.web.app/)
- **Firebase Console:** Projeto `paginametalurgia`

---

## Autor

**Davi Dias Campos**

- 18 anos, estudante de Desenvolvimento de Software Multiplataforma – FATEC Votorantim
- GitHub: [davicampos-crypto](https://github.com/davicampos-crypto)
- Data de conclusão deste README: 31/03/2026

---

## Extras

*[A ser complementado pelo autor - referências de mercado, funcionalidades especiais, etc.]*

---

📝 **Licença**

Este projeto é de uso educacional e para fins de portfólio. Todos os direitos sobre os nomes, marcas e imagens são meramente ilustrativos (personagens fictícios).
```
