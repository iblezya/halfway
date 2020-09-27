import React from "react"
import { Link } from "gatsby"
import { ContainerCode, ImageCN } from "../../components"
import { CodeNotesWrapper, Cursos, Ul, Li5, H2CN } from "../../style"

export const FundamentosPage = () => {
  return (
    <ContainerCode>
      <ImageCN />
      <CodeNotesWrapper>
        <H2CN>Básico</H2CN>
        <Cursos>
          <Ul>
            <Li5>
              <Link to="/codenotes/fundamentos/pensamientologico">
                Pensamiento Lógico
              </Link>
            </Li5>
            <Li5>
              <Link to="#">Programación Básica</Link>
            </Li5>
            <Li5>
              <Link to="#">Fund. Ingeniería de Software</Link>
            </Li5>
            <Li5>
              <Link to="#">Diseño para Programadores</Link>
            </Li5>
            <Li5>
              <Link to="#">Introducción a C</Link>
            </Li5>
            <Li5>
              <Link to="#">Redes de Internet</Link>
            </Li5>
            <Li5>
              <Link to="#">Automatización de Procesos RPA con UiPath</Link>
            </Li5>
          </Ul>
        </Cursos>
      </CodeNotesWrapper>
    </ContainerCode>
  )
}
export default FundamentosPage
