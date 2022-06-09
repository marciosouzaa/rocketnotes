import {Container, Links, Content } from './styles'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'


export function Details(){

  return(
    <Container>
      <Header/>

      <main>
        <Content>

   

          <ButtonText title="Excluir nota"/>

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, id, deserunt mollitia ducimus voluptatibus veniam illo sit vero dignissimos, laborum ipsum porro recusandae tempora aspernatur architecto quibusdam non natus iure orem ipsum dolor sit amet, consectetur adipisicing elit. Odio, id, deserunt mollitia ducimus voluptatibus veniam illo sit vero dignissimos, laborum.</p>

          <Section title="links úteis">
            <Links>
              <li><a href="http://github.com">link 1</a></li>
              <li><a href="http://github.com">link 2</a></li>
         
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>

          </Section>
      
          <Button title="Voltar"/>

        </Content>
      </main>
    </Container>
  )
}