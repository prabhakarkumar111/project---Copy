const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "click me to visit google"
}



for(let prop in reactElement.props){
    console.log(reactElement.props[prop]);

}
