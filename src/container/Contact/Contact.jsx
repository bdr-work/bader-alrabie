import React from "react";

import { AppWrap, WrappMotion } from "../../Wrapper";
import "./Contact.scss";

import Form from "../../components/Form/Form";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <h2 className={`head-text head-text-${i18n.language}`}>
        <span>{t("Do")}</span>
        {t("Idea")}
        <span> {t("?")}</span>
        <br />
        <span>{t("doIt")}</span>
      </h2>
      <Form />
    </>
  );
};

export default AppWrap(
  WrappMotion(Contact, "app__contact"),
  "contact",
  "app__whitebg"
);
