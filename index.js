//Mixed Messages
//Random selecion of a zodiac sign
const zodiac = Math.floor(Math.random() * 360);

const sign = () => {
    if (zodiac <= 30) {
        return 'Aries';
    } else if (zodiac >= 31 && zodiac <= 60) {
        return 'Taurus';
    } else if (zodiac >= 61 && zodiac <= 90) {
        return 'Gemini';
    } else if (zodiac >= 91 && zodiac <= 120) {
        return 'Cancer';
    } else if (zodiac >= 121 && zodiac <= 150) {
        return 'Leo';
    } else if (zodiac >=151 && zodiac <= 180) {
        return 'Virgo';
    } else if (zodiac >= 181 && zodiac <= 210) {
        return 'Libra';
    } else if (zodiac >= 211 && zodiac <= 240) {
        return 'Scorpio';
    } else if (zodiac >= 241 && zodiac <= 270) {
        return 'Sagittarius';
    } else if (zodiac >= 271 && zodiac <= 300) {
        return 'Capricorn';
    } else if (zodiac >= 301 && zodiac <= 330) {
        return 'Aquarius';
    } else if (zodiac >= 331 && zodiac <= 360) {
        return 'Pisces';
    } else {
        return 'You were not born within the zodiac signs'
    }
};

// Random selection of a zodiac ruler
const ruler = Math.floor(Math.random() * 10);

const zodiacRuler = () => {
    switch (ruler) {
        case 1:
            return 'Mars'
            break;
        case 2:
            return 'Venus'
            break;
        case 3:
            return 'Mercury'
            break;
        case 4:
            return 'Moon'
            break;
        case 5:
            return 'Sun'
            break;
        case 6:
            return 'Pluto'
            break;
        case 7:
            return 'Jupiter'
            break;
        case 8:
            return 'Saturn'
            break;
        case 9:
            return 'Uranus'
            break;
        case 10:
            return 'Neptune'
            break;
        default:
            return 'Earth'
            break;    
    }
};

//Random selection for positive message
const messageNum = Math.floor(Math.random() * 13);

const message = [
    "Act as if what you do makes a difference - William James",
    "Believe you can and your halfway there - Theodore Roosevelt",
    "Happiness is not by chance, but by choice - Jim Rohn",
    "The bad news is time flies. The good news is you're the pilot - Michael Altshuler",
    "Be yourself; everyone else is already taken - Oscar Wilde",
    "It is not enough to have a good mind; the important thing is to use it well - Rene Descartes",
    "People begin to become successful the minute they decided to be - Harvey Mackay",
    "Every strike brings me closer to the next home run - Bebe Ruth",
    "One's destination is never a place, but a new way of seeing things - Henry Miller",
    "It's how you deal with failure that detern#mines how you achieve success - David Feherty",
    "I have not failed. I have just found 10,000 ways that won't work - Thomas A. Edison",
    "It takes as much energy to wish as it does to plan - Eleanor Roosevelt",
    "Do anything, but let it produce joy - Walt Whitman"
]

const positiveMessage = () => {
    switch (messageNum) {
        case 1:
            return message[0]
            break;
        case 2:
            return message[1]
            break;
        case 3:
            return message[2]
            break;
        case 4:
            return message[3]
            break;
        case 5:
            return message[4]
            break;
        case 6:
            return message[5]
            break;
        case 7:
            return message[6]
            break;
        case 8:
            return message[7]
            break;
        case 9:
            return message[8]
            break;
        case 10:
            return message[9]
            break;
        case 11:
            return message[10]
            break;
        case 12:
            return message[11]
            break;
        case 13:
            return message[12]
            break;

        default:
            return 'You are awesome just as you are - Anonymous'
            break;
    }
};