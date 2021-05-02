import styled from 'styled-components'

export const FooterContainer = styled.div`
height: 400px;
width: 100%;
background: black;
color: white;

`

export const FooterWrap = styled.div`
justify-content: center;
color: white;
font-size: 1rem;
display:flex;
flex-direction: row;
padding: 0px;
`

export const FooterLinksWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 40px;
`
export const FooterLinksContainer = styled.div`
display: flex;
flex-direction: row;
color: white;

`

export const FooterLinkTitle = styled.h1`
font-weight: bold;
font-size: 1.5rem;
padding: 5px;
justify-content: center;
`

export const FooterLinkItems= styled.div`
display: flex;
flex-direction: column;
padding-top: 10px;
padding-bottom: 10px;
align-items: center;
`

export const FooterLink = styled.a`
cursor: pointer;
justify-content: center;
padding: 2px;

`