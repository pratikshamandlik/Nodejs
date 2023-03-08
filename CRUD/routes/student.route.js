const express = require('express');
const router = express.Router();
const student_controller = require('../controllers/student.controller');
const jwt= require('jsonwebtoken');
const app=express();


function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
      if (typeof bearerHeader !== "undefined") {
       const bearerToken = bearerHeader.split(" ")[1];
            req.token = bearerToken;
            next();
          } else {
            res.sendStatus(403);
          }
  
  }

  router.post("/login", (req, res) => {
    const user = {
         id: 1,
        
          };
          jwt.sign({ user: user }, "secretkey", (err, token) => {
            res.json({
              token
            });
          });
        });


router.post('/create', verifyToken, student_controller.student_create);

router.get('/:id', verifyToken, student_controller.student_details);

router.put('/:id/update',verifyToken, student_controller.student_update);

router.delete('/:id/delete',verifyToken, student_controller.student_delete);

module.exports = router;