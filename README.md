# Laboratorio 12 - Teoría de Computación
## Programación Funcional con TypeScript

Este proyecto implementa soluciones a problemas de programación funcional usando TypeScript, aprovechando sus capacidades como lenguaje multiparadigma.

## 📋 Contenido

- **Problema 2**: Ordenar lista de diccionarios con funciones lambda
- **Problema 3**: Calcular matriz transpuesta usando funciones lambda
- **Problema 4**: Eliminar elementos de una lista usando funciones lambda

## 🚀 Instalación

```bash
npm install
```

## 💻 Uso

### Ejecutar todos los problemas:
```bash
npm run dev
```

### Ejecutar problemas individuales:
```bash
npm run problema2  # Ordenar diccionarios
npm run problema3  # Matriz transpuesta
npm run problema4  # Eliminar elementos
```

### Compilar el proyecto:
```bash
npm run build
npm start
```

## 📝 Problemas Resueltos

### Problema 2: Ordenar Lista de Diccionarios

Ordena una lista de diccionarios (objetos) con respecto a un key indicado usando funciones lambda.

**Ejemplo:**
```typescript
const phones = [
    { make: 'Nokia', model: 216, color: 'Black' },
    { make: 'Mi Max', model: 2, color: 'Gold' },
    { make: 'Samsung', model: 7, color: 'Blue' }
];

const sorted = sortByKey(phones, 'model');
// Resultado: ordenado por modelo [2, 7, 216]
```

### Problema 3: Matriz Transpuesta

Calcula la matriz transpuesta de una matriz dada (lista de listas) usando funciones lambda.

**Ejemplo:**
```typescript
const X = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const XT = transpose(X);
// Resultado: transpuesta [[1,4,7], [2,5,8], [3,6,9]]
```

### Problema 4: Eliminar Elementos de Lista

Elimina elementos específicos de una lista usando funciones lambda.

**Ejemplo:**
```typescript
const colors = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
const toRemove = ['amarillo', 'cafe', 'blanco'];

const result = removeElements(colors, toRemove);
// Resultado: ['rojo', 'verde', 'azul', 'gris', 'negro']
```

## 🎯 Características de Programación Funcional

- **Funciones Lambda**: Uso extensivo de arrow functions de TypeScript
- **Inmutabilidad**: Las funciones no modifican los datos originales
- **Funciones de Orden Superior**: `map`, `filter`, `reduce`, `sort`
- **Composición de Funciones**: Funciones que retornan funciones
- **Tipado Estático**: Aprovecha el sistema de tipos de TypeScript

## 🛠️ Tecnologías

- TypeScript 5.3
- Node.js
- ts-node (para ejecución directa)

## 📁 Estructura del Proyecto

```
Lab12_TC/
├── src/
│   ├── index.ts       # Punto de entrada principal
│   ├── problema2.ts   # Ordenar diccionarios
│   ├── problema3.ts   # Matriz transpuesta
│   └── problema4.ts   # Eliminar elementos
├── dist/              # Archivos compilados (generado)
├── package.json
├── tsconfig.json
└── README.md
```

## 👤 Autor

Laboratorio 12 - Teoría de Computación
