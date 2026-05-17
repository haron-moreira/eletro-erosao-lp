# EletroErosão — Landing Page

Landing page institucional para empresa especializada em manutenção de máquinas de eletroerosão (EDM).

## Stack

- **React 18** + **Vite 5**
- CSS Modules
- react-icons
- Hospedagem via **GitHub Pages**

## Seções

| Seção | Descrição |
|---|---|
| Hero | Headline, destaques e CTA WhatsApp |
| Sobre | História, estatísticas e diferenciais da empresa |
| Serviços | 7 serviços em grid de cards |
| Máquinas | EDM por fio, penetração e furo rápido |
| Marcas | Agie, Sodick, Mitsubishi, Fanuc e outras |
| Diferenciais | Por que contratar a empresa |
| Galeria | Grid de fotos da operação |
| CTA Final | Conversão via WhatsApp |
| Rodapé | Contato, links e redes sociais |

## Instalação

```bash
npm install
npm run dev
```

## Build e Deploy

```bash
# Build de produção
npm run build

# Deploy para GitHub Pages
npm run deploy
```

## Configuração

Antes do deploy, edite os seguintes arquivos com os dados reais do cliente:

**`src/utils/whatsapp.js`**
```js
const WHATSAPP_NUMBER = '5511999999999' // substitua pelo número real
```

**`index.html`**
- `<title>` e meta tags SEO
- URL canônica e Open Graph

**`src/sections/Footer.jsx`**
- Telefone, e-mail, cidade e horário de atendimento

## Estrutura

```
src/
├── components/     # Navbar, Card, SectionTitle, WhatsAppButton
├── sections/       # Uma pasta por seção da página
├── data/           # Arrays de conteúdo (serviços, marcas, etc.)
├── styles/         # Variáveis CSS e reset global
├── hooks/          # useScrollReveal
└── utils/          # whatsapp.js, icons.js
```
