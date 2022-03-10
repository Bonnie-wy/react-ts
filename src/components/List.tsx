import React from 'react'
import { IState as IProps } from "../App"

// import it from App.js
// interface IProps {
//   people: {
//     name: string
//     id: number
//     url: string
//     position?: string
//   }[]
// }

//define type as react functional component with the type of iProps
export const List: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt={person.name} />
            <h2>{person.name}</h2>
          </div>
            <p>{person.id}</p>
            <p className="List-note">{person.position}</p>
        </li>
      )
    })
  }

  return (
    <ul>
      {renderList()}
    </ul>
  )
}

// destructured
// export const List = ({ people }: IProps) => {
//   return (
//     <div>List</div>
//   )
// }

// defining prop type
// export const List = (props: IProps) => {
//   return (
//     <div>List</div>
//   )
// }
