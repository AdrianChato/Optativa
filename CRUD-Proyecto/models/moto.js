const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const motoSchema = new Schema({
    marca: {
        type: String
    },
    modelo: {
        type: String
    },
    matricula: {
        type: String
    },
    cilindrada: {
        type: Number
    },
    itv_fecha: {
        type: Date
    },
    qr_codigo: {
        type: String
    },
    id_propietario: {
        type: String
    }
});

// nombre del modelo + colección EXACTO
const Moto = mongoose.model('moto', motoSchema, "motos");

module.exports = Moto;
