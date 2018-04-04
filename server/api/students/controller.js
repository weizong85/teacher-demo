const Student = require('../../../models').Student;
const validateEmail = require('../../utils/helpers').validateEmail;

module.exports = {
  saveStudent,
};

// Register new student
function saveStudent(req, res) {
  const emails = req.body.students ? req.body.students : '';
  const teacher = req.body.teacher ? req.body.teacher.trim() : '';

  if (!Array.isArray(emails)) {
    return res
      .status(422)
      .send({ error: 'Students emails must be in an array.' });
  }

  if (!emails || !teacher) {
    return res
      .status(422)
      .send({ error: 'Students & teacher emails are required.' });
  }

  emails.forEach(function(email) {
    const emailValidationError = validateEmail(email);
    if (emailValidationError.length > 0) {
      return res
        .status(400)
        .send({ error: emailValidationError }); // array of errors
    }
  });

  const teacherValidationError = validateEmail(teacher);
  if (teacherValidationError.length > 0) {
    return res
      .status(400)
      .send({ error: teacherValidationError }); // array of errors
  }

  // Check if email already exists
  Student.findAll({
    where: { 
      email: emails,
      teacher: teacher
    }
  })
    .then((student) => {
      if (student.length > 0) {
        let alreadyRegistered = "";
        student.forEach(function(s) {
          alreadyRegistered = alreadyRegistered + s.email + " ";
        });
        return res
        .status(400)
        .send({ error: `${alreadyRegistered} is already registered.` });
      }
      let _students = [];
      emails.forEach(function(email) {
        _students.push({
          email,
          teacher
        });
      });

      Student.bulkCreate(_students).then(data => {
        return res
          .status(204)
          .json(data);
      })
      .catch(err => res.status(400).send({ error: err.message }));
    })
    .catch(err => res.status(400).send({ error: err.message }));
}
