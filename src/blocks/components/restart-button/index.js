import { resetGame } from '../../utils';
import createActionButton from '../action-button';

export default function () {
    const button = createActionButton('restart', resetGame);
    return button;
}
