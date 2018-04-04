const Student = require('../../../models').Student;

module.exports = {
  findStudents,
};

function findStudents(req, res) {
  let teacher = req.query.teacher ? req.query.teacher : '';
  let first;
  if (Array.isArray(teacher)) {
    first = teacher[0];
    teacher.forEach(function(t) {
      t.replace("%40","@");
    });
  } else {
    first = teacher;
    teacher.replace("%40","@");
  }

  Student.findAll({
    attributes: ['email'],
    where: { teacher }
  })
  .then((student) => {
      let commonStudent = [];
      if (student.length < 1) {
        return res.status(200).json(commonStudent);
      }
      if(Array.isArray(teacher)) {
        let counts = {};
        student.forEach(function(x) { 
          counts[x.email] = (counts[x.email] || 0)+1;
          if(counts[x.email] >= teacher.length) {
            commonStudent.push(x);
          }
        });
        res.json(commonStudent);
      } else {
        res.json(student);
      }
      
  })
  .catch(err => res.status(400).send({ error: err.message }));
}