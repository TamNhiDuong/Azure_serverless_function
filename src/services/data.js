const dbConfig = require("../db");
const sql = require("mssql");

const getAll = async () => {
  const db = await sql.connect(dbConfig);
  const events = await db.request().execute("SelectALL");
  return events.recordset;
};

const getFromTo = async (from, to) => {
  const db = await sql.connect(dbConfig);
  const queryString = to
    ? `EXEC SelectEventByDate @fromDate="${from}", @toDate="${to}";`
    : `EXEC SelectEventByDate @fromDate="${from}";`;
  const events = await db.request().query(queryString);
  return events.recordset;
};

const createEvent = async (newEvent) => {
  const db = await sql.connect(dbConfig);
  const event = await db
    .request()
    .query(
      `EXEC CreateEvent @Date="${newEvent.EventDate}", @Time="${newEvent.EventTime}", @PeopleCount="${newEvent.PeopleCount}";`
    );
  return event;
};

const data = {
  getAll,
  getFromTo,
  createEvent,
};

module.exports = data;
