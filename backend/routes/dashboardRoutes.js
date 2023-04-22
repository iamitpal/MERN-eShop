import { getSth, putSth, postSth, deleteSth } from "../controllers/dashboardController.js";
import { protectDashboard } from "../middleware/authMiddleware.js";
import { Router } from "express";
const router = Router();

// expand base your needs
// example
// router.delete("/product/:productId",protect, deleteSth);

router.get("/", protectDashboard, getSth);
router.put("/sth/:sthId", protectDashboard, putSth);
router.post("/", protectDashboard, postSth);
router.delete("/sth/:sthId", protectDashboard, deleteSth);

export default router;