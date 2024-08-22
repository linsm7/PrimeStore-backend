import prismaClient from "../../prisma";

interface ProductRequest {
    name: string
    description: string
    price: string
    count: number
    image: string
    category_id: string
}

class CreateProductService {
    async execute({ name, description, price, count, image, category_id }: ProductRequest){
        if(name == ''){
            throw new Error('Invalid Name')
        }

        const productAlreadyExists = await prismaClient.product.findFirst({
            where:{
                name: name
            }
        })

        if(productAlreadyExists){
            throw new Error('Product already exists')
        }

        const product = await prismaClient.product.create({
            data:{
                name: name,
                description: description,
                price: price,
                count: count,
                image: image,
                category_id: category_id
            },
            select:{
                id: true,
                name: true,
                description: true,
                price: true,
                count: true,
                image: true,
                category_id: true
            }
        })

        return product
    }
}

export { CreateProductService }