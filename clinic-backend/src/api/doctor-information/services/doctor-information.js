'use strict';

/**
 * doctor-information service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doctor-information.doctor-information');
