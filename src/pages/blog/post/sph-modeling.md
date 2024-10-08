---
title: SPH Modeling
description: >-
  SPH Modeling is a project that simulates water particles falling in a bucket and observing how the particles interact with each other and the edges of the bucket.
pubDate: 2024-05-20T11:00:00.000Z
lastEdit: 2024-05-20T11:00:00.000Z
heroImage: /visuals/sph-modeling.png
layout: ../../../layouts/BlogPost.astro
---

![screenshot of project](/visuals/sph-modeling.png)

Unfortunately, our code must stay private, but I’ll explain the concepts and tools we used.

# Description

This project was developed as a capstone project for my numerical computing class in Spring 2024. We were given the task to simulate water particles falling in a bucket and observe how the particles interact with each other and the edges of the bucket. This was a daunting task, since we had to incorporate physics and matrix algebra along with computationally-intensive recusive searches. The project was coded in Python.

# Grid-based Neighbor Search

- We lineated our bucket with a grid. Each particle is assigned a certain grid square based on their coordinate.
- We created a particle class with data fields such as position, density, and force, with a gridKey that allows the program to quickly identify which box in the grid the particle belongs to.
- The neighbor search method finds the closest particles to particle *i* based on a smoothing radius. We calculated distance with norm.

# Cubic Spline

- Referencing scientific research, we implemented cubic spline functions to calculate how much each surrounding particle should influence particle *i* based on their magnitude and direction of force.

# Calculations

- Calculating force and position was done through fixed formulas. We also accounted for the water repelling the bucket’s surface using boundary force formulas.

# Results

- We were able to simulate water falling in a bucket and observe how the particles interact with each other and the edges of the bucket.
- We were able to observe the formation of a droplet and how it interacts with the bucket’s surface.

