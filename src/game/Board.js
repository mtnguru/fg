/**
 * file: Board.js
 */

import React from 'react';

import classes from './Board.module.scss'

const Board = props => {

  return (
    <div className={classes.board}>
      <div className={classes.boardName}>The FINANCE Game
        <i className="trademark fas fa-trademark"></i>
      </div>
     </div>
  )
}

/*
   foreach ($cards as $card) {
      $id    = $card[0];
      $label = $card[1];
      $type  = $card[2];
      $edge  = $card[3];

      $html .= "<div id=\"card-$id\" class=\"card-wrapper $edge\">\n";
      if ($edge == 'left' || $edge == 'right') {
        $html .= "<div class=\"rotate\">\n";
      }
      $html .= "<div class=\"card\">\n";
      $html .= "<div class=\"$type\">\n";
      if (is_array($label)) {
        foreach ($label as $row) {
          $html .=  "<div>\n";
          foreach ($row as $title) {
            $html .=  "<h3>$title</h3>\n";
          }
          $html .=  "</div>\n";
        }
      } else {
        $html .=  "<h3>$label</h3>\n";
      }
      $html .=  "</div>\n";
      $html .=  "</div>\n";
      if ($edge == 'left' || $edge == 'right') {
        $html .=  "</div>\n";
      }
      $html .=  "</div>\n";
    }


*/

export default Board;
