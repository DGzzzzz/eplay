import Section from '../Section'
import zelda from '../../assets/images/banner-homem-aranha.png'

import { Items, Item } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
      <Item>
        <img src={zelda} alt="imagem do link" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
