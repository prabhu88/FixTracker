import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
export const SidebarDiv = styled.div`
    background-color: ${({ theme }) => theme.colors.header};
    color : ${({ theme }) => theme.colors.text};    
    min-height: calc(100vh - 60px);
`;
const Sidebar = () => {
    return (        
        <div class="s-layout__sidebar">
            <a class="s-sidebar__trigger" href="#0">                         
                <i class="fa fa-bars"></i>
            </a>

            <nav class="s-sidebar__nav">
                <ul>
                    <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <FontAwesomeIcon icon="fa fa-home" />
                            <i class="fa fa-home"></i><em>Home</em>
                        </a>
                    </li>
                    <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-user"></i><em>My Profile</em>
                        </a>
                    </li>
                    <li>
                        <a class="s-sidebar__nav-link" href="#0">
                            <i class="fa fa-camera"></i><em>Camera</em>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>        
    )
}
export default Sidebar