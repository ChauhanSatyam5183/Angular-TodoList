# Angular Notes (Basic to Intermediate)

---

## 🔹 Introduction

Angular is a **Single Page Application (SPA)** framework used to build dynamic web applications.

---

## 🔹 Setup & Installation

### Step 1: Install Node.js

Download and install Node.js.

### Step 2: Install Angular CLI

```bash
npm i -g @angular/cli
```

### Step 3: Fix PowerShell Issue (Windows)

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 🔹 Creating Angular Project

```bash
ng new chw-todo-list
cd chw-todo-list
ng serve
```

👉 Open browser:
http://localhost:4200

---

## 🔹 Basic Understanding

* Angular creates a **Single Page Application**
* Modify `app.component.html` to test UI changes

---

## 🔹 Bootstrap Integration

### Install Bootstrap

```bash
npm install bootstrap
```

### Add in `angular.json`

```json
"styles": [
  "src/styles.css",
  "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

---

## 🔹 Generate Components

```bash
ng generate component mycomponent/todos
```

---

## 🔹 Data Binding

```html
{{ yourVariable }}
```

---

## 🔹 Loop in Angular (*ngFor)

```html
<ul>
  <li *ngFor="let todo of todos">
    {{todo.sno}} - {{todo.title}} - {{todo.description}}
  </li>
</ul>
```

---

## 🔹 Conditional Rendering (*ngIf with else)

```html
<div *ngIf="todos.length > 0; else noTodos">

  <div *ngFor="let todo of todos">
    <app-todo-item 
      [todo]="todo"
      (todoDelete)="deleteTodo($event)">
    </app-todo-item>
  </div>

</div>

<ng-template #noTodos>
  <h4>No Todos to display</h4>
</ng-template>
```

---

## 🔹 Local Storage Handling (SSR Safe)

```ts
constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

ngOnInit() {
  if (isPlatformBrowser(this.platformId)) {

    const localitem = localStorage.getItem("todos");

    if (localitem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(localitem);
    }
  }
}

deleteTodo(todo: Todo) {
  const index = this.todos.indexOf(todo);

  if (index !== -1) {
    this.todos.splice(index, 1);
  }

  localStorage.setItem("todos", JSON.stringify(this.todos));
}

addTodo(todo: Todo) {
  todo.sno = this.todos.length + 1;

  this.todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(this.todos));
}
```

---

## 🔹 Routing

### `app.routes.ts`

```ts
export const routes: Routes = [
  { path: '', component: Todos },
  { path: 'about', component: About }
];
```

---

## 🔹 HTTP Interceptor (Concept)

* Used to intercept HTTP requests/responses
* Useful for:

  * Adding tokens (JWT)
  * Logging
  * Error handling

---

## 🔹 Build Command

```bash
ng build --prod
```

---

## 🔹 Summary

* Angular CLI setup
* Component creation
* Data binding (`{{ }}`)
* Structural directives (`*ngFor`, `*ngIf`)
* LocalStorage integration
* Routing setup
* Bootstrap integration

---

## 🔹 Future Enhancements

* Add Edit Todo feature
* Add checkbox (mark complete)
* Backend integration (Spring Boot)
* Authentication with HTTP Interceptor

---
