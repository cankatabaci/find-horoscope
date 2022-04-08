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
                if(birthDate.getUTCDate() <= 19){
                    return Zodiac.OGLAK;
                }else {
                    return Zodiac.KOVA;
                }
            }
            case 1:{
                if(birthDate.getUTCDate() <= 18){
                    return Zodiac.KOVA;
                }else{
                    return Zodiac.BALIK;
                }
            }
            case 2:{
                if(birthDate.getUTCDate() <= 20){
                    return Zodiac.BALIK;
                }else{
                    return Zodiac.KOC
                }
            }
            case 3:{
                if(birthDate.getUTCDate() <= 19){
                    return Zodiac.KOC;
                }else{
                    return Zodiac.BOGA;
                }
            }
            case 4:{
                if(birthDate.getUTCDate() <= 20){
                    return Zodiac.BOGA;
                }else{
                    return Zodiac.IKIZLER;
                }
            }
            case 5:{
                if(birthDate.getUTCDate() <= 21){
                    return Zodiac.IKIZLER;
                }else{
                    return Zodiac.YENGEC;
                }
            }
            case 6:{
                if(birthDate.getUTCDate() <= 22){
                    return Zodiac.YENGEC;
                }else{
                    return Zodiac.ASLAN
                }
            }
            case 7:{
                if(birthDate.getUTCDate() <= 22){
                    return Zodiac.ASLAN;
                }else{
                    return Zodiac.BASAK;
                }
            }
            case 8:{
                if(birthDate.getUTCDate() <= 22){
                    return Zodiac.BASAK;
                }else{
                    return Zodiac.TERAZI;
                }
            }
            case 9:{
                if(birthDate.getUTCDate() <= 23){
                    return Zodiac.TERAZI;
                }else{
                    return Zodiac.AKREP;
                }
            }
            case 10:{
                if(birthDate.getUTCDate() <= 21){
                    return Zodiac.AKREP;
                }else{
                    return Zodiac.YAY;
                }
            }
            case 11:{
                if(birthDate.getUTCDate() <= 21){
                    return Zodiac.YAY;
                }else{
                    return Zodiac.OGLAK;
                }
            }
            default: { 
                throw new Error("Invalid Date");
                break; 
             }
        }
    }

    private getZodiacByLang(zodiac:Zodiac, lang:string):string{

    }

}