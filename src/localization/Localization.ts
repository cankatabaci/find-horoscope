import { ErrorMessages } from "../constants/ErrorMessages";
import { LangCodes } from "../constants/LangCodes";
import enJson from "./en.json";
import trJson from "./tr.json";
import frJson from "./fr.json";
import itJson from "./it.json";

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