import React from 'react';
import ReactDOM from 'react-dom';
import LanguagesBox from './LanguagesBox';


class Languages extends React.Component {
  constructor(props){
      super(props);
      
      this.state = {
          firstLanguage: this.props.firstLanguage,
          secondLanguage: this.props.secondLanguage,
          firstVisible: this.props.firstVisible,
          secondVisible: this.props.secondVisible
      }
  }
    
    
    render(){
        return(
            <div className = "languages-container">
                <div className = "first-language language">
                    <div className = "current-language" onClick = {this.props.showFirstLanguages}>
                        {this.props.firstLanguage[0].full}
                    </div>
                    <div className = "all-languages">
                        <LanguagesBox 
                            firstVisible = {this.props.firstVisible} 
                            changeFirstLanguage = {this.props.changeFirstLanguage} availableLangauges = {this.props.availableLanguages}
                        />
                    </div>

                </div>

                <div className = "language-switch" onClick = {this.props.switchLanguages}>
                    <i className = "icon-exchange"></i>
                </div>

                <div className = "second-language language">
                    <div className = "current-language" onClick = {this.props.showSecondLanguages}>
                        {this.props.secondLanguage[0].full}
                    </div>

                    <div className = "all-languages">
                        <LanguagesBox 
                            secondVisible = {this.props.secondVisible} changeSecondLanguage = {this.props.changeSecondLanguage}
                            availableLangauges = {this.props.availableLanguages}
                        />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Languages;