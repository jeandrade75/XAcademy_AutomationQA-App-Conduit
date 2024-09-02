const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    videos:true,
    screenshots:true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity:false
  },
});
