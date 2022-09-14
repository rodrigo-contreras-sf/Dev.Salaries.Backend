# Dev Salaries Backend [<img align="right"  src="https://frsfco.cvg.utn.edu.ar/pluginfile.php/1/theme_snap/logo/1625768323/logo-utn-siglas.png" width="20%">](https://sanfrancisco.utn.edu.ar/)

>Backend con funciones CRUD realizado en el entorno de Node.js que almacena sueldos y aptitudes de programadores, con un agregado aparte de calcular y retornar sueldos estimativos en base a los almacenados para puestos con experiencia similar.
Este proyecto fue desarrollado en grupo como proyecto final para la materia "Metodologia en Sistemas I" de la Tecnicatura Universitaria en Programación

### Dependencias 

[![Node Version](https://img.shields.io/badge/nodejs-16.9.4-green.svg?logo=node.js&style=flat-square)](https://nodejs.org)
[![Docker Version](https://img.shields.io/badge/docker-_3.7-9cf.svg?logo=docker&style=flat-square)](https://www.docker.com/)
[![Typescript Version](https://img.shields.io/badge/typescript-_4.3.5-blue.svg?logo=typescript&style=flat-square)](https://www.typescriptlang.org/)
[![Express Version](https://img.shields.io/badge/express-_4.17.1-blueviolet.svg?logo=express&style=flat-square)](https://www.npmjs.com/package/express)
[![ShortId Version](https://img.shields.io/badge/shortid-_2.2.16-red.svg?logo=&style=flat-square)](https://www.npmjs.com/package/shortid)

### Pasos de instalación (en linux)

1. ir a la carpeta `server` con un `cd server`

2. Para poder instalar las dependencias y que el ide las detecte ejecutar un `yarn install` en caso que yarn no exista usar un `npm install`

3. Luego construir la imagen con el comando `sudo docker build .`

4. Nos movemos a la carpeta del docker con un `cd ../docker` y ejecutamos un `sudo docker-compose up --build`

5. En caso de mostrar algun error ejecutar un `docker exec -it server sh` y ejecutar un `yarn install`
