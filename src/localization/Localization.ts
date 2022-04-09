import { ErrorMessages } from "../constants/ErrorMessages";
import { LangCodes } from "../constants/LangCodes";

export class Localization{
    public getObjectByLang(lang:string):any{
        if(Object.values(LangCodes).includes(lang as LangCodes)){
             let localeJson = Object(require(`./${lang}.json`));
             return localeJson;
        }else{
            throw Error(ErrorMessages.InvalidLang);
        }
    }
}