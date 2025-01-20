document.addEventListener("DOMContentLoaded",()=>{
    const APIUrl = 'https://jsonplaceholder.typicode.com/posts';
    const postsContainer = document.querySelector('.posts-container');
    async function fetchPosts() {
        try {
        const response = await fetch(APIUrl);
        const post = await response.json(); 
        postsContainer.innerHTML = "";
        post.forEach((post)=>{
            const postElement = createPostElement(post);
            postsContainer.appendChild(postElement);
        });
        } catch (error) {
            postsContainer.innerHTML ='<p style="color:red;text-align:center">Error loading posts. please try again later</p>';
        };
    }
    function createPostElement(post){
        const article = document.createElement('article');
        article.className = "post-card";

        const title = document.createElement('h2');
        title.className = "post-title";
        title.textContent = post.title;

        const body = document.createElement('p');
        body.className = "post-body";
        body.textContent = post.body;

        article.appendChild(title);
        article.appendChild(body);
        return article;
    }
    fetchPosts()
});