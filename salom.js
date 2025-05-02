// salom.js

// A simple greeting function with validation
function greet(name) {
    if (typeof name !== 'string' || name.trim() === '') {
        return 'Salom, mehmon!';
    }
    return `Salom, ${name.trim()}!`;
}

// Example usage
console.log(greet("Dunyo")); // Salom, Dunyo!
console.log(greet(""));      // Salom, mehmon!
console.log(greet());        