import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><Link className="text-decoration-none text-dark">Help Centre</Link></li>
              <li><Link className="text-decoration-none text-dark">AirCover</Link></li>
              <li><Link  className="text-decoration-none text-dark">Anti-discrimination</Link></li>
              <li><Link  className="text-decoration-none text-dark">Disability support</Link></li>
              <li><Link  className="text-decoration-none text-dark">Cancellation options</Link></li>
              <li><Link  className="text-decoration-none text-dark">Report neighbourhood concern</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Hosting</h5>
            <ul className="list-unstyled">
              <li><Link  className="text-decoration-none text-dark">Airbnb your home</Link></li>
              <li><Link  className="text-decoration-none text-dark">AirCover for Hosts</Link></li>
              <li><Link  className="text-decoration-none text-dark">Hosting resources</Link></li>
              <li><Link  className="text-decoration-none text-dark">Community forum</Link></li>
              <li><Link  className="text-decoration-none text-dark">Hosting responsibly</Link></li>
              <li><Link  className="text-decoration-none text-dark">Join a free Hosting class
              </Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Airbnb</h5>
            <ul className="list-unstyled">
              <li><Link  className="text-decoration-none text-dark"> Newsroom</Link></li>
              <li><Link  className="text-decoration-none text-dark">New features</Link></li>
              <li><Link  className="text-decoration-none text-dark">Careers</Link></li>
              <li><Link  className="text-decoration-none text-dark"> Investors</Link></li>
              <li><Link  className="text-decoration-none text-dark"> Airbnb.org emergency stays
              </Link></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <small>&copy; 2023 Airbnb. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;