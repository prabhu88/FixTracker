import React from 'react'
import styled from 'styled-components';
export const SidebarDiv = styled.div`
    background-color: ${({ theme }) => theme.colors.header};
    color : ${({ theme }) => theme.colors.text};    
    min-height: calc(100vh - 60px);
`;

const Sidebar = () => {

    return (        
        <div  className="s-layout__sidebar">
            <a className="s-sidebar__trigger" href="#0">                         
                <i className="fa fa-bars"></i>
            </a>

            <nav className="s-sidebar__nav">
                <ul>
                    <li>
                        <a className="sidebar_link" href="#0">                                                 
                            <i className="fa fa-home mt-0"></i>
                            <em>Home</em>
                        </a>
                    </li>
                    <li>
                        <a className="sidebar_link" href="#0">
                            <i className="fa fa-user"></i><em>My Profile</em>
                        </a>
                    </li>
                    <li >
                        <a className="sidebar_link" href="#0">
                            <i className="fa fa-camera"></i><em>Camera</em>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>        
    )
}
export default Sidebar