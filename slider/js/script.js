// https://codepen.io/goldigo/pen/YzXogYR
const Slider = function(){
  const slider = document.querySelector('#slider');
  const sliderContent = document.querySelector('.slider-content');
  const sliderWrapper = document.querySelector('.slider-content-wrapper');
  const elements = document.querySelectorAll('.slider-content__item');
  const sliderContentControls = createHTMLElement("div", "slider-content__controls");
  let dotsWrapper = null;
  let intervalId = null;

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
        controlsInfo.dotsEnabled = true;
      }

      _updateControlsInfo();
      _createControls(controlsInfo.dotsEnabled);
      _render();
    }else{
      console.log('slider/slider-content/slider-wrapper/slider-content__item')
    }
  }

  function _updateControlsInfo(){
    const {current, min, max} = itemsInfo.position;
    controlsInfo.prevButtonDisabled = current > min ? false : true;
    controlsInfo.nextButtonDisabled = current < max ? false : true;
  }

  function _createControls(dots = false){
    sliderContent.append(sliderContentControls);

    createArrows();
    dots ? createDots() : null;

    function createArrows(){
      const dValueLeftArrow = "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z";
      const dValueRightArrow = "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z";
      const leftArrowSVG = createSVG(dValueLeftArrow);
      const rightArrowSVG = createSVG(dValueRightArrow);

      leftArrow = createHTMLElement('div', 'prev-arrow');
      leftArrow.append(leftArrowSVG);
      leftArrow.addEventListener('click', () => updateItemsInfo(itemsInfo.position.current - 1));

      rightArrow = createHTMLElement("div", "next-arrow");
      rightArrow.append(rightArrowSVG);
      rightArrow.addEventListener('click', () => updateItemsInfo(itemsInfo.position.current + 1));
      
      sliderContentControls.append(leftArrow, rightArrow);

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

    function createDots(){
      dotsWrapper = createHTMLElement('div','dots');
      console.log('ggdgdgdg')
      for(let i=0; i<itemsInfo.position.max + 1; i++){
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.addEventListener('click', function(){
          updateItemsInfo(i);
        });
        dotsWrapper.append(dot);
      }
      sliderContentControls.append(dotsWrapper);
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
    const {prevButtonDisabled,nextButtonDisabled} = controlsInfo;
    let controlArray = [
      {element: leftArrow, className: "d-none", disabled: prevButtonDisabled},
      {element: rightArrow, className: "d-none", disabled: nextButtonDisabled}
    ];
    setClass(controlArray);

    sliderWrapper.style.transform = `translateX(${itemsInfo.offset*100}%   )`;

    if(controlsInfo.dotsEnabled){
      if(document.querySelector('.dot--active')){
        document.querySelector('.dot--active').classList.remove('dot--active');
      }
      dotsWrapper.children[itemsInfo.position.current].classList.add('dot--active');
    }
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


