import {FindHoroscope} from '../src/findHoroscope';
import { Zodiac,ChineseZodiac } from '../src/constants/Zodiac';
import { Localization } from '../src/localization/Localization';
import { ErrorMessages } from '../src/constants/ErrorMessages';
const findHoroscope = new FindHoroscope();
const localization = new Localization();

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


describe("French Localization Test", () => {
    test("Zodiac French Localization Test", () => {
        expect(findHoroscope["getZodiacByLang"](Zodiac.PISCES, 'fr')).toEqual('Poissons');
        expect(findHoroscope["getZodiacByLang"](Zodiac.ARIES, 'fr')).toEqual('Bélier');
        expect(findHoroscope["getZodiacByLang"](Zodiac.TAURUS, 'fr')).toEqual('Taureau');
        expect(findHoroscope["getZodiacByLang"](Zodiac.GEMINI, 'fr')).toEqual('Gémeaux');
        expect(findHoroscope["getZodiacByLang"](Zodiac.CANCER, 'fr')).toEqual('Cancer');
        expect(findHoroscope["getZodiacByLang"](Zodiac.LEO, 'fr')).toEqual('Lion');
        expect(findHoroscope["getZodiacByLang"](Zodiac.VIRGO, 'fr')).toEqual('Vierge');
        expect(findHoroscope["getZodiacByLang"](Zodiac.LIBRA, 'fr')).toEqual('Balance');
        expect(findHoroscope["getZodiacByLang"](Zodiac.SCORPIO, 'fr')).toEqual('Scorpion');
        expect(findHoroscope["getZodiacByLang"](Zodiac.SAGITTARIUS, 'fr')).toEqual('Sagittaire');
        expect(findHoroscope["getZodiacByLang"](Zodiac.CAPRICORNUS, 'fr')).toEqual('Capricorne');
        expect(findHoroscope["getZodiacByLang"](Zodiac.AQUARIUS, 'fr')).toEqual('Verseau');
    });
});


describe("Get Zodiac", () => {
    test("Get Zodiac by Birth Date", () => {
        expect(findHoroscope["getZodiac"](new Date('March 20, 1995 13:24:00'),'tr')).toEqual('Balık');
        expect(findHoroscope["getZodiacByDate"](new Date('August 10, 1995 13:24:00'))).toEqual(Zodiac.LEO);
    });
});



describe("Is Rat", () => {
    test("Are the Rat compatible with the date?", () => {
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1948 13:24:00').getFullYear())).toEqual(ChineseZodiac.RAT);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1960 13:24:00').getFullYear())).toEqual(ChineseZodiac.RAT);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1972 13:24:00').getFullYear())).toEqual(ChineseZodiac.RAT);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1984 13:24:00').getFullYear())).toEqual(ChineseZodiac.RAT);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2020 13:24:00').getFullYear())).toEqual(ChineseZodiac.RAT);
    });
});


describe("Is Ox", () => {
    test("Are the Ox compatible with the date?", () => {
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1949 13:24:00').getFullYear())).toEqual(ChineseZodiac.OX);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1961 13:24:00').getFullYear())).toEqual(ChineseZodiac.OX);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1985 13:24:00').getFullYear())).toEqual(ChineseZodiac.OX);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1997 13:24:00').getFullYear())).toEqual(ChineseZodiac.OX);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2021 13:24:00').getFullYear())).toEqual(ChineseZodiac.OX);
    });
});


describe("Is Tiger", () => {
    test("Are the Tiger compatible with the date?", () => {
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1950 13:24:00').getFullYear())).toEqual(ChineseZodiac.TIGER);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1974 13:24:00').getFullYear())).toEqual(ChineseZodiac.TIGER);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1986 13:24:00').getFullYear())).toEqual(ChineseZodiac.TIGER);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1998 13:24:00').getFullYear())).toEqual(ChineseZodiac.TIGER);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2010 13:24:00').getFullYear())).toEqual(ChineseZodiac.TIGER);
    });
});


describe("Is Rabbit", () => {
    test("Are the Rabbit compatible with the date?", () => {
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1951 13:24:00').getFullYear())).toEqual(ChineseZodiac.RABBIT);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1963 13:24:00').getFullYear())).toEqual(ChineseZodiac.RABBIT);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1975 13:24:00').getFullYear())).toEqual(ChineseZodiac.RABBIT);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1999 13:24:00').getFullYear())).toEqual(ChineseZodiac.RABBIT);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2011 13:24:00').getFullYear())).toEqual(ChineseZodiac.RABBIT);
    });
});


describe("Is Dragon", () => {
    test("Are the Dragon compatible with the date?", () => {
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1952 13:24:00').getFullYear())).toEqual(ChineseZodiac.DRAGON);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1964 13:24:00').getFullYear())).toEqual(ChineseZodiac.DRAGON);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1988 13:24:00').getFullYear())).toEqual(ChineseZodiac.DRAGON);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2000 13:24:00').getFullYear())).toEqual(ChineseZodiac.DRAGON);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2012 13:24:00').getFullYear())).toEqual(ChineseZodiac.DRAGON);
    });
});

describe("Is Snake", () => {
    test("Are the Snake compatible with the date?", () => {
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1953 13:24:00').getFullYear())).toEqual(ChineseZodiac.SNAKE);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1965 13:24:00').getFullYear())).toEqual(ChineseZodiac.SNAKE);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1977 13:24:00').getFullYear())).toEqual(ChineseZodiac.SNAKE);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1989 13:24:00').getFullYear())).toEqual(ChineseZodiac.SNAKE);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2001 13:24:00').getFullYear())).toEqual(ChineseZodiac.SNAKE);
    });
});


