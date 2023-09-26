import { PrismaClient } from '@prisma/client'

//global files are not effecting from hot reloading so we save prisma client to them
const client = global.prismadb || new PrismaClient()
if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client