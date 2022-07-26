'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('comments', [{
        comment: 'Comment 1 about weather',
        date: '2021-01-04',
        userId: '1',
        flightId: '365',
        tags: 'public, favorite'
      },
      {
        comment: 'Comment 2 about weather',
        date: '2021-04-04',
        userId: '2',
        flightId: '366',
        tags: 'public, favorite, unboarding'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('coments', null, {});
  }
};
