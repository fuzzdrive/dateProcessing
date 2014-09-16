var processingDate = {
    getDaysInYear: function(date){
        var daysInYear = (date.getFullYear() % 4 == 0) ? 366 : 365;
        return daysInYear;
    },

    currentDayOfYear: function (date) {
        var currentDayYear = 0;
        for (var currentDayCicle = 0; currentDayCicle < date.getMonth(); currentDayCicle++) {
            if (currentDayCicle == 0 ||
                currentDayCicle == 2 ||
                currentDayCicle == 4 ||
                currentDayCicle == 6 ||
                currentDayCicle == 7 ||
                currentDayCicle == 9 ||
                currentDayCicle == 11
            )
                currentDayYear += 31;
            else if (currentDayCicle == 1 && date.getFullYear() % 4 == 0) currentDayYear += 29;
            else if (currentDayCicle == 1 && date.getFullYear() % 4 != 0) currentDayYear += 28;
            else currentDayYear += 30;
        }
        currentDayYear += date.getDate();
        return currentDayYear;
    },

    getDayUntilEndYear: function (date) {
        var getCurrentDay = this.currentDayOfYear(date);
        var dayUntilEndYear = (date.getYear() % 4 == 0) ? 366 - getCurrentDay : 365 - getCurrentDay;
        return dayUntilEndYear;
    },

    getTimeDifference: function(date1, date2) {
        var timeDifference = date1 - date2;
        return timeDifference;
    },

    getTimeDifferenceSec: function(date1, date2) {
        var timeDifference = this.getTimeDifference(date1, date2);
        var timeDifferenceSec = Math.abs(Math.floor(timeDifference / 1000));
        return timeDifferenceSec;
    },

    getTimeDifferenceMin: function(date1, date2) {
        var timeDifference = this.getTimeDifference(date1, date2);
        var timeDifferenceMin = Math.abs(Math.floor(timeDifference / (1000 * 60)));
        return timeDifferenceMin;
    },

    getTimeDifferenceHour: function(date1, date2) {
        var timeDifference = this.getTimeDifference(date1, date2);
        var timeDifferenceHour = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60)));
        return timeDifferenceHour;
    },

    getTimeDifferenceDay: function(date1, date2) {
        var timeDifference = this.getTimeDifference(date1, date2);
        var timeDifferenceHour = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
        return timeDifferenceHour;
    },

    getTimeDifferenceYear: function(date1, date2) {
        var timeDifferenceYear = Math.abs(date1.getFullYear() - date2.getFullYear());
        var counterDay1 = this.currentDayOfYear(date1);
        var counterDay2 = this.currentDayOfYear(date2);
        if (date1.getFullYear() >= date2.getFullYear()) {
            if (counterDay1 < counterDay2) timeDifferenceYear = timeDifferenceYear - 1;
        }
        return timeDifferenceYear;
    }
}
