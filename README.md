# Desafio Técnico - *FrontEnd WeFit*

## Boas vindas ao repositório do Desafio Técnico - Case da empresa WeFit

Esse desafio foi proposto pela time de recrutamento da empresa WeFit, em que foram requisitadas habilidades necessáiras para desenvolver um projeto **Front-End**. O resultado final é a solução do teste de javascript **wefit-test-js-assets** e aplicação em React de uma plataforma para **compras de filme** que está na pasta **wefit-react-challenge**, seguindo bem o que está no Figma proposto.

---

## 📌 Sumário

- [Entregáveis](#entregáveis)
- [Uso do projeto localmente](#uso-do-projeto-localmente)
 
---


## 🚀 Entregáveis

A solução do desafio front-end React foram utilizadas as seguintes tecnologias principais:

### Front-End
[React](https://reactjs.org/)<br>
[Typescript](https://www.typescriptlang.org/)<br>
[JsonServer](https://www.npmjs.com/package/json-server)<br>
[Axios](https://axios-http.com/docs/intro)<br>
[Jotai](https://jotai.org/)<br>
[ReactQuery](https://react-query-v3.tanstack.com/)<br>


Para o desafio do JavaScript eu tentei resolver os testes diferentes formas usando lógica de programação. E na aplicação React tentei trazer algumas tecnologias novas que ajudam bastante no desenvolvimento.

---

## ⬇️ Uso do projeto localmente

### Clone do repositório

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir desafio-wefit
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd desafio-wefit
  git clone https://github.com/dudawiltiner/wefit-frontend-challenge.git
```

### Instalação das dependências

3. Entre no diretório criado após a clonagem do repositório.
```javascript
  cd desafio-wefit/wefit-frontend-challenge
```

4. Instale as dependencias.
```javascript
  yarn
```

5. Instale o jason-server globalmene.
```javascript
  npm -g json-server
```

6. Realize o start da API.
```javascript
  json-server --watch services/db.json
```

7. Realize o start da Aplicacao.
```javascript
  yarn run dev
```

