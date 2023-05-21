import { Route, Link, Switch } from 'react-router-dom';
import Houses from './Houses';
import Home from './Home';
import Search from './Search';

function Navbar(props) {
  const { characters } = props;
  return (
    <div>
      <nav className='navbar navbar-expand'>
        <div>
          <ul className='nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/houses'>
                Houses
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/search'>
                Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/search'>
          <Search title='Search Characters' characters={characters} />
        </Route>
        <Route path='/houses'>
          <Houses title='Characters by House' characters={characters} />
        </Route>
      </Switch>
    </div>
  );
}

export default Navbar;