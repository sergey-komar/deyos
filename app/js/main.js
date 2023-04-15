$(function () {
    $('.slider__inner').slick({
        slidesToShow: 1,
		slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: true,
        fade: true,

    });

    $('.header__languages-btn').on('click',function(){
        $('.header__languages-btn').removeClass('header__languages-btn--active');
        $(this).addClass('header__languages-btn--active');
      });

     
})

const enButton = document.getElementById('en');
const rsButton = document.getElementById('rs');
const activeButton = localStorage.getItem('activeButton');

if (activeButton === 'rs') {
  rsButton.classList.add('header__languages-btn--active');
  enButton.classList.remove('header__languages-btn--active');
} else {
  enButton.classList.add('header__languages-btn--active');
  rsButton.classList.remove('header__languages-btn--active');
  localStorage.setItem('activeButton', 'en');
}

enButton.addEventListener('click', function() {
  if (!enButton.classList.contains('header__languages-btn--active')) {
    enButton.classList.add('header__languages-btn--active');
    rsButton.classList.remove('header__languages-btn--active');
    localStorage.setItem('activeButton', 'en');
  }
});

rsButton.addEventListener('click', function() {
  if (!rsButton.classList.contains('header__languages-btn--active')) {
    rsButton.classList.add('header__languages-btn--active');
    enButton.classList.remove('header__languages-btn--active');
    localStorage.setItem('activeButton', 'rs');
  }
});

window.addEventListener('load', function() {
  const activeButton = localStorage.getItem('activeButton');
  if (activeButton === 'rs') {
    rsButton.classList.add('header__languages-btn--active');
    enButton.classList.remove('header__languages-btn--active');
  } else {
    enButton.classList.add('header__languages-btn--active');
    rsButton.classList.remove('header__languages-btn--active');
  }
});


