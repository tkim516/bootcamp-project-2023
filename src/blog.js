var blogs = [
    {
        title: "First Blog Entry",
        date: new Date("2023-11-20"),
        description: "Learning how to use Typescript",
        slug: "./blog/blog-entry-1.html",
    },
    {
        title: "Second Blog Entry",
        date: new Date("2023-11-20"),
        description: "Blog entry number 2",
        slug: "./blog/blog-entry-2.html",
    },
];
// create function that loops through blogData
// should take in blog title, date, description, slug and apply them to the blogElement
// use slug to create a new html file for each blog post
document.addEventListener('DOMContentLoaded', function () {
    var blogContainer = document.getElementById('blog-container');
    if (blogContainer) {
        blogs.forEach(function (blog) {
            var blogEntry = document.createElement('div');
            blogEntry.className = 'blog-entry';
            var titleElement = document.createElement('h2');
            titleElement.textContent = blog.title;
            var dateElement = document.createElement('p');
            dateElement.textContent = 'Date: ${blog.date}';
            var descriptionElement = document.createElement('p');
            descriptionElement.textContent = blog.description;
            blogEntry.appendChild(titleElement);
            blogEntry.appendChild(dateElement);
            blogEntry.appendChild(descriptionElement);
            blogContainer.appendChild(blogEntry);
        });
    }
});
