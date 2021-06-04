"use strict";
const slugify = require("slugify");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.title) {
        data.slug = slugify(data.title);
      }

      if (data.text) {
        data.summary = data.text.slice(0, 70);
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.title) {
        data.slug = slugify(data.title);
      }
      if (data.text) {
        data.summary = data.text.slice(0, 70);
      }
    },
  },
};
