export enum SERVICE_TYPES {
  CREATE_ACCOUNT = "CREATE_ACCOUNT",
  ADD_ACCOUNT = "ADD_ACCOUNT",
  IMPORT_ACCOUNT = "IMPORT_ACCOUNT",
  LOAD_ACCOUNT = "LOAD_ACCOUNT",
  MAKE_ACCOUNT_ACTIVE = "MAKE_ACCOUNT_ACTIVE",
  GET_MNEMONIC_PHRASE = "GET_MNEMONIC_PHRASE",
  CONFIRM_MNEMONIC_PHRASE = "CONFIRM_MNEMONIC_PHRASE",
  RECOVER_ACCOUNT = "RECOVER_ACCOUNT",
  CONFIRM_PASSWORD = "CONFIRM_PASSWORD",
  REJECT_ACCESS = "REJECT_ACCESS",
  GRANT_ACCESS = "GRANT_ACCESS",
  SIGN_TRANSACTION = "SIGN_TRANSACTION",
  REJECT_TRANSACTION = "REJECT_TRANSACTION",
  SIGN_OUT = "SIGN_OUT",
  SHOW_BACKUP_PHRASE = "SHOW_BACKUP_PHRASE",
  SAVE_SETTINGS = "SAVE_SETTINGS",
  LOAD_SETTINGS = "LOAD_SETTINGS",
}

export enum EXTERNAL_SERVICE_TYPES {
  REQUEST_ACCESS = "REQUEST_ACCESS",
  SUBMIT_TRANSACTION = "SUBMIT_TRANSACTION",
}

export const EXTERNAL_MSG_REQUEST = "FREIGHTER_EXTERNAL_MSG_REQUEST";
export const EXTERNAL_MSG_RESPONSE = "FREIGHTER_EXTERNAL_MSG_RESPONSE";

declare const DEV_SERVER: string;
const _DEV_SERVER = DEV_SERVER;
export { _DEV_SERVER as DEV_SERVER };
