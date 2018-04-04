const Student = require('../../../models').Student;
const validateEmail = require('../../utils/helpers').validateEmail;

module.exports = {
  suspendStudent,
};

// Suspend student
function suspendStudent(req, res) {
  const email = req.body.student ? req.body.student.trim()  : '';
  const emailValidationError = validateEmail(email);
  if (emailValidationError.length > 0) {
    return res
      .status(400)
      .send({ error: emailValidationError }); // array of errors
  }

  Student.update(
    { suspended: true }, 
    { where: { email } }
  ).then((student) => {
    if (student < 1) {
      return res
      .status(400)
      .send({ error: `${email} not found.` });
    }
    res.send(`${email} has been suspended`);
  })
  .catch(err => res.status(400).send({ error: err.message }));
}