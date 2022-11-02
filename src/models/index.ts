import { Sequelize, DataTypes, Options } from 'sequelize';
import initUserModel from './User';
import initRoleModel from './Role';
import initClassModel from './Class';
import initAttendaceModel from './Attendace';
import initParentModel from './Parent';
import initPeriodModel from './Period';
import initStudentModel from './Student';
import initSubjectModel from './Subject';
import initTeacherModel from './Teacher';
import configFile from '../db/config/config';

type EnvType = 'development' | 'test' | 'production';
const env: EnvType = process.env.NODE_ENV as EnvType || 'development';
const config: Options = configFile[env] as Options;

const sequelize = new Sequelize(config);
const db = {
  User: initUserModel(sequelize, DataTypes),
  Role: initRoleModel(sequelize, DataTypes),
  Class: initClassModel(sequelize, DataTypes),
  Attendace: initAttendaceModel(sequelize, DataTypes),
  Parent: initParentModel(sequelize, DataTypes),
  Student: initStudentModel(sequelize, DataTypes),
  Period: initPeriodModel(sequelize, DataTypes),
  Subject: initSubjectModel(sequelize, DataTypes),
  Teacher: initTeacherModel(sequelize, DataTypes),
  sequelize,
};

db.Role.associate(db);
db.User.associate(db);
db.Class.associate(db);
db.Attendace.associate(db);
db.Parent.associate(db);
db.Student.associate(db);
db.Period.associate(db);
db.Subject.associate(db);
db.Teacher.associate(db);

export default db;
