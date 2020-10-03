# Bot Dev IFRN

[![Discord](https://img.shields.io/discord/761669041760501760?label=discord&style=plastic)](https://discord.com/invite/Qk23Txv)
[![Production](https://img.shields.io/github/deployments/isaacmsl/bot-dev-ifrn/production?label=production&style=flat-square)]()

## Objetivo

[Discord's Bot](https://top.gg/) que monitora informações do Github [relacionadas ao IFRN](https://github.com/search?q=ifrn) e as compartilha no servidor [Dev IFRN](https://discord.gg/Qk23Txv).

## Como as atividades relacionadas ao IFRN podem ser detectadas?

As atividades são detectadas quando:
- Repositórios são criados com o nome contendo "ifrn" ou "dev-ifrn" 
- Issues e Pull Request são criados contendo tag "ifrn" ou "dev-ifrn"

## Contribuições

Pré-requisitos:

- [NPM](https://www.npmjs.com/)
- [Node.js LTS](https://nodejs.org/pt-br/)
- [Git](https://git-scm.com/) (ou terminal)
- [Github CLI](https://cli.github.com/) (Opcional)

Passo a passo:

1. Clone este repositório na sua máquina

- Github CLI `gh repo clone isaacmsl/bot-dev-ifrn`
- Git CLI `git clone https://github.com/isaacmsl/bot-dev-ifrn.git`
- Para programas como [Git](https://git-scm.com/), utilize o seguinte link `https://github.com/isaacmsl/bot-dev-ifrn.git`

2. No repositório, execute `npm install`
3. Crie uma nova aplicação no [Discord Developer Portal](https://discord.com/developers/applications)
4. Depois de criar sua aplicação, vá para "Bots" e adicione um novo bot
5. Copie o token do seu bot
6. Crie um arquivo `.env` na raiz do repositório contendo:
```
BOT_TOKEN=<TOKEN_DO_SEU_BOT>
```
7. Crie um novo servidor no Discord da forma que desejar
8. Clique com o botão direito no nome do servidor, copie o id e adicione uma nova linha no `.env` contento:
```
GUILD_ID=<ID_DO_SERVIDOR>
``` 
9. Nas configurações do seu perfil no Discord, Vá em "Aparências" e ative o "Modo Desenvolvedor"
10. Escolha um canal de texto que o Bot utilizará para enviar mensagens, clique com botão direito no canal e copie o ID
11. No arquivo `.env` adicione uma nova linha contendo:
```
CHANNEL_ID=<ID_DO_CANAL>
```
12. No [Discord Developer Portal](https://discord.com/developers/applications), selecione a aplicação criada anteriormente e vá em "OAuth2"
13. Em *SCOPE* selecione "bot"; *BOT PERMISSIONS* selecione "Administrator". Após marcar as opções anteriores, copie e acesse a URL disponibilizada
14. Selecione o servidor criado e autorize a entrada do bot
15. No repositório, execute o seguinte comando `npm run test`
16. Para manter o bot em execução use `npm run dev`

Obs.: `npm start` é reservado somente para produção.

Você está quase lá! Mas antes, leia [Como contribuir](https://github.com/isaacmsl/bot-dev-ifrn/wiki/Como-contribuir)

## Contribuidores

Parece que ninguém contribui ainda...
Interessado em contribuir? Acesse [Como contribuir](https://github.com/isaacmsl/bot-dev-ifrn/wiki/Como-contribuir)

## Autor

| [<img src="https://avatars3.githubusercontent.com/u/31693006?s=460&v=4" width=115><br><sub>@isaacmsl</sub>](https://github.com/isaacmsl) 
| :---: |