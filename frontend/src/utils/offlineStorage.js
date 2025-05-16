export const saveArticleForOffline = (article) => {
    let savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    savedArticles.push(article);
    localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
  };
  
  export const getSavedArticles = () => {
    return JSON.parse(localStorage.getItem('savedArticles')) || [];
  };
  