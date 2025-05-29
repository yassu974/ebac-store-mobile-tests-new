# 📱 ebac-store-mobile-tests

Repositório de testes automatizados para o aplicativo mobile da EBAC Store.

---

## 🔧 Tecnologias utilizadas

- **JavaScript**
- **Appium / WebDriverIO** – Testes mobile
- **Cypress** – Testes de API
- **Node.js / npm**
- **Jest** (opcional)

---

## 🧪 Estrutura do projeto
.
├── app/ # Arquivos .aab, .apks e keystore (ignorado no Git)
├── cypress/ # Testes de API com Cypress
├── tests/ # Testes mobile automatizados
├── .gitignore
├── package.json
└── README.md

---

## 🚀 Como rodar os testes

### 🔹 1. Instalar dependências

```bash
npm install

🔐 Assinatura do app
O app é assinado usando ebac.keystore (não versionado)

Arquivos .aab, .apk, .apks são ignorados via .gitignore

📂 Boas práticas
Não versionar arquivos binários grandes

Utilizar o .gitignore para *.apk, *.apks, *.aab

Separar testes de API e mobile em pastas distintas
