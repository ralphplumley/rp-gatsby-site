import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>

        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h2 style={{ display: `inline` }}>Ralph Plumley</h2>
        </Link>

        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/resume/">Resume</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
