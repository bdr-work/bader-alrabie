import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { images } from "../../constants";

import { TailSpin } from "react-loader-spinner";
import { toast } from "react-toastify";

import "./Form.scss";

import { validateEmail, validateName, validateNumber } from "../validation";
import InlineError from "../InlineError";
import { SendEmail } from "../../API";
import Toast from "../Toast";
const Form = () => {
  const [t, i18n] = useTranslation();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [typeOfContact, setTypeOfContact] = useState("whatsapp");
  const [typeOfClient, setTypeOfClient] = useState("Individual");
  const [number, setNumber] = useState();
  const [typeOfProject, setTypeOfProject] = useState("");
  const [features, setFeatures] = useState("");
  const [link, setLink] = useState("");
  const [like, setLike] = useState("");
  const [notes, setNotes] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();

  //Error State
  const [emailError, setEmailError] = useState();
  const [nameError, setNameError] = useState();
  const [numberError, setNumberError] = useState();

  //  Validation
  useEffect(() => {
    validateName({ username, setNameError });
    validateEmail({ email, setEmailError });
    validateNumber({ number, setNumberError });

    // #################
    if (send) {
      toast.success(send.msg);
      setEmail("");
      setName("");
      setTypeOfContact("whatsapp");
      setTypeOfClient("Individual");
      setNumber("");
      setTypeOfProject("");
      setFeatures("");
      setLink("");
      setLike("");
      setNotes("");
    }
  }, [username, email, number, send]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonLoading(true);
    if (!nameError & !emailError & !numberError) {
      SendEmail({
        username,
        email,
        typeOfContact,
        typeOfClient,
        number,
        typeOfProject,
        features,
        link,
        like,
        notes,
        setSend,
      }).then(() => {
        setButtonLoading(false);
      });
    }
  };

  return (
    <>
      <Toast />
      <div
        className={`app__contact-container app__contact-container-${i18n.language}`}
      >
        <div className="app__contact-box">
          <div className="img-box">
            <img src={images.logo} />
          </div>

          <form
            onSubmit={handleSubmit}
            className={`form form-${i18n.language}`}
          >
            <div className="text-area text-area-350">
              <input
                id="name"
                placeholder={t("exName")}
                name="username"
                className="form-control"
                type="text"
                required="true"
                value={username}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="form-label" for="name">
                {t("Your Name")}
                <span> *</span>
              </label>
              {nameError && <InlineError error={nameError} />}
            </div>

            <div className="text-area text-area-350">
              <input
                id="email"
                placeholder={t("exEmail")}
                className="form-control"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form-label" for="email">
                {t("Your Email")}
                <span> *</span>
              </label>
              {emailError && <InlineError error={emailError} />}
            </div>

            <div className={`select-group select-group-${i18n.language}`}>
              <div className="type-contact">
                <label for="typeOfContact">
                  {t("Preferred")}
                  <span> *</span>
                </label>
                <div className="main-box">
                  <div className={`wrapper wrapper-${i18n.language}`}>
                    <input
                      type="radio"
                      name="typeOfContact"
                      id="option-1"
                      value="whatsapp"
                      onChange={(e) => setTypeOfContact(e.target.value)}
                      checked={typeOfContact === "whatsapp"}
                    />
                    <input
                      type="radio"
                      name="typeOfContact"
                      id="option-2"
                      value="Email"
                      onChange={(e) => setTypeOfContact(e.target.value)}
                      checked={typeOfContact === "Email"}
                    />
                    <label for="option-1" class="option option-1">
                      <div class="dot"></div>
                      <span>{t("whatsapp")}</span>
                    </label>
                    <label for="option-2" class="option option-2">
                      <div class="dot"></div>
                      <span>{t("Email")}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="type-client">
                <label for="typeOfClient">
                  {t("type")}
                  <span> *</span>
                </label>
                <div className="main-box">
                  <div className={`wrapper wrapper-${i18n.language}`}>
                    <input
                      type="radio"
                      id="option-3"
                      name="typeOfClient"
                      required
                      value="Individual"
                      onChange={(e) => setTypeOfClient(e.target.value)}
                      checked={typeOfClient === "Individual"}
                    />
                    <input
                      type="radio"
                      id="option-4"
                      name="typeOfClient"
                      required
                      value="Company"
                      onChange={(e) => setTypeOfClient(e.target.value)}
                      checked={typeOfClient === "Company"}
                    />
                    <label for="option-3" class="option option-3">
                      <div class="dot"></div>
                      <span>{t("Individual")}</span>
                    </label>
                    <label for="option-4" class="option option-4">
                      <div class="dot"></div>
                      <span>{t("company")}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-area text-area-350">
              <input
                id="number"
                className="form-control"
                placeholder={t("exNumber")}
                name="number"
                type="text"
                minLength={10}
                maxLength={10}
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <label className="form-label" for="number">
                {t("Your Number")}
                <span> *</span>
              </label>
              {numberError && <InlineError error={numberError} />}
            </div>

            <div className="text-area text-area-350">
              <input
                id="typeOfProject"
                className="form-control"
                placeholder={t("exType")}
                name="typeOfProject"
                type="text"
                required="true"
                value={typeOfProject}
                onChange={(e) => setTypeOfProject(e.target.value)}
              />
              <label className="form-label" for="typeOfProject">
                {t("Type of the project")}
                <span> *</span>
              </label>
            </div>

            <div className="text-area  px-150">
              <textarea
                id="textArea-features"
                placeholder={t("exFeatures")}
                rows="3"
                required
                className="form-control"
                name="features"
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
              ></textarea>
              <label className="form-label" for="textArea-features">
                {t("Project features")}
                <span> *</span>
              </label>
            </div>

            <div className="text-area text-area-350">
              <input
                id="link"
                className="form-control"
                placeholder={t("exOld")}
                name="link"
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <label className="form-label" for="link">
                {t("Your old")}
              </label>
            </div>

            <div className="text-area text-area-350  px-150">
              <textarea
                id="textArea-like"
                placeholder={t("exWeb")}
                rows="3"
                className="form-control"
                name="like"
                value={like}
                onChange={(e) => setLike(e.target.value)}
              ></textarea>
              <label className="form-label" for="textArea-like">
                {t("Websites you like")}
              </label>
            </div>
            <div className="text-area  px-150">
              <textarea
                id="textArea-notes"
                placeholder={t("exNotes")}
                rows="3"
                className="form-control"
                name="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <label className="form-label" for="textArea-notes">
                {t("Your notes")}
              </label>
            </div>

            <Button
              variant="outlined"
              className={`btn btn-${i18n.language}`}
              disabled={buttonLoading && true}
              type="submit"
            >
              {buttonLoading ? (
                <TailSpin
                  height="20"
                  width="20"
                  color="#313bac"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              ) : (
                t("submit")
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
