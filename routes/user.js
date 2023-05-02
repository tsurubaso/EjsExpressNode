const express= require("express");

const router = express.Router();


router.get("/", (req, res) => {
    res.send("user  found");
  });
  
  router.get("/info", (req, res) => {
      res.send("user  info");
    });

    router.get("/:id",(req,res)=>{res.send(`${req.params.id} information was obtained successfully`)});

    module.exports = router;


    