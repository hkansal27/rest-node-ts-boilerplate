import { Router } from "express";
import auth from "./auth/auth.route";
import users from "./users/user.route";

import verifyToken from "../helpers/verifyToken";

const router: Router = Router();

router.use("/", auth);
router.use("/users", verifyToken, users);

export default router;
