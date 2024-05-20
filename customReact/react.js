let root = document.getElementById("root")
const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "click me to visit google"
}


function customRender(reactElement, container){
    // let create = document.createElement(reactElement.type)
    // create.innerHTML = reactElement.children
    // create.setAttribute("href", reactElement.props.href)
    // create.setAttribute("target", reactElement.props.target)
    // container.append(create)

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // for(let prop in reactElement.props){
    //     if(prop === 'children') continue;
    //     domElement.setAttribute(prop,  reactElement.props[prop])

    // }
    // container.append(domElement)


    
}
customRender(reactElement, root)