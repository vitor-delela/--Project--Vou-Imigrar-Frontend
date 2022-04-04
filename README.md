<p align="center">
  <a href="https://tools.ages.pucrs.br/vou-imigrar/vou-imigrar-wiki">
    <img src="src/assets/vou-imigrar-logo.png" alt="Vou Imigrar" width="200" height="80"/>
  </a>
</p>

# Pré-requisitos
* [NPM](https://www.npmjs.com/package/node/v/13.14.0) (v 13.14.0)

# Executar
## Clonar repositório em sua pasta
```bash 
$ cd PLUGIN_FOLDER
$ git clone http://tools.ages.pucrs.br/vou-imigrar/vou-imigrar-front-end.git
$ cd vou-imigrar-front-end
```

## Instalar dependências do projeto
###### O comando tem que ser utilizado no diretório do projeto.
```bash
$ npm install
```

## Executar o projeto no ambiente de desenvolvimento
```bash
$ npm run dev
```

# Git Workflow

### Branches

O padrão utilizado para nomenclatura da branches será em inglês e deve seguir o padrão feat/nome-da-feature, 
onde os nomes podem ser retirados diretamente do [Trello](https://trello.com/b/kPW0AqTb/vou-imigrar-ages). 
Caso seja necessário alguma correção, deverá ser modificado o prefixo para "fix", exemplo fix/nome-da-feature.


Primeiramente vá para a branch develop e atualize para a versão atual:
```
git checkout develop
git pull
```
Caso a branch da feature ainda não estiver criada utilize:
```
git checkout -b nome-da-branch
```
### Commits
Após executar este comando você estará na nova branch, faça as alterações necessárias no código e commite as mudanças:
```
git add .
git commit -m "comentario-do-commit"
```
O comentário deve descrever o que foi alterado no código e deverá ser em inglês. Não hesite em realizar vários commits, assim podemos o desenvolvimento fica melhor documentado.


Após, se for o primeiro commit dessa branch, para que ela troque de local para remote:
```
git push --set-upstream origin nome-da-branch
```
Caso contrário realize um:
```
git push
```
Lembre de sempre enviar seus commits para o remoto com o uso do `git push` após realizar seu trabalho, assim os outros desenvolvedores terão sempre as ultimas atualizações do código.
### Merge requests

Depois de uma task ter sido desenvolvida e estiver pronta de acordo com os critérios de aceitação, é necessário que a mesma seja enviada para a branch de desenvolvimento. 
Para isso é necessário se certificar que não terá conflitos, siga os seguintes passos:
```
git checkout develop
git pull
git checkout nome-da-branch
git merge develop
```
Resolva os conflitos caso ocorra, após resolvê-los, envie as alterações para o Gitlab:
```
git push
```
Abra o merge request da sua branch para a develop, no título coloque o nome da feature que foi desenvolvida,
e descreva brevemente o que foi realizado no campo de descrição.
