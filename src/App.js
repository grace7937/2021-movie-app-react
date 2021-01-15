


function Food({name,age}) {
  return <h1>{name} likes apple{age}</h1> 
}


const foodILike = [{'name':'a',
                    'age':'10'
                    },
                    {'name':'b',
                     'age':'20'
                    }]


function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />
}


function App() {
  return (
    <div>
      {foodILike.map(c => {
      return <Food name = {c.name} age = {c.age} />
      })}
    </div>
  );
}

export default App;
