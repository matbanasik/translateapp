import React from 'react';
import ReactDOM from 'react-dom';

class LanguagesBox extends React.Component {
  constructor(props){
      super(props)
  }
    
    render(){
        const availableLangauges = [
            {
                full: 'Polski',
                abbr: 'pol'
            },
            {
                full: 'Angielski',
                abbr: 'eng'
            },
            {
                full: 'Niemiecki',
                abbr: 'ger'
            },
            {
                full: 'Francuski',
                abbr: 'fra'
            },
        ]

        if (this.props.firstVisible){
            return(
                availableLangauges.map((language, i) => {
                    return <div className = "single-language" key={i} onClick={this.props.changeFirstLanguage}>{language.full}</div>
                })

            )
        }else if(this.props.secondVisible){
            return(
                availableLangauges.map((language, i) => {
                    return <div className = "single-language" key={i} onClick={this.props.changeSecondLanguage}>{language.full}</div>
                })

            )
        }else{
            return null;
        }


    }
    
}

export default LanguagesBox;