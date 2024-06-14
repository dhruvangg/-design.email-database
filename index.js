// import {
//     createTemplate, 
//     getTemplate, getTemplates, getTemplatesByQuery,
//     updateTemplate, updateTemplateById, updateManyTemplates, 
//     deleteTemplate, deleteTemplates
// } from './services/Template.js'

const { createBrand, getBrand } = require('./services/brand')

// export {
//     createTemplate,
//     updateTemplate, updateTemplateById, updateManyTemplates,
//     getTemplates, getTemplate, getTemplatesByQuery,
//     deleteTemplate, deleteTemplates
// };

const fetchData = async () => {
    try {
        const data = await getBrand({ name: "Hello" })
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData()