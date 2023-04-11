// 회원가입 또는 로그인 폼을 보여주기

import { Link } from 'react-router-dom';
import Button from '../common/Button';

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <div>
      <h3>{text}</h3>
      <form>
        <input name="username" placeholder="아이디" />
        <input name="password" placeholder="비밀번호" type="password" />
        {type === 'register' && (
          <input
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
        <Button>{text}</Button>
      </form>
      <div>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/">로그인</Link>
        )}
      </div>
    </div>
  );
};
export default AuthForm;
