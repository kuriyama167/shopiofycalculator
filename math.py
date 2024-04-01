import numpy as np
import matplotlib.pyplot as plt

# Definir los valores de c que quieres usar
c_values = [0, 1, 2, 3]

# Crear un rango de valores para x
x = np.linspace(-3, 3, 400)

# Graficar las curvas de nivel para cada valor de c
for c in c_values:
    # Calcular los valores correspondientes de y
    y_positive = np.sqrt(9 - x**2 - c**2)
    y_negative = -np.sqrt(9 - x**2 - c**2)
    
    # Graficar las curvas de nivel
    plt.plot(x, y_positive, label=f'c={c}')
    plt.plot(x, y_negative, label=f'c={c}')

# Agregar etiquetas y leyenda
plt.xlabel('x')
plt.ylabel('y')
plt.title('Curvas de nivel de $f(x, y) = \sqrt{9 - x^2 - y^2}$')
plt.legend()

# Mostrar el gráfico
plt.grid(True)
plt.axis('equal')
plt.show()
