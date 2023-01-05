import styled from "styled-components"
import { Link } from "react-router-dom"
import { Column, Row } from "../../globalStyles"

export const FooterRights = styled.div`
  color: ${(props) => props.theme.secondary};
  margin-bottom: 16px;
  width: 100%;
  font-size: 1rem;
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.secondary};
  padding: 1rem 0;
  margin: 1rem 0 0;
`

export const FooterSocialIcon = styled.a`
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
`

export const FooterWrapper = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`

export const FooterColumn = styled(Column)`
  align-items: center;
  grid-column: 1/-1;
`

export const FooterRow = styled(Row)`
  flex-wrap: wrap;
  @media screen and (max-width: 820px) {
    > div {
      width: 20%;
    }

    > div:first-child {
      width: 100%;
    }
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: center;

    * {
      width: 100%;
      text-align: center;
    }
  }
`

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLink = styled(Link)`
  color: ${(props) => props.theme.secondary};
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${(props) => props.theme.primary};
    transition: 0.3s ease-out;
  }
`
