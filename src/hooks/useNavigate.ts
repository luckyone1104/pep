import { useHistory } from 'react-router-dom';

export const useNavigate = () => {
	const { push } = useHistory();

	return {
		navigate: (url: string) => push(url)
	};
};
