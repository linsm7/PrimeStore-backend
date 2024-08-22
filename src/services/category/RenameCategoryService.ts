import prismaClient from "../../prisma";

interface CategoryRequest {
    category_id: string
    name: string
}

class RenameCategoryService {
    async execute({ category_id, name }: CategoryRequest){
        if(name == ''){
            throw new Error('Invalid Name')
        }

        const category = await prismaClient.category.update({
            where:{
                id: category_id
            },
            data:{
                name
            }
        })

        return category
    }
}

export { RenameCategoryService }