module.exports = (connection, Sequelize) => {
    class Build extends Sequelize.Model { }
    Build.init(
        {
            _id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true,
            },
            title: {
                type: Sequelize.STRING,
            },
            author: {
                type: Sequelize.STRING,
            },
            collection: {
                type: Sequelize.STRING,
            },
            publish_year: {
                type: Sequelize.NUMBER(4),
            },
        },
        { sequelize: connection }
    );
    return Build;
};