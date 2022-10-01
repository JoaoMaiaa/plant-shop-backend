"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Todos os produtos",
          created_at: new Date(),
          updated_at: new Date(),
        },
        { name: "Jardinagem", created_at: new Date(), updated_at: new Date() },
        { name: "Plantador", created_at: new Date(), updated_at: new Date() },
        { name: "Sementes", created_at: new Date(), updated_at: new Date() },
        { name: "Plantas", created_at: new Date(), updated_at: new Date() },
        { name: "Irrigadores", created_at: new Date(), updated_at: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
