import { createI18n } from "vue-i18n";
import messages from "@/i18n";

let locale = localStorage.getItem("lang");

const i18n = new createI18n({
    locale: locale,
    fallbackLocale: "ru",
    messages: messages
});

export default ({ app }) => {
    app.use(i18n);
};

export { i18n, locale };