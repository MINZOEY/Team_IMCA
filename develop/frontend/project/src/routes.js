const routes = {
  main: '/', // 메인페이지
  signup: '/signup', // 회원가입
  login: '/login', // 로그인
  concert: '/concert_all', // 공연 소식 메인
  act: '/concert_act', // 연극 구분
  musical: '/concert_musical', // 뮤지컬 구분
  actDetail: '/concert_act/:id', // 연극 상세
  musicalDetail: '/concert_musical/:id', // 뮤지컬 상세
  content: '/content_all', // 콘텐츠 메인
  contentDetail: '/content/:id', // 콘텐츠 상세
  community: '/community_all', // 커뮤니티 메인
  category: '/category', //
  freeboard: '/freeboard', // 자유게시판
  board: '/:board', // 게시판
  post: '/post', // 게시글
  new: '/new', // 글쓰기
  edit: '/edit', // 수정 하기
  myCalender: '/my_calender', // 마이 캘린더
};
export default routes;
