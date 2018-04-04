const Student = require('../../../models').Student;
const validateEmail = require('../../utils/helpers').validateEmail;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = {
  retrievefornotifications,
};

// Suspend student
function retrievefornotifications(req, res) {
  const regexp = /\@([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
  const teacher = req.body.teacher ? req.body.teacher.trim()  : '';
  const notificationmsg = req.body.notification ? req.body.notification  : '';
  let matchList = notificationmsg.match(regexp);
  let emailMatchList = matchList.map(el => el.slice(1));

  Student.findAll({
    where: {
      [Op.or]: [{teacher}, {email: emailMatchList}]
    }
  }).then((student) => {
    return res.json(student);
  })
  .catch(err => res.status(400).send({ error: err.message }));
}
