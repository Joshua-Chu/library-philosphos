const delButton = document.querySelectorAll('#delBut')
const clearEverything = document.querySelector('#clearButton');
const readButs = document.querySelectorAll('#readButs')




delButton.forEach(button=>{
    button.addEventListener('click', e=>{
        const bookSection = e.target.parentNode.parentNode.parentNode;
        const targetBook = e.target.parentNode.parentNode;
        const bookTitle = e.target.parentNode.previousElementSibling.querySelector('.title').textContent;
        
        //Removing from view
      


       //Removing from localStorage
        let library = JSON.parse(localStorage.getItem('library'));
        let lib = library.filter(book => book.title !== bookTitle);
       
        

        localStorage.setItem('library', JSON.stringify(lib));

        let library2 = JSON.parse(localStorage.getItem('library'));
        

        bookSection.removeChild(targetBook);
        window.location.reload();
       
    })
})


readButs.forEach(button =>{
    button.addEventListener('click', e=>{
        const bookTitle = e.target.parentNode.previousElementSibling.querySelector('.title').textContent;
        let library = JSON.parse(localStorage.getItem('library'));
        //changing stauts

       


        if(button.textContent == 'Read'){
            button.textContent = 'Not yet';
            button.style.backgroundColor = '#ff6961';

            library.forEach(book=>{
                if(book.title === bookTitle){
                    book.status = 'Not yet';
                }
                
            })


            localStorage.setItem('library', JSON.stringify(library));
           
            
           
        }else if (button.textContent == 'Not yet'){
            
            button.textContent = 'Read';
            button.style.backgroundColor = '#77dd77';

            library.forEach(book=>{
                if(book.title === bookTitle){
                    book.status = 'Read';
                }
                
            })

            localStorage.setItem('library', JSON.stringify(library));
           
            
        }
    })
})




clearEverything.addEventListener('click', e=>{
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
})