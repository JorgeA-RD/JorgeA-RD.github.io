---
layout: archive
title: "Disertations"
permalink: /publications/disertation
author_profile: true
---


{% include base_path %}
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

---
layout: archive
title: "International Conferences"
permalink: /publications
author_profile: true
---

{% include base_path %}
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}


International Journals
======

{% for post in site.publications.int_jour reversed %}
  {% include archive-single.html %}
{% endfor %}




