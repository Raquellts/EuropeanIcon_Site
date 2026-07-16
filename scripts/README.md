# Geração de CVs Padronizados

Este diretório contém ferramentas para gerar CVs em PDF padronizados para os participantes.

## Requisitos

- Node.js 18+
- Dependências do projeto já instaladas (`npm install`)

## Como gerar um CV

### 1. Certifique-se de que o participante está cadastrado

Os dados vêm do arquivo `app/_shared/data/participants.ts`. Para exportá-los para JSON:

```bash
node scripts/export-data.mjs
```

Isso gera `scripts/participants.json` com todos os participantes.

### 2. Gere o CV

**Para um participante específico:**

```bash
node scripts/generate-cv.mjs --from-json=scripts/participants.json --slug=catarina
```

**Para todos os participantes de uma vez:**

```bash
node scripts/generate-cv.mjs --all
```

**Usando argumentos diretos (sem JSON):**

```bash
node scripts/generate-cv.mjs \
  --slug=novo-participante \
  --name="Dra. Nome Sobrenome" \
  --role="Advogada Criminalista" \
  --email="email@exemplo.com" \
  --contact="+351 900 000 000" \
  --instagram="@usuario" \
  --description="Texto do currículo aqui..." \
  --areas="Direito Penal,Direito Civil,Direito da Família"
```

### 3. O PDF é gerado em

```
public/cvs/<slug>.pdf
```

O site automaticamente exibirá o botão **"Baixar CV"** na página do participante quando o arquivo existir.

---

## Personalizando o Layout

### Template HTML

O arquivo `scripts/cv-template.html` contém o design de referência do CV em HTML/CSS.

Para modificar o visual:
1. Edite `scripts/cv-template.html` com o novo design
2. Atualize `scripts/generate-cv.mjs` para refletir as mudanças no PDF

### Estrutura do PDF gerado

```
┌─────────────────────────────────────┐
│  ┌──────────┐   NOME                │
│  │  FOTO    │   Role / Título       │
│  │ (círculo)│                        │
│  └──────────┘   ✉ email             │
│                  ☎ contato          │
│                  ◉ @instagram       │
│  ──  ──  ──  ──  ──  ──  ──  ──  │
│  SOBRE                                │
│  [texto de description]              │
│                                       │
│  ÁREAS DE ATUAÇÃO                    │
│  [tags das áreas]                    │
└─────────────────────────────────────┘
```

### Cores

- **Dourado:** `#D4AF37`
- **Fundo do cabeçalho:** gradient `#1a1a2e → #16213e → #0f3460`
- **Texto do corpo:** `#4a4a4a`

---

## Fluxo completo para adicionar um novo CV

1. Adicione/edite os dados do participante em `app/_shared/data/participants.ts`
2. Coloque a foto em `public/images/participantes/<slug>.webp`
3. Exporte os dados: `node scripts/export-data.mjs`
4. Gere o CV: `node scripts/generate-cv.mjs --from-json=scripts/participants.json --slug=<slug>`

Ou, se o CV for um texto livre (não veio em arquivo):

```bash
node scripts/generate-cv.mjs \
  --slug=novo-participante \
  --name="..." \
  --role="..." \
  --email="..." \
  --contact="..." \
  --instagram="..." \
  --description="..." \
  --areas="Área 1,Área 2"
```

Pronto! O botão **"Baixar CV"** aparecerá automaticamente no site.
