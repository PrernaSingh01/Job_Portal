import express from "express";

const router = express.Router();

//routes
//CREATE JOB || POST
router.post("/create-job", userAuth);

export default router;
