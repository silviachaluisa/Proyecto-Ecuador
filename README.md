*Problematica: Cortes de luz en el Ecuador*

Desarrollo del Sprint 0
- Definición de requerimientos y restricciones
•	El backend dispone de los siguientes perfiles: Administrador y Usuario
•	Se dispone de un backend y una serie de APIs públicas y privadas para su manipulación y consumo.
•	El perfil de Administrador puede registrarse e iniciar sesión.
•	El perfil Administrador puede gestionar su perfil
•	El perfil Administrador puede gestionar todos los usuarios (crear,modificar y eliminar).
•	El perfil Administrador configurar y monitoriar alertar y notificaciones.
•	El perfil Administrador puede generar reportes sobre el consumo energético.
•	El perfil Adminstrador puede comunicarse en tiempo real con usuarios para soporte y consultas.
•	El perfil usuario puede registrar e iniciar sesión.
•	El perfil usuario puede visualizar su consumo energético, recibir alertas y notificaciones.
•	Se dispone de un chat en tiempo real para el soporte y consultas entre Administrador y usuario.

Estructura del proyecto Backend
Herramientas a utilizar:
•	Visual Code Studio
•	Node.js
•	MongoDB

1) Preparació del ambiente de desarrollo en visual studio code
![image](https://github.com/JSaulB/Proyecto_Ecuador/assets/133398724/d96a84c1-eef6-46c2-9923-890ff59096b8)
2) Inicializar el proyecto con el comando "npm init -y"
![image](https://github.com/silviachaluisa/Proyecto-Ecuador/assets/133398724/ac8e061b-3f6b-4f01-9f78-bbe2a82471bb)
3) Configuración del archivo package.json
![image](https://github.com/silviachaluisa/Proyecto-Ecuador/assets/133398724/88253b97-44c5-4aff-a19c-78679ed0b880)
4)Dentro de package.json cambiar el tipo "commonsjs" a "module", para tener mejor mejor compatibilidad con las nuevas herramientas y tener un código mas limpio
![image](https://github.com/silviachaluisa/Proyecto-Ecuador/assets/133398724/fb8b6244-eb2b-4f53-a580-b3c3fa395ba9)
5) Creación de archivos env, gitignore, env.example
![image](https://github.com/silviachaluisa/Proyecto-Ecuador/assets/133398724/de4307d9-31f2-445d-943f-9eb8ba9de5bf)
6) Se crea la carpeta src y dentro de ella diferentes directorios como midlewares, mdoelos, controladores y rutas a su vez archivos database.js e index.js y server.js
![image](https://github.com/silviachaluisa/Proyecto-Ecuador/assets/133398724/937bd81a-241c-4413-afc2-ce1d4d21bb87)
7) Instalación de dependencias
![image](https://github.com/silviachaluisa/Proyecto-Ecuador/assets/133398724/b22fa563-5e09-4908-9d6d-e3eec38266cb)
8) Elaboración de la base de datos (Deploy utilizando MongoBD Atlas)
![image](https://github.com/silviachaluisa/Proyecto-Ecuador/assets/133398724/6168dde6-7f93-4c51-855d-3e465628e4ea)
9) Conexión con MongoDB, para dicha conexión se debe descargar el paquete mongoose, dentro de mongoDB se crea un nuevo cluster
![image](https://github.com/silviachaluisa/Proyecto-Ecuador/assets/133398724/05c5708e-5354-4ad5-a28e-1625402a2153)
10) Driver de conexión
![image](https://github.com/silviachaluisa/Proyecto-Ecuador/assets/133398724/d46019c7-45c3-45dd-8bc9-72b2033812d9)
11) Se crea un código que se debe pegar en VS Code que permite la conexión con mongoDB
![image](https://github.com/silviachaluisa/Proyecto-Ecuador/assets/133398724/695d6b85-2c33-4fdf-ac37-489586adc1a9)
12) Dentro de database.js, se realiza la conexión con mongoDB
![image](https://github.com/silviachaluisa/Proyecto-Ecuador/assets/133398724/06b90165-0b30-4ed8-986f-6ec92ad6eea5)

-Roles de usuarios
El backend dispone de los siguientes perfiles: Administrador y Usuario.
 El Administrador puede registrarse e iniciar sesión, gestionar su perfil y los perfiles de los usuarios regulares (creación, modificación y eliminación), configurar y monitorear alertas y notificaciones, generar reportes globales sobre el consumo energético, supervisar el estado de la base de datos y del sistema en general, y comunicarse en tiempo real con los usuarios regulares para soporte y consultas energéticas. 
El Usuario puede registrarse e iniciar sesión, gestionar su perfil, visualizar su consumo energético en tiempo real, recibir alertas y notificaciones sobre su consumo energético, generar reportes personalizados sobre su consumo energético, y comunicarse en tiempo real con los administradores para soporte y consultas energéticas.
