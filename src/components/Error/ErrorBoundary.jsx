import React from 'react';
import './ErrorPage.css';
import { errorTexts } from '../../Data/data';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    handleNavigate = () => {
        window.location.href = '/'
    }
  
    render() {
      if (this.state.hasError) {
        return(
            <div style={{height:'100vh'}}>
                <div className='row error-page-container'>
                    <div className='row'><span className='oops-msg'>{errorTexts.main}</span></div>
                    <div className='row'><h1 className='error-msg'>{errorTexts.secondary}</h1></div>
                </div>
                <div className='row go-home-btn'>
                    <button className='small shadowed error-back-btn rounded' onClick={this.handleNavigate}>Back to home</button>
                </div>
            </div>
        )
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;