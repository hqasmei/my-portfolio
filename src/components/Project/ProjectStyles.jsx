import styled from "styled-components"

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
`

export const ProjectTitle = styled.div`
  text-align: left;
  font-size: 3rem;
  font-weight: bold;
  margin-right: 1rem;
  color: ${(props) => props.theme.secondary};
`

export const ProjectHeadline = styled.p`
  text-align: left;
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.secondary};

  @media screen and (max-width: 450px) {
    text-align: center;
  }
`

export const ProjectButton = styled.div`
  @media screen and (max-width: 450px) {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
`

export const ProjectDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 450px) {
    text-align: center;
  }
`

export const ProjectLink = styled.a`
  text-decoration: none;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};

  border-radius: 4px;
  white-space: nowrap;
  outline: none;
  border: 2px solid ${(props) => props.theme.secondary};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    background: ${(props) => props.theme.primaryHue};
    border: 2px solid ${(props) => props.theme.primaryHue};
    color: ${(props) => props.theme.primary};
  }

  @media screen and (max-width: 450px) {
    margin-top: 1rem;
  }
`

export const LeftContainer = styled.div`
  margin-right: 5rem;

  @media screen and (max-width: 1110px) {
    margin: 1rem;
  }
`

export const RightContainer = styled.div`
  @media screen and (max-width: 1110px) {
    margin: 1rem;
  }
`

export const VersionContainter = styled.div`
  display: flex;
  align-items: baseline;
`

export const ProjectBadges = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
`

export const ProjectBadge = styled.p`
  padding: 0.5rem 0.5rem;
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 0.15rem;
  margin-right: 0.5rem;
  margin-bottom: 0;
`

export const VideoPlayer = styled.video`
  box-shadow: 0px 3px 17px -3px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 0px 3px 17px -3px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 0px 3px 17px -3px rgba(0, 0, 0, 0.36);
`