"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "articles",
      [
        {
          id: 1,
          title: "AWS 101",
          author: "Wei-Chi Chou",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          categoryId: 1,
          unixTimeStamp: 1588636800,
          publishDate: "Tuesday, 05 May 2020",
          imageUrl:
            "https://media-exp1.licdn.com/dms/image/C5612AQGfI67rBJSiAQ/article-cover_image-shrink_720_1280/0/1635773201847?e=1659571200&v=beta&t=ziNqb0yHT0dLgTMJvQD6GxUM-eBeumw_Vghmm_ZEkNg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "jQuery, still worth it?",
          author: "Alastair Haigh",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          categoryId: 2,
          unixTimeStamp: 1588723200,
          publishDate: "Wednesday, 06 May 2020",
          imageUrl:
            "https://www.jotform.com/blog/wp-content/uploads/2008/04/photo-1516101922849-2bf0be616449.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "Svelte, it's fast",
          author: "Mario Nezmah",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          categoryId: 2,
          unixTimeStamp: 1588896000,
          publishDate: "Friday, 08 May 2020",
          imageUrl:
            "https://www.lambdatest.com/blog/wp-content/uploads/2020/06/Svelte-JS.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "Trying Docker",
          author: "Simona Winnekes",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          categoryId: 1,
          unixTimeStamp: 1589068800,
          publishDate: "Sunday, 10 May 2020",
          imageUrl:
            "https://iamondemand.com/wp-content/uploads/2015/04/cool-docker-image.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: "Deno 1.0 is Here",
          author: "Manon Bosselut",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          categoryId: 3,
          unixTimeStamp: 1588982400,
          publishDate: "Saturday, 09 May 2020",
          imageUrl: "https://flaviocopes.com/deno/denologo.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          title: "What is new in Java 14",
          author: "Manon Bosselut",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          categoryId: 3,
          unixTimeStamp: 1588809600,
          publishDate: "Thursday, 07 May 2020",
          imageUrl: "https://i.ytimg.com/vi/p7pr1-N3oug/mqdefault.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("articles", null, {});
  },
};
