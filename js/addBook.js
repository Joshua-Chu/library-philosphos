const addForm = document.forms[0];
const bookSection = document.querySelector('.book-section-grid');


//generating html
function generateHTMLFromLS(){
    const local_storage = JSON.parse(localStorage.getItem('library'));
    if(local_storage !== null){
        let html = '';
        local_storage.forEach(book=>{
            html += `<div class="book" >
            <div class="details">
                <h3>Title</h3>
                <p class="title">${book.title !== "" ?  book.title : "N/A" }</p>
                <h3>Author</h3>
                <p class="author">${book.author !== "" ? book.author : "N/A"}</p>
                <h3>Pages</h3>
                <p class="pages">${book.pages !== "" ? book.pages : "N/A"}</p>
                </div>
                <div class="book-buttons">
                <button id=${book.status == 'Read' ? "readButs" : "notYet"}>${book.status}</button>
                <button id="delBut">Del</button>
            </div>
        </div>  `;
            
        });
        
        bookSection.innerHTML = html;
    }
}



//Initial html generation
generateHTMLFromLS();

// Adding books
addForm.addEventListener('submit', e=>{
    e.preventDefault();

    //getting the values for of the forms
    const title = addForm.querySelector("#title").value;
    const author = addForm.querySelector("#author").value;
    const pages = addForm.querySelector("#pages").value;
    const status = addForm.querySelector('#status').value;
   
    
    //putting it inisde an object called book
    const book = {
        title,
        author,
        pages, 
        status
       
    }

    //adding inside the localStorage
    if(localStorage.getItem('library') === null){
        localStorage.setItem('library',"[]");
    }

    let library = JSON.parse(localStorage.getItem('library'));
    library.push(book);

    //saving the old + new data to the local storage

    localStorage.setItem('library', JSON.stringify(library));



    
    addForm.reset();

    //adding 

    generateHTMLFromLS();
    window.location.reload();
    
})





