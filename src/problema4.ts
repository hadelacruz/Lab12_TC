/**
 * PROBLEMA 4: Eliminar elementos de una lista usando funciones lambda
 * 
 * Escribir un programa que elimine elementos indicados de una lista, usando funciones lambda.
 * Los elementos a borrar deben indicarse como una lista, y la salida debe ser la lista de
 * elementos remanentes.
 */

/**
 * Función que elimina elementos de una lista usando funciones lambda
 * Usa reduce para construir la nueva lista de forma funcional
 * 
 * @param originalList - Lista original de elementos
 * @param toRemove - Lista de elementos a eliminar
 * @returns Nueva lista sin los elementos indicados
 */
const removeElements = <T>(originalList: T[], toRemove: T[]): T[] => {
    // Convertir toRemove a Set para búsquedas más eficientes O(1)
    const removeSet = new Set(toRemove);
    
    // Usar reduce para construir la nueva lista
    return originalList.reduce<T[]>((acc, item) => {
        // Si el item no está en removeSet, lo agregamos al acumulador
        return removeSet.has(item) ? acc : [...acc, item];
    }, []);
};

// ============= EJEMPLO DE USO =============
console.log("=".repeat(60));
console.log("PROBLEMA 4: Eliminar elementos de una lista");
console.log("=".repeat(60));

// Lista inicial del ejemplo
const colors = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];

// Lista de elementos a borrar
const toRemove = ['amarillo', 'cafe', 'blanco'];

console.log("\nLista original:");
console.log(colors);

console.log("\nElementos a eliminar:");
console.log(toRemove);

// Eliminar elementos
const result = removeElements(colors, toRemove);

console.log("\nLista resultante:");
console.log(result);

// Ejemplo adicional con números
console.log("\n" + "-".repeat(60));
console.log("Ejemplo adicional con números:");
console.log("-".repeat(60));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersToRemove = [2, 4, 6, 8, 11];

console.log("\nLista original:");
console.log(numbers);

console.log("\nNúmeros a eliminar:");
console.log(numbersToRemove);

const numbersResult = removeElements(numbers, numbersToRemove);
console.log("\nLista resultante:");
console.log(numbersResult);

console.log("\n" + "=".repeat(60));

// Exportar la función
export { removeElements };
