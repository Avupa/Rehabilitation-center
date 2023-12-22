import React from 'react';
import type { Specialization } from './DateType';

function CardSpec({spec}:{spec:Specialization['name']}): JSX.Element {

  return (
    <>
<button className='main_link_button h-30 w-200'>{spec}</button>
{/* {allSpecializations&&allSpecializations.map(spec=>(<CardSpec key={spec.id} spec={spec.name}/>))} */}
   </>
  )
}

export default CardSpec;