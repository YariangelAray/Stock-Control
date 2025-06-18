const url = "http://localhost:8080/StockControl_API/api/";

/**
 * Realiza una petición GET a la API.
 * @param {string} endpoint - El endpoint de la API al que se desea hacer la petición.
 * @returns {Promise<Response>} - La respuesta de la API.
 */
export const get = async (endpoint)=> {
    return await fetch(url + endpoint);
}

/** * Realiza una petición POST a la API.
 * @param {string} endpoint - El endpoint de la API al que se desea hacer la petición.
 * @param {Object} objeto - El objeto que se enviará en el cuerpo de la petición.
 * @returns {Promise<Response>} - La respuesta de la API.
 */
export const post = async (endpoint, objeto) => {
    return await fetch(url + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objeto)
    });
}

/** * Realiza una petición PUT a la API.
 * @param {string} endpoint - El endpoint de la API al que se desea hacer la petición.
 * @param {Object} objeto - El objeto que se enviará en el cuerpo de la petición.
 * @returns {Promise<Response>} - La respuesta de la API.
 */
export const put = async (endpoint, objeto) => {
    return await fetch(url + endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objeto)
    });
}

/** * Realiza una petición DELETE a la API.
 * @param {string} endpoint - El endpoint de la API al que se desea hacer la petición.
 * @returns {Promise<Response>} - La respuesta de la API.
 */
export const del = async (endpoint) => {
    return await fetch(url + endpoint, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}