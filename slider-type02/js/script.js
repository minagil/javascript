const Slider = (function(){

  const btnPrev = document.querySelector('.button_wrap .uibtn-prev')
  const btnNext = document.querySelector('.button_wrap .uibtn-next')
  
  const options = {
    autoplay : false,
    responsive : false,
  }
  
  let _this = null;
  function Slider(){
    _this = this;
  }

  Slider.prototype.slideItems = function(){

  }
  
  Slider.prototype.nextSlideItem = function(){
    console.log('nextslide')
    
  }

  Slider.prototype.prevSlideItem = function(){
    console.log('prevslide')
  }

  btnNext.addEventListener('click', function() {
    _this.nextSlideItem();
  });

  btnPrev.addEventListener('click', function() {
    _this.prevSlideItem();
  });

  return Slider;

}());

const MainBannerSlider = (function(){
  var itemTrack = null;
  var itemWidth = null;

  function MainBannerSlider(props){
    this.index = 0;
    itemTrack = props.itemTrack;
    itemWidth = props.itemWidth.offsetWidth + 32;

    Slider.apply(this, arguments);

    setItemTrack();
    createCloneItems();
  }

  MainBannerSlider.prototype = Object.create(Slider.prototype);
  MainBannerSlider.prototype.constructor = MainBannerSlider;

  function setItemTrack(){
    const items = document.querySelectorAll('.board_wrap .carousel_item_track .carousel_item_list .carousel_item');
    itemTrack.style.transform = 'translateX(' + 0 + ')';
    const item = Array.from(items).filter(child => {
      return !child.classList.contains('clone');
    });
    itemTrack.style.left = itemWidth * item.length * -1 + 'px';
  }

  function createCloneItems(){
    const element = document.querySelector('.board_wrap .carousel_item_track .carousel_item_list');
    const items = document.querySelectorAll('.board_wrap .carousel_item_track .carousel_item_list .carousel_item');
    const nodes = Array.from(items);
    nodes.forEach((node) => {
      const clone = node.cloneNode(true);
      clone.classList.add('clone');
      element.append(clone);
    });

    nodes.reverse().forEach((node) => {
      const clone = node.cloneNode(true);
      clone.classList.add('clone');
      element.prepend(clone);
    });
  }

  return MainBannerSlider;
  
}());

const mainBanner = new MainBannerSlider({
  itemContainer : document.querySelector('.board_wrap .carousel_item_container'),
  itemTrack : document.querySelector('.board_wrap .carousel_item_track'),
  itemWidth : document.querySelector('.board_wrap .carousel_item_track .carousel_item_list .carousel_item'),
});