// https://codepen.io/goldigo/pen/YzXogYR
const Slider = function(){
  const slider = document.querySelector('#slider');
  const sliderContent = document.querySelector('.slider-content');
  const sliderWrapper = document.querySelector('.slider-content-wrapper');
  const elements = document.querySelectorAll('.slider-content__item');
  const sliderContentControls = createHTMLElement("div", "slider-content__controls");

  const itemsInfo = {
    offset: 0,
    position: {
      current: 0,
      min: 0,
      max: elements.length - 1
    },
    intervalSpeed: 2000,
    update: function(value){
      this.position.current = value;
      this.offset = -value;
    }
  }

  const controlsInfo = {
    buttonsEnabled: false,
    dotsEnabled: false,
    prevButtonDisabled: true,
    nextButtonDisabled: false
  }

  function init(props){
    let {intervalSpeed, position, offset} = itemsInfo;

    if(slider && sliderContent && sliderWrapper && elements){
      if(props && props.currentItem){
        if(parseInt(props.currentItem) >= position.min && parseInt(props.currentItem) <= position.max){
          position.current = props.currentItem;
          offset = -props.currentItem;
          console.log(offset)
        }
      }
      if(props && props.buttons){
      }
      if(props && props.dots){
      }

      _updateControlsInfo();
      _createControls();
      _render();
    }else{
      console.log('slider/slider-content/slider-wrapper/slider-content__item')
    }
  }

  function _updateControlsInfo(){
    const {current, min, max} = itemsInfo.position;
    controlsInfo.nextButtonDisabled = current < max ? false : true;
  }

  function _createControls(){
    sliderContent.append(sliderContentControls);
    createArrows();

    function createArrows(){
      const dValueRightArrow = "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z";
      const rightArrowSVG = createSVG(dValueRightArrow);
      rightArrow = createHTMLElement("div", "next-arrow");
      rightArrow.append(rightArrowSVG);
      rightArrow.addEventListener('click', () => updateItemsInfo(itemsInfo.position.current + 1));
      
      sliderContentControls.append(rightArrow);


      function createSVG(dValue, color="currentColor"){
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				svg.setAttribute("viewBox", "0 0 256 512");
				const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
				path.setAttribute("fill", color);
				path.setAttribute("d", dValue);
				svg.appendChild(path);	
				return svg;
      }
    }
  }

  function setClass(options){
    if(options){
      options.forEach(({element, className, disabled})=>{
        if(element){
          disabled ? element.classList.add(className) : element.classList.remove(className);
        }else{
          console.log("Error: function setClass(): element = ", element);
        }
      });
    }
  }

  function updateItemsInfo(value){
    itemsInfo.update(value);
    _slideItem(true);
  }

  function _render(){
    const {nextButtonDisabled} = controlsInfo;
    let controlArray = [
      {element: rightArrow, className: "d-none", disabled: nextButtonDisabled}
    ];
    setClass(controlArray);

    sliderWrapper.style.transform = `translateX(${itemsInfo.offset*100}%)`;
  }
  
  function _slideItem(){
    _updateControlsInfo();
    _render();
  }

  function createHTMLElement(tagName="div", className, innerHTML){
    const element = document.createElement(tagName);
    className ? element.className = className : null;
    innerHTML ? element.innerHTML = innerHTML : null;
    return element;
  }
  return {init};

};

const slide1 = new Slider();
slide1.init({
  currentItem : 0,
  buttons: true,
  dots: true
});