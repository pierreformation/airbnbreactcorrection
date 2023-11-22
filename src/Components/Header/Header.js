import logo from '../../assets/logo.png'
import searchIcon from '../../assets/searchicon.png'
import './header.css'

const Header = () => {
    return (
        <header>
            <img  className="imgLogo" src={logo}/>
            <div  className="searchBar"> 
                <input/>
                <img src={searchIcon}/>
            </div>
            <div className="headerWriting">
                Mettre mon logement sur AirBnB
            </div>
        </header>
    )
}

export default Header