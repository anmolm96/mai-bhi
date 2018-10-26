import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>More resources</h2>
            <p>
                We'd like to thank the Indian twitter community, including but not limited to: 
                journalists<strong> Sandhya Menon</strong> ( <a target="_blank" href="https://twitter.com/TheRestlessQuil" className="icon fa-twitter alt"></a> TheRestlessQuil) and 
                <strong> Anoo Bhuyan</strong> ( <a target="_blank" href="https://twitter.com/AnooBhu" className="icon fa-twitter alt"></a> ), writer-comic <strong>Mahima Kukreja</strong> 
                ( <a target="_blank" href="https://twitter.com/AGirlOfHerWords" className="icon fa-twitter alt"></a> AGirlOfHerWords) and singer <strong>Chinmayi Sripaada</strong> 
                ( <a target="_blank" href="https://twitter.com/chinmayi" className="icon fa-twitter alt"></a> chinmayi). We've also linked another
                resource below, which has contact information about legal, mental health and other resources
                all over India.
            </p>
            <ul className="actions">
                <li><a target="_blank" href="https://docs.google.com/spreadsheets/u/1/d/1OJcqLT7k9eIGi3oTy9ZAJYr6uTUXPfUeElzVumGUyL0/edit?usp=sharing" className="button">Resources</a></li>
            </ul>
        </section>
    </footer>
)

export default Footer
