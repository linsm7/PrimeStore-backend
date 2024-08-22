import prismaClient from "../../prisma";

class ListProductService {
    async execute(){
        const products = await prismaClient.product.findMany({
            select:{
                id: true,
                name: true,
                description: true,
                price: true,
                count: true,
                image: true,
                active: true,
                category: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })

        return products
    }
}

export { ListProductService }