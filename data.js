import { v4 as uuidv4 } from "uuid";
import orangeJuice from "./src/assets/Orange-juice.svg";
import pineappleJuice from "./src/assets/Pineapple-juice.svg";
import mangoAndPineappleJuice from "./src/assets/Mango-and-pineapple-juice.svg";
import mangoJuice from "./src/assets/Mango-juice.svg";
import pawpawAndPineappleJuice from "./src/assets/Pawpaw-and-pineapple-juice.svg";
import mangoAndPassionFruitJuice from "./src/assets/Mango-and-passion-fruit-juice.svg";
import pineappleGingerJuice from "./src/assets/Pineapple-ginger-juice.svg";
import watermelonAndBeetrootJuice from "./src/assets/Watermelon-and-beetroot-juice.svg";
import mangoAndYoghurtSmoothie from "./src/assets/Mango-and-yoghurt-smoothie.svg";
import pawpawAndMilkSmoothie from "./src/assets/Pawpaw-and-milk-smoothie.svg";
import bananaAvocadoAndYoghurtSmoothie from "./src/assets/Banana-avocado-and-yoghurt-smoothie.svg";
import sweetAppleMangoAndYoghurtSmoothie from "./src/assets/Sweet-apple-mango-and-yoghurt-smoothie.svg";
import offer1 from "./src/assets/offer1.svg";
import offer2 from "./src/assets/offer2.svg";
import offer3 from "./src/assets/offer3.svg";
import customer1 from "./src/assets/Ellipse1.svg";
import customer2 from "./src/assets/Ellipse2.svg";
import customer3 from "./src/assets/Ellipse3.svg";

export const juices = [
  {
    id: uuidv4(),
    image: orangeJuice,
    name: "Orange Juice",
    ingredients: "Fresh oranges",
    description:
      "Quench your thirst with our delightful orange fruit juice! Made from 100% pure and organic fruits. Say goodbye to additives and preservatives, and hello to a refreshing drink that's as friendly to your taste buds as it is to your body.",
    volume: "5 litres",
    price: 100,
  },
  {
    id: uuidv4(),
    image: pineappleJuice,
    name: "Pineapple Juice",
    ingredients: "Sweet pineapple chunks",
    description:
      "Quench your thirst with our delightful pineapple fruit juice! Made from 100% pure and organic fruits. Say goodbye to additives and preservatives, and hello to a refreshing drink that's as friendly to your taste buds as it is to your body.",
    volume: "5 litres",
    price: 100,
  },
  {
    id: uuidv4(),
    image: mangoAndPineappleJuice,
    name: "Mango & Pineapple Juice",
    ingredients: "Ripe mangoes and sweet pineapple chunks",
    description:
      "Quench your thirst with our delightful mango and pineapple fruit juice blend! Made from 100% pure and organic fruits. Say goodbye to additives and preservatives, and hello to a refreshing drink that's as friendly to your taste buds as it is to your body.",
    volume: "5 litres",
    price: 100,
  },
  {
    id: uuidv4(),
    image: mangoJuice,
    name: "Mango Juice",
    ingredients: "Ripe mangoes",
    description:
      "Quench your thirst with our delightful mango fruit juice! Made from 100% pure and organic fruits. Say goodbye to additives and preservatives, and hello to a refreshing drink that's as friendly to your taste buds as it is to your body.",
    volume: "5 litres",
    price: 100,
  },
  {
    id: uuidv4(),
    image: pawpawAndPineappleJuice,
    name: "Pawpaw & Pineapple Juice",
    ingredients: "Fresh pawpaw (papaya) and sweet pineapple chunks",
    description:
      "Quench your thirst with our delightful pawpaw (papaya) and pineapple fruit juice blend! Made from 100% pure and organic fruits. Say goodbye to additives and preservatives, and hello to a refreshing drink that's as friendly to your taste buds as it is to your body.",
    volume: "5 litres",
    price: 100,
  },
  {
    id: uuidv4(),
    image: mangoAndPassionFruitJuice,
    name: "Mango & Passion Fruit Juice",
    ingredients: "Ripe mangoes and fresh passion fruits",
    description:
      "Quench your thirst with our delightful mango and passion fruit juice blend! Made from 100% pure and organic fruits. Say goodbye to additives and preservatives, and hello to a refreshing drink that's as friendly to your taste buds as it is to your body.",
    volume: "5 litres",
    price: 100,
  },
  {
    id: uuidv4(),
    image: pineappleGingerJuice,
    name: "Pineapple Ginger Juice",
    ingredients: "Sweet pineapple chunks and fresh ginger root",
    description:
      "Quench your thirst with our delightful pineapple and ginger fruit juice blend! Made from 100% pure and organic fruits. Say goodbye to additives and preservatives, and hello to a refreshing drink that's as friendly to your taste buds as it is to your body.",
    volume: "5 litres",
    price: 100,
  },
  {
    id: uuidv4(),
    image: watermelonAndBeetrootJuice,
    name: "Watermelon & Beetroot Juice",
    ingredients: "Juicy watermelon chunks and fresh beetroot",
    description:
      "Quench your thirst with our delightful watermelon and beet root fruit juice blend! Made from 100% pure and organic fruits. Say goodbye to additives and preservatives, and hello to a refreshing drink that's as friendly to your taste buds as it is to your body.",
    volume: "5 litres",
    price: 100,
  },
];

