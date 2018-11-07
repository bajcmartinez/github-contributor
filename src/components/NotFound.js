import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <section className="jumbotron bg-white text-center">
            <div className="container">
                <h1 className="jumbotron-heading">404 - Page not found!</h1>
                <p className="lead text-muted">The page you are looking for doesn't exist.</p>
                <p>
                    <Link to="/login" className="btn btn-primary my-2">Log in to start</Link>
                </p>
            </div>
        </section>
    )
}