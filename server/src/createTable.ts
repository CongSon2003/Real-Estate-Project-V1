import { DataTypes } from 'sequelize'
import { sequelize } from './config/dbConnection.ts'

async function createTables() {
  const queryInterface = sequelize.getQueryInterface()

  // Tạo bảng users
  await queryInterface
    .createTable('users', {
      id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false, unique: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      roleCode: { type: DataTypes.STRING, allowNull: false },
      createdAt: { type: DataTypes.DATE, allowNull: false },
      updatedAt: { type: DataTypes.DATE, allowNull: false }
    })
    .then((resuilt) => {
      console.log('✅ Tables users created successfully!', resuilt)
    })
    .catch((error) => {
      console.log('❌ Create users table failed', error.message)
    })

  // // Thêm foreign key
  // await queryInterface.addConstraint("users", {
  //   fields: ["roleCode"],
  //   type: "foreign key",
  //   name: "fk_role",
  //   references: { table: "roles", field: "code" },
  //   onDelete: "CASCADE",
  //   onUpdate: "CASCADE",
  // });
}

createTables().finally(() => sequelize.close())
