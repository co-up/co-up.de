# co.up
This is the website of the co.up community space: https://co-up.de/

## Run and develop locally:
`jekyll serve`
View the website at http://localhost:4000/

## Write and publish a blog post:
Go to the `_drafts` folder, duplicate the file `_drafts/2019-11-06-draft.md` and rename it. You can change the date but if it's a date in the future you won't be able to see it locally.
Don't delete the original `_drafts/2019-11-06-draft.md` file.

Write your blog post. There is already some basic markdown in the draft but this [Markdown Cheatsheet](http://www.jekyllnow.com/Markdown-Style-Guide/) might be useful too.

Check if it's all good with the draft. To see your draft live locally, run Jekyll with the --drafts flag (e.g., jekyll serve --drafts) and open website at http://localhost:4000/

If it's all good and  you're ready to publish it, change the date on the file and move it to `_posts`.
