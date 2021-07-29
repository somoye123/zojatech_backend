import {google} from 'googleapis';

// Provide the required configuration
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarId = process.env.CALENDAR_ID;

// Google calendar API settings
const SCOPES = "https://www.googleapis.com/auth/calendar";
const calendar = google.calendar({ version: "v3" });

const auth = new google.auth.JWT(
  CREDENTIALS.client_email,
  null,
  CREDENTIALS.private_key,
  SCOPES
);

export const getEvents = async (req,res) => {
    try {
      let response = await calendar.events.list({
        auth: auth,
        calendarId: calendarId,
        timeZone: "Africa/Lagos",
      });

      let items = response["data"]["items"];
      res.json({items});
      console.log(items);
    } catch (error) {
      console.log(`Error at getEvents --> ${error}`);
      res.json({error});
    }
  };
