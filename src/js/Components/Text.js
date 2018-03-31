import React from 'react';
import ReactDOM from 'react-dom';
import EditField from './EditField';
import Languages from './Languages';
import Tooltip from './Tooltip';

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
        abbr: 'deu'
    },
    {
        full: 'Francuski',
        abbr: 'fra'
    },
]


class Text extends React.Component {

constructor(props){
    super(props);
    
    this.state = {
          selectedWords: [],
          key: 0,
          availableLanguages: availableLangauges,
          firstLanguage: availableLangauges.filter(language => language.full ==='Polski'),
          secondLanguage: availableLangauges.filter(language => language.full ==='Angielski'),
          firstVisible: false,
          secondVisible: false,
          tooltipVisible: false,
      };

      this.changeFirstLanguage = this.changeFirstLanguage.bind(this);
      this.changeSecondLanguage = this.changeSecondLanguage.bind(this);
      this.showFirstLanguages = this.showFirstLanguages.bind(this);
      this.showSecondLanguages = this.showSecondLanguages.bind(this);
      this.switchLanguages = this.switchLanguages.bind(this);
}
    
    changeFirstLanguage(e){
        this.setState({
            firstLanguage: availableLangauges.filter(language => language.full === e.target.innerHTML),
            firstVisible: !this.state.firstVisible,
        })
    }
    
    changeSecondLanguage(e){
        this.setState({
            secondLanguage: availableLangauges.filter(language => language.full === e.target.innerHTML),
            secondVisible: !this.state.secondVisible,
        })
    }
    
    showFirstLanguages(){
        this.setState({
            firstVisible: !this.state.firstVisible,
        });
    }
    
    showSecondLanguages(){
        this.setState({
            secondVisible: !this.state.secondVisible,
        });
    }
    
    switchLanguages(){
        this.setState({
            firstLanguage: this.state.secondLanguage,
            secondLanguage: this.state.firstLanguage,
        })
    }
    
componentDidMount(){
    let paragraph = document.querySelector(".text-container p");
    let wordsCollection = [];
    let key = 0;
    
    paragraph.innerHTML = paragraph.innerHTML.replace(/\b(\w+)\b/g, "<span>$1</span>");
      
    let singleWords = document.querySelectorAll('.text-container span');

    const scrollbar = document.querySelector('.scrollbar'),
          textContainer =  document.querySelector('.text-container'),
          textWrapper = document.querySelector('.text-wrapper'),
          textContainerHeight = textContainer.clientHeight,
          textWrapperHeight = textWrapper.clientHeight,

          diffH = textWrapperHeight - textContainerHeight;



          const scrollbarHeight = 100 - ((diffH / textWrapperHeight) * 100);
                

          if (diffH > 0){
            scrollbar.style.height = `${scrollbarHeight}%`;
          }else{
            scrollbar.style.height = `0`;
          }



    textContainer.addEventListener('scroll', (e) => {

        let scrollbarToDown = (textContainer.scrollTop / (textWrapperHeight - 500)) * (100 - scrollbarHeight);

        scrollbar.style.top = `${scrollbarToDown}%`;



    })

    scrollbar.addEventListener('mousedown', (e) => {

        scrollbar.addEventListener('mousemove', (e) => {
            


            scrollbar.style.top = `${e.clientY}`;

            

        })

    })


      
    singleWords.forEach((word) => {
        word.addEventListener('mouseover', () => {
            word.classList.add('highlighted');
            word.style.display = 'inline-block';
            
            this.setState({
                tooltipVisible: true
            })
            
            const tooltip = document.querySelector('.tooltip');
            const tooltipHeight = tooltip.clientHeight;
            const tooltipWidth = tooltip.clientWidth;
            const tooltipX = word.offsetLeft - tooltipWidth / 2 + word.clientWidth / 2;
            const tooltipY = word.offsetTop - tooltipHeight;             
            const tooltipFirstWord = document.querySelector('.tooltip-first');
            const tooltipSecondWord = document.querySelector('.tooltip-second');

            
            tooltip.style.left = `${tooltipX}px`;
            tooltip.style.top = `${tooltipY}px`;
      
            const clickedWord = word.innerHTML;
            
            // const dictApi = new Promise((resolve, reject) => {
            //     const apiURL = `https://glosbe.com/gapi/translate?from=${this.state.firstLanguage[0].abbr}&dest=${this.state.secondLanguage[0].abbr}&format=json&phrase=${clickedWord}&pretty=true`
        
            //     const xhr = new XMLHttpRequest();
        
            //     xhr.open('GET', apiURL, true);
        
            //     xhr.onload = function() {
            //         if (this.status === 200) {
                
            //         const data = JSON.parse(xhr.responseText)
                    
            //         const wordToAdd = {
            //             clickedWord : clickedWord,
            //             data: data,
            //         }

            //         resolve(wordToAdd);
                
            //         } else {
            //             reject('Wystąpił błąd w ściąganiu danych');
            //         }
            //     }
        
            // xhr.send();
        
            // })
            
            // dictApi.then((response) => {
            //     tooltipFirstWord.innerHTML = word.innerHTML;
            //     tooltipSecondWord.innerHTML = response.data.tuc[0].phrase.text
            // })      
        })
          
        word.addEventListener('mouseleave', () => {
            word.classList.remove('highlighted');
            
            this.setState({
                tooltipVisible: false
            })
        })
        
        word.addEventListener('click', () => {
            let clickedWord = word.innerHTML;
            
            const dictApi = new Promise((resolve, reject) => {
                const apiURL = `https://glosbe.com/gapi/translate?from=${this.state.firstLanguage[0].abbr}&dest=${this.state.secondLanguage[0].abbr}&format=json&phrase=${clickedWord}&pretty=true`
        
                const xhr = new XMLHttpRequest();
        
                xhr.open('GET', apiURL, true);
        
                xhr.onload = function() {
                    if (this.status === 200) {
                
                    const data = JSON.parse(xhr.responseText)
                    
                    const wordToAdd = {
                        clickedWord : clickedWord,
                        data: data,
                    }

                    resolve(wordToAdd);
                
                    } else {
                        reject('Wystąpił błąd w ściąganiu danych');
                    }
                }
        
            xhr.send();
        
            })
            
            dictApi.then((response) => {
                wordsCollection = response
                this.setState({
                     selectedWords: wordsCollection,
                     key: key++
                })
            })
        })
    })
}  
      
  render() {
    const editField = <EditField words = {this.state.selectedWords}/>
    const languages = <Languages 
                        changeFirstLanguage = {this.changeFirstLanguage} changeSecondLanguage = {this.changeSecondLanguage} 
                        firstLanguage = {this.state.firstLanguage} 
                        secondLanguage = {this.state.secondLanguage} 
                        availableLangauges = {this.state.availableLanguages} 
                        firstVisible = {this.state.firstVisible} 
                        secondVisible = {this.state.secondVisible}
                        showFirstLanguages = {this.showFirstLanguages}
                        showSecondLanguages = {this.showSecondLanguages}
                        switchLanguages = {this.switchLanguages}
                    />
      
    return (
        <div className="main-content">
            <div className = "left-container">
                {languages}

                <div className = "content-container">
                    <div className = "text-container">
                        <div className = "text-wrapper">
                            <p>{this.props.textToTranslate}</p>
                            <Tooltip tooltipVisible = {this.state.tooltipVisible}/>
                        </div>


                    </div>
                    <div className = "scrollbar-container">
                            <div className = "scrollbar">
                        </div>


                    </div>
                </div>
            </div>
            {editField}
        </div>
    );
  }
}

export default Text;