document.addEventListener('DOMContentLoaded', getSaveLocal);

    var arrLang = {

        'en': {

            'interiors': 'Interiors',
            'architecture': 'Architecture',
            'design': 'Design',

            'interiors-text': ' We create unique interiors that reflect your style and functional needs, so you feel comfortable in your home or office.',

            'architectural-text': ' Our architectural solutions are characterized by originality and functionality. We build spaces that inspire and satisfy our clients needs.',

            'designers-text': '  Our team of designers creates unique and modern solutions that help our clients stand out and achieve success in their projects.',

            'create': 'We create spaces that inspire success',

            'mission': 'Our mission',

            'believe': '  We believe that the environment is a key factor in our well-being and happiness. It has a direct impact on our life, work, and social activities. Our mission at Design Design is to create spaces that contribute to our comfort, inspire us, and help us achieve our goals.',

            'comfortable': ' We create comfortable, functional, and inspiring spaces that reflect our values and help our clients achieve their goals.',

            'strive': 'We strive to create spaces that stimulate our senses and imagination, reflect our values, and inspire us to new achievements. We are convinced that only such spaces can truly affect our well-being and happiness.',

            'help': 'We help clients bring their ideas to life by providing the perfect combination of classic approaches and innovative solutions.',

            'about-heading': 'Deyos Design unites people with the same values and passion for their work. Our architects many years of experience with various types of projects and clients, from country villas to office buildings and from private investors to large holdings, enable our company to implement projects of any complexity.',

            'maximum': 'We create maximum added value for each project',

            'constanly': ' We are constantly striving for self-development and expanding the geography of our activities. Our teams multiculturalism and understanding of the specificities of designing objects in different countries contribute to this',

            'same': 'We speak the same language with our clients',

            'contact-heading': 'Entrust your project to us, and we will help you create a space that meets your needs and expectations. Contact us to find out how we can assist you!'
        },


        'rs':{
            'interiors': 'Enterijer',
            'architecture': 'Arhitektura',
            'design': 'Dizajn',

            'interiors-text': 'Stvaramo jedinstvene enterijere koji odražavaju vaš stil i funkcionalne potrebe, kako biste se osećali udobno u svom domu ili kancelariji.',

            'architectural-text': 'Naša arhitektonska rešenja karakteriše originalnost i funkcionalnost. Gradimo prostore koji inspirišu i zadovoljavaju potrebe naših klijenata.',

            'designers-text': 'Naš tim dizajnera stvara jedinstvena i moderna rešenja koja pomažu našim klijentima da se istaknu i postignu uspeh u svojim projektima.',

            'create': 'Stvaramo prostore koji inspirišu uspeh.',
            'mission': 'Naša misija',

            'believe': 'Verujemo da je okolina ključni faktor za naše blagostanje i sreću. Ona ima direktan uticaj na naš život, rad i društvene aktivnosti. Naša misija u Design Design-u je da kreiramo prostore koji doprinose našem komforu, inspirišu nas i pomažu nam da ostvarimo naše ciljeve.',

            'comfortable': 'Kreiramo udobne, funkcionalne i inspirativne prostore koji odražavaju naše vrednosti i pomažu našim klijentima da ostvare svoje ciljeve.',

            'strive': 'Težimo ka kreiranju prostora koji stimulišu naša čula i maštu, odražavaju naše vrednosti i inspirišu nas na nova dostignuća. Uvereni smo da samo takvi prostori mogu zaista uticati na naše blagostanje i sreću.',

            'help': 'Pomažemo klijentima da ostvare svoje ideje pružajući savršenu kombinaciju klasičnih pristupa i inovativnih rešenja',

            'about-heading': 'Deyos Design spaja ljude sa istim vrednostima i strašću prema svom poslu. Mnogogodišnje iskustvo naših arhitekata sa različitim vrstama projekata i klijenata, od seoskih vila do kancelarijskih zgrada i od privatnih investitora do velikih holdinga, omogućava našoj kompaniji da implementira projekte bilo koje složenosti',

            'maximum': 'Mi stvaramo maksimalnu dodatnu vrednost za svaki projekat',

            'constanly': 'Unapredjujemo se i širimo geografiju našeg delovanja. Multikulturalnost našeg tima i razumevanje karakteristika projektovanja objekata u',

            'same': 'Govorimo istim jezikom s našim klijentima.',

            'contact-heading': 'Poverite nam svoj projekat, i mi ćemo vam pomoći da kreirate prostor koji odgovara vašim potrebama i očekivanjima. Kontaktirajte nas da saznate kako vam možemo pomoći!'
        }
       
    }

    $('.header__languages-btn').on('click',function(){
        var lang = $(this).attr('id');
        saveLocal(lang);

        $('.lang').each(function(index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')])
        })
    })
    
function saveLocal(languages) {
    let langs;
    if(localStorage.getItem('langs') === null){
        langs = [];
    }else{
        langs = JSON.parse(localStorage.getItem('langs'))
    }
    langs.push(languages);
    localStorage.setItem('langs', JSON.stringify(langs))
}

function getSaveLocal() {
    let langs;
    if(localStorage.getItem('langs') === null){
        langs = [];
    }else{
        langs = JSON.parse(localStorage.getItem('langs'))
    }
    langs.forEach(function(languages) {
        let lang = langs[langs.length - 1];
        setTimeout( () => {
            $('.lang').each(function(index, item) {
                $(this).text(arrLang[lang][$(this).attr('key')])
            });
        },0)
       
    });
}




const modalBtn = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');
const scroll = calcScroll();


    modalBtn.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            })
        });

    modalCloseBtn.addEventListener('click', ()=>{
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
    });

    modal.addEventListener('click', (e)=>{
        if(e.target == modal){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });

    document.addEventListener('keydown', (e)=>{
        if(e.code == 'Escape' && modal.classList.contains('show')){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    })


function calcScroll(){
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    
    return scrollWidth;
    }
  

    const menu = document.querySelector('.mobile-menu');
    const mobile = document.querySelector('.nav-icon');
    const main = document.querySelector('.main');
    
    mobile.addEventListener('click', function(){
        this.classList.toggle('nav-icon--active');
        menu.classList.toggle('nav--active');
    main.classList.toggle('background');
    });
    

