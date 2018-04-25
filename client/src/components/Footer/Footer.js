import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
            <footer className="footer">
                <Grid>
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="https://github.com/iggy788/Second-Papayas-Project-3">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/About">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/Contact">
                                   Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        &copy; {(new Date()).getFullYear()} <a href="https://github.com/iggy788/Second-Papayas-Project-3">Papayas Project 3</a>, made with a lot of hard work!
                    </p>
                </Grid>
            </footer>
		);
	}
}

export default Footer;
