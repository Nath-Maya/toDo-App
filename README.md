# toDo App

![GitHub commit activity](https://img.shields.io/github/commit-activity/t/Nath-Maya/toDo-App) ![GitHub language count](https://img.shields.io/github/languages/count/Nath-Maya/toDo-App?color=red) ![GitHub top language](https://img.shields.io/github/languages/top/Nath-Maya/toDo-App?color=) ![GitHub repo size](https://img.shields.io/github/repo-size/Nath-Maya/toDo-App?color=orange)


## Descripción

ToDo App es una aplicación simple para gestionar tareas. Permite a los usuarios agregar, editar, eliminar y marcar tareas como completadas. Esta aplicación está construida con Angular y utiliza Firebase para el almacenamiento de datos.

## Servidor de desarrollo

Ejecute `ngserve` para un servidor de desarrollo. Navegue hasta `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos fuente.

### ☑️ Funciones y características 

✅  **Agregar Tareas:**  Permite a los usuarios agregar nuevas tareas.
✅  **Editar Tareas:**  Los usuarios pueden editar las tareas existentes.
✅  **Eliminar Tareas:**  Las tareas pueden ser eliminadas.
✅  **Marcar Tareas como Completadas:**  Los usuarios pueden marcar las tareas como completadas.
✅  **Persistencia en la Nube:**  Utiliza Firebase para almacenar y sincronizar tareas en la nube.

## 🛠️ Tecnologías & Lenguajes

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
 
 ## 💻 Instalación

 **1. Clonar el repositorio**
 ```
git clone https://github.com/Nath-Maya/toDo-App.git

```

**2. Instalar dependencias**

Ejecute el siguiente comando en la terminal, el cual instalara las dependencias contenidas en el package.json
```
npm install
```
**3. Iniciar el servidor de desarrollo con Angular CLI**

```
ng serve
```

**4. Abrir la aplicación en el navegador:**
```
http://localhost:4200
```

## 🚧 Build

Ejecute `ng build` para construir el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

##  ⬆️ Deploy

**1. Instala Firebase CLI:**

```
npm install -g firebase-tools
```
**2. Inicia sesión en Firebase:**

```
firebase login
```
**3. Inicializa Firebase en tu proyecto:**
```
firebase init
```
- Selecciona "Hosting" y configura la carpeta de publicación como dist/todo-app.
- Configura la aplicación como una aplicación de una sola página (SPA) si es necesario.

**4. Despliega la aplicación:**

```
firebase deploy
```

### 🔐 Licencia:

Este proyecto está licenciado bajo la Licencia MIT. Mira el archivo [LICENSE](./LICENSE) para más detalles.


### 🤝 Cómo Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para cualquier mejora o corrección.

- Fork el repositorio
- Crea una rama de la característica (git checkout -b feature/nueva-caracteristica)
- Commit tus cambios (git commit -m 'Añadir nueva característica')
- Push a la rama (git push origin feature/nueva-caracteristica)
- Abre un Pull Request