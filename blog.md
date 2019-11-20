---
layout: default
title: Blog
redirect_from: blog.html
---

<h1 class="blog">Blog</h1>

{% for post in site.posts %}
<article class="post">
  <h3>
    <a href="{{ post.url }}">{{post.title}}</a>
  </h3>
  <p class="post__meta">
    published {{post.date | date: "%B %d, %Y"}} by <span class="post__author">{{post.author}}</span>
  </p>

    {{post.content | strip_html | truncatewords: 20}}

</article>

{% endfor %}
