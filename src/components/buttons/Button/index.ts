import { Button } from './Button';
import { withDropDownIndicator } from './HOC/withDropDownIndicator';

const DropDownButton = withDropDownIndicator(Button);

export { Button, DropDownButton };
