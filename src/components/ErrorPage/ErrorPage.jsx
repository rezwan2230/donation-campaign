import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Opps!! Not Found</h2>
            <p>{error.statusTest || error.message}</p>
        </div>
    );
};

export default ErrorPage;