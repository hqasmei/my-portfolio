import styled from "styled-components"

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProjectTitle = styled.div`
  text-align: left;
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  color: ${(props) => props.theme.secondary};
`

export const ProjectHeadline = styled.p`
  text-align: left;
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-decoration: underline;
  color: ${(props) => props.theme.secondary};
`

export const ProjectButton = styled.a`
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
`

export const ProjectDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 1rem;
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
