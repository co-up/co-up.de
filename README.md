# co.up

This is the website of the co.up community space: https://co-up.de/

![Photo of co.up space](https://co-up.de/photos/coup_3rd_lounge.jpg)

## How to contribute

Thank you so much for thinking about contributing! 🌻

If you have any questions, don't hesitate to reach out by *[TK: way to reach out]*.

*[TK: ways to contribute]*


## Set up your local environment

1. Click the `Fork` button on Github.
2. Clone your fork locally and enable fetching updates:

```sh
git clone git@github.com:yourusername/co-up.de.git
cd co-up.de
git remote add upstream https://github.com/co-up/co-up.de.git
git fetch upstream
```

3. [Install Jekyll](https://jekyllrb.com/docs/installation/).
4. `bundle install` -- install the required gems
5. `jekyll serve` -- serve the website at http://localhost:4000/


## Write and publish a blog post

Set up your local environment. See above.

__Duplicate draft file.__ Go to the `_drafts` folder, duplicate the file `_drafts/2019-11-06-draft.md` and rename it. You can change the date but if it's a date in the future you won't be able to see it locally.
Don't delete the original `_drafts/2019-11-06-draft.md` file.

__Write your blog post.__ There is already some basic markdown in the draft but this [Markdown Cheatsheet](http://www.jekyllnow.com/Markdown-Style-Guide/) might be useful too.

__Check if it's all good with the draft.__ To see your draft live locally, run Jekyll with the `--drafts` flag (e.g., `jekyll serve --drafts`) and open website at http://localhost:4000/

__Publish.__ If it's all good and you're ready to publish it, change the date on the file and move it to `_posts`.


## Style guide

[*TK*]
