---
title: disGLOW, an inclusive makeup marketplace
description: >-
  The place to find the best vibrant makeup products suited for all skin tones and conditions! Won best DEI hack at GirlHacks.
pubDate: 2024-10-01T11:00:00.000Z
lastEdit: 2024-10-01T11:00:00.000Z
heroImage: /visuals/disglow-cover.jpg
layout: ../../../layouts/BlogPost.astro
---

## disGLOW
This is a project my friend Laura and I created for GirlHacks. Check out our project on [Devpost](https://devpost.com/software/disglow) and [GitHub](https://github.com/laura-codess/disglow). [Here's](https://disglow.vercel.app) the live demo. 

Some details about our project:

## Inspiration

We constantly hear on social media the struggles paler- and darker-skinned makeup users face when trying to find appropriate concealers and foundations. We wanted to alleviate this problem, while highlighting the many minority-owned businesses and adhering to the GirlHacks 2024 Disco theme, and thus disGLOW was born.

## How we built it

![monk scale](https://i.imgur.com/DHPeonf.png)

We used React, Tailwind, and a RESTful API to communicate with an extensive product list which allowed us to filter based on price range, product type, brand, and even special tags. We used Canva to design our pitchdeck, and GitHub for version control. Branding was also an important part of this project. We wanted to foster diversity and inclusion by branding our makeup marketplace with a traditionally gender-neutral color palette. Makeup is for anyone :)

## Challenges

The most difficult part of this project was developing the algorithm that determines which products to show for each skin tone. We wanted to make the system as inclusive as possible by accommodating a diverse range of skin tones, but we also had to be mindful of scope to ensure we could complete the project within the time constraints. Balancing inclusivity with practicality required extensive research and iteration, but we are proud of the outcome.

## Accomplishments we’re proud of

We pushed ourselves to the limits for this one, burning the midnight oil to get the UI just right. We wanted to put design at the forefront of this project, so that it communicates the right message to our audience. We’re also proud of the landing page animation; what do you think?

## What we learned

Apart from coding, a significant portion of what we learned comes from the research we did when narrowing down ideas for this project. Skimming through research articles, we found both saddening and intriguing facts, like how some Black women had to blend multiple shades of cheaper foundation for an accurate shade math or purchase expensive, more accurate foundations, or how only 23% of makeup brands are BIPOC-owned. I found [this article](https://dl.acm.org/doi/full/10.1145/3632120) to be especially interesting, and this is where we found out about the Monk skin tone (MST) scale.

Here are some other articles we found interesting: 

- https://dl.acm.org/doi/full/10.1145/3632120
- https://skintone.google/get-started
- [https://www.jaad.org/article/S0190-9622(22)01714-5/fulltext](https://www.jaad.org/article/S0190-9622(22)01714-5/fulltext)

## What’s next for disGLOW

We hope to continue improving disGLOW, adding more BIPOC-owned small businesses to give them more exposure. Furthermore, we weren’t able to fully implement our computer vision algorithm, that selects the best fitting skin tone based off of your instagram feed. That requires a little more time than 24 hours.