type Blog = {
    title: string;
    date: Date;
    description: string;
    slug: string;
};

const blogData: Blog[] = [
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

