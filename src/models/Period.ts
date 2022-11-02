import {
  CreationOptional, DataTypes as types, InferAttributes,
  InferCreationAttributes, Model, Sequelize,
} from 'sequelize';

export class Period extends Model<InferAttributes<Period>, InferCreationAttributes<Period>> {
  declare id: CreationOptional<number>;
  declare year: number;
  declare startDate: Date;
  declare endDate: Date;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static associate(models: any) {
    Period.hasMany(models.Class);
  }
}

export default function initPeriodModel(sequelize: Sequelize, DataTypes: typeof types) {
  Period.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'period',
    tableName: 'periods',
    timestamps: true,
    paranoid: false,
    underscored: true,
  });
  return Period;
}
