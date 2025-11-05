/**
 * PROBLEMA 2: Ordenar lista de diccionarios con funciones lambda
 */

type Dictionary = Record<string, any>;

const sortByKey = (list: Dictionary[], key: string): Dictionary[] => {
    // Usamos sort con una función lambda que compara los valores del key indicado
    return [...list].sort((a, b) => {
        const valueA = a[key];
        const valueB = b[key];
        
        // Comparación genérica que funciona para números y strings
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
    });
};

// ============= EJEMPLO DE USO =============
console.log("=".repeat(60));
console.log("PROBLEMA 2: Ordenar lista de diccionarios por key");
console.log("=".repeat(60));

const phones: Dictionary[] = [
    { make: 'Nokia', model: 216, color: 'Black' },
    { make: 'Mi Max', model: 2, color: 'Gold' },
    { make: 'Samsung', model: 7, color: 'Blue' }
];

console.log("\nLista original:");
console.log(JSON.stringify(phones, null, 2));

// Ordenar por 'model'
const sortedByModel = sortByKey(phones, 'model');
console.log("\nLista ordenada por 'model':");
console.log(JSON.stringify(sortedByModel, null, 2));

// Ordenar por 'make'
const sortedByMake = sortByKey(phones, 'make');
console.log("\nLista ordenada por 'make':");
console.log(JSON.stringify(sortedByMake, null, 2));

// Ordenar por 'color'
const sortedByColor = sortByKey(phones, 'color');
console.log("\nLista ordenada por 'color':");
console.log(JSON.stringify(sortedByColor, null, 2));

console.log("\n" + "=".repeat(60));

export { sortByKey };
