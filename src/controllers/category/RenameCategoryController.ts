import { Request, Response } from "express";

import { RenameCategoryService } from "../../services/category/RenameCategoryService";

class RenameCategoryController {
    async handle(req: Request, res: Response){
        const { category_id, name } = req.body

        const renameCategoryService = new RenameCategoryService()

        const category = await renameCategoryService.execute({
            category_id,
            name
        })

        return res.json(category)
    }
}

export { RenameCategoryController }