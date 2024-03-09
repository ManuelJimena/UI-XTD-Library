import {
  ComponentList,
  ComponentListItem,
  SidebarContainer,
  SidebarTitle,
} from './StyledSidebar';

const Sidebar = ({ onSelectComponent, components, isVisible }) => {
  const getIconClass = (name) => {
    switch (name) {
      case 'Buttons':
        return 'fa-square';
      case 'Spinners':
        return 'fa-spinner';
      case 'Toggles':
        return 'fa-toggle-on';
      default:
        return 'fa-puzzle-piece';
    }
  };

  return (
    <SidebarContainer isVisible={isVisible}>
      <SidebarTitle>Components</SidebarTitle>
      <ComponentList>
        {components.map(({ id, name }) => (
          <ComponentListItem key={id} onClick={() => onSelectComponent(id)}>
            <i className={`fa ${getIconClass(name)}`} aria-hidden="true"></i> {name}
          </ComponentListItem>
        ))}
      </ComponentList>
    </SidebarContainer>
  );
};

export default Sidebar;
