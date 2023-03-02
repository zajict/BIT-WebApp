//ovo je jedini NODE koji mi treba da ucitamo 
const rootElement = document.querySelector('#root');

//create root react element
const reactRootElement = ReactDOM.createRoot(rootElement);



//hocemo da napravimo neku nasu komponentu
const paragraphReactElement = React.createElement('p', null, 'HEllo' );






reactRootElement.render(paragraphReactElement);
