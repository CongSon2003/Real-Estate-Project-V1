import React from 'react'
type typeTitle = {
  classNameDiv?: string,
  classNameH?: string,
  content: string
}
function Title({ classNameDiv, classNameH, content }: typeTitle) {
  return (
    <div className={`${classNameDiv}`}>
      <h2 className={`${classNameH}`}>{content}</h2>
    </div>
  )
}

export default Title