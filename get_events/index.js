const eventService = require("../src/services/eventService");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");
  await eventService.getEvents(context);
};
