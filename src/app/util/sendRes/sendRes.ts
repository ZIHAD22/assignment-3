import TPayload from "./sendRes.interface";

const sendRes = <T>(payload: TPayload<T>) => {
  const { data, statusCode, success, message, res, token } = payload;
  return res.status(statusCode).json({
    success: success ? success : true,
    statusCode,
    message: message ? message : "Message Not Found Or Something Happen",
    token,
    data,
  });
};

export default sendRes;
