---
layout: default
title: Home
id: home
redirect_from: "/en"
permalink: /
---

<div>
    <div>
        <h1 style="margin: 1em 0 0;">Hello! I'm Alexis. :v:</h1>
        <p>
            I am a Data Engineer based in France, working on Data Platform at
            <a target="blank" rel="noopener" href="https://www.continuity-tech.ai/en/home/">Continuity</a>.
            Topics of interest involve entrepreneurship, BCI technologies and personnal development in general.
        </p>
        <p>
            My digital garden is the place I will to try to grow alongside myself. I will discuss various subjects including software/data engineering, finances, health, entrepreneurship and various topic/ideas related to my daily reflections.
        </p>
        <p>
            You can reach me out on 
            <a target="blank" rel="noopener" href="https://twitter.com/a10llm">Twitter</a>
            or <a target="blank" rel="noopener" href="https://www.linkedin.com/in/alexismanuel/">LinkedIn</a>
            if you wish, I will be happy to discuss any topics. :open_hands:
        </p>
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
