import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(props) {
  const format = (userName) => `@${userName}` /* format esta siendo exportado como 
  prop al componente TwitterFollowCard*/

  return (
    <section className='App'>
      <TwitterFollowCard 
        formatUserName={format} 
        isFollowing 
        userName="midudev" 
        name="Miguel Angel Duran">
          jola soy tu hijo  {/*este texto es un children del componente 
          TwitterFollowCard el mismo puede ser exportado y reutilizado*/}
      </TwitterFollowCard>

      <TwitterFollowCard 
        formatUserName={format} 
        isFollowing={false}  
        userName="pheralb" 
        name="Pablo Hernandez"
      />

      <TwitterFollowCard 
        formatUserName={format} 
        isFollowing={false} 
        userName="elonmusk" 
        name="Elon Musk"
      />
      
      <TwitterFollowCard 
        formatUserName={format} 
        isFollowing 
        userName="vxnder" 
        name="Vanderhart"
      >Vanderhart</TwitterFollowCard>
    </section> 
  )
}

/* Nota: ya no se esta utilizando la props booleana de isFollowing pero, dejo el codigo para aclarar
que cuando se pasa una prop como booleano si es verdadera basta con simplemente dejar el nombre de la prop,
si es falsa, si debe darsele el valor false*/
