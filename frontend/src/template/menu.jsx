import React from 'react'

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="navbar-brand mb-0 h1">
            <i className='fa fa-calendar-check-o'/> TodoApp
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#/tarefas">Todo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/about">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
)
