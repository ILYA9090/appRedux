import * as yup from "yup";


const schema = yup.object().shape({
  login: yup.string().min(8).max(32).required(),
  password: yup.string().min(8).max(32).required(),
});

export default schema;
