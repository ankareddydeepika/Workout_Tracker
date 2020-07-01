  
const db = require('../models');

module.exports = (app) => {

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbworkout => {
        console.log(dbworkout)
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then(dbworkout =>{
        console.log(dbworkout)
          res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  
  app.put("/api/workouts/:id", function(req, res) {
    console.log("workoyput request")
    console.log(req)
      db.Workout.findByIdAndUpdate(
        req.params.id,
        {$push:{exercises:req.body} },
        {new: true}
      )
      .then(dbworkout =>{
          res.json(dbworkout)
      })
      .catch(err =>{
        console.log(err)
          res.json(err)
      });
  }) ;

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbworkout => {
        console.log(dbworkout)
        res.json(dbworkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
}
