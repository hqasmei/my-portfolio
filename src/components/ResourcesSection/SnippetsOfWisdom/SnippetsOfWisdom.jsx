import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { tedTalks, podcasts } from "./Data"
import { BreadCrumb } from "../../BreadCrumb/BreadCrumb"
import "./SnippetsOfWisdom.css"

const SnippetsOfWisdom = () => {
  return (
    <>
      <div className="snippets-of-wisdom-section snippets-of-wisdom-darkBg">
        <BreadCrumb />
        <Container>
          <h1>Snippets Of Wisdom</h1>
          <p>
            Here are a complelation of TED talks, authors, articles, videos,
            podcasts, and quotes that I like to reference time to time.
          </p>
          <h3>Ted Talks</h3>
          {tedTalks.map((val, idx) => (
            <li key={idx}>
              <a target="_blank" rel="noopener noreferrer" href={val.link}>
                {val.title}
              </a>
              , {val.speaker}
            </li>
          ))}
          <h3>Podcasts</h3>
          {podcasts.map((val, idx) => (
            <li key={idx}>
              <a target="_blank" rel="noopener noreferrer" href={val.link}>
                {val.title}
              </a>
              , {val.speaker}
            </li>
          ))}
          <br />
          *** P.S. my favorite episodes can be found{" "}
          <Link className="link-style">here</Link>.
        </Container>
      </div>
    </>
  )
}

export default SnippetsOfWisdom
