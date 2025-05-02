const formatDate = (date) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
    };
    return new Date(date).toLocaleDateString("en-US", options);
};

const getDateRange = (startDate, endDate) => {
    return {
        start: new Date(startDate),
        end: new Date(endDate),
    };
};

module.exports = { formatDate, getDateRange };
