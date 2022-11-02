import {
  CreationOptional, DataTypes as types, ForeignKey, InferAttributes,
  InferCreationAttributes, Model, Sequelize,
} from 'sequelize';
import { Parent } from './Parent';

export class Student extends Model<InferAttributes<Student>, InferCreationAttributes<Student>> {
  declare id: CreationOptional<number>;
  declare firstName: string;
  declare lastName: string;
  declare age: number;
  declare genrer: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare parentId: ForeignKey<Parent['id']>;

  static associate(models: any) {
    Student.hasMany(models.Subject);
    Student.hasMany(models.Attendace);
    Student.belongsTo(models.Parent);
  }
}

export default function initStudentModel(sequelize: Sequelize, DataTypes: typeof types) {
  Student.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genrer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    parentId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'parents',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'student',
    tableName: 'students',
    timestamps: true,
    paranoid: false,
    underscored: true,
  });
  return Student;
}
