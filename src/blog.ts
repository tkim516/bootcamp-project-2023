type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
    image: string
};

const blogs: Blog[] = [
    {
        title: "First Blog Entry",
        date: 'November 2023',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        slug: "./blog/blog-entry-1.html",
        image: 'steve-jobs-walter-isaacson.jpeg',
    },
    {
        title: "Second Blog Entry",
        date: 'November 2023',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        slug: "./blog/blog-entry-2.html",
        image: '/Users/tyler/Downloads/bootcamp-project-2023/steve-jobs-walter-isaacson.jpeg',
    },
    {
        title: "Third Blog Entry",
        date: 'November 2023',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        slug: "./blog/blog-entry-3.html",
        image: 'steve-jobs-walter-isaacson.jpeg',
    },
];
// create function that loops through blogData
// should take in blog title, date, description, slug and apply them to the blogElement
// use slug to create a new html file for each blog post

document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blog-container');

    if (blogContainer) {
        blogs.forEach((blog) => {
            const blogEntry = document.createElement('div');
            blogEntry.className = 'blog-entry';

            const titleElement = document.createElement('h2');
            titleElement.textContent = blog.title;

            const dateElement = document.createElement('p');
            dateElement.textContent = blog.date;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = blog.description

            const imgElement = document.createElement("img");
            imgElement.src = blog.image;

            imgElement.width = 200; // Set the width of the image
            imgElement.height = 200; // Set the height of the image
            
            // defining HTML classes for each element
            titleElement.classList.add('blog-title');
            dateElement.classList.add('blog-date');
            descriptionElement.classList.add('blog-description');
            imgElement.classList.add('blog-image');

            blogEntry.appendChild(titleElement);
            blogEntry.appendChild(dateElement);
            blogEntry.appendChild(descriptionElement);
            blogEntry.appendChild(imgElement);

            blogContainer.appendChild(blogEntry);

        });
    }
});
