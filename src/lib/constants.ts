export const PASSWORD_MIN_LENGTH = 4;
export const PASSWORD_MIN_LENGTH_ERROR = `${PASSWORD_MIN_LENGTH} 이상 입력해 주세요.`;
export const PASSWORD_TYPE_ERROR = "비밀번호는 문자열 형태여야 합니다.";
export const PASSWORD_REQUIRED_ERROR = "비밀번호를 입력해 주세요.";
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/;
export const PASSWORD_REGEX_ERROR =
  "비밀번호는 알파벳 소문자, 대문자, 숫자, 특수문자를 포함해야 합니다.";
export const PASSWORD_NOT_MATCH_ERROR = "비밀번호가 일치하지 않습니다.";

export const USERNAME_MIN_LENGTH = 4;
export const USERNAME_MAX_LENGTH = 20;
export const USERNAME_LENGTH_ERROR = `${USERNAME_MIN_LENGTH}~${USERNAME_MAX_LENGTH} 글자 사이로 입력해 주세요.`;
export const USERNAME_CHECK_ERROR = "공백은 허용되지 않습니다.";
export const USERNAME_UNIQUE_ERROR = "이미 사용중인 이름입니다.";
export const USERNAME_TYPE_ERROR = "이름은 문자열 형태여야 합니다.";
export const USERNAME_REQUIRED_ERROR = "이름을 입력해 주세요.";

export const EMAIL_TYPE_ERROR = "이메일은 문자열 형태여야 합니다.";
export const EMAIL_REQUIRED_ERROR = "이메일을 입력해 주세요.";
export const EMAIL_UNIQUE_ERROR = "이미 사용중인 이메일입니다.";
export const EMAIL_ERROR = "이메일 형식이 아닙니다.";

export const LOGIN_FAIL_ERROR = "인증 정보가 올바르지 않습니다.";
