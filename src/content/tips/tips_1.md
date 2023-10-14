---
title: "Integración SEO, RSS, SITEMAP - TIPS #1"
pubDate: 2023-07-05
description: " tips para evitar errores a la hora de publicar rss en tu blog"
image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1QDfitv9gRhg0PylaxW3Vm4jVgaJQIFi5GW1CjofQeEM0W8HD3Z-kFR84A-YM6Z-dCDw&usqp=CAU"
tags: ["Astro", "SEO", "RSS"]
layout: "../../layouts/Posts.astro"
---


Hay que asegurarse de el elemento **pubDate** y **title** estén bien escritos y que estén declarados en el artículo del MD que agreguemos a nuestro blog ya que ambos son requeridos para las publicaciones RSS, en especial **pubDate** que es un elemento de referencia que los lectores de feeds usan para diferenciar entre los elementos nuevos y los leídos.

Gracias a nuestro amigo - @Alfredo Jose Mendez - que participó en las clases de Astro dentro de Platzi

> Asegurense de usar pubDate y title en sus archivos markdown caso contrario podrían tener problemas al integrar @astrojs/rss.


**[Link de referencia para profundizar más del tema](https://www.ionos.es/digitalguide/paginas-web/creacion-de-paginas-web/que-es-un-rss/)**