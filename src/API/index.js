import axios from "axios";

export const SendEmail = async ({
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
}) => {
  try {
    const datas = {
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
    };

    let res = await axios.post(`https://bader-alrabie/send`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};
