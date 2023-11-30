const express = require('express');

// Routers
const { invoiceRouter } = require('./routes/invoice.routes');

const app = express();

app.use('/api/v1/invoices', invoiceRouter);

module.exports = { app }