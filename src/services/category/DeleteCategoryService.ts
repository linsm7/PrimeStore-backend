import prismaClient from "../../prisma";

interface CategoryRequest {
    category_id: string
}

class DeleteCategoryService {
    async execute({ category_id }: CategoryRequest){
        if(category_id == ''){
            throw new Error('Invalid Id')
        }

        const category = await prismaClient.category.delete({
            where:{
                id: category_id
            }
        })

        return category
    }
}

export { DeleteCategoryService }