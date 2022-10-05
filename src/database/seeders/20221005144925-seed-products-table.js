"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query(
      "SELECT id FROM categories;"
    );
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Cama para plantas",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 150000,
          price_card: "1.500,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Grão de caju",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 2500,
          price_card: "2.500,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Grão de abóbora",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 500,
          price_card: "500,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Grão de arroz",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 200,
          price_card: "200,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Irrigador de mão",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 140000,
          price_card: "1.400,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Irrigador tecnológico",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 1100,
          price_card: "1.100,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Irrigador tecnológico de chão",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 900,
          price_card: "900,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Plantador de pedra",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 400,
          price_card: "400,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Plantador de pedra redondo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 300,
          price_card: "300,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Casa dos sapos",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 100,
          price_card: "100,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Folhagem Filondreto",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 2200,
          price_card: "2.200,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Plantas do lírio",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 6500,
          price_card: "6.500,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Lírio dos campos",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis purus nec orci tincidunt congue eget ac lorem. Sed sapien nunc, viverra ut nunc quis, pellentesque convallis arcu. Etiam id tristique tortor, ac porttitor nibh. In suscipit laoreet ultricies. Nunc ut commodo justo, at porttitor enim. Vivamus varius elit ex, eget consectetur purus efficitur non. Suspendisse id lacinia nunc. Donec non congue ligula, eu lacinia diam. Nam augue felis, porta id tortor quis, porta hendrerit augue. Nullam arcu ipsum, bibendum sed dui sit amet, finibus euismod dolor. Vestibulum dictum massa quis leo fringilla ultricies. Duis bibendum, arcu quis ultrices efficitur, ipsum libero interdum lorem, sit amet tincidunt elit mi sit amet neque. Quisque diam leo, hendrerit nec feugiat sed, cursus eget sem. ",
          price: 2500,
          price_card: "2.500,00",
          upload_img: "",
          category_id: categories[0].id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
