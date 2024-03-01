import { useState } from "react"

export const TwitterFollowCard = ({children, userName="valor por defecto", formatUserName}) => {
 
  const [isFollowing, setIsFollowing] = useState(false)
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following' 
  : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing) // setIsFollowing asgina el estado contrario al actual del valor de isFollowing
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header' >
        <img className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          alt="El avatar a usar" />
        <div className='tw-followCard-info' >
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick} >
          <span className="tw-followCard-buttonText" >{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

/*A las props se les puede dar un valor por defecto como se ve en la definicion de 
la TwitterFollowCard */

/*Es importante evitar la redundancia e implementar codigo semantico en las tags
de html no se deben hacer divs porque si esto baja puntos con el sistema de busqueda de 
google*/