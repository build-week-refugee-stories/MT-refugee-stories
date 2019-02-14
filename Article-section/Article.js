
class Article {
    constructor(domElement) {
      this.domElement = domElement;      
      this.expandButton = this.domElement.querySelector(".expandButton");   
      this.expandButton.innerText = "expand"; 
      this.expandButton.addEventListener("click", () => {this.expandArticle()}   
      )}
 
    expandArticle() {
     
        this.domElement.classList.toggle("article-open");   
      }; 
    }
  
  let textBox = document.querySelectorAll(".article");
  
  textBox.forEach(article => new Article(article));