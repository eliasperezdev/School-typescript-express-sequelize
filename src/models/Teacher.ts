import {
  CreationOptional, DataTypes as types, InferAttributes,
  InferCreationAttributes, Model, Sequelize,
} from 'sequelize';

export class Teacher extends Model<InferAttributes<Teacher>, InferCreationAttributes<Teacher>> {
  declare id: CreationOptional<number>;
  declare firstName: string;
  declare lastName: string;
  declare phone: number;
  declare email: string;
  declare title: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static associate(models: any) {
    Teacher.hasMany(models.Subject);
    Teacher.hasMany(models.Class);
  }
}

export default function initTeacherModel(sequelize: Sequelize, DataTypes: typeof types) {
  Teacher.init({
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
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'teacher',
    tableName: 'teachers',
    timestamps: true,
    paranoid: false,
    underscored: true,
  });
  return Teacher;
}
