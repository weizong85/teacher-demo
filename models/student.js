module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    teacher: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    suspended: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    }
  });

  return Student;
};
