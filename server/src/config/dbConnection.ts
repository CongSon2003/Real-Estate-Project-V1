import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
  process.env.DB_NAME || '',
  process.env.DB_USERNAME || '',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || '',
    dialect: (process.env.DB_DIALECT as any) || '', // nên fix rõ type
    logging: false,
    timezone: '+07:00'
  }
)

console.log('🔍 DB config:', {
  name: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD ? '✅ exists' : '❌ missing',
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
})

const connection = async () => {
  try {
    await sequelize.authenticate()
    console.log('✅ Connection has been established successfully')
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error)
  }
}

export { sequelize } // để model khác có thể import dùng
export default connection