describe("Is Horse", () => {
    test("Are the Horse compatible with the date?", () => {
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1954 13:24:00').getFullYear())).toEqual(ChineseZodiac.HORSE);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1966 13:24:00').getFullYear())).toEqual(ChineseZodiac.HORSE);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1978 13:24:00').getFullYear())).toEqual(ChineseZodiac.HORSE);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2002 13:24:00').getFullYear())).toEqual(ChineseZodiac.HORSE);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2026 13:24:00').getFullYear())).toEqual(ChineseZodiac.HORSE);
    });
});



describe("Is Goat", () => {
    test("Are the Goat compatible with the date?", () => {
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1955 13:24:00').getFullYear())).toEqual(ChineseZodiac.GOAT);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1967 13:24:00').getFullYear())).toEqual(ChineseZodiac.GOAT);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1979 13:24:00').getFullYear())).toEqual(ChineseZodiac.GOAT);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2003 13:24:00').getFullYear())).toEqual(ChineseZodiac.GOAT);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2015 13:24:00').getFullYear())).toEqual(ChineseZodiac.GOAT);
    });
});


describe("Is Monkey", () => {
    test("Are the Monkey compatible with the date?", () => {
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1956 13:24:00').getFullYear())).toEqual(ChineseZodiac.MONKEY);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1968 13:24:00').getFullYear())).toEqual(ChineseZodiac.MONKEY);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1992 13:24:00').getFullYear())).toEqual(ChineseZodiac.MONKEY);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2004 13:24:00').getFullYear())).toEqual(ChineseZodiac.MONKEY);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2016 13:24:00').getFullYear())).toEqual(ChineseZodiac.MONKEY);
    });
});


describe("Is Rooster", () => {
    test("Are the Rooster compatible with the date?", () => {
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1957 13:24:00').getFullYear())).toEqual(ChineseZodiac.ROOSTER);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1969 13:24:00').getFullYear())).toEqual(ChineseZodiac.ROOSTER);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1981 13:24:00').getFullYear())).toEqual(ChineseZodiac.ROOSTER);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1993 13:24:00').getFullYear())).toEqual(ChineseZodiac.ROOSTER);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2005 13:24:00').getFullYear())).toEqual(ChineseZodiac.ROOSTER);
    });
});


describe("Is Dog", () => {
    test("Are the Dog compatible with the date?", () => {
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1958 13:24:00').getFullYear())).toEqual(ChineseZodiac.DOG);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1970 13:24:00').getFullYear())).toEqual(ChineseZodiac.DOG);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1982 13:24:00').getFullYear())).toEqual(ChineseZodiac.DOG);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1994 13:24:00').getFullYear())).toEqual(ChineseZodiac.DOG);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2018 13:24:00').getFullYear())).toEqual(ChineseZodiac.DOG);
    });
});



describe("Is Pig", () => {
    test("Are the Pig compatible with the date?", () => {
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1959 13:24:00').getFullYear())).toEqual(ChineseZodiac.PIG);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1971 13:24:00').getFullYear())).toEqual(ChineseZodiac.PIG);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1983 13:24:00').getFullYear())).toEqual(ChineseZodiac.PIG);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 1995 13:24:00').getFullYear())).toEqual(ChineseZodiac.PIG);
        expect(findHoroscope["getChineseZodiacByYear"](new Date('January 21, 2007 13:24:00').getFullYear())).toEqual(ChineseZodiac.PIG);
    });
});


describe("French Localization Test", () => {
    test("Chinese Zodiac French Localization Test", () => {
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.DOG, 'fr')).toEqual('Chien');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.DRAGON, 'fr')).toEqual('Dragon');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.GOAT, 'fr')).toEqual('Bouc');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.HORSE, 'fr')).toEqual('Cheval');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.MONKEY, 'fr')).toEqual('Singe');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.OX, 'fr')).toEqual('Boeuf');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.PIG, 'fr')).toEqual('Cochon');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.RABBIT, 'fr')).toEqual('Lapin');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.RAT, 'fr')).toEqual('Rat');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.ROOSTER, 'fr')).toEqual('Coq');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.SNAKE, 'fr')).toEqual('Serpent');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.TIGER, 'fr')).toEqual('Tigre');
    });
});


describe("Turkish Localization Test", () => {
    test("Chinese Zodiac Turkish Localization Test", () => {
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.DOG, 'tr')).toEqual('Köpek');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.DRAGON, 'tr')).toEqual('Ejderha');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.GOAT, 'tr')).toEqual('Keçi');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.HORSE, 'tr')).toEqual('At');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.MONKEY, 'tr')).toEqual('Maymun');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.OX, 'tr')).toEqual('Öküz');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.PIG, 'tr')).toEqual('Domuz');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.RABBIT, 'tr')).toEqual('Tavşan');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.RAT, 'tr')).toEqual('Fare');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.ROOSTER, 'tr')).toEqual('Horoz');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.SNAKE, 'tr')).toEqual('Yılan');
        expect(findHoroscope["getChineseZodiacByLang"](ChineseZodiac.TIGER, 'tr')).toEqual('Kaplan');
    });
});