export const initialStore=()=>{
  return{
    message: 'hola desde store',
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]

    ,results: [
        {
            uid: "1",
            name: "Luke Skywalker",
            url: "https://www.swapi.tech/api/people/1"
        },
        {
            uid: "2",
            name: "C-3PO",
            url: "https://www.swapi.tech/api/people/2"
        },
        {
            uid: "3",
            name: "R2-D2",
            url: "https://www.swapi.tech/api/people/3"
        },
        {
            uid: "4",
            name: "Darth Vader",
            url: "https://www.swapi.tech/api/people/4"
        },
        {
            uid: "5",
            name: "Leia Organa",
            url: "https://www.swapi.tech/api/people/5"
        },
        {
            uid: "6",
            name: "Owen Lars",
            url: "https://www.swapi.tech/api/people/6"
        },
        {
            uid: "7",
            name: "Beru Whitesun lars",
            url: "https://www.swapi.tech/api/people/7"
        },
        {
            uid: "8",
            name: "R5-D4",
            url: "https://www.swapi.tech/api/people/8"
        },
        {
            uid: "9",
            name: "Biggs Darklighter",
            url: "https://www.swapi.tech/api/people/9"
        },
        {
            uid: "10",
            name: "Obi-Wan Kenobi",
            url: "https://www.swapi.tech/api/people/10"
        }
    ],
    favItems : []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
         ...store,
         todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
       };

      
       case 'add_favorite':

      return {
        ...store,
        favItems: action.payload
       };

      case 'toggle_favitem':

      let updatedFavs =[]

       if(store.favItems.includes(action.payload)){
        updatedFavs = store.favItems.filter((favorite)=> favorite != action.payload)
       }else{

         updatedFavs =[...store.favItems,action.payload]
       }


      return {
        ...store,
        favItems: updatedFavs
       };

     

       case 'load_Planets':
        const { planetList} = action.payload
       

      return {
        ...store,
        contacts : planetList
       };

    default:
      throw Error('Unknown action.');
  }    
}
