import styles from '@/views/login/Login.module.css';

export default function Login() {
  return (
    <div className={styles.commonLayoutContainer}>
      <header className={styles.loginHeader}>
        <div className={styles.loginHeaderTitle}>
          <h2>로그인/회원가입</h2>
        </div>
      </header>
      <main>
        <section className={styles.loginSection}>
          <div className={styles.logo}>
            <h2>MUSINSA</h2>
            <p>무신사 하나로 로그인하세요.</p>
          </div>
          <form action="">
            <input
              type="text"
              id="email"
              placeholder="통합계정 또는 이메일"
              className={styles.boxShadow}
            />
            <input
              type="password"
              id="password"
              placeholder="비밀번호"
              className={styles.boxShadow}
            />
          </form>
          <div className={styles.loginAuto}>
            <input type="checkbox" id="loginAuto" hidden />
            <label htmlFor="loginAuto" className={styles.checked}>
              자동 로그인
            </label>
          </div>

          <div className={styles.loginButton}>
            <button>로그인</button>
          </div>

          <div className={styles.guide}>
            <p>지금 가입하면, 신규 할인 쿠폰 즉시 발급</p>
          </div>

          <div className={styles.socials}>
            <button className={styles.kakaoSns}>카카오로 시작하기</button>
            <button className={styles.googleSns}>구글로 시작하기</button>
            <button className={styles.emailLogin}>이메일로 가입하기</button>
          </div>

          <div className={styles.findInfo}>
            <div>
              <span>아이디찾기</span>
            </div>
            <div>
              <span>&nbsp;| 비밀번호찾기</span>
            </div>
          </div>

          <div className={styles.nonMemberOrder}>
            <a href="">비회원 주문 조회</a>
          </div>
        </section>
      </main>
    </div>
  );
}
