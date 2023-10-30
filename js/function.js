function prepareToCheck(str) {
  const result = str.toLowerCase().replaceAll(' ', '');
  return result;
}

function isPalindrome(phrase) {
  const preparedPhrase = prepareToCheck(String(phrase));
  const len = preparedPhrase.length - 1;
  let i = 0;
  let result = true;
  while (i <= len / 2 && result) {
    result = (preparedPhrase[i] === preparedPhrase[len - i]);
    i++;
  }
  return result;
}

function checkLength(str, maxLength) {
  return str.length <= maxLength;
}

function numberFromString(str) {
  const arrayDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const temp = String(str);
  let result = '';
  for (const char of temp) {
    if (arrayDigits.includes(char)) {
      result = result + char;
    }
  }
  return (Number(result)) ? Number(result) : NaN;
}

const convertTimeToMinutesFromMidnight = function (anyTime) {
  const time = anyTime.split(':');
  return parseInt(time[0], 10) * 60 + parseInt(time[1], 10);
};

const isMeetingValid = function (startWorkDay, endWorkDay, startMeeting, durationMeeting) {
  const startWorkDayInMinutes = convertTimeToMinutesFromMidnight(startWorkDay);
  const endWorkDayInMinutes = convertTimeToMinutesFromMidnight(endWorkDay);
  const startMeetingInMinutes = convertTimeToMinutesFromMidnight(startMeeting);
  return (startWorkDayInMinutes <= startMeetingInMinutes) && ((startMeetingInMinutes + durationMeeting) <= endWorkDayInMinutes);
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (anyArray) => anyArray[getRandomInteger(0, anyArray.length - 1)];

const generateUniqueID = (min = 1, max = 65535) => {
  const uniqueID = [];
  return function () {
    let getID = getRandomInteger(min, max);
    while (uniqueID.includes(getID) && uniqueID.length < max) {
      getID = getRandomInteger(min, max);
    }
    uniqueID.push(getID);
    return getID;
  };
};

export { getRandomInteger, getRandomElement, generateUniqueID };
export { isPalindrome, checkLength, numberFromString, isMeetingValid };
