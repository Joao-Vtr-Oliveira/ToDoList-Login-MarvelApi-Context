import { Icon, IconProps } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const TodoSvg: React.FC<IconProps> = (props) => {
	const navigate = useNavigate();
	return (
		<Icon
      cursor='pointer'
      _hover={{ textColor: 'customPurple', fill: 'currentColor' }}
			xmlns='http://www.w3.org/2000/svg'
			width='100px'
			height='100px'
			viewBox='0 0 24 24'
			onClick={() => navigate('/todo')}
			{...props}
		>
			<path d='m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-3 11.25c0 .414-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75zm-11.772-.537c-.151-.135-.228-.321-.228-.509 0-.375.304-.682.683-.682.162 0 .324.057.455.173l.746.665 1.66-1.815c.136-.147.319-.221.504-.221.381 0 .684.307.684.682 0 .163-.059.328-.179.459l-2.116 2.313c-.134.147-.319.222-.504.222-.162 0-.325-.057-.455-.173zm11.772-2.711c0 .414-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75zm-11.772-1.613v.001c-.151-.135-.228-.322-.228-.509 0-.376.304-.682.683-.682.162 0 .324.057.455.173l.746.664 1.66-1.815c.136-.147.319-.221.504-.221.381 0 .684.308.684.682 0 .164-.059.329-.179.46l-2.116 2.313c-.134.147-.319.221-.504.221-.162 0-.325-.057-.455-.173zm11.772-1.639c0 .414-.336.75-.75.75h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75z' />
		</Icon>
	);
};

export default TodoSvg;
