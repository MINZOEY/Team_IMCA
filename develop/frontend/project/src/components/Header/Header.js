import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <div className="header_wrapper">
        <div className="top_wrapper">
          <div className="top_logo" onClick={() => navigate('/')}>
            IMCA
          </div>
        </div>
        <div className="nav_container">
          <div className="nav_wrapper">
            <div className="nav_item">
              <div>IMCA</div>
              <ul className="item_menu">
                <li onClick={() => navigate('/team-introduction')}>ABOUT US</li>
              </ul>
            </div>
            <div className="nav_item">
              <div>공연 소식</div>
              <ul className="item_menu">
                <li onClick={() => navigate('/concert_act')}>연극</li>
                <li onClick={() => navigate('/concert_musical')}>뮤지컬</li>
              </ul>
            </div>
            <div className="nav_item">
              <div onClick={() => navigate('/community_all')}>커뮤니티</div>
              <ul className="item_menu">
                <li onClick={() => navigate('/freeboard')}> 자유게시판</li>
                <li onClick={() => navigate('/concert_review')}>공연 후기</li>
                <li onClick={() => navigate('/gather')}>동행 / 양도</li>
              </ul>
            </div>
            <div className="nav_item">
              <div>콘텐츠</div>
              <ul className="item_menu">
                <li onClick={() => navigate('/youtube')}>YouTube</li>
              </ul>
            </div>
            <div className="nav_item">내 캘린더</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
