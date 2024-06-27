import TPayload from "./sendRes.interface";

const sendRes = <T>(payload: TPayload<T>) => {
  const { data, statusCode, success, message, res } = payload;
  return res.status(statusCode).json({
    success: success ? success : true,
    statusCode,
    message: message ? message : "Message Not Found Or Something Happen",
    data,
  });
};

export default sendRes;
