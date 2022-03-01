import Link from 'next/link'
import { useEffect, useState } from 'react';
import {getSemester} from '../service/Query'

function PreactStars({ stars }) {
   

    // console.log('page',page)
  return (
    <div>
      <p>Preact has {stars} ⭐</p>
      <Link href="/">
        <a>I bet Next.js has more stars (?)</a>
      </Link>
    
    </div>
  )
}


export default PreactStars