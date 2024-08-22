import { Request, Response } from "express";

import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response){
        const { name, description, price, count, image, category_id } = req.body

        const createProductService = new CreateProductService()

        if(!req.file){
            throw new Error("Error Upload File")
        }else{
            const { originalname, filename: image } = req.file

            const product = await createProductService.execute({
                name,
                description,
                price,
                count: 1,
                image,
                category_id
            })
    
            return res.json(product)
        }


    }
}

export { CreateProductController }