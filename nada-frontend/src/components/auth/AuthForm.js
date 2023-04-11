// 회원가입 또는 로그인 폼을 보여주기

import Button from '../common/Button';

const AuthForm = () => {
  return (
    <div>
      <h3>로그인</h3>
      <form>
        <input name="username" placeholder="아이디" />
        <input name="password" placeholder="비밀번호" type="password" />
        <Button>로그인</Button>
      </form>
    </div>
  );
};
export default AuthForm;
