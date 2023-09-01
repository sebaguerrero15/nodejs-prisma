import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/categories", async (req, res, next) => {
	try {
		const categories = await prisma.category.findMany({
			include: {
				products: true,
			},
		});
		res.json(categories);
	} catch (error) {
		next(error);
	}
});

export default router;
