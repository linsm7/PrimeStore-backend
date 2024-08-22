import prismaClient from "../../prisma";

class ListUserAdminService {
    async execute(){
        const user = await prismaClient.user.findMany({
            where:{
                type: 2
            },
            select:{
                name: true,
                email: true
            }
        })

        return user
    }
}

export { ListUserAdminService }