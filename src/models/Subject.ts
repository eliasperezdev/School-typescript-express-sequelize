import {
  CreationOptional, DataTypes as types, InferAttributes,
  InferCreationAttributes, Model, Sequelize,
} from 'sequelize';

export class Subject extends Model<InferAttributes<Subject>, InferCreationAttributes<Subject>> {
  declare id: CreationOptional<number>;
  declare name: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static associate(models: any) {
    Subject.hasMany(models.Teacher);
    Subject.hasMany(models.Class);
    Subject.hasMany(models.Student);
  }
}

export default function initSubjectModel(sequelize: Sequelize, DataTypes: typeof types) {
  Subject.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'subject',
    tableName: 'subjects',
    timestamps: true,
    paranoid: false,
    underscored: true,
  });
  return Subject;
}
