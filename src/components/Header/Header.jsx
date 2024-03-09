import logo from '../../assets/LogoXTD.webp';
import {
  DeveloperPhoto,
  HeaderContainer,
  Id,
  Logo,
  MenuIcon,
  Name,
} from './StyledHeader';

const Header = ({ developer, toggleSidebar, isSidebarOpen }) => {
  return (
    <HeaderContainer>
      <MenuIcon onClick={toggleSidebar} isOpen={isSidebarOpen}>
        {isSidebarOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </MenuIcon>

      <Logo src={logo} alt="Logo" />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Name className="name">{developer.name}</Name>
        <Id className="id">{developer.id}</Id>
        <DeveloperPhoto src={developer.photo} alt="Developer" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
