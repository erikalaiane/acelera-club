# ACELERA CLUB - Hub de Automobilismo

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**O primeiro hub de automobilismo do Rio de Janeiro 🏎️**

Comunidade completa para fãs de automobilismo com simuladores, eventos e marketplace exclusivo

</div>

---

## Sobre o Projeto

**ACELERA CLUB** é uma organização criada do zero que integra espaço físico temático, comunidade digital e marketplace especializado para democratizar o acesso ao automobilismo no Brasil. A plataforma conecta entusiastas através de experiências reais, conteúdo exclusivo e uma comunidade apaixonada por velocidade.

### Características Principais

- Simuladores profissionais com cockpits completos
- Eventos semanais (workshops, transmissões ao vivo, competições)
- Marketplace com produtos exclusivos e colecionáveis
- Programa Acelera Lab para projetos universitários
- Sistema de assinatura acessível (R$ 99/mês)
- Comunidade engajada online e presencial
- Design moderno inspirado em equipes de F1
- Interface totalmente responsiva

---

## Tecnologias Utilizadas

- **[React](https://react.dev/)** `18.3.1` - Biblioteca JavaScript para construção de interfaces
- **[Vite](https://vitejs.dev/)** `5.x` - Build tool moderna e extremamente rápida
- **[Tailwind CSS](https://tailwindcss.com/)** `3.4` - Framework CSS utility-first para estilização
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones moderna e personalizável
- **[Unsplash](https://unsplash.com/)** - Imagens de alta qualidade para o site
- **[ESLint](https://eslint.org/)** - Linter para manter código limpo e padronizado
- **[PostCSS](https://postcss.org/)** - Ferramenta para transformar CSS
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Adiciona prefixos de fornecedores automaticamente

---

## Preview

<div align="center">

![Preview](./public/site-preview.png)

*Design moderno e futurista inspirado em equipes de Fórmula 1*

</div>

---

## Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/erikalaiane/acelera-club.git
```

2. **Entre no diretório do projeto**

```bash
cd acelera-club
```

3. **Instale as dependências**

```bash
npm install
```

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

5. **Abra no navegador**

Acesse [http://localhost:5173](http://localhost:5173)

---

## Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Preview da build de produção
npm run lint     # Executa o linter
```

---

## Estrutura do Projeto

```
acelera-club/
├── public/
│   └── images/              # Imagens do site
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.jsx       # Menu responsivo com scroll effect
│   │   ├── Hero.jsx         # Hero com background dinâmico
│   │   ├── About.jsx        # Seção sobre com cards visuais
│   │   ├── Plans.jsx        # Planos FREE e MEMBRO
│   │   ├── Events.jsx       # Calendário de eventos
│   │   ├── Marketplace.jsx  # Grid de produtos
│   │   ├── Instagram.jsx    # Galeria Instagram
│   │   ├── Testimonials.jsx # Carrossel de depoimentos
│   │   ├── AceleraLab.jsx   # Programa acadêmico
│   │   ├── Contact.jsx      # Seção de contato
│   │   └── Footer.jsx       # Footer completo
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Ponto de entrada
│   └── index.css            # Estilos globais
├── index.html
├── package.json
├── tailwind.config.js       # Configuração do Tailwind
├── vite.config.js           # Configuração do Vite
└── README.md                # Este arquivo
```

---

## Funcionalidades

### 🎯 Hero Section
- Background dinâmico com imagem de carro de corrida
- Badge animado "Primeiro hub de automobilismo do Rio"
- Estatísticas em tempo real (membros, eventos, simuladores)
- CTAs destacados com gradientes
- Indicador de scroll animado

### 🏎️ Simuladores e Experiências
- Cards visuais com imagens reais
- Ícones personalizados por categoria
- Hover effects com scale e glow
- Gradientes coloridos (vermelho, azul, verde)
- Descrições detalhadas de cada experiência

### 💳 Sistema de Planos
- Plano FREE (R$ 0) com benefícios básicos
- Plano MEMBRO (R$ 99/mês) com badge "MAIS POPULAR"
- Comparativo visual de funcionalidades
- Design premium com gradientes
- Botões de ação destacados

### 📅 Calendário de Eventos
- Cards com imagens dos eventos
- Badges coloridos por categoria (Workshop, Transmissão, Competição)
- Informações de data, hora, vagas e preço
- Sistema de reserva integrado
- Hover effects sofisticados

### 🛍️ Marketplace
- Grid responsivo de produtos
- Imagens reais de alta qualidade
- Preços em destaque
- Botões de adicionar ao carrinho
- Hover com zoom nas imagens

### 🎓 Acelera Lab
- Programa de apoio a projetos universitários
- Imagem de projeto real
- Estatísticas do programa (projetos, universidades, investimento)
- Lista de benefícios com ícones
- CTAs para inscrição

### 💬 Depoimentos
- Carrossel funcional com navegação
- Fotos reais de membros
- Design elegante com quote icon
- Indicadores de página
- Transições suaves

### 📍 Contato
- Mapa visual com pin animado
- Cards informativos (endereço, horário)
- Botões de contato direto (WhatsApp, Email)
- Design em grid responsivo

---

## Responsividade

O projeto é totalmente responsivo e testado em:

- **Mobile** (320px - 767px) - Grid de 1-2 colunas
- **Tablet** (768px - 1023px) - Grid de 2-3 colunas
- **Desktop** (1024px - 1439px) - Grid completo
- **Large Desktop** (1440px+) - Layout otimizado

---

## Design System

### Paleta de Cores

```css
/* Cores Principais */
--primary-red: #E10600      /* Vermelho corrida */
--black: #0A0A0A            /* Preto racing */
--gray-dark: #2C2C2C        /* Cinza carbono */
--white: #FFFFFF            /* Branco puro */

/* Cores Secundárias */
--gold: #D4AF37             /* Dourado VIP */
--blue: #00D9FF             /* Azul elétrico */
--green: #00FF41            /* Verde pit */
--purple: #9333EA           /* Roxo Acelera Lab */
--pink: #EC4899             /* Rosa Instagram */
```

### Gradientes

```css
/* Gradientes Principais */
gradient-red: from-red-500 to-red-700
gradient-blue: from-blue-500 to-cyan-500
gradient-purple: from-purple-500 to-pink-500
gradient-green: from-green-500 to-teal-500
```

### Tipografia

- **Títulos**: Font-weight 900 (Black)
- **Subtítulos**: Font-weight 700 (Bold)
- **Corpo**: Font-weight 400 (Regular)
- **Sistema de fontes**: Sans-serif padrão do Tailwind

---

## Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Padrões de Commit

Seguimos o padrão de commits semânticos:

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `style:` - Mudanças de estilo
- `refactor:` - Refatoração de código
- `docs:` - Alterações na documentação
- `test:` - Adição/alteração de testes
- `chore:` - Tarefas de manutenção

---

## Roadmap

### Fase 1 - MVP (Atual) ✅
- [x] Design moderno e responsivo
- [x] Componentes principais
- [x] Sistema de planos
- [x] Calendário de eventos
- [x] Marketplace básico
- [x] Acelera Lab

### Fase 2 - Funcionalidades
- [ ] React Router para múltiplas páginas
- [ ] Sistema de autenticação
- [ ] Backend com API REST
- [ ] Integração com banco de dados
- [ ] Sistema de pagamento (Stripe/Mercado Pago)
- [ ] Agendamento de simuladores

### Fase 3 - Expansão
- [ ] App mobile (React Native)
- [ ] Transmissões ao vivo integradas
- [ ] Sistema de pontos e gamificação
- [ ] Marketplace completo com checkout
- [ ] Painel administrativo
- [ ] Integração com redes sociais

### Fase 4 - Escala
- [ ] Sistema de franquias
- [ ] Expansão para outras cidades
- [ ] Parcerias com autódromos
- [ ] Eventos presenciais em grande escala
- [ ] Conteúdo premium exclusivo

---

## Contexto Acadêmico

Este projeto foi desenvolvido como parte do trabalho acadêmico da disciplina de **Empreendedorismo** do curso de **Análise e Desenvolvimento de Sistemas** pela **UniCarioca**.

### Objetivo

Criar uma organização do zero (opção C) focada em democratizar o acesso ao automobilismo no Brasil através de um modelo híbrido que integra espaço físico, comunidade digital e marketplace especializado.

### Público-Alvo

Homens e mulheres entre 22-45 anos, classes B e C+, residentes no Rio de Janeiro, apaixonados por automobilismo (F1, MotoGP, Stock Car) que buscam experiências práticas além de assistir corridas pela televisão.

### Diferencial Competitivo

Combinação única de hub físico multifuncional (café temático + simuladores + loja) com modelo de assinatura acessível, transmissões comentadas ao vivo, workshops técnicos e parcerias universitárias (Acelera Lab).

---

## Business Model Canvas

### Proposta de Valor
- Único espaço físico temático de automobilismo no RJ
- Experiências acessíveis e regulares
- Comunidade engajada de fãs
- Conteúdo especializado

### Segmentos de Clientes
- Membros FREE (2.000 usuários)
- Membros pagantes (300 assinantes)
- Usuários avulsos
- Empresas (eventos corporativos)
- Estudantes universitários

### Fontes de Receita
- Assinaturas mensais (R$ 29.700/mês)
- Simuladores (R$ 12.000/mês)
- Café/bar (R$ 24.000/mês)
- Marketplace (R$ 13.000/mês)
- Eventos (R$ 5.000/mês)

**Receita Total Mensal**: ~R$ 83.700

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Autora

**Erika Laiane**

Estudante de Análise e Desenvolvimento de Sistemas na UniCarioca  
Apaixonada por tecnologia, design e automobilismo 🏎️

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/erikalaiane)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/erika-laiane-azevedo)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:erikalaianeazevedosantos@gmail.com)

---

<div align="center">

Desenvolvido com 💜 e muita paixão por automobilismo por Erika Laiane

**#AceleraClub** | **#Empreendedorismo** | **#ReactJS** | **#TailwindCSS**

[⬆ Voltar ao topo](#acelera-club---hub-de-automobilismo)

</div>