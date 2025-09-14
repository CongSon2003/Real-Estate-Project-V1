import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../models/index.ts'

export class User extends Model {
  declare id: number
  declare name: string
  declare phone: string
  declare password: string
  declare roleCode: string
}

User.init(
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    roleCode: { type: DataTypes.STRING, allowNull: false }
  },
  { sequelize, tableName: 'users', timestamps: true }
)

// Quan hệ
