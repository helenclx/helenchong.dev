---
title: cbpickaxe and My First (Merged) Pull Request in Python
description: About my first pull request in Python that got approved and merged.
date: 2023-11-13
categories: ["python", "github", "cbpickaxe", "cassette beasts"]
---

Recently, on 11 November 2023, I created my first pull request in Python that got merged later. Specifically, the pull request was for [cbpickaxe](https://github.com/ExcaliburZero/cbpickaxe), a Python library and set of scripts for data mining the video game [Cassette Beasts](https://www.cassettebeasts.com/), titled ["extract\_translation Script: Add support for finding strings of IDs that require pronoun identifiers"](https://github.com/ExcaliburZero/cbpickaxe/pull/3).

While my current focus in my developer journey is front-end web development, I have also been learning Python at the same time, due to the programming language's popularity and the vast amount of resources and tutorials for learning the language. In addition, as an open source enthusiast, I have always wanted to be able to contribute to open source projects, particularly ones that I use.

Cassette Beasts, the independent monster collecting role-playing game developed by Bytten Studio, has become one of my all-time favourite video games since the first time I played it. My interest in the game drives me to learn as much about the game as possible, which led me to start using cbpickaxe.

When I started using the `extract_translation` script to data mine in-game dialogues, I discovered the script's issue of not being able to extract strings with gender identifiers. After discussing the issue with ExcaliburZero, the developer of cbpickaxe, I started investigating the script's code and tried to figure out any solution.

I have had little experience with writing Python scripts, so I saw this as a great learning opportunity for me to put my Python knowledge and skills into practice. After forking the cbpickaxe repository, looking into the code and a lot of web searching, I discovered that in the original code, printing the output of the IDs with missing strings only has one key (`id`) in its list, and does not have any locale key to display the corresponding strings. Therefore, I started thinking of possible solutions from there:

* Check if the string ID does not have the locale key, by using this condition: `if locale not in row.keys()`
* Check if the string ID only has one key (id), by using this condition: `if len(row.keys()) == 1`

After trying both possible methods, I eventually settled for the second one, because it allowed me to write cleaner and more succinct code, while the first required me to write more bloated code, mainly due to having to repeat the block of code for searching and reading strings from in-game data, as refactoring it into a function meant losing the definition of the locale variable.

After that, I spent time in figuring out how to append the pronoun identifiers to the input IDs, so their corresponding strings can be written in the output CSV. At first, I considered trying to dynamically reading the `analysis.tres` file from the decompiled Cassette Beasts game, but the text structure of the `.tres` files might be too complicated to be doable in a clean code, so I chose to create a list for the pronoun identifiers (`.f`, `.m` and `.n`), then the script will iterate through the pronouns list to append the pronoun identifiers to the end of the ID if it requires a pronoun idntifier to find the corresponding string.

Voilà! At last, I solved the problem!

After testing my code multiple times to ensure it works, I made a pull request on cbpickaxe's GitHub repository. ExcaliburZero approved and merged my pull request, which has become my first merged pull request on Python! This pull request has been included in the release of cbpickaxe starting from [version 0.1.2](https://github.com/ExcaliburZero/cbpickaxe/releases/tag/v0.1.2).

I am immensely grateful of this opportunity to not only contribute to an open source project that is realated to one of my favourite video games, but also practicing my Python skills.