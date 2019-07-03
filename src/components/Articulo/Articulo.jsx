import React from 'react';

//Component

import Huertos from '../Articulo/Huertos.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


import './Articulo.css';

const Articulo = () => ( 

   
    <Container>
    <Row className="justify-content-md-center">
    <h1 className="TituloMesas">"Tipos de mesas de cultivo"</h1>
      <Col xs lg="2">
      
      </Col>
      <Col md="auto">
          <Image className="imagenPortada" src={Huertos}/>
      </Col>
      
      <Col xs lg="2">
       
      </Col>
    </Row>
    <Row> 
      <Col md="auto">
      <h2 className="subtituloMesa">HUERTO URBANO SIMONRACK</h2>
      <p className="parrafoMesas">Comienzo con un huerto que para mí es muy práctico y que te ayudará a tenerlo todo mucho más organizado que cualquier otro.
         Cuenta con una zona de gran tamaño en el que podrás plantar todo tipo 
         de verduras y vegetales e incluso especias, muy resistente.<p/> 
        
        <h2 className="subtituloMesa">MESA DE CULTIVO DE MADERA</h2>

        Doy paso a otro tipo de mesa para cultivar, la cual es apta para todo tipo de terrenos y por su estética podría ir bien en cualquier lugar que nos propongamos. 
        Se trata de una huerta que está realizada por completo en madera, a excepción de los anclajes, ya que, como en el caso anterior, tendrás que hacerlo con tornillos, 
        pero el resultado quedará perfecto, sin dificultades en el montaje, ya que cuenta en su interior con un manual que podrás seguir paso a paso.
        Lo mejor de estas mesas de cultivo es que, al ser de una madera resistente y que aísla a la perfección aquello que vas a cultivar, el producto resultante será de mayor
        calidad. <p/>

        <h2 className="subtituloMesa">MESA DE CULTIVO HUERTO URBANO</h2>
        Si cuentas con una terraza o balcón y alguna que otra vez has pensado en crear tus propios cultivos de verduras, plantas o incluso especias para tus comidas o simplemente 
        para darle un toque creativo y decorar esta zona de tu vivienda, ahora es el momento de hacerlo, ya que con esta mesa para cultivar de madera, tendrás un lugar en el que 
        hacerlo con total garantías de que te funcionará y sobre todo porque cuenta con un diseño bonito. <p/>
        
        <h2 className="subtituloMesa">MESA DE CULTIVO (HUERTO URBANO) SIN PATAS</h2>
        Si lo que estás buscando es una mesa de cultivo profesional para tu jardín, este producto te interesará y mucho. Tiene muchas diferencias respecto a los que ya hemos visto 
        y a los que veremos más adelante y es importante recalcar cada punto para que veas todo lo que puedes hacer con ella una vez que la tengas instalada en tu jardín.
        La madera utilizada es de gran calidad, resistiendo tanto el agua como el calor, aunque en este caso y como punto negativo, tendrás que comprar por ti mismo una tela que sea 
        capaz de aislar la tierra de la madera, para que puedan respirar correctamente las raíces, al igual de que se pueda filtrar el agua sobrante del riego. Por lo demás es un producto 
        que te recomendamos comprar, que ocupa muy poco espacio y que estamos seguros que puede ser eficaz para todo tipo de plantaciones de verduras o plantas.<p/>
        
        <h2 className="subtituloMesa">MESA DE CULTIVO (HUERTO URBANO) SIN PATAS</h2>
        Hay personas amantes de las plantas que también quieren un producto de diseño, elegante y que pueda ser colocado en la terraza o en la entrada de su jardín para que le dé un toque más 
        glamuroso a todo el conjunto. Para este tipo de personas te voy a analizar la mesa de cultivo de color blanca que viene de la marca Hurbz, un producto que realmente te enamorará nada más 
        verlo puesto en cualquier rincón de tu casa, ya que podrás usarlo en tu salón o en alguno de tus cuartos sin que desentone demasiado.
</p>
      </Col>
    </Row>
  </Container>
   
   
   
   
   
   
   
   
   
   

);

export default Articulo;