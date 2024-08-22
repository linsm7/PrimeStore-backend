import { Request, Response } from "express";

import { ActiveteOrDisableProductService } from "../../services/product/ActivateOrDisableProductService";

class ActiveteOrDisableProductController {
    async disable(req: Request, res: Response){
        const product_id = req.query.product_id as string

        const activeteOrDisableProductService = new ActiveteOrDisableProductService()

        const product = await activeteOrDisableProductService.disableProduct({
            product_id
        })

        return res.json(product)
    }

    async activate(req: Request, res: Response){
        const product_id = req.query.product_id as string

        const activeteOrDisableProductService = new ActiveteOrDisableProductService()

        const product = await activeteOrDisableProductService.activateProduct({
            product_id
        })

        return res.json(product)
    }
}

export { ActiveteOrDisableProductController }