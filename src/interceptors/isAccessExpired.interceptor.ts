import axios from 'axios';

// Crea un interceptor para manejar respuestas erróneas
axios.interceptors.response.use(
  (response) => response, // Si no hay error, pasa la respuesta
  (error: unknown) => {
    // Si hay un error, manejalo aquí
    return handleAccessExpiredError(error); // Llama a tu función para manejar el error
  }
);

const handleAccessExpiredError = (error: any) => {
  // Verificamos si el error tiene respuesta
  if (error.response) {
    const token = error.response.headers['token'];

    if (token) {
      if (error.response.status === 403) {
        // Si el código es 403, retornamos 1 para hacer la petición nuevamente
        return 1;
      } else {
        // Si el código es diferente a 403, retornamos 2
        return 2;
      }
    } else {
      // Si no hay token en la respuesta, retornamos 3 (cerrar sesión o lógica correspondiente)
      // Cerrar sesión aquí si es necesario
      return 3;
    }
  } else {
    // Si no hay respuesta (por ejemplo, en caso de un error de red), retornamos 3
    return 3;
  }
};
