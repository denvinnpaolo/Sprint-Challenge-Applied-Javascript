// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


function Header() {
    let header=document.createElement('div');
    let date=document.createElement('span');
    let titl=document.createElement('h1');
    let temp=document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.innerHTML="SMARCH 28, 2019";
    titl.innerHTML="Lambda Times";
    temp.innerHTML="98";
    
    header.appendChild(date);
    header.appendChild(titl);
    header.appendChild(temp);

    const headerContainer = document.querySelector('.header-container');
    headerContainer.appendChild(header);
    return headerContainer;
}

Header();
