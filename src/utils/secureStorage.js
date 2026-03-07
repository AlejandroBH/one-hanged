import CryptoJS from 'crypto-js';

// Clave secreta para cifrar la data (en un proyecto real más grande puede venir de variables de entorno)
const SECRET_KEY = import.meta.env.VITE_STORAGE_SECRET || 'h4ng3d_g4m3_s3cr3t_k3y_2026';

/**
 * Utilidad para interactuar con localStorage de forma cifrada (AES).
 * Previene que usuarios modifiquen el state del juego (puntos, palabras) fácilmente.
 */
export const secureStorage = {
    setItem: (key, value) => {
        try {
            // Si no es string (como JSON.stringify previo), lo convertimos por si acaso, aunque los hooks lo hacen.
            const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
            const encryptedValue = CryptoJS.AES.encrypt(stringValue, SECRET_KEY).toString();
            localStorage.setItem(key, encryptedValue);
        } catch (error) {
            console.error('Error al cifrar datos:', error);
        }
    },
    
    getItem: (key) => {
        try {
            const encryptedValue = localStorage.getItem(key);
            if (!encryptedValue) return null;
            
            const decryptedBytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
            const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);
            
            // Si la cadena está vacía tras descifrar, probablemente fue alterada manualmente
            if (!decryptedString) {
                console.warn(`Datos corruptos o alterados manualmente para la clave: ${key}`);
                return null;
            }
            
            return decryptedString;
        } catch (error) {
            console.error('Error al descifrar datos:', error);
            // Si alguien mete texto basura en localStorage, dará error al intentar descifrar
            return null;
        }
    },

    removeItem: (key) => {
        localStorage.removeItem(key);
    }
};
