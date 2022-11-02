import {
  CreationOptional, DataTypes as types, ForeignKey, InferAttributes,
  InferCreationAttributes, Model, Sequelize,
} from 'sequelize';
import { Class } from './Class';
import { Student } from './Student';

export class Parent extends Model<InferAttributes<Parent>, InferCreationAttributes<Parent>> {
  declare id: CreationOptional<number>;
  declare present: boolean;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare studentId: ForeignKey<Student['id']>;
  declare classId: ForeignKey<Class['id']>;

  static associate(models: any) {
    Parent.belongsTo(models.Student);
    Parent.belongsTo(models.Class);
  }
}

export default function initParentModel(sequelize: Sequelize, DataTypes: typeof types) {
  Parent.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    present: {
      type: DataTypes.BOOLEAN,
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
  }, {
    sequelize,
    modelName: 'parent',
    tableName: 'parents',
    timestamps: true,
    paranoid: false,
    underscored: true,
  });
  return Parent;
}
