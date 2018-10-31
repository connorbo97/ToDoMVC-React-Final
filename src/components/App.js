import React from 'react';
import HeaderContainer from './containers/HeaderContainer.js'
import MainContainer from './containers/MainContainer.js'
import FooterContainer from './containers/FooterContainer.js'

import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'


//Filters conversion
//0 = all todos
//1 = only unfinished todos
//2 = only finished todos


class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <section className="todoapp">
          <HeaderContainer/>
          <MainContainer/>
          <FooterContainer/>
        </section>
      </div>
    );
  }
}

export default App;
