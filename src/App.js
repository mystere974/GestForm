import './App.css';

function App() {
  function test(n)
{
  let array = []
  for (let i=1; i <= n; i++){
    if (i % 15 === 0) {
        array.push('Gestform')
    }else if (i % 5 === 0) {
        array.push('Forme')
    }else if (i % 3 === 0) {
        array.push('Geste')
    }else {
        array.push(i)
    }
}
  return(array)
}
 return test(1000)

}

export default App;
