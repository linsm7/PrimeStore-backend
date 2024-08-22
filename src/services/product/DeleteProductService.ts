import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string
}

class DeleteProductService {
    async execute({ product_id }: ProductRequest){
        if(product_id == ''){
            throw new Error('Invalid Id')
        }

        const product = prismaClient.product.delete({
            where:{
                id: product_id
            }
        })

        return product
    }
}

export { DeleteProductService }