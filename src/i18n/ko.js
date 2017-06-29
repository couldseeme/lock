export default {
  error: {
    forgotPassword: {
      too_many_requests: '비밀번호 변경 요청 횟수가 제한을 초과하였습니다. 시간을 두고 나중에 다시 시도해 주세요.',
      'lock.fallback': '죄송합니다. 특정 오류로 인해 비밀번호 변경에 실패하였습니다.'
    },
    login: {
      blocked_user: '차단된 사용자 계정입니다.',
      invalid_user_password: '비밀번호가 일치하지 않습니다.',
      'lock.fallback': '죄송합니다. 특정 오류로 인해 로그인에 실패하였습니다.',
      'lock.invalid_code': '유효하지 않은 코드',
      'lock.invalid_email_password': '이메일 주소 또는 비밀번호가 틀립니다.',
      'lock.invalid_username_password': '사용자명 또는 비밀번호가 틀립니다.',
      'lock.network': '서버와의 연결에 실패하였습니다. 다시 시도해 주세요.',
      'lock.popup_closed': '팝업창이 닫혔습니다. 다시 시도해 주세요.',
      'lock.unauthorized': '권한이 없습니다. 다시 시도해 주세요.',
      'lock.mfa_registration_required': '多段階認証が必要ですが、デバイスが登録されていません。ご登録をお願いいたします。',
      'lock.mfa_invalid_code': '유효하지 않은 코드입니다. 다시 시도해 주세요.',
      password_change_required: '初めてログインする、またはパスワードが期限切れになったため、パスワードを更新する必要があります。', // TODO: verify error code
      password_leaked: 'アカウントはパスワードが別のウェブサイトで漏洩したためにブロックされました。ブロックを解除する方法についてはメールにて自動送信されます。',
      too_many_attempts: 'このアカウントは、短時間での複数回ログイン試行によりブロックされました。',
      session_missing: '認証リクエストを完了できませんでした。すべての開いているダイアログを閉じた後にもう一度お試しください。'
    },
    passwordless: {
      'bad.email': '이메일 주소가 유효하지 않습니다',
      'bad.phone_number': '전화번호가 유효하지 않습니다',
      'lock.fallback': '죄송합니다. 오류가 발생하였습니다'
    },
    signUp: {
      invalid_password: '비밀번호가 유효하지 않습니다.',
      'lock.fallback': '申し訳ございません。サインアップ時に何らかの理由によりエラーが発生しました。',
      password_dictionary_error: 'パスワードは一般的な文字列を避けてください。',
      password_no_user_info_error: 'ユーザーを含むパスワードは避けてください。',
      password_strength_error: 'パスワードが脆弱です。',
      user_exists: 'すでに使用されているユーザーです。',
      username_exists: 'すでに使用されているユーザーです。'
    }
  },
  success: {
    // success messages show above the form or in a confirmation pane
    logIn: '로그인에 성공하였습니다.',
    forgotPassword: '비밀번호를 초기화하기 위한 안내 이메일을 보내드렸습니다.',
    magicLink: '%s로 로그인하기 위한 링크가 전송되었습니다.',
    signUp: '회원가입이 완료되었습니다.'
  },
  blankErrorHint: '입력란을 공백으로 둘 수 없습니다',
  codeInputPlaceholder: '코드 입력',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: '또는',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: '또는',
  emailInputPlaceholder: 'your@example.com',
  enterpriseLoginIntructions: '企業の資格情報でログインしてください。',
  enterpriseActiveLoginInstructions: '%s の資格情報を入力してください',
  failedLabel: '실패하였습니다.',
  forgotPasswordTitle: '비밀번호를 초기화하기',
  forgotPasswordAction: '비밀번호를 잊어버리셨나요?',
  forgotPasswordInstructions: '이메일 주소를 입력해 주세요. 비밀번호 초기화를 위한 안내 메일을 보내드립니다.',
  forgotPasswordSubmitLabel: '메일 전송',
  invalidErrorHint: '오류',
  lastLoginInstructions: '최종 로그인',
  loginAtLabel: '%s 로그인',
  loginLabel: '로그인',
  loginSubmitLabel: '로그인',
  loginWithLabel: '%s 로그인',
  notYourAccountAction: '당신의 계정이 아닌가요?',
  passwordInputPlaceholder: '비밀번호',
  passwordStrength: {
    containsAtLeast: '%d 이/가 포함되어 있습니다:',
    identicalChars: '연속한 동일 문자는 ％d개까지만 사용할 수 있습니다 (예: "％s "는 사용할 수 없습니다)',
    nonEmpty: '비밀번호가 필요합니다',
    numbers: '숫자 (i.e. 0-9)',
    lengthAtLeast: '%d 자 이상',
    lowerCase: '소문자 (a-z)',
    shouldContain: '포함되어야 할 것:',
    specialCharacters: '특수문자 (e.g. !@#$%^&*)',
    upperCase: '대문자 (A-Z)'
  },
  passwordlessEmailAlternativeInstructions: '이메일 주소를 입력하거나<br/>또는 새로운 계정을 만들어 주세요.',
  passwordlessEmailCodeInstructions: '％s 로 코드가 적힌 이메일을 전송하였습니다.',
  passwordlessEmailInstructions: '이메일 주소를 입력하여 로그인하거나<br/>또는 새로운 계정을 만들어 주세요.',
  passwordlessSMSAlternativeInstructions: '전화번호를 입력하여 로그인하거나<br/>또는 새로운 계정을 만들어 주세요.',
  passwordlessSMSCodeInstructions: '%s 로 코드가 적힌 SMS를 전송하였습니다.',
  passwordlessSMSInstructions: '전화번호를 입력하여 로그인하거나<br/>또는 새로운 계정을 만들어 주세요.',
  phoneNumberInputPlaceholder: '전화번호',
  resendCodeAction: 'コードは受け取れましたか？',
  resendLabel: '재전송하기',
  resendingLabel: '재전송중...',
  retryLabel: '재시도',
  sentLabel: '전송완료',
  signupTitle: '회원가입',
  signUpLabel: '회원가입',
  signUpSubmitLabel: '회원가입',
  signUpTerms: '',
  signUpWithLabel: '%s 로 회원가입',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'シングルサインオンが有効になっています',
  submitLabel: '전송',
  unrecoverableError: '오류가 발생하였습니다.<br />고객센터로 연락하여 주시기 바랍니다.',
  usernameFormatErrorHint: '%d-%d の文字列、数字、"_"が使用できます。',
  usernameInputPlaceholder: '사용자명',
  usernameOrEmailInputPlaceholder: '사용자명/이메일 주소',
  title: 'Auth0',
  welcome: '환영합니다, %s!',
  windowsAuthInstructions: '기업 네트워크로 접속되어 있습니다&hellip;',
  windowsAuthLabel: 'Windows 인증',
  mfaInputPlaceholder: '코드',
  mfaLoginTitle: '2단계 인증',
  mfaLoginInstructions: '스마트폰 어플리케이션으로 생성된 확인 코드를 입력하여 주세요.',
  mfaSubmitLabel: '로그인',
  mfaCodeErrorHint: '%d 숫자를 사용하여 주세요.'
};
