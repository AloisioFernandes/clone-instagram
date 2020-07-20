# Clone Instagram
 Clone da interface do instagram

## Requisitos
    Instalar o Git
    https://git-scm.com/downloads

    Instalar o NodeJs
    https://nodejs.org/en/

    Installar o Expo CLI
    https://docs.expo.io/get-started/installation/

## Primeiro passo - baixar o projeto
Faça download do repositório acima ou use o seguinte comando na pasta onde deseja baixar o projeto:
 - git clone https://github.com/AloisioFernandes/clone-instagram.git

## Segundo passo - instalar dependências
Digite o seguinte comando dentro da pasta mobile através do terminal:
 - npm install

## Terceiro passo - configurar para android
Para iniciar o app em um dispositivo android, acesse a pasta mobile e execute o seguinte comando no terminal:
 - adb reverse tcp:3000 tcp:3000

ou acesse o arquivo index.js dentro src/pages/Feed e verifique a linha 22. Altere 'localhost' para o endereço de ip da sua rede. Ex
 - http://192.168.0.32:3000/feed?_expand=author&_limit=5&_page=${pageNumber}

## Quarto passo - iniciar servidor
Dentro da pasta mobile, digite o seguinte comando no terminal: 
 - npx json-server server.json -d 1000 -w

## Quinto passo - iniciar o app
Dentro da pasta mobile, digite o seguinte comando no terminal: 
 - expo start

Utilize o aplicativo do expo ou um emulador para executar o app.