let date = new Date();

date.setDate(date.getDate() + 14);
if (localStorage.getItem("date")) {
    date = +localStorage.getItem("date");
    localStorage.setItem("date", date);
} else {
    localStorage.setItem("date", date.getTime());
}

export const timer = () => {
    const now = new Date();
    //  const date = new Date("2023-7-15");
    const timestamp = date - now;

    const MS_IN_SEC = 1000;
    const MS_IN_MIN = 1000 * 60;
    const MS_IN_HOUR = 1000 * 60 * 60;
    const MS_IN_DAY = 1000 * 60 * 60 * 24;
    const seconds = Math.floor(timestamp / MS_IN_SEC) % 60;
    const minutes = Math.floor(timestamp / MS_IN_MIN) % 60;
    const hours = Math.floor(timestamp / MS_IN_HOUR) % 24;
    const days = Math.floor(timestamp / MS_IN_DAY);

    const addZeroHandler = (val) => {
        if (val < 10) return `0${val}`;
        else return val;
    };
    return [
        { id: 1, value: addZeroHandler(days), title: "days" },
        { id: 2, value: addZeroHandler(hours), title: "hours" },
        { id: 3, value: addZeroHandler(minutes), title: "minutes" },
        { id: 4, value: addZeroHandler(seconds), title: "seconds" },
    ];
};
