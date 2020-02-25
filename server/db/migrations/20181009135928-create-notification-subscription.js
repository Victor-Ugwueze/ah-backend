
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('notification_subscriptions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    isSubscribed: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    notificationTypeId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
        as: 'userId'
      }
    },
  }),

  down: queryInterface => queryInterface.dropTable('notification_subscriptions'),
};
