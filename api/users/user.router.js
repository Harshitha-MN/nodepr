const{createUser,getUserByUserId,getUsers,updateUser,deleteUser,login}=require("./user.controller")
const router =require("express").Router();

router.post("/",createUser)
router.get("/",getUsers)
router.get("/:id",getUserByUserId)
router.patch("/:id",updateUser)
router.delete("/:id",deleteUser)
router.post("/login",login)


module.exports=router;