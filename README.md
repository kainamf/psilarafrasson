# Psicóloga Lara Frasson

Site profissional da psicóloga Lara Frasson, especialista em neurodesenvolvimento, autismo e psicologia infantil. Desenvolvido em React com TypeScript e Tailwind CSS.

## 🧠 Sobre o Projeto

Este site foi criado para apresentar os serviços da psicóloga Lara Frasson, que é especialista em:
- Atendimento clínico com foco em autismo
- Neurodesenvolvimento infantil
- Supervisão clínica para psicólogos(as)
- Consultoria e projetos em psicologia

## ✨ Funcionalidades

- **Hero Section**: Apresentação profissional com logo e foto
- **Seção Sobre**: Informações detalhadas sobre a psicóloga
- **Serviços**: Descrição completa dos atendimentos oferecidos
- **Seção de Compromisso**: Valores e missão profissional
- **Promoção Empatea**: Divulgação de cursos e materiais
- **Materiais Gratuitos**: Seção para downloads de conteúdos
- **Contato**: Múltiplas formas de contato (WhatsApp, Instagram, LinkedIn)
- **Botão WhatsApp Flutuante**: Acesso rápido para contato
- **Embed do Instagram**: Integração com posts do Instagram
- **Layout 100% Responsivo**: Otimizado para todos os dispositivos

## 🛠️ Tecnologias Utilizadas

- **[React 18](https://reactjs.org/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript com tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[ESLint](https://eslint.org/)** - Ferramenta de linting para JavaScript/TypeScript
- **[PostCSS](https://postcss.org/)** - Ferramenta para transformar CSS

## 📁 Estrutura do Projeto

```
psilarafrasson/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── assets/
│       ├── icons/          # Ícones SVG e imagens pequenas
│       └── images/         # Fotos e imagens principais
├── src/
│   ├── components/
│   │   ├── About.tsx              # Seção sobre a psicóloga
│   │   ├── CommitmentSection.tsx  # Seção de compromisso
│   │   ├── Contact.tsx            # Informações de contato
│   │   ├── EmpateaPromo.tsx       # Promoção de cursos
│   │   ├── Footer.tsx             # Rodapé do site
│   │   ├── FreeMaterialsSection.tsx # Materiais gratuitos
│   │   ├── Hero.tsx               # Seção principal
│   │   ├── InstagramEmbed.tsx     # Integração Instagram
│   │   ├── Services.tsx           # Serviços oferecidos
│   │   └── WhatsAppButton.tsx     # Botão flutuante WhatsApp
│   ├── App.tsx                    # Componente principal
│   ├── constants.ts               # Constantes do projeto
│   ├── index.tsx                  # Ponto de entrada
│   ├── index.css                  # Estilos globais
│   └── react-app-env.d.ts         # Tipos TypeScript
├── build/                         # Arquivos de produção
├── eslint.config.js              # Configuração ESLint
├── postcss.config.js             # Configuração PostCSS
├── tailwind.config.js            # Configuração Tailwind
├── tsconfig.json                 # Configuração TypeScript
└── package.json                  # Dependências e scripts
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/kainamf/psilarafrasson.git
   cd psilarafrasson
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

## 📋 Scripts Disponíveis

- **`npm start`**: Inicia o servidor de desenvolvimento
- **`npm run build`**: Gera a versão otimizada para produção
- **`npm run lint`**: Executa o ESLint para verificar problemas no código

## 🎨 Customização

O projeto utiliza Tailwind CSS para estilização. As principais configurações podem ser encontradas em:

- **`tailwind.config.js`**: Configurações do Tailwind (cores, fonts, etc.)
- **`src/index.css`**: Estilos globais e importações do Tailwind
- **`src/constants.ts`**: Constantes utilizadas em todo o projeto

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Dispositivos móveis (smartphones)
- 📱 Tablets
- 💻 Desktops
- 🖥️ Monitores de alta resolução

## 🔧 Build e Deploy

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `build/` e estarão prontos para deploy em qualquer servidor web estático.

## 📞 Contato e Redes Sociais

O site inclui integração com as seguintes plataformas:

- **WhatsApp**: Botão flutuante para contato direto
- **Instagram**: @psicolarafrasson
- **LinkedIn**: Lara Frasson
- **Email**: Formulário de contato integrado

## 🤝 Contribuição

Este projeto foi desenvolvido por [Kainã Freitas](https://github.com/kainamf) para a psicóloga Lara Frasson.

## 📄 Licença

© 2025 Lara Frasson - Todos os direitos reservados.

---

### 📝 Notas Técnicas

- O projeto utiliza **Create React App** como base
- Configuração de ESLint para manter qualidade do código
- TypeScript para tipagem estática e melhor desenvolvimento
- Tailwind CSS para estilização rápida e consistente
- Otimizado para SEO e performance
