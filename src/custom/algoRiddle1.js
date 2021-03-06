// extra
import {
  locateTruthyCells,
  firstFalsyItem,
  flipCross
} from './../extra/booleanMatrixHelper';

export const algoRiddle1 = (matrix, bigO = 0, solution = []) => {
  if (!bigO) {
    console.log('original matrix', matrix);
  }
  bigO++;
  const nextStep = move =>
    algoRiddle(flipCross(move)(matrix), bigO, [...solution, move]);

  const truthyCells = locateTruthyCells(matrix);
  switch (truthyCells.length) {
    case 1: {
      // flip opposite
      let [y0, x0] = truthyCells[0];
      return nextStep([+!y0, +!x0]);
    }
    case 2: {
      // if same line / column: flip any true, else: flip any false
      let [y0, x0] = truthyCells[0];
      let [y1, x1] = truthyCells[1];
      return nextStep([y0, y0 === y1 || x0 === x1 ? x0 : +!x0]);
    }
    case 3: {
      // flip the only false
      return nextStep(firstFalsyItem(matrix));
    }
    case 4:
      // resolved
      return { matrix, bigO, solution };
    default:
      // flip first item
      return nextStep([0, 0]);
  }
};
