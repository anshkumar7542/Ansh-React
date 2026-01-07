// function customRender(reactElement,container){
//    /* 
//     const domElement = document.createElement
//     (reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)

//     container.appendChild(domElement)
//     */
    

//     const domElement = document.createElement
//     (reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     for (const prop in reactElement.props) {
//     if (prop ==='children') continue;
//     domElement.setAttribute(prop, reactElement.props[prop]);
//     }
//     container.appendChild(domElement)
//     }
    

//     const reactElement = {
//         type: 'a',
//         props: {
//             href: 'https://google.com',
//             target: '_blank'
//         },
//         children: 'Click me to visit google'
//     };


// const mainContainer=document.querySelector('#root')

// customRender(reactElement, mainContainer)






// const mainContainer = document.querySelector('#root')
// function customRender(reactElement,container){

//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)
//     container.appendChild(domElement)

// }

// const reactElement={
//     type:'a'
//     props: {
//         href: 'https://google.com',
//         target: '_blank'

//     },
//     children: 'click on me Ansh'
// }
// customRender(reactElement,mainContainer)




const mainContainer = document.querySelector('#root')

function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)

    // Handle children safely
    domElement.textContent = reactElement.children

    // Apply all props dynamically
    for (const key in reactElement.props) {
        domElement.setAttribute(key, reactElement.props[key])
    }

    container.appendChild(domElement)
}

const reactElement =  {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click on me Ansh'
}


customRender(reactElement, mainContainer)
