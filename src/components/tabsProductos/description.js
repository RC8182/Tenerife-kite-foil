import React from 'react'

export const Description = ({db}) => {
    const description= db.db.description;
  return (
    <div>
        <div>
            <h1>{description}</h1>
        </div>
    </div>
  )
}
