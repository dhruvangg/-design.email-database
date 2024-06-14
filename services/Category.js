const { Category } = require('../models')

module.exports = {
    getCategory: async () => {
        try {
            const category = await Category.findAll();
            return { success: true, data: category };
        } catch (error) {
            return { success: false, message: error.message };
        }
    },
    createCategory: async ({ name }) => {
        try {
            if (!name || typeof name !== 'string' || name.trim() === '') {
                throw new Error('Invalid brand name');
            }
            const newCategory = await Category.create({ name });
            return { success: true, data: newCategory };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }
}