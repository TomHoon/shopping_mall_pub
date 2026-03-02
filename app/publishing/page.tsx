// app/publishing/page.tsx

import styles from './publishing.module.css';

type Status = '작업전' | '진행중' | '완료';

type PageItem = {
  id: number;
  name: string;
  path: string;
  status: Status;
};

const pages: PageItem[] = [
  { id: 1, name: '홈', path: '/', status: '작업전' },
  { id: 2, name: '검색 결과', path: '/search', status: '작업전' },
  {
    id: 3,
    name: '카테고리 목록',
    path: '/category/[category]',
    status: '작업전',
  },
  {
    id: 4,
    name: '서브 카테고리',
    path: '/category/[category]/[sub]',
    status: '작업전',
  },
  { id: 5, name: '브랜드 목록', path: '/brand', status: '작업전' },
  { id: 6, name: '브랜드 상세', path: '/brand/[brandId]', status: '작업전' },
  { id: 7, name: '랭킹', path: '/ranking', status: '작업전' },
  { id: 8, name: '기획전', path: '/exhibition/[id]', status: '작업전' },
  { id: 9, name: '상품 상세', path: '/product/[id]', status: '작업전' },
  {
    id: 10,
    name: '상품 리뷰 전체',
    path: '/product/[id]/reviews',
    status: '작업전',
  },
  {
    id: 11,
    name: '리뷰 작성',
    path: '/product/[id]/review/write',
    status: '작업전',
  },
  {
    id: 12,
    name: '사이즈 가이드',
    path: '/product/[id]/size-guide',
    status: '작업전',
  },
  { id: 13, name: '장바구니', path: '/cart', status: '작업전' },
  { id: 14, name: '주문서 작성', path: '/checkout', status: '작업전' },
  { id: 15, name: '결제 진행', path: '/payment', status: '작업전' },
  { id: 16, name: '주문 완료', path: '/order-complete', status: '작업전' },
  { id: 17, name: '주문 실패', path: '/order-fail', status: '작업전' },
  { id: 18, name: '로그인', path: '/login', status: '작업전' },
  { id: 19, name: '회원가입', path: '/signup', status: '작업전' },
  { id: 20, name: '비밀번호 찾기', path: '/forgot-password', status: '작업전' },
  { id: 21, name: '이메일 인증', path: '/verify-email', status: '작업전' },
  { id: 22, name: '마이페이지 홈', path: '/mypage', status: '작업전' },
  { id: 23, name: '주문 내역', path: '/mypage/orders', status: '작업전' },
  {
    id: 24,
    name: '주문 상세',
    path: '/mypage/orders/[orderId]',
    status: '작업전',
  },
  {
    id: 25,
    name: '취소/반품 신청',
    path: '/mypage/claim/[orderItemId]',
    status: '작업전',
  },
  { id: 26, name: '위시리스트', path: '/mypage/wishlist', status: '작업전' },
  { id: 27, name: '최근 본 상품', path: '/mypage/recent', status: '작업전' },
  { id: 28, name: '회원정보 수정', path: '/mypage/profile', status: '작업전' },
  { id: 29, name: '배송지 관리', path: '/mypage/address', status: '작업전' },
  { id: 30, name: '포인트 내역', path: '/mypage/point', status: '작업전' },
  { id: 31, name: '공지사항', path: '/notice', status: '작업전' },
  { id: 32, name: 'FAQ', path: '/faq', status: '작업전' },
  { id: 33, name: '1:1 문의', path: '/inquiry', status: '작업전' },
  { id: 34, name: '문의 작성', path: '/inquiry/write', status: '작업전' },
  { id: 35, name: '404', path: 'not-found.tsx', status: '작업전' },
  { id: 36, name: '에러 페이지', path: 'error.tsx', status: '작업전' },
  { id: 37, name: '약관', path: '/terms', status: '작업전' },
  { id: 38, name: '개인정보처리방침', path: '/privacy', status: '작업전' },
];

export default function Page() {
  const total = pages.length;
  const completed = pages.filter((p) => p.status === '완료').length;
  const progress = Math.round((completed / total) * 100);

  const statusClass = (status: Status) => {
    if (status === '완료') return styles.complete;
    if (status === '진행중') return styles.progress;
    return styles.pending;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📋 무신사 퍼블리싱 리스트</h1>
      <p className={styles.summary}>
        전체 {total}개 / 완료 {completed}개 ({progress}%)
      </p>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>번호</th>
              <th>페이지명</th>
              <th>Path</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page.id}>
                <td>{page.id}</td>
                <td>{page.name}</td>
                <td>
                  <a href={page.path}>{page.path}</a>
                </td>
                <td>
                  <span
                    className={`${styles.badge} ${statusClass(page.status)}`}
                  >
                    {page.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
