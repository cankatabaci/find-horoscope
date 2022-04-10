import {FindHoroscope} from '../src/findHoroscope';
import { Zodiac } from '../src/constants/Zodiac';
const findHoroscope = new FindHoroscope();


describe("Is Aries", () => {
    test("Are the Aries compatible with the date?", () => {
        expect(findHoroscope["getZodiacByDate"](new Date('March 21, 1995 13:24:00'))).toEqual(Zodiac.ARIES);
        expect(findHoroscope["getZodiacByDate"](new Date('March 25, 1995 13:24:00'))).toEqual(Zodiac.ARIES);
        expect(findHoroscope["getZodiacByDate"](new Date('April 3, 1995 13:24:00'))).toEqual(Zodiac.ARIES);
        expect(findHoroscope["getZodiacByDate"](new Date('April 20, 1995 13:24:00'))).toEqual(Zodiac.ARIES);
    });
});

describe("Is Taurus", () => {
    test("Are the Taurus compatible with the date?", () => {
        expect(findHoroscope["getZodiacByDate"](new Date('April 21, 1995 13:24:00'))).toEqual(Zodiac.TAURUS);
        expect(findHoroscope["getZodiacByDate"](new Date('April  25, 1995 13:24:00'))).toEqual(Zodiac.TAURUS);
        expect(findHoroscope["getZodiacByDate"](new Date('May 3, 1995 13:24:00'))).toEqual(Zodiac.TAURUS);
        expect(findHoroscope["getZodiacByDate"](new Date('May 21, 1995 13:24:00'))).toEqual(Zodiac.TAURUS);
    });
});


describe("Is Gemini", () => {
    test("Are the Gemini compatible with the date?", () => {
        expect(findHoroscope["getZodiacByDate"](new Date('May 22, 1995 13:24:00'))).toEqual(Zodiac.GEMINI);
        expect(findHoroscope["getZodiacByDate"](new Date('May  25, 1995 13:24:00'))).toEqual(Zodiac.GEMINI);
        expect(findHoroscope["getZodiacByDate"](new Date('June 3, 1995 13:24:00'))).toEqual(Zodiac.GEMINI);
        expect(findHoroscope["getZodiacByDate"](new Date('June   21, 1995 13:24:00'))).toEqual(Zodiac.GEMINI);
    });
});

describe("Is Cancer", () => {
    test("Are the Cancer compatible with the date?", () => {
        expect(findHoroscope["getZodiacByDate"](new Date('June 22, 1995 13:24:00'))).toEqual(Zodiac.CANCER);
        expect(findHoroscope["getZodiacByDate"](new Date('June  25, 1995 13:24:00'))).toEqual(Zodiac.CANCER);
        expect(findHoroscope["getZodiacByDate"](new Date('July 3, 1995 13:24:00'))).toEqual(Zodiac.CANCER);
        expect(findHoroscope["getZodiacByDate"](new Date('July 23, 1995 13:24:00'))).toEqual(Zodiac.CANCER);
    });
});

describe("Is Leo", () => {
    test("Are the Leo compatible with the date?", () => {
        expect(findHoroscope["getZodiacByDate"](new Date('July 24, 1995 13:24:00'))).toEqual(Zodiac.LEO);
        expect(findHoroscope["getZodiacByDate"](new Date('July  25, 1995 13:24:00'))).toEqual(Zodiac.LEO);
        expect(findHoroscope["getZodiacByDate"](new Date('August 3, 1995 13:24:00'))).toEqual(Zodiac.LEO);
        expect(findHoroscope["getZodiacByDate"](new Date('August 21, 1995 13:24:00'))).toEqual(Zodiac.LEO);
    });
});


