import {
  CreationOptional, DataTypes as types, InferAttributes,
  InferCreationAttributes, Model, Sequelize,
} from 'sequelize';

export class Parent extends Model<InferAttributes<Parent>, InferCreationAttributes<Parent>> {
  declare id: CreationOptional<number>;
  declare firstName: string;
  declare lastName: string;
  declare phone: number;
  declare email: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static associate(models: any) {
    Parent.hasMany(models.Student);
  }
}

export default function initParentModel(sequelize: Sequelize, DataTypes: typeof types) {
  Parent.init({
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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
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
