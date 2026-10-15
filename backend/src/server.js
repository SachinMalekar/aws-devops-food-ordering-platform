const app = require("./app");
const sequelize = require("./config/database");
const PORT = process.env.PORT || 8080;

require("./models/Food");

sequelize.authenticate()
  .then(async () => {
    console.log("✅ PostgreSQL Connected");

    await sequelize.sync();
    console.log("✅ Tables Created");

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error(err));