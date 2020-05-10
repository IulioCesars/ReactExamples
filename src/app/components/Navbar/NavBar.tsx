import React from 'react';
import { MenuItem } from '../../models';

type Props = {
  AppMenu: MenuItem[];
}

export class NavBar extends React.PureComponent<Props, {}> {


  render() {
    const appMenu = this.props.AppMenu;

    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {
            appMenu.map(it => {
              if(!it.children){
                return(<a className={ `nav-item nav-link ${it.disabled ? 'disabled' : ''}` } href="#">{it.title}</a>);
              } else {
                return(
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      { it.title }
                    </a>
                    <div className="dropdown-menu p-1">
                        <a className="dropdown-item" href="#">{it.title}</a>
                    </div>
                  </li>
                );
              }
            })
          }
        </div>
      </div>
    </nav>
    );
  }
}

