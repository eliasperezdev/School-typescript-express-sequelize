import {
  CreationOptional, DataTypes as types, ForeignKey, InferAttributes,
  InferCreationAttributes, Model, Sequelize,
} from 'sequelize';
import { Period } from './Period';
import { Subject } from './Subject';
import { Teacher } from './Teacher';

export class Class extends Model<InferAttributes<Class>, InferCreationAttributes<Class>> {
  declare id: CreationOptional<number>;
  declare date: Date;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare studentId: ForeignKey<Subject['id']>;
  declare classId: ForeignKey<Teacher['id']>;
  declare periodId: ForeignKey<Period['id']>;

  static associate(models: any) {
    Class.belongsTo(models.Subject);
    Class.belongsTo(models.Teacher);
    Class.belongsTo(models.Period);
    Class.hasMany(models.Attendace);
  }
}

export default function initClassModel(sequelize: Sequelize, DataTypes: typeof types) {
  Class.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    studentId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'students',
        key: 'id',
      },
    },
    classId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'classes',
        key: 'id',
      },
    },
    periodId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'periods',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'class',
    tableName: 'classes',
    timestamps: true,
    paranoid: false,
    underscored: true,
  });
  return Class;
}
