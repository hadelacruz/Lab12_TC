/**
 * PROBLEMA 3: Calcular matriz transpuesta usando funciones lambda
 */

type Matrix = number[][];

/**
 * Función que calcula la transpuesta de una matriz usando funciones lambda
 */
const transpose = (matrix: Matrix): Matrix => {
    if (matrix.length === 0 || matrix[0].length === 0) return [];
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Usar map con funciones lambda para crear la transpuesta
    // Para cada columna j, creamos una fila que contiene matrix[i][j] para cada i
    return Array.from({ length: cols }, (_, j) => 
        Array.from({ length: rows }, (_, i) => matrix[i][j])
    );
};


const printMatrix = (matrix: Matrix, name: string): void => {
    console.log(`\n${name}:`);
    matrix.forEach(row => {
        console.log(row.join('\t'));
    });
};

// ============= EJEMPLO DE USO =============
console.log("=".repeat(60));
console.log("PROBLEMA 3: Calcular matriz transpuesta");
console.log("=".repeat(60));

// Matriz original del ejemplo
const X: Matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

printMatrix(X, "Matriz original X");

// Calcular transpuesta
const XT = transpose(X);
printMatrix(XT, "Matriz transpuesta XT");

console.log("\n" + "-".repeat(60));
console.log("Ejemplo adicional: Matriz no cuadrada");
console.log("-".repeat(60));

const Y: Matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];

printMatrix(Y, "Matriz Y (2x4)");

const YT = transpose(Y);
printMatrix(YT, "Matriz transpuesta YT (4x2)");

console.log("\n" + "=".repeat(60));

export { transpose };
