const app = require('./src/app');
const sequelize = require('./src/config/database');
require('./src/models/Food');

const PORT = process.env.PORT || 8080;

sequelize.authenticate()
  .then(async () => {
    console.log('✅ PostgreSQL Connected');

    await sequelize.sync();
    console.log('✅ Tables Created');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ PostgreSQL connection failed:', err.message);
    process.exit(1);
  });