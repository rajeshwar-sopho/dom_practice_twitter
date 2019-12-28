class Post {
    constructor(postContent) {
        this.postContent = postContent;
        this.htmlElement = undefined;

        this.make();
    }

    make() {
        let el_li = document.createElement("LI");
        el_li.classList.add('post');
        let el_div = document.createElement("DIV");
        el_div.classList.add("post-content");
        let el_p = document.createElement("P");
        el_p.innerText = this.postContent;
        el_div.appendChild(el_p);
        el_li.appendChild(el_div);

        this.htmlElement = el_li;
    }
}


let tweet_button = document.querySelector("#tweet_button");
tweet_button.addEventListener('click', (e) => {
    e.preventDefault();

    let postsList = document.querySelector("#postsList");
    let userpost = document.querySelector("#userpost");
    let post = new Post(userpost.value);
    postsList.appendChild(post.htmlElement);

    userpost.value = "";
});
