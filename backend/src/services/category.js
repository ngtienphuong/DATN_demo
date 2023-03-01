import db from '../models'

export const getAllCategory = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Category.findAll({
            where: [ {
                trash: 0
            }]
        })

        resolve({
            err: 0,
            mes: 'Got',
            categoryData: response
        })
    } catch (error) {
        reject(error)
    }
})

export const getOneCategory = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Category.findOne({
            where: [{id: id}]
        })
        resolve({
            err: 0,
            mes: 'Got',
            categoryData: response
        })
    } catch (error) {
        reject(error)
    }
})

export const addCategory = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Category.findOrCreate({
            where: [{
                name: body.name
            }],
            defaults: {
                ...body
            }
        })

        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Created successfully' : 'Category already exists',
        })
    } catch (error) {
        reject(error)
    }
})

export const EditCategory = (body) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Category.update(
            {
                ...body
            },
            {
                where: {id: body.id}
            }
        )

        resolve({
            err: response ? 0 : 1,
            mes: response ? `${body.id} editted successfully` : 'Can not edit category',
        })
    } catch (error) {
        reject(error)
    }
})

export const getTrash = () =>new Promise(async (resolve, reject) => {
    try {
        const response = await db.Category.findAll({
            where: {trash : 1},
            raw: true
        })
        resolve({
            err: 0,
            mes: 'Got',
            trashCategory: response
        })
    } catch (error) {
        reject(error)
    }
})

export const trashCategory = (body) => new Promise(async (resolve, reject) => {
    try {
        const trash = await db.Category.findOne({
            where: {
                id: body.id
            },
            raw: true
        })
        const response = await db.Category.update({
            trash: (trash.trash ? 0 : 1)
        }, {
            where: {
                id: body.id
            },
            raw: true
        })
        resolve({
            err: response? 0 : 1,
            mes: trash.trash?`${body.id} restored`:`${body.id} moved to trash`
        })
    } catch (error) {
        reject(error)
    }
})

