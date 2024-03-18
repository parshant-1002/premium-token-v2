// base
import React, { useMemo } from 'react';

// hooks
import { NavLink, useLocation } from 'react-router-dom';

// components
import { Accordion, Nav } from 'react-bootstrap';

// utils
import { SIDEBAR_NAV } from './routes';

// style
import './Sidebar.scss';

export default function Sidebar() {
  // hooks
  const location = useLocation();

  const handleButtonClick = (item) => {
    if (item.label === 'Logout') {
        //sdsds
    }
  };



  const mapChilds = (sidebar, childrens) => {
    const findIndex = childrens.findIndex((children) => children.route === location.pathname);
    return (
      <Nav.Item key={`sidebar-${sidebar.label}`}>
        <Accordion defaultActiveKey={findIndex > -1 ? '0' : ''}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <em><img src={sidebar.icon} alt="" width="40" height="40" /></em>
              {sidebar.label}
            </Accordion.Header>
            <Accordion.Body>
              {childrens.map((children) => (
                children?.isOnClick ? (
                  <button
                    type="button"
                    className="dropdown-item"
                    key={`sidebar-${children.label}`}
                  >
                    {children.label}
                  </button>
                )
                  : (
                    <NavLink
                      className="dropdown-item"
                      key={`sidebar-${children.label}`}
                      to={children.route}
                    >
                      {children.label}
                    </NavLink>
                  )
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Nav.Item>
    );
  };
  const recursiveSidebar = (menues) => menues.map((sidebar) => {
    if (sidebar?.children) {
      return mapChilds(sidebar, sidebar.children);
    }
    return (
      <React.Fragment key={sidebar.label}>
        {sidebar.route ? (
          <Nav.Item>
            <NavLink to={sidebar.route}>
              <em>
                <img src={sidebar.icon} alt="" />
              </em>
              {sidebar.label}
            </NavLink>
          </Nav.Item>
        ) : (
          <Nav.Item>
            <button className="nav-link" type="button" onClick={() => handleButtonClick(sidebar)}>
              <em>
                <img src={sidebar.icon} alt="" />
              </em>
              {sidebar.label}

            </button>
          </Nav.Item>
        )}
      </React.Fragment>
    );
  });

  const sidebar = useMemo(() => recursiveSidebar(SIDEBAR_NAV), [location]);
  return (
    <>
      <Nav
        className="d-none d-xl-block sidebar_nav"
        activeKey="/home"
      >
        {sidebar}
      </Nav>
      {/* <ConfirmationModal
        open={Boolean(showLogout)}
        title="Are you sure"
        subTitle="you want to logout?"
        submitButtonText="Logout"
        handSubmit={onActionConfirm}
        handleClose={() => setShowLogout(false)}
      /> */}
    </>
  );
}
