import moment from "moment"

export const format = (date: Date) => {
    return moment(date).from(new Date());
}