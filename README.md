|                                       |                                                                                                        |
|:-------------------------------------:|:------------------------------------------------------------------------------------------------------:|
| ![image](https://user-images.githubusercontent.com/50783727/225102056-fa61a5de-30a2-4122-ab53-fd14538954f7.png) | ![image](https://user-images.githubusercontent.com/50783727/225102301-aca7ab7c-2284-496a-b6fa-cdd54b69b975.png)|

<br />
<h1 align='center'>Embaralhador de cartas</h1>
<br />

Nessa aplicação, o usuário realiza um login, informando seu nome, e então tem acesso ao sistema. Esse sistema consiste em um embaralhador de cartas, que embaralha as cartas disponíveis na tela. Ele inicia com 5 cartas e é possível adicionar até 3 cartas, totalizando, no máximo, 8 cartas disponíveis para serem embaralhadas. As cartas disponíveis possuem pesos, variando de 1 à 10.

Esse sistema consome a api gratuita [Open Collective](https://docs.opencollective.com/help/), listando os membros do tipo *organizations* do coletivo *sustainoss* ([Link](https://docs.opencollective.com/help/contributing/development/api/members))

<br />


## Acesse rápido
1. [Protótipo](#prototipo)
2. [Tecnologias utilizadas](#tech)
3. [Bibliotecas utilizadas](#lib)
4. [Como testar](#rodar)

<br /> <br />

## 🎨 Protótipo <a name="prototipo"></a>
Para essa aplicação, inicialmente desenvolvi um protótipo utilizando a ferramenta Figma.

Link: [Protótipo](https://www.figma.com/proto/qWyy9G2bEqp3mC7hMwG8Sv/Untitled?node-id=207%3A17&scaling=scale-down&page-id=207%3A2&starting-point-node-id=207%3A17)


<br /> <br />

## 👩🏽‍💻 Tecnologias utilizadas <a name="tech"></a>
Essa é uma aplicação construída em React
<br /><br />
<div style="display: flex; align-items: center">
  <img src="https://user-images.githubusercontent.com/50783727/225116442-3cd867df-f27b-4475-b1ad-94f0a5dafe3f.png" style="width: 100px" />
</div>


<br /> <br />

## 📚 Bibliotecas utilizadas <a name="lib"></a>
Seguem listadas aqui as dependências externas utilizadas pelo projeto e seus objetivos aqui:
- **React:** Foi a tecnologia utilizada para construir essa aplicação.
- **React-hook-form:** Para lidar com o formulário de login.
- **React-redux:** Para gerenciamento de estado. Nesse caso, o estado se refere ao nome do usuário logado que deve ser compartilhado na aplicação. Este é distribuído com o redux e armazenado no localStorage, portanto, faz-se necessário também um reducer para logout.
- **Styled-components:** Permite criar componentes estilizados escrevendo CSS no JavaScript, foi com ela que lidei com os estilos de layout.

<br />

### ⚡Dependências de desenvolvimento
As dependências de desenvolvimento não são essenciais para o funcionamento do sistema, mas são essenciais para a qualidade, escalabilidade e a padronização do código.
Aqui, foram utilizadas as seguintes:

<br />

 - **Lint-staged, Commitlint, Commitizen e Husky:** Essas 4 dependências trabalham em conjunto garantindo a padronização de código antes da realização do commit, através do script ``yarn commit``. A primeira valida o processo de linting nos arquivos; a segunda garante a padronização da mensagem de commit no formato convencional; a terceira cria um interface no terminal para a criação dessa mensagem de commit, a fim de auxiliar nesse processo; e a quarta permite acesso aos hooks do git para essa automatização.
 - **Testing-library e Jest:**  Essas 2 dependências permitem realizar os testes unitários e integrados na aplicação. Como se trata de um projeto pequeno, foi inserido no script de commit também a verificação dos testes.
 - **Eslint e Prettier:**  Essas 2 dependências fazem a análise estática do código, garantindo a padronização.
 

<br /> <br />

## 🚀 Como testar <a name="rodar"></a>
1. Clone este repositório em sua máquina
2. Instale as dependências com ``[npm|yarn] install``
3. Caso não haja compatibilidade com versões do node e não esteja utilizando nvm, rode o comando acima com ``[npm|yarn] install --ignore-engines``
4. Inicie o projeto ``[npm|yarn] start``
