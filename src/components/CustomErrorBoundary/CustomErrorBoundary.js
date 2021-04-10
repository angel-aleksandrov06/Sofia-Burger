import React from 'react';
import db from '../../utils/firebase';
import './style.css'

class CustomErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(err) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errInfo) {
        console.log(error);
        db.firestore().collection("errors").add({
            errInfo: errInfo,
            ...error
        })
    }

    render() {
        if (this.state.hasError) {
            return <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <div></div>
                    <h1>404</h1>
                </div>
                <h2>Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <a href="/">home page</a>
            </div>
        </div>
        }

        return this.props.children;
    }
}

export default CustomErrorBoundary;