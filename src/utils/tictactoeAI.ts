export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = Cell[];

export const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

export interface GameResult {
  winner: Player | 'draw' | null;
  line: number[] | null;
}

export function checkWinner(board: Board): GameResult {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }
  if (board.every((cell) => cell !== null)) {
    return { winner: 'draw', line: null };
  }
  return { winner: null, line: null };
}

/**
 * Minimax Decision Tree Algorithm
 * Explores recursive game states to find the mathematically optimal move.
 */
export function minimax(
  board: Board,
  depth: number,
  isMaximizing: boolean,
  aiPlayer: Player = 'O',
  humanPlayer: Player = 'X'
): { score: number; nodesEvaluated: number } {
  const result = checkWinner(board);
  if (result.winner === aiPlayer) return { score: 10 - depth, nodesEvaluated: 1 };
  if (result.winner === humanPlayer) return { score: depth - 10, nodesEvaluated: 1 };
  if (result.winner === 'draw') return { score: 0, nodesEvaluated: 1 };

  let totalNodes = 1;

  if (isMaximizing) {
    let maxEval = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = aiPlayer;
        const evaluation = minimax(board, depth + 1, false, aiPlayer, humanPlayer);
        board[i] = null;
        totalNodes += evaluation.nodesEvaluated;
        maxEval = Math.max(maxEval, evaluation.score);
      }
    }
    return { score: maxEval, nodesEvaluated: totalNodes };
  } else {
    let minEval = Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = humanPlayer;
        const evaluation = minimax(board, depth + 1, true, aiPlayer, humanPlayer);
        board[i] = null;
        totalNodes += evaluation.nodesEvaluated;
        minEval = Math.min(minEval, evaluation.score);
      }
    }
    return { score: minEval, nodesEvaluated: totalNodes };
  }
}

export interface BestMoveDecision {
  bestMove: number;
  score: number;
  nodesEvaluated: number;
  calculatedDepth: number;
}

export function findBestMove(
  board: Board,
  aiPlayer: Player = 'O',
  humanPlayer: Player = 'X'
): BestMoveDecision {
  let bestScore = -Infinity;
  let move = -1;
  let totalNodes = 0;

  // Evaluate all legal branching states
  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      board[i] = aiPlayer;
      const { score, nodesEvaluated } = minimax(board, 0, false, aiPlayer, humanPlayer);
      board[i] = null;
      totalNodes += nodesEvaluated;

      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  return {
    bestMove: move,
    score: bestScore,
    nodesEvaluated: totalNodes,
    calculatedDepth: 9 - board.filter((c) => c === null).length,
  };
}
