import * as _cryptoJS from "crypto-js";
import { environment } from "src/environment/environment";

const encDecKey  = environment.aes128SaltKey;

export const encrypt = (text: string) => {
    if (text === "") return;
    let encrypted = _cryptoJS.AES.encrypt(JSON.stringify(text), encDecKey);
    return encrypted.toString();
  };

  /**
   * @function decrypt decrypts the input value
   */
  export const decrypt = (text: string) => {
    if (text === "") return;
    let bytes = _cryptoJS.AES.decrypt(text, encDecKey);
    return JSON.parse(bytes.toString(_cryptoJS.enc.Utf8));
  };
