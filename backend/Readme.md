DESCRIPCION DEL PROYECTO
Plataforma de gestion de eventos
ESTRUCTURA DEL PROYECTO
*PRUEBAPRACTICA
**backend: servidor express con postgress
***node_modules
***src
****
***package.json
***Readme.md
***tsconfig.json

*frontend: una interfaz de usuario con angular
** Requisitos 
1. tener Node.js instalado
1. iniciar el servidor npm init -y
2. instalar dependencias 
npm install express cors pg dotenv

npm install -D typescript @types/express @types/cors @types/node nodemon ts-node
npm install -g @angular/cli

npm install --save-dev typescrip
este typescrip me genero problemas a la hora de instalar asi q con este comando lopude hacer bien
npx tsc --init, ainque luego lo modifique
npm install -D @types/node @types/pg tuve q instalar esta dependencia porque no me reconocia edas librerias
3. Proceso al llevar a cabo el desarrollo
la conexion a base de datos y el backend en general es muy similar a otros lenguajes