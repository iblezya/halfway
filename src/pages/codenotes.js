import React from "react"
import { Link } from "gatsby"
import { ContainerCode, ImageCN } from "../components"
import {
  CodeNotesWrapper,
  DivText,
  Cursos,
  Ul,
  H2CN,
  H3CN,
  PCN,
  Li2,
  Li4,
  Li5,
} from "../style"

const CodeNotes = () => {
  return (
    <ContainerCode>
      <ImageCN />
      <CodeNotesWrapper>
        <DivText>
          <H2CN>We Got The Power</H2CN>
          <PCN>Bienvenidos a la sección de CodeNotes</PCN>
        </DivText>
        <Cursos>
          <H3CN>Code Notes</H3CN>
          <Ul>
            <Li5>
              <Link to="/codenotes/python">Python</Link>
            </Li5>
            <Li2>
              <Link to="#">Javascript</Link>
            </Li2>
            <Li4>
              <Link to="#">Git/Github</Link>
            </Li4>
          </Ul>
        </Cursos>
      </CodeNotesWrapper>
    </ContainerCode>
  )
}
export default CodeNotes
