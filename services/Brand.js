const { Brand } = require('../models');

module.exports = {
    getBrand: async () => {
        try {
            const brands = await Brand.findAll();
            return { success: true, data: brands };
        } catch (error) {
            return { success: false, message: error.message };
        }
    },
    createBrand: async ({ name }) => {
        try {
            if (!name || typeof name !== 'string' || name.trim() === '') {
                throw new Error('Invalid brand name');
            }
            const newBrand = await Brand.create({ name });
            return { success: true, data: newBrand };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }
}

