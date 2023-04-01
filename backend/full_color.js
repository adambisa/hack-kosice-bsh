import { shipper } from "./shipper";

export async function full_color (color, send = true) {
    const matrix = new Array(48).fill([0, 0, 0, 0])

    for (let i = 0; i < 48; i++) {
        matrix[i] = color;
    }
    
    if (send) {
        shipper(matrix);
    }
    return matrix;
}
