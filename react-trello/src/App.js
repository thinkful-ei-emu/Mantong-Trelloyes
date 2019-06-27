import React, { Component } from 'react';
import List from './List';
import './App.css';
import STORE from './STORE';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
} 
function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}
class App extends Component {

  state ={
    store: STORE,
  };
  
  handleDeleteCard =(card) =>{
    
    const newList = this.state.store.lists.map(list =>({
      ...list,
      card:list.card.filter(id => id !== card)
    }

    )
      
      
      );
    const newCards=omit(card,'id');
    this.setState({
      store:{
        List:newList,
        allCards:newCards
      }
      
    })

  } 
  // handleAddCard =(cardId) =>{
  //  const newCards = newRandomCard
  //  this.setState({
  //    stor:{
  //      List:newList,
  //      allCards:newCards
  //    }
  //  }

  //  )



  // }
  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        {/* <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
            
          ))}
        </div> */}
        <section>
          <List 
          
            key={this.state.store.lists.id}
            header={this.state.store.lists.header}
            cards={this.state.store.lists.cardIds.map(id => store.allCards[id])}
            /*add callback props here*/
            onDeleteCard={this.handleDeleteCard}
            onAddCard={this.handleAddCard}
          />
        </section>
  
      </main>
    );
  }
}

export default App;