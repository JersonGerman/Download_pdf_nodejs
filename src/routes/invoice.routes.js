const { Router } = require('express');
const { buildPDF } = require('../libs/pdfKit');

const router = Router();

router.get('/', (req, res) => {
    buildPDF(res);
});

module.exports = { invoiceRouter: router }