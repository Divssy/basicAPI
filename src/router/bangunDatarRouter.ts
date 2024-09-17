import { Router } from "express";
import { areaTriangle, circleArea, rectangleArea } from "../controller/bangunDatarController";
import { validateCircle, validateRectangle, validateTriangle } from "../middleware/validateShape";

const router = Router()
/** define address for luas lingkaran */
router.get(`/circle`,[validateCircle] ,circleArea)
/** define address for area of triangle */
router.get(`/triangle`,[validateTriangle] ,areaTriangle)
router.get(`/rectangle/:width/:height`,[validateRectangle] ,rectangleArea)
export default router