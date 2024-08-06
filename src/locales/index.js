import { LANGUAGE } from "../tools/constants";
// import { en } from "./EN";
import { ru } from "./EN";
import { uz } from "./UZ";
import { tr } from "./TR";

export const getLanguage = () => {
    return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
    return getLanguage() === "uz"
        ? uz[word]
        :
         getLanguage() === "en"
        ? en[word]
        : tr[word];
};

