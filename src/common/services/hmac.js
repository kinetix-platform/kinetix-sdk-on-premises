import crypto from "crypto";

export default (url, body, method) => {
  const hmac = crypto.createHmac("sha512", process.env.HMAC_SECRET);
  const bodyString = !body ? "" : JSON.stringify(body);
  hmac.write(`${method}|${url}${bodyString}`, "utf8");
  hmac.end();
  const sig = hmac.read();
  return sig.toString("base64");
};