describe("Is Virgo", () => {
    test("Are the Virgo compatible with the date?", () => {
        expect(findHoroscope["getZodiacByDate"](new Date('August 22, 1995 13:24:00'))).toEqual(Zodiac.VIRGO);
        expect(findHoroscope["getZodiacByDate"](new Date('August  25, 1995 13:24:00'))).toEqual(Zodiac.VIRGO);
        expect(findHoroscope["getZodiacByDate"](new Date('September 3, 1995 13:24:00'))).toEqual(Zodiac.VIRGO);
        expect(findHoroscope["getZodiacByDate"](new Date('September 23, 1995 13:24:00'))).toEqual(Zodiac.VIRGO);
    });
});


describe("Is Libra", () => {
    test("Are the Libra compatible with the date?", () => {
        expect(findHoroscope["getZodiacByDate"](new Date('September 24, 1995 13:24:00'))).toEqual(Zodiac.LIBRA);
        expect(findHoroscope["getZodiacByDate"](new Date('September  25, 1995 13:24:00'))).toEqual(Zodiac.LIBRA);
        expect(findHoroscope["getZodiacByDate"](new Date('October 3, 1995 13:24:00'))).toEqual(Zodiac.LIBRA);
        expect(findHoroscope["getZodiacByDate"](new Date('October 23, 1995 13:24:00'))).toEqual(Zodiac.LIBRA);
    });
});


describe("Is Scorpio", () => {
    test("Are the Scorpio compatible with the date?", () => {
        expect(findHoroscope["getZodiacByDate"](new Date('October 24, 1995 13:24:00'))).toEqual(Zodiac.SCORPIO);
        expect(findHoroscope["getZodiacByDate"](new Date('October  25, 1995 13:24:00'))).toEqual(Zodiac.SCORPIO);
        expect(findHoroscope["getZodiacByDate"](new Date('November 3, 1995 13:24:00'))).toEqual(Zodiac.SCORPIO);
        expect(findHoroscope["getZodiacByDate"](new Date('November 23, 1995 13:24:00'))).toEqual(Zodiac.SCORPIO);
    });
});

describe("Is Sagittarius", () => {
    test("Are the Sagittarius compatible with the date?", () => {
        expect(findHoroscope["getZodiacByDate"](new Date('November 24, 1995 13:24:00'))).toEqual(Zodiac.SAGITTARIUS);
        expect(findHoroscope["getZodiacByDate"](new Date('November  25, 1995 13:24:00'))).toEqual(Zodiac.SAGITTARIUS);
        expect(findHoroscope["getZodiacByDate"](new Date('December 3, 1995 13:24:00'))).toEqual(Zodiac.SAGITTARIUS);
        expect(findHoroscope["getZodiacByDate"](new Date('December 22, 1995 13:24:00'))).toEqual(Zodiac.SAGITTARIUS);
    });
});

describe("Is Capricorn", () => {
    test("Are the Capricorn compatible with the date?", () => {
        expect(findHoroscope["getZodiacByDate"](new Date('December 23, 1995 13:24:00'))).toEqual(Zodiac.CAPRICORNUS);
        expect(findHoroscope["getZodiacByDate"](new Date('December  25, 1995 13:24:00'))).toEqual(Zodiac.CAPRICORNUS);
        expect(findHoroscope["getZodiacByDate"](new Date('January 3, 1995 13:24:00'))).toEqual(Zodiac.CAPRICORNUS);
        expect(findHoroscope["getZodiacByDate"](new Date('January 20, 1995 13:24:00'))).toEqual(Zodiac.CAPRICORNUS);
    });
});

describe("Is Aquarius", () => {
    test("Are the Aquarius compatible with the date?", () => {
        expect(findHoroscope["getZodiacByDate"](new Date('January 21, 1995 13:24:00'))).toEqual(Zodiac.AQUARIUS);
        expect(findHoroscope["getZodiacByDate"](new Date('January  25, 1995 13:24:00'))).toEqual(Zodiac.AQUARIUS);
        expect(findHoroscope["getZodiacByDate"](new Date('February 3, 1995 13:24:00'))).toEqual(Zodiac.AQUARIUS);
        expect(findHoroscope["getZodiacByDate"](new Date('February 19, 1995 13:24:00'))).toEqual(Zodiac.AQUARIUS);
    });
});

