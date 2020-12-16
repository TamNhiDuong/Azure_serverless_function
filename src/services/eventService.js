const data = require("./data");

async function getEvents(context) {
  try {
    const events = await data.getAll();
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: events,
    };
  } catch (error) {
    context.log(`Error code: ${error.code} message: ${error.message}`);
    context.res = {
      status: 500,
      body: `Request error. ${error}`,
    };
  }
}

async function createEvent(context) {
  try {
    const newEvent = await data.createEvent(context.req.body);
    context.log("new event: ", newEvent);
    context.res.status(201);
  } catch (error) {
    context.log(`Error code: ${error.code} message: ${error.message}`);
    context.res = {
      status: 500,
      body: { message: "Something went wrong, try again later" },
    };
  }
}

async function getFromTo(context) {
  try {
    const events = await data.getFromTo(
      context.req.query.from,
      context.req.query.to
    );
    context.res = {
      // Defaults to status 200
      body: events,
    };
  } catch (error) {
    context.log(`Error code: ${error.code} message: ${error.message}`);
    context.res = {
      status: 500,
      body: `Request error. ${error}`,
    };
  }
}

const eventService = {
  getEvents,
  createEvent,
  getFromTo,
};

module.exports = eventService;
