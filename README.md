# Conduit - Plataforma de Blogs

Conduit es una plataforma de blogs donde los usuarios pueden registrarse, iniciar sesión, escribir y compartir artículos, así como leer publicaciones de otros usuarios. Es una aplicación de demostración diseñada para practicar el desarrollo de aplicaciones web modernas con diversas tecnologías.

## Características

- Registro e inicio de sesión de usuarios
- Creación, edición y eliminación de artículos
- Seguimiento de otros usuarios
- Visualización de artículos según etiquetas y feeds personalizados
- Comentarios en publicaciones
- Perfil de usuario con artículos y estadísticas

## Tecnologías Utilizadas

Conduit está desarrollada con las siguientes tecnologías:

- **Frontend**: Angular
- **Backend**: API RESTful (Node.js)
- **Base de Datos**: MongoDB

## Requisitos Previos

Para correr el proyecto localmente, necesitarás:

- Node.js (versión 14 o superior)
- NPM (Node Package Manager)

## Instalación

Sigue los siguientes pasos para ejecutar Conduit localmente:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu_usuario/conduit
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd conduit
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Corre el servidor de desarrollo:

    ```bash
    npm start
    ```

5. Abre tu navegador en `http://localhost:4200` para ver la aplicación en funcionamiento.

## Uso

Una vez que el proyecto está corriendo, puedes:

- **Registrarte**: Crea una nueva cuenta de usuario.
- **Iniciar sesión**: Accede con tu cuenta y comienza a escribir artículos.
- **Crear un artículo**: Comparte tus ideas con la comunidad.
- **Comentar**: Agrega comentarios a los artículos que más te interesen.
- **Seguir usuarios**: Sigue a otros autores para ver sus artículos en tu feed personalizado.

## Pruebas

Para ejecutar las pruebas automatizadas (si están disponibles), puedes utilizar el siguiente comando:

```bash
npm test
