import React from 'react';

function MCPsMap() {
  return (
    <div className='map-canvas'>
      <h1>This is a representative map, since Google Cloud API servers require payments</h1>  
      <iframe async className="mapgg" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17066.340690219677!2d106.80836383059236!3d10.880356899219858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1669720286624!5m2!1svi!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default MCPsMap;