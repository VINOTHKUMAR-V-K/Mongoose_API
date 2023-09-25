let express=require("express");

let router= express.Router();

let Data=require("./controller/student")

router.post("/api/postdata",Data.postStuQurey);

router.get("/api/getdata",Data.getStu);
router.get("/api/getdata/:studentName",Data.findoneStu);
router.get("/api/getdatabyid/:_id", Data.findbyidStu);

router.put("/api/updatedatabyid/:_id",Data.findbyidandupdate);
router.put("/api/findoneupdate/:studentName",Data.findoneandupdate)
router.put("/api/updateone/:studentName",Data.updateone);

router.delete("/api/deletedatabyid/:_id",Data.findbyidanddelete);
router.delete("/api/deleteone/:studentName",Data.findoneandelete);
router.delete("/api/deleteoneanddelete/:studentName",Data.deleteone);

module.exports=router