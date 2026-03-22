const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "nodejs_max_udemy",
        mongodb_password: "nodejstest",
        mongodb_clustername: "cluster1",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "nodejs_max_udemy",
      mongodb_password: "nodejstest",
      mongodb_clustername: "cluster1",
      mongodb_database: "my-site",
    },
  };
};
