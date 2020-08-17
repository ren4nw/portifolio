# Meu portifólio

[![Build Status](https://api.travis-ci.org/ren4nw/portifolio.svg?branch=master)](https://travis-ci.org/github/ren4nw/portifolio)

Este é meu primeiro portfólio, você é livre para utilizar-ló e fazer suas alterações 😄.  
Foi utilizado as seguintes tecnologias para a construção deste projeto:
  - HTML5
  - SASS
  - Javascript
  - Gulp
  - Travis CI

## Gulp

O gulp é uma ferramenta para criação de build, é bem simples de utilizar, existem diversos plugins para diferentes coisas, neste projeto foi utilizado os seguintes plugins:

  - gulp-sass
  - gulp-babel
  - gulp-concat
  - gulp-htmlmin
  - gulp-uglify
  - gulp-uflifycss
  - gulp-concat

O build utilizado neste projeto, pega todos os arquivos sass e transforma em um css, pois o sass é um pré-processador o browser não consegue entender, o babel foi utilizado para transpilar nosso código javascript que utiliza os recursos mais novos do ECMAScript e manter uma maior compatibilidade entre os browsers, o gulp-concat junta todos os arquivos da nossa task em um só, os plugins gulp-htmlmin, gulp-uglify, gulp-uglifycss apenas diminuem o tamanho dos arquivos, fazendo com que o resultado final tenha apenas uma linha, o que torna o acesso a página mais rápido.

## Travis CI

O travis ci é um serviço na núvem que nos permite realizar o processo de CD (Continuos Deployment) intregado ao Github e Gitlab, apenas com um push na branch master e nosso site está disponível.

## Instação do projeto
Requisitos:
  - NodeJs
  - npm ou yarn

#### Instalar dependências
``` yarn install ```
ou
``` npm install ```

#### Depois disto está tudo pronto 😍
No ambiente de desenvolvimento utilize:  
``` yarn start ``` ou ``` npm start ```  

No ambiente de produção utilize:  
``` yarn build ``` ou ``` npm run ```

## Licença
MIT