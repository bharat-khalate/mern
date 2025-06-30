import { PrismaClient } from "../../generated/prisma"

export const prisma = new PrismaClient({
    log:["query"],
});

async function main() {

}


main().then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })

