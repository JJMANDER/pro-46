let acle_en_x = 0
/**
 * Declaración de la variable para almacenar la inclinación
 */
basic.forever(function () {
    // Captura el valor del acelerómetro en el eje X
    acle_en_x = input.acceleration(Dimension.X)
    // CORRECCIÓN DEL RANGO: Si está entre -50 y 50, está nivelado
    if (acle_en_x >= -50 && acle_en_x <= 50) {
        // Muestra el chulito (Nivelado)
        basic.showIcon(IconNames.Yes)
    } else {
        // Si está a la izquierda (menor a -50), te pide corregir hacia la DERECHA
        if (acle_en_x < -50) {
            // Flecha al Este (Derecha)
            basic.showArrow(ArrowNames.East)
        } else {
            // Si está a la derecha (mayor a 50), te pide corregir hacia la IZQUIERDA
            // Flecha al Oeste (Izquierda)
            basic.showArrow(ArrowNames.West)
        }
    }
})
