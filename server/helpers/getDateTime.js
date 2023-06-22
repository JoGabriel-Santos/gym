import moment from "moment";
import "moment-timezone";

export async function getDateTime() {
    try {
        const response = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo");
        const data = await response.json();

        return moment.tz(data.datetime, "America/Sao_Paulo");

    } catch (error) {
        console.error("Error getting data and time: ", error);
        return null;
    }
}