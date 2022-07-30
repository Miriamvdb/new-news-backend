"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Devops",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Frontend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Backend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
