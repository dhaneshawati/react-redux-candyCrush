# react-redux-candyCrush

Candy crush game is developed using react-redux and allied libraries.

<h4>Game Features : </h4>
<ol>
    <li>In this game, new candies get generated automatically after popping of same candies.</li>
    <li>Candies get burst automatically after matching and user score increases by that much number of candies.</li>
    <li>The candies that burst initially till board prepares for user are not considered either in score or in candies remaining.</li>
    <li>After bursting candies of blue color equal to target candies, user wins one level and asked to move to next level.</li>
    <li>When user clicks on next level, level no. and win count increases, target candies increases by 5 and no of moves left decreases by 1.</li>
    <li>When user clicks exit button, game reset back to initial level 1 state with score reset to 0.</li>
    <li>After moves get exhausted and still target candies are remaining then level failed pop-up will come.</li>
    <li>When user clicks on retry level button, game lost count increases by one, level count remains same and target candies count with moves left count resore back.</li>
</ol>

<h3>Hosted Link :</h3>
https://react-redux-candy-crush.vercel.app/
