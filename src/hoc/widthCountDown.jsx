import React, { useEffect, useState } from 'react'
export default function CountDow({WrapCompoment,timeCoutDown}){
    let [time ,setTime]=useState(timeCoutDown)
    let day =parseInt(time /60/60/ 24)
    let hour=parseInt (time/60/60- day * 24  )
    let minute=parseInt( time/60 - (day * 24 + hour) * 60)
    let second=time %60
    useEffect(()=> {
      let timeinvernal=setInterval(() => {
        if(time === 0){
          return clearTimeout(timeinvernal)
        }
        setTime(--time)
      },1000)
    },)

    let value={
        day,hour,minute ,second
    }
      return( <WrapCompoment {...value} />)
}