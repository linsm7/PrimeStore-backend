import { Request, Response } from "express"

import { ListUserAdminService } from "../../services/user/ListUserAdminService"

class ListUserAdminController {
    async handle(req: Request, res: Response){
        const listUserAdminService = new ListUserAdminService

        const user = await listUserAdminService.execute()

        return res.json(user)
    }
}

export { ListUserAdminController }