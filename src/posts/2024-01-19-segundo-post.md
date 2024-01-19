---
title: Chuleta Git, comandos básicos
metaDescription: Listado de comandos Git para cualquier workflow
date: 2023-11-06T00:00:00.000Z
summary: Listado de comandos Git para cualquier workflow 
tags:
  - Webdev
  - Git
---

Listado de comandos Git para el día a día.

### Desahacer el último commit en local

1. **git reset --soft HEAD~1**:
    - Este comando retrocede el HEAD del repositorio al commit anterior, pero mantiene los cambios del último commit en el área de preparación (staging area). Es decir, los cambios que habíamos hecho y que estaban incluidos en el último commit ahora estarán listos para ser agregados a un nuevo commit si así lo deseamos.
2. **git reset --soft HEAD**:
    - Este comando quita los archivos del área de preparación, pero mantiene los cambios en ellos. Es decir, los archivos no estarán marcados para ser incluidos en el próximo commit, pero los cambios realizados en los archivos permanecerán en nuestro espacio de trabajo.

### Parches

1. **Descargar y aplicar un parche**: 
'curl -O https://www.drupal.org/files/[patch-name].patch'
'git apply --index [patch-name].patch'

En un sola línea
'curl https://www.drupal.org/files/[patch-name].patch | git apply --index -'