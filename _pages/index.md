---
layout: default
title: Home
id: home
redirect_from: "/en"
permalink: /
---

<div>
  <div>
    <h1 style="margin: 1em 0 0;">Hello! I'm Alexis.</h1>
  </div>
  <div>
    <div class="grid-element">
      <h2>Blog posts</h2>
      {% assign post_limit = 7 %}
      {% for post in site.posts limit: post_limit %}
      <div class="list-entry">
        <div><a class="internal-link" href="{{ post.url }}">{{ post.title }}</a> <span class="faded">({{ post.date | date: "%Y-%m-%d" }})</span></div>
        <div>{{ post.excerpt }}</div>
      </div>
      {% endfor %}
      <p>
        {% if site.posts.size > 0 %}
          <a class="internal-link" href="/blog">
          I wrote 
          {% if site.posts.size >= post_limit %}
            {{ site.posts.size | minus: post_limit }} 
          {% else %}
            {{ site.posts.size }} 
          {% endif %}
          more posts
          </a>.
        {% else %}
          There are no blog posts yet ! :(
        {% endif %}
      </p>
    </div>
    <div class="grid-element">
      <h2>Notes 👨‍💻</h2>
      {% assign notes = site.notes | where_exp: "item", "item.path contains 'notes'" %}
      <p>
        These <a class="internal-link" href="/notes">{{ notes.size | minus: 1 }} notes</a> are an exploration in digital gardening. They are seeds of what could become full-fledged blog posts, new projects, or experimental initiatives in the future.
      </p>
    </div>
  </div>
</div>