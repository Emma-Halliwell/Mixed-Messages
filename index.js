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
    }
};