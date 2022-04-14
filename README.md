# Find Horoscope
[![Node.js CI](https://github.com/cankatabaci/find-horoscope/actions/workflows/node.js.yml/badge.svg)](https://github.com/cankatabaci/find-horoscope/actions/workflows/node.js.yml)
[![Publish Package to npmjs](https://github.com/cankatabaci/find-horoscope/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/cankatabaci/find-horoscope/actions/workflows/npm-publish.yml)

_Gives your horoscope and chinese horoscope based on your date of birth. Also has multi-language support_

## **Install**
```
npm i find-horoscope
```

### **Usage**

findHoroscope.getZodiac(`BirthDate`, `LangCode`)

```ts
import { FindHoroscope } from "find-horoscope";

const birthDate:Date = new Date('March 20, 1995 13:24:00');
const findHoroscope = new FindHoroscope();

console.log(findHoroscope.getZodiac(birthDate, 'tr'));
//Balık

console.log(findHoroscope.getChineseZodiac(birthDate, 'en'));
//Pig
```

Supported Lang Codes:

| LangCode      | Description |
| ----------- | ----------- |
| tr      | Turkish       |
| en   | English        |
| it   | Italian        |
| fr   | French        |