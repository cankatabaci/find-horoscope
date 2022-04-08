import { Zodiac } from "./constants/Zodiac";

export class FindHoroscope{

    public getZodiac(birthDate:Date, lang:string):string{
        const baseZodiac = this.getZodiacByDate(birthDate);
        const finalZodiac = this.getZodiacByLang(baseZodiac, lang);

        return finalZodiac;
    }

    private getZodiacByDate(birthDate:Date):string{
        switch(birthDate.getMonth()){
            case 0:{
                if(birthDate.getUTCDate() <= 20){
                    return Zodiac.CAPRICORNUS;
                }else {
                    return Zodiac.AQUARIUS;
                }
            }
            case 1:{
                if(birthDate.getUTCDate() <= 19){
                    return Zodiac.AQUARIUS;
                }else{
                    return Zodiac.PISCES;
                }
            }
            case 2:{
                if(birthDate.getUTCDate() <= 20){
                    return Zodiac.PISCES;
                }else{
                    return Zodiac.ARIES
                }
            }
            case 3:{
                if(birthDate.getUTCDate() <= 20){
                    return Zodiac.ARIES;
                }else{
                    return Zodiac.TAURUS;
                }
            }
            case 4:{
                if(birthDate.getUTCDate() <= 21){
                    return Zodiac.TAURUS;
                }else{
                    return Zodiac.GEMINI;
                }
            }
            case 5:{
                if(birthDate.getUTCDate() <= 21){
                    return Zodiac.GEMINI;
                }else{
                    return Zodiac.CANCER;
                }
            }
            case 6:{
                if(birthDate.getUTCDate() <= 23){
                    return Zodiac.CANCER;
                }else{
                    return Zodiac.LEO
                }
            }
            case 7:{
                if(birthDate.getUTCDate() <= 21){
                    return Zodiac.LEO;
                }else{
                    return Zodiac.VIRGO;
                }
            }
            case 8:{
                if(birthDate.getUTCDate() <= 23){
                    return Zodiac.VIRGO;
                }else{
                    return Zodiac.LIBRA;
                }
            }
            case 9:{
                if(birthDate.getUTCDate() <= 23){
                    return Zodiac.LIBRA;
                }else{
                    return Zodiac.SCORPIO;
                }
            }
            case 10:{
                if(birthDate.getUTCDate() <= 23){
                    return Zodiac.SCORPIO;
                }else{
                    return Zodiac.SAGITTARIUS;
                }
            }
            case 11:{
                if(birthDate.getUTCDate() <= 22){
                    return Zodiac.SAGITTARIUS;
                }else{
                    return Zodiac.CAPRICORNUS;
                }
            }
            default: { 
                throw new Error("Invalid Date");
                break; 
             }
        }
    }

    private getZodiacByLang(zodiac:Zodiac, lang:string):string{
        return "";
    }

}