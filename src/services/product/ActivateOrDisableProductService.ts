import prismaClient from "../../prisma";

interface ProductRequest {
    product_id: string
}

class ActiveteOrDisableProductService {
    async disableProduct({ product_id }: ProductRequest){
        if(product_id == ''){
            throw new Error('Invalid Id')
        }

        const product = await prismaClient.product.update({
            where:{
                id: product_id
            },
            data: {
                active: false
            }
        })

        return product
    }

    async activateProduct({ product_id }: ProductRequest){
        const product = await prismaClient.product.update({
            where:{
                id: product_id
            },
            data: {
                active: true
            }
        })

        return product
    }
}

export { ActiveteOrDisableProductService }