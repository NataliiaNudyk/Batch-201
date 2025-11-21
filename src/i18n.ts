import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uaAuth from "./locales/ua/auth.json";
import uaCart from "./locales/ua/cart.json";
import uaCommon from "./locales/ua/common.json";
import uaFavorites from "./locales/ua/favorites.json";
import uaHome from "./locales/ua/home.json";
import uaProfile from "./locales/ua/profile.json";

import enAuth from "./locales/en/auth.json";
import enCart from "./locales/en/cart.json";
import enCommon from "./locales/en/common.json";
import enFavorites from "./locales/en/favorites.json";
import enHome from "./locales/en/home.json";
import enProfile from "./locales/en/profile.json";

i18n
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("lang") || "ua",
    fallbackLng: "ua",
    resources: {
      ua: {
        auth: uaAuth,
        cart: uaCart,
        common: uaCommon,
        favorites: uaFavorites,
        home: uaHome,
        profile: uaProfile,
      },
      en: {
        auth: enAuth,
        cart: enCart,
        common: enCommon,
        favorites: enFavorites,
        home: enHome,
        profile: enProfile,
      },
    },
  });

export default i18n;
