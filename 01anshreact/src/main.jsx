import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

  const anotheruser = " chai aur react"


const reactElement = React.createElement(
    'a',
    {href:'https://figma.com',target:'_blank'},
    'click me to visit figma',
    anotheruser
)
/*values apna pass kr skte h.
create element object hi leta h.
lekin uske syntax pre define h unpe control nhi h tmhara.
special syntax h*/
//tm koi bhi condition utha kr nhi likh skte kyuki ye evaluated expression h. 




createRoot(document.getElementById('root')).render(

  reactElement

)