export const smoothies = [
  {
    id: uuidv4(),
    image: mangoAndYoghurtSmoothie,
    name: "Mango & Yoghurt Smoothie",
    ingredients: "Ripe mangoes and natural yoghurt",
    description:
      "Quench your thirst with our delightful mango and yoghurt smoothie! Made from 100% pure and organic fruits. Say goodbye to additives and preservatives, and hello to a refreshing drink that's as friendly to your taste buds as it is to your body.",
    volume: "5 litres",
    price: 100,
  },
  {
    id: uuidv4(),
    image: pawpawAndMilkSmoothie,
    name: "Pawpaw & Milk Smoothie",
    ingredients: "Fresh pawpaw (papaya) and Organic milk",
    description:
      "Quench your thirst with our delightful pawpaw and milk smoothie! Made from 100% pure and organic fruits. Say goodbye to additives and preservatives, and hello to a refreshing drink that's as friendly to your taste buds as it is to your body.",
    volume: "5 litres",
    price: 100,
  },
  {
    id: uuidv4(),
    image: bananaAvocadoAndYoghurtSmoothie,
    name: "Banana, Avocado & Yoghurt Smoothie",
    ingredients: "Ripe bananas, creamy avocado and natural yoghurt",
    description:
      "Quench your thirst with our delightful banana, avocado and yoghurt smoothie! Made from 100% pure and organic fruits. Say goodbye to additives and preservatives, and hello to a refreshing drink that's as friendly to your taste buds as it is to your body.",
    volume: "5 litres",
    price: 100,
  },
  {
    id: uuidv4(),
    image: sweetAppleMangoAndYoghurtSmoothie,
    name: "Sweet Apple, Mango & Yoghurt Smoothie",
    ingredients: "Sweet apples, ripe mangoes and natural yoghurt",
    description:
      "Quench your thirst with our delightful sweet apple, mango and yoghurt smoothie! Made from 100% pure and organic fruits. Say goodbye to additives and preservatives, and hello to a refreshing drink that's as friendly to your taste buds as it is to your body.",
    volume: "5 litres",
    price: 100,
  },
];

export const offer = [
  {
    image: offer1,
    header: "Prompt Delivery",
    text: "We deliver the juices and smoothies on time and on schedule without delay.",
  },
  {
    image: offer2,
    header: "Fresh Fruits",
    text: "The fruits we use for the juices and smoothies are fresh and healthy.",
  },
  {
    image: offer3,
    header: "Organic And Safe",
    text: "The processing of the fruits are safe and organic.",
  },
];

export const testimonials = [
  {
    image: customer1,
    name: "Akosua Dankwa",
    timePosted: "2 weeks ago",
    comments:
      "I am an event planner, and I can testify that Lavie Juices and Smoothies never disappoint. They always deliver on time and they are so professional. I will always recommend them.",
  },
  {
    image: customer2,
    name: "James Mensah",
    timePosted: "1 month ago",
    comments:
      "Lavie is one of the best. I was organizing an event and needed juice and smoothies. Lavie produced one of the best smoothies and the people at the event enjoyed them. Great services and personnel at Lavie.",
  },
  {
    image: customer3,
    name: "Samuel Mawuli",
    timePosted: "2 months ago",
    comments:
      "Lavie always delivers. I have been a long time customer and they have never disappointed me anytime I need juice and smoothies for events. I love Lavie!!",
  },
];