describe("Is Pisces", () => {
    test("Are the Pisces compatible with the date?", () => {
        expect(findHoroscope["getZodiacByDate"](new Date('February 20, 1995 13:24:00'))).toEqual(Zodiac.PISCES);
        expect(findHoroscope["getZodiacByDate"](new Date('February  25, 1995 13:24:00'))).toEqual(Zodiac.PISCES);
        expect(findHoroscope["getZodiacByDate"](new Date('March 3, 1995 13:24:00'))).toEqual(Zodiac.PISCES);
        expect(findHoroscope["getZodiacByDate"](new Date('March 20, 1995 13:24:00'))).toEqual(Zodiac.PISCES);
    });
});


describe("Turkish Localization Test", () => {
    test("Zodiac Turkish Localization Test", () => {
        expect(findHoroscope["getZodiacByLang"](Zodiac.PISCES, 'tr')).toEqual('Balık');
        expect(findHoroscope["getZodiacByLang"](Zodiac.ARIES, 'tr')).toEqual('Koç');
        expect(findHoroscope["getZodiacByLang"](Zodiac.TAURUS, 'tr')).toEqual('Boğa');
        expect(findHoroscope["getZodiacByLang"](Zodiac.GEMINI, 'tr')).toEqual('İkizler');
        expect(findHoroscope["getZodiacByLang"](Zodiac.CANCER, 'tr')).toEqual('Yengeç');
        expect(findHoroscope["getZodiacByLang"](Zodiac.LEO, 'tr')).toEqual('Aslan');
        expect(findHoroscope["getZodiacByLang"](Zodiac.VIRGO, 'tr')).toEqual('Başak');
        expect(findHoroscope["getZodiacByLang"](Zodiac.LIBRA, 'tr')).toEqual('Terazi');
        expect(findHoroscope["getZodiacByLang"](Zodiac.SCORPIO, 'tr')).toEqual('Akrep');
        expect(findHoroscope["getZodiacByLang"](Zodiac.SAGITTARIUS, 'tr')).toEqual('Yay');
        expect(findHoroscope["getZodiacByLang"](Zodiac.CAPRICORNUS, 'tr')).toEqual('Oğlak');
        expect(findHoroscope["getZodiacByLang"](Zodiac.AQUARIUS, 'tr')).toEqual('Kova');
    });
});

describe("Italian Localization Test", () => {
    test("Zodiac Italian Localization Test", () => {
        expect(findHoroscope["getZodiacByLang"](Zodiac.PISCES, 'it')).toEqual('Pesci');
        expect(findHoroscope["getZodiacByLang"](Zodiac.ARIES, 'it')).toEqual('Ariete');
        expect(findHoroscope["getZodiacByLang"](Zodiac.TAURUS, 'it')).toEqual('Toro');
        expect(findHoroscope["getZodiacByLang"](Zodiac.GEMINI, 'it')).toEqual('Gemelli');
        expect(findHoroscope["getZodiacByLang"](Zodiac.CANCER, 'it')).toEqual('Cancro');
        expect(findHoroscope["getZodiacByLang"](Zodiac.LEO, 'it')).toEqual('Leone');
        expect(findHoroscope["getZodiacByLang"](Zodiac.VIRGO, 'it')).toEqual('Vergine');
        expect(findHoroscope["getZodiacByLang"](Zodiac.LIBRA, 'it')).toEqual('Bilancia');
        expect(findHoroscope["getZodiacByLang"](Zodiac.SCORPIO, 'it')).toEqual('Scorpione');
        expect(findHoroscope["getZodiacByLang"](Zodiac.SAGITTARIUS, 'it')).toEqual('Sagittario');
        expect(findHoroscope["getZodiacByLang"](Zodiac.CAPRICORNUS, 'it')).toEqual('Capricorno');
        expect(findHoroscope["getZodiacByLang"](Zodiac.AQUARIUS, 'it')).toEqual('Acquario');
    });
});