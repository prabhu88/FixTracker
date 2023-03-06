import React from 'react'
import styled from "styled-components"

export const HeaderDiv = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    color : ${({theme}) => theme.colors.text };    
`;
const HeaderNav = ({themes,selectThemes}) => {
    return (
        <HeaderDiv>                    
            <div className="headerNav flex-container d-flex flex-row justify-content-space-between" style={{height:'60px'}} >  
                              
                <div className="d-flex flex-row m-auto">
                    logo space
                </div>              
                <div className="d-flex flex-row item-center  m-auto p-1">
                    {
                        themes.map((theme,i)=>{
                            let colors = ((theme.name).split('-'))[0]
                            return(
                                <div id={i} className="" style={{background : colors,height:'20px',width:'20px',marginLeft:'10px'}} onClick={(e)=>{e.preventDefault();selectThemes(theme)}}>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </HeaderDiv >
    )
}

export default HeaderNav