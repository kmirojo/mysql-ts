import { Router } from "express";
import { getHeroes, getHeroe } from "../controllers/heores.controller";

const router = Router();

router.get("/heroes", getHeroes);

router.get("/heroes/:id", getHeroe);

export default router;
