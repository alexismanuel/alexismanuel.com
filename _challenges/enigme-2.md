---
title: 'Epreuve 2: Sudoku'
image: /assets/brain.jpg
---
![]({{page.image}})
<h1> Introduction </h1>
Sudoku Time ! Les règles sont simples: Aucun chiffre ne peut être deux fois sur une ligne, une colonne, ou dans un groupe de 9.

<h1> Enoncé </h1>
Résolvez le sudoku ci-dessous afin de réveler le code qui apparaitra en surbrillance.
La réponse attendue correspond aux différents chiffres composant le code final.

<table class="sudoku-grid">
  <tr>
    <td><input type="text" class="sudoku-elem" required></td>
    <td> 3 </td>
    <td><input type="text" class="sudoku-elem" required></td>
    <td> 6 </td>
    <td> 7 </td>
    <td> 8 </td>
    <td><input type="text" class="sudoku-elem" required></td>
    <td> 1 </td>
    <td> 2 </td>
  </tr>
  <tr>
    <td> 6 </td>
    <td> 7 </td>
    <td> 2 </td>
    <td><input type="text" class="sudoku-elem part" required></td>
    <td> 9 </td>
    <td> 5 </td>
    <td> 3 </td>
    <td> 4 </td>
    <td> 8 </td>
  </tr>
  <tr>
    <td> 1 </td>
    <td> 9 </td>
    <td> 8 </td>
    <td> 3 </td>
    <td> 4 </td>
    <td> 2 </td>
    <td> 5 </td>
    <td><input type="text" class="sudoku-elem" required></td>
    <td> 7 </td>
  </tr>
  <tr>
    <td> 8 </td>
    <td> 5 </td>
    <td> 9 </td>
    <td><input type="text" class="sudoku-elem" required></td>
    <td> 6 </td>
    <td> 1 </td>
    <td><input type="text" class="sudoku-elem part" required></td>
    <td> 2 </td>
    <td> 3 </td>
  </tr>
  <tr>
    <td> 4 </td>
    <td><input type="text" class="sudoku-elem part" required></td>
    <td> 6 </td>
    <td> 8 </td>
    <td> 5 </td>
    <td><input type="text" class="sudoku-elem" required></td>
    <td> 7 </td>
    <td> 9 </td>
    <td> 1 </td>
  </tr>
  <tr>
    <td><input type="text" class="sudoku-elem" required></td>
    <td> 1 </td>
    <td> 3 </td>
    <td> 9 </td>
    <td> 2 </td>
    <td> 4 </td>
    <td><input type="text" class="sudoku-elem" required></td>
    <td> 5 </td>
    <td> 6 </td>
  </tr>
  <tr>
    <td> 9 </td>
    <td> 6 </td>
    <td> 1 </td>
    <td> 5 </td>
    <td> 3 </td>
    <td> 7 </td>
    <td> 2 </td>
    <td> 8 </td>
    <td><input type="text" class="sudoku-elem" required></td>
  </tr>
  <tr>
    <td> 2 </td>
    <td><input type="text" class="sudoku-elem" required></td>
    <td> 7 </td>
    <td> 4 </td>
    <td><input type="text" class="sudoku-elem" required></td>
    <td> 9 </td>
    <td> 6 </td>
    <td> 3 </td>
    <td> 5 </td>
  </tr>
  <tr>
    <td> 3 </td>
    <td> 4 </td>
    <td><input type="text" class="sudoku-elem" required/></td>
    <td><input type="text" class="sudoku-elem part" required/></td>
    <td> 8 </td>
    <td> 6 </td>
    <td> 1 </td>
    <td><input type="text" class="sudoku-elem" required/></td>
    <td> 9 </td>
  </tr>
</table>
<label for="name">Solution</label>
<input type="text" id="answer-2" name="answer-2" required minlength="1" maxlength="8" size="10">
<a href="javascript:acceptAnswer(2)" class="button-cls">Valider</a>

<h1> La suite </h1>
Une fois le code obtenu, cliquez [ici](/challenges/enigme-3){: .internal-link} pour passer à l'épreuve suivante.

<script>{% include scripts.js %}</script>