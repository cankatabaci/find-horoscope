export class Zodiac{
    public static readonly ARIES = "Aries";
    public static readonly TAURUS = "Taurus";
    public static readonly GEMINI = "Gemini";
    public static readonly CANCER = "Cancer";
    public static readonly LEO = "Leo";
    public static readonly VIRGO = "Virgo";
    public static readonly LIBRA = "Libra";
    public static readonly SCORPIO = "Scorpio";
    public static readonly SAGITTARIUS = "Sagittarius";
    public static readonly CAPRICORNUS = "Capricornus";
    public static readonly AQUARIUS = "Aquarius";
    public static readonly PISCES = "Pisces";
}

export class ChineseZodiac{
    public static readonly MONKEY = "Monkey";
    public static readonly ROOSTER = "Rooster";
    public static readonly DOG = "Dog";
    public static readonly PIG = "Pig";
    public static readonly RAT = "Rat";
    public static readonly OX = "Ox";
    public static readonly TIGER = "Tiger";
    public static readonly RABBIT = "Rabbit";
    public static readonly DRAGON = "Dragon";
    public static readonly SNAKE = "Snake";
    public static readonly HORSE = "Horse";
    public static readonly GOAT = "Goat";

    public static readonly chineseZodiac =  [
        ChineseZodiac.MONKEY,
        ChineseZodiac.ROOSTER,
        ChineseZodiac.DOG,
        ChineseZodiac.PIG,
        ChineseZodiac.RAT,
        ChineseZodiac.OX,
        ChineseZodiac.TIGER,
        ChineseZodiac.RABBIT,
        ChineseZodiac.DRAGON,
        ChineseZodiac.SNAKE,
        ChineseZodiac.HORSE,
        ChineseZodiac.GOAT
    ] as const;
}