---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

International Conferences
======

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}


International Journals
======

{% for post in site.publications.int_jour reversed %}
  {% include archive-single.html %}
{% endfor %}


Disertations
======

{% for post in site.publications.disertation reversed %}
  {% include archive-single.html %}
{% endfor %}
