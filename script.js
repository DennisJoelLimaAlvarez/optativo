const cardsList = ["card-red","card-purple","card-gray" ] 

const cardsContainer = document.querySelector( "#app" );
const agregar = document.querySelector( "#agregar" )
let index = 0;


const createNewCard = ( index ) => {
    const card = document.createElement( "div" );
    card.classList.add( "card" );
    const cardHeader = document.createElement( "div" );
    cardHeader.classList.add( "card__header" );
    cardHeader.classList.add( cardsList[ index ] );
    const cardMain = document.createElement( "div" );
    cardMain.classList.add( "card__main" );
    const cardFooter = document.createElement( "div" );
    cardFooter.classList.add( "card__footer" );
    const cardHeaderLeft = document.createElement( "div" );
    cardHeaderLeft.classList.add( "card-header__left" );
    const cardHeaderRight = document.createElement( "div" );
    cardHeaderRight.classList.add( "card-header__right" );
    const elipse = document.createElement( "div" );
    elipse.classList.add( "elipse" );
    const cardHeaderLeftP = document.createElement( "p" );
    const cardHeaderRightP = document.createElement( "p" );
    const cardHeaderRightImg = document.createElement( "img" );
    cardHeaderRightImg.src = "Vector.svg";
    const cardMainP = document.createElement( "p" );
    const cardFooterP1 = document.createElement( "p" );
    const cardFooterP2 = document.createElement( "p" );

    const elipseText = document.createTextNode( "1" );
    const headerLeftText = document.createTextNode( "Agenda/topic" );
    const headerRightText = document.createTextNode( "SAAS-0000" );
    const mainText = document.createTextNode( "Description of what is done here" );
    const footerText1 = document.createTextNode( "Last Update" );
    const footerText2 = document.createTextNode( "3/8/2020" );

    elipse.appendChild( elipseText );
    cardHeaderLeftP.appendChild( headerLeftText );
    cardHeaderRightP.appendChild( headerRightText );
    cardMainP.appendChild( mainText );
    cardFooterP1.appendChild( footerText1 );
    cardFooterP2.appendChild( footerText2 );
    
    cardFooter.appendChild( cardFooterP1 )
    cardFooter.appendChild( cardFooterP2 )

    cardMain.appendChild( cardMainP );

    cardHeaderLeft.appendChild( elipse )
    cardHeaderLeft.appendChild( cardHeaderLeftP );
    cardHeaderRight.appendChild( cardHeaderRightP )
    cardHeaderRight.appendChild( cardHeaderRightImg );

    cardHeader.appendChild( cardHeaderLeft )
    cardHeader.appendChild( cardHeaderRight )

    card.appendChild( cardHeader )
    card.appendChild( cardMain )
    card.appendChild( cardFooter )

    return card;
}

const addInitialCards = () => {
    for( let i = 0; i < 3; i++ ) {
        const card = createNewCard( i );
        console.log( card );
        cardsContainer.appendChild( card );
    }
}


const addNewCard = () => {
    if ( index >= 3 )
        index = 0;
    const card = createNewCard( index );
    cardsContainer.appendChild( card );
    index++;
}

addInitialCards();
agregar.addEventListener( "click", () => addNewCard(), false );
