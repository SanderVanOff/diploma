//импорт модулей
import {modal} from './modules/modal';
import {menu} from './modules/menu';
import {scroll} from './modules/scroll';
import {slider} from './modules/slider';



//подключение модулей
modal();
menu();
scroll();
slider({
    sliderContent: 'top-slider',
    sliderItemClass: 'top-slider .item',
    slideActiveClass: 'active',
    dotsContentClass: 'dots',
    dotClass: 'dot',
    dotActiveClass: 'dot-active',
    timer: 3000
});