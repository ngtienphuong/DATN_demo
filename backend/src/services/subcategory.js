import db from '../models'

export const getAllSubcategory = () => new Promise( async(resolve, reject) => {
    try {
        const response = await db.Subcategory.findAll({
            where:[{status:1},{trash:0}]
        })

        resolve({
            err: 0,
            mes: 'Got',
            subcategoryData: response
        })
    } catch (error) {
        reject(error)
    }
})

export const addSubcategory = (body) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.Subcategory.findOrCreate({
            where: {name: body.name},
            defaults:{
                ...body
            }
        })
        resolve({
            err: response[1]? 0 : 1,
            mes: response[1]? 'Created successfully' : 'Subcategory already exists'
        })
    } catch (error) {
        reject(error)
    }
})

export const getOneSubcategory = (id) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.Subcategory.findOne({
            where: {id: id}
        })
        resolve({
            err: 0,
            mes: 'Got',
            subcategoryData: response
        })
    } catch (error) {
        reject(error)
    }
})

export const ChangeTrashSubcategory = (body) => new Promise( async(resolve, reject) =>{
    try {
        const trash = await db.Subcategory.findOne({ 
            where: {id: body.id},
            raw: true
        })
        const response = await db.Subcategory.update(
            {
                trash: (trash.trash ? 0 : 1)
            },
            {
                where:{ id: body.id }
            }
        )
        resolve({
            err: response? 0 : 1,
            mes: trash.trash?`${body.id} restored`:`${body.id} moved to trash`
        })
    } catch (error) {
        reject(error)
    }
})

export const getTrashSubcategory = () => new Promise( async(resolve, reject) => {
    try {
        const response = await db.Subcategory.findAll({
            where: { trash: 1}
        })
        resolve({
            err: 0,
            mes: 'Got',
            trashSubcategory: response
        })
    } catch (error) {
        reject(error)
    }
})

export const editSubcategory = ({id, ...body}) => new Promise( async(resolve, reject) => {
    try {
        const response = await db.Subcategory.update(
            {
                ...body
            },
            {
                where: {id}
            }
        )
        resolve({
            err: response ? 0 : 1,
            mes: response ? `${id} subcategory updated` : 'Cannot update'
        })
    } catch (error) {
        reject(error)
    }
})