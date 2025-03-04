const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: Number, required: true },
    status: { type: String, enum: ['in-progress', 'completed'], default: 'in-progress' },
    images: [{ type: String }],
});

module.exports = mongoose.model('Project', projectSchema